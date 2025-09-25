"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Plus, Trash2, Save, ChevronDown, ChevronRight } from "lucide-react";
import { axiosPrivate } from "../../../../super-admin-components/apiFunctions";
import MediaLibraryModal from "../../../../super-admin-components/MediaLibraryModal";
import { MdInput, MdOutlinePreview } from "react-icons/md";
import EditPage from "./EditPage";
import CustomToast from "../../../../super-admin-components/CustomToast";
import { SyncLoader } from "react-spinners";
import Editor from "../../../../super-admin-components/Editor";
import { FaCode } from "react-icons/fa";

let TYPES: string[] = [];
const getTypes = async () => {
  try {
    const res = await axiosPrivate.get("/component/types");
    TYPES = res?.data?.data || [];
  } catch (errror) {
    console.error(errror);
    return [];
  }
};
getTypes();

interface ObjectProp {
  key: string;
  value: string;
  type: string;
  stringArray?: string[];
  objectProps?: ObjectProp[];
  arrayObjectProps?: ArrayObjectProp[];
}

interface ArrayObjectProp {
  properties: ObjectProp[];
}

// interface Prop {
//   key: string;
//   value: string;
//   type: typeof TYPES[number];
//   stringArray?: string[];
//   objectProps?: ObjectProp[];
//   arrayObjectProps?: ArrayObjectProp[];
// }
interface Prop {
  key: string;
  value: string;
  type: (typeof TYPES)[number];
  stringArray?: string[];
  objectProps?: ObjectProp[];
  arrayObjectProps?: ArrayObjectProp[];
}

interface ComponentDataInterface {
  _id?: string;
  name: string;
  path: string;
  props: Prop[];
  createdAt?: number | string;
  isDisable?: boolean;
  componentNumber?: number;
  slug?: string;
}

const formInitData = {
  _id: "",
  name: "",
  path: "",
  props: [],
  createdAt: "",
  isDisable: false,
  componentNumber: 0,
  slug: "",
};

const ArrayStringField: React.FC<{
  values: string[];
  onChange: (values: string[]) => void;
}> = ({ values, onChange }) => {
  const addValue = () => {
    onChange([...values, ""]);
  };

  const removeValue = (index: number) => {
    onChange(values.filter((_, i) => i !== index));
  };

  const updateValue = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = value;
    onChange(newValues);
  };
  return (
    <div className="ml-4 space-y-2">
      {values.map((value, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            type="text"
            value={value}
            onChange={(e) => updateValue(index, e.target.value)}
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter string value"
          />
          <button
            type="button"
            onClick={() => removeValue(index)}
            className="p-1 text-red-600 hover:text-red-800"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addValue}
        className="inline-flex items-center px-2 py-1 text-sm text-blue-600 hover:text-blue-800"
      >
        <Plus className="h-4 w-4 mr-1" /> Add String
      </button>
    </div>
  );
};

const ObjectField: React.FC<{
  pageName: string;
  properties: ObjectProp[];
  onChange: (properties: ObjectProp[]) => void;
  depth?: number;
}> = ({ properties, onChange, depth = 0, pageName = "" }) => {
  const [expandedFields, setExpandedFields] = useState<{
    [key: string]: boolean;
  }>({});
  const [isMediaLibraryOpen, setIsMediaLibraryOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [propIndex, setPropIndex] = useState(0);
  const [propKey, setPropKey] = useState<string>("value");
  const [inputView, setInputView] = useState<Array<InputViewType>>([
    {
      index: 0,
      type: "input",
    },
  ]);
  const toggleExpand = (index: number) => {
    setExpandedFields((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const updateProperty = (index: number, field: string, value: any) => {
    const newProperties = [...properties];

    // Create a new object to avoid reference issues
    const updatedProperty = {
      ...newProperties[index],
      [field]: value,
    };

    // Handle type changes
    if (field === "type") {
      if (value === "OBJECT") {
        updatedProperty.objectProps = updatedProperty.objectProps || [];
        delete updatedProperty.arrayObjectProps;
      } else if (value === "ARRAYOFOBJECT") {
        updatedProperty.arrayObjectProps =
          updatedProperty.arrayObjectProps || [];
        delete updatedProperty.objectProps;
      } else {
        delete updatedProperty.objectProps;
        delete updatedProperty.arrayObjectProps;
      }
    }

    newProperties[index] = updatedProperty;
    onChange(newProperties);
  };

  const updateNestedObjectProps = (
    index: number,
    updatedProps: ObjectProp[]
  ) => {
    const newProperties = [...properties];
    newProperties[index] = {
      ...newProperties[index],
      objectProps: updatedProps,
    };
    onChange(newProperties);
  };

  const updateArrayObjectProps = (
    index: number,
    updatedItems: ArrayObjectProp[]
  ) => {
    const newProperties = [...properties];
    newProperties[index] = {
      ...newProperties[index],
      arrayObjectProps: updatedItems,
    };
    onChange(newProperties);
  };

  const openMediaLibrary = (key: string, index: number, value: string) => {
    setPropIndex(index);
    setPropKey(key);
    setSelectedFile(value);
    setIsMediaLibraryOpen(true);
  };
  const getFunctionStateCurrenctData = (data: string) => {
    const newProperties = [...properties];

    const updatedProperty = {
      ...newProperties[propIndex],
      ["value"]: data,
    };
    newProperties[propIndex] = updatedProperty;
    onChange(newProperties);
  };
  const mediaLibraryClose = () => {
    setPropIndex(0);
    setPropKey("");
    setSelectedFile("");
    setIsMediaLibraryOpen(false);
  };

  const handleInputView = (i, type = "input") => {
    setInputView((prevState) => ({
      ...prevState,
      [i]: { ...prevState[i], type },
    }));
  };
  return (
    <div className="ml-4 space-y-2">
      {properties.map((prop, index) => (
        <div
          key={index}
          className={`border-l-2 pl-4 ${depth > 0 ? "mt-2" : ""}`}
        >
          <div className="flex items-center space-x-2">
            {(prop.type === "OBJECT" || prop.type === "ARRAYOFOBJECT") && (
              <button
                type="button"
                onClick={() => toggleExpand(index)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                {expandedFields[index] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
            )}
            {/* <input
              type="text"
              value={prop.key}
              disabled={true}
              onChange={(e) => updateProperty(index, "key", e.target.value)}
              className="w-1/3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Key"
            /> */}
            <div className="w-[25%] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 flex justify-between">
              <p>{prop.key}</p>
              {prop.type === "TEXT" && (
                <div className="flex gap-5">
                  <FaCode
                    size={20}
                    onClick={() => handleInputView(index, "exitor")}
                  />
                  <MdInput
                    size={20}
                    onClick={() => handleInputView(index, "input")}
                  />
                </div>
              )}
            </div>
            {prop.type === "MEDIA" ? (
              prop?.value ? (
                <img
                  onClick={() =>
                    openMediaLibrary(prop.key, index, prop?.value || "")
                  }
                  src={prop.value}
                  className="w-24 h-24 object-cover rounded"
                  alt="Selected Media"
                />
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    openMediaLibrary(prop.key, index, prop?.value || "")
                  }
                  className="w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  Select Media
                </button>
              )
            ) : prop.type === "ARRAYOFSTRING" ? (
              <ArrayStringField
                values={prop.stringArray || []}
                onChange={(values) =>
                  updateProperty(index, "stringArray", values)
                }
              />
            ) : inputView?.[index]?.type === "exitor" ? (
              <div className="bg-white border rounded mb-[50px] max-w-[75%]">
                <Editor
                  index={index}
                  value={prop.value || ""}
                  onChange={updateProperty}
                />
              </div>
            ) : 
            // (
            //   <input
            //     type="text"
            //     value={prop.value}
            //     onChange={(e) =>
            //       handlePropChange(index, "value", e.target.value)
            //     }
            //     placeholder="Prop value"
            //     className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            //   />
            // )
            (
              <input
                type="text"
                value={prop.value}
                onChange={(e) => updateProperty(index, "value", e.target.value)}
                className="w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Value"
                disabled={prop.type !== "TEXT"}
              />
            )
            }
          </div>

          {expandedFields[index] && (
            <div className="mt-2">
              {prop.type === "OBJECT" && (
                <ObjectField
                  pageName={pageName}
                  properties={prop.objectProps || []}
                  onChange={(updatedProps) =>
                    updateNestedObjectProps(index, updatedProps)
                  }
                  depth={depth + 1}
                />
              )}
              {prop.type === "ARRAYOFOBJECT" && (
                <ArrayObjectField
                  pageName={pageName}
                  items={prop.arrayObjectProps || []}
                  onChange={(items) => updateArrayObjectProps(index, items)}
                  depth={depth + 1}
                />
              )}
            </div>
          )}
        </div>
      ))}
      {isMediaLibraryOpen && (
        <MediaLibraryModal
          getFunctionStateCurrenctData={getFunctionStateCurrenctData}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          isOpen={isMediaLibraryOpen}
          onClose={() => mediaLibraryClose()}
          pageName={pageName}
        ></MediaLibraryModal>
      )}
    </div>
  );
};

const ArrayObjectField: React.FC<{
  pageName: string;
  items: ArrayObjectProp[];
  onChange: (items: ArrayObjectProp[]) => void;
  depth?: number;
}> = ({ items, onChange, depth = 0, pageName = "" }) => {
  const [demoItem, setDemoItem] = useState<ObjectProp[]>(null);

  useEffect(() => {
    if (items?.[0]?.properties && demoItem === null) {
      setDemoItem(items[0].properties);
    }
  }, []);
  if (!Array.isArray(demoItem)) {
    return null;
  }
  const addItem = () => {
    // onChange([...items, { properties: [] }]);
    // onChange([...items, { properties: [...items[0].properties] }]);
    onChange([...items, { properties: [...demoItem] }]);
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    onChange(newItems);
  };

  const updateItemProperties = (index: number, properties: ObjectProp[]) => {
    const newItems = [...items];
    newItems[index] = { properties };
    onChange(newItems);
  };

  return (
    <div className="ml-4 space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border rounded-md p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium">Object {index + 1}</h4>
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="p-1 text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
          <ObjectField
            pageName={pageName}
            properties={item.properties}
            onChange={(properties) => updateItemProperties(index, properties)}
            depth={depth + 1}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addItem}
        className="inline-flex items-center px-2 py-1 text-sm text-blue-600 hover:text-blue-800"
      >
        <Plus className="h-4 w-4 mr-1" /> Add Object
      </button>
    </div>
  );
};

interface ComponentDataTypes {
  _id: string;
  componentId: ComponentDataInterface;
  props: Prop[];
  // values: [];
  propData: Prop[];
  pageId: string;
  pageNumber: number;
  componentNumber: number;
  componentData?: any;
  slug: string;
  isDisable: boolean;
  createdAt: number;
}

interface MetaKeyValue {
  key: string;
  value: string;
  type: "MEDIA" | "TEXT";
}

interface IProduct {
  name: string;
  imageUrl: string;
  description: string;
  ratingValue: string;
  reviewCount: string;
}

// Interface for Service schema
interface IService {
  name: string;
  description: string;
  url: string;
  mainEntityOfPage: string;
  serviceType: string[];
}


interface PageDataType {
  _id: string;
  name: string;
  url: string;
  category: string;
  author: string;
  siteTitle: string;
  metaDesc: string;
  metaImgUrl: string;
  metaTitle: string;
  components: any[];
  metsKeyValues: MetaKeyValue[];
  linkKeyValues: MetaKeyValue[];
  updatedAt: number;
  createdAt: number;
  faqSchema: Array<{
    question: string;
    answer: string;
  }>;
  productSchema: IProduct | null, 
  serviceSchema: IService | null, 
}

interface ComponentData {
  componentValue: ComponentDataTypes;
  fetchData: () => void;
  previewComponent?: (name: string) => void;
  pageName?: string;
  pageId?: string;
  selectedPageData?: PageDataType | null;
}

interface InputViewType {
  index: number;
  type: string;
}

const ComponentForm: React.FC<ComponentData> = ({
  componentValue,
  fetchData,
  previewComponent,
  pageName = "",
  selectedPageData,
}) => {
  if (!componentValue) return null;
  const [loading, setLoading] = useState<boolean>(false);
  const [isMediaLibraryOpen, setIsMediaLibraryOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [selected, setSelected] = useState("Page");
  const [propIndex, setPropIndex] = useState(0);
  const [propKey, setPropKey] = useState("");
  const [inputView, setInputView] = useState<Array<InputViewType>>([
    {
      index: 0,
      type: "input",
    },
  ]);
  const [toast, setToast] = useState(null);
  const [componentDataValue, setComponentDataValue] = useState<any>(
    componentValue?.componentData
  );
  // const [formData, setFormData] = useState<ComponentDataInterface>({ ...componentValue.componentId, props: componentValue.props.length === 0 ? componentValue.componentId.props : componentValue.props });
  const [formData, setFormData] = useState<ComponentDataInterface>(() => ({
    ...componentValue.componentId,
    componentNumber: componentValue.componentNumber,
    props: componentValue?.propData || [],
  }));
  useEffect(() => {
    setFormData(() => formInitData);
    setComponentDataValue(() => null);
    setTimeout(() => {
      setComponentDataValue((p) => componentValue?.componentData);
      setFormData((prev) => ({
        ...componentValue.componentId,
        componentNumber: componentValue.componentNumber,
        props: componentValue?.propData || [],
      }));
    }, 0);
  }, [componentValue]);

  type PropType = (typeof TYPES)[number];

  const handlePropChange = (
    index: number,
    field: keyof Prop,
    value: any
  ): void => {
    const newProps = [...formData.props];
    if (field === "type") {
      // Reset specific type data when changing type
      newProps[index] = {
        ...newProps[index],
        type: value as PropType,
        stringArray: value === "ARRAYOFSTRING" ? [] : undefined,
        objectProps: value === "OBJECT" ? [] : undefined,
        arrayObjectProps: value === "ARRAYOFOBJECT" ? [] : undefined,
      };
    } else {
      newProps[index] = {
        ...newProps[index],
        [field]: value,
      };
    }
    setFormData({
      ...formData,
      props: newProps,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        _id: componentValue._id,
        pageId: componentValue.pageId,
        componentId: componentValue.componentId._id,
        pageNumber: 2,
        slug: "test-slug",
        props: formData.props,
        componentNumber: formData.componentNumber,
        // ...formData
      };
      const response = await axiosPrivate.post("/pageV2/save", data);
      setToast({
        message: response?.data?.message || "Component Could Not Be Updated.",
        type: "success",
      });
      fetchData();
      if (response?.data?.status === 1200) {
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setLoading(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getFunctionStateCurrenctData = (data: string) => {
    setFormData((prev) => {
      return {
        ...prev,
        props: prev.props.map((prop, index) =>
          index === propIndex ? { ...prop, value: data } : prop
        ),
      };
    });
  };
  const openMediaLibrary = (key: string, index: number, value: string) => {
    setPropIndex(index);
    setPropKey(key);
    setSelectedFile(value);
    setIsMediaLibraryOpen(true);
  };
  const mediaLibraryClose = () => {
    setPropIndex(0);
    setPropKey("");
    setSelectedFile("");
    setIsMediaLibraryOpen(false);
  };

  const handleInputView = (i, type = "input") => {
    setInputView((prevState) => ({
      ...prevState,
      [i]: { ...prevState[i], type },
    }));
  };

  return (
    <div className="h-[calc(100ch-4rem)] overflow-y-auto bg-gray-50 py-10 w-[100%]">
      {toast && (
        <CustomToast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <SyncLoader color="#1b2c55" size={15} />
        </div>
      ) : (
        <React.Fragment>
          <div className="flex justify-center gap-1 border-b border-gray-300">
            {["Page", "Component"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelected(tab)}
                className={`px-4 py-2 text-gray-600 relative transition-all 
            ${selected === tab ? "border border-gray-400 border-b-transparent rounded-t-lg bg-white shadow" : "border-b-2 border-gray-300"}`}
              >
                {tab}
              </button>
            ))}
          </div>
          {selected === "Page" && (
            <div className="mx-auto p-6 bg-white rounded-lg shadow m-[12px] ml-[12px] mr-[12px]">
              {selectedPageData && (
                <EditPage pageData={selectedPageData}></EditPage>
              )}
            </div>
          )}
          {selected === "Component" && (
            <div className="mx-auto p-6 bg-white rounded-lg shadow m-[12px] ml-[12px] mr-[12px]">
              <form onSubmit={handleSubmit} className="space-y-6 mb-[100px]">
                <div className="space-y-4">
                  {previewComponent && (
                    <MdOutlinePreview
                      className="p-1 bg-black/10 h-6 w-6 rounded cursor-pointer hover:bg-black/20"
                      onClick={() =>
                        previewComponent(componentValue?.componentId?.name)
                      }
                    />
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Component Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      disabled={true}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Component slug
                    </label>
                    <input
                      type="text"
                      name="slug"
                      disabled={true}
                      value={formData.slug}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Component Number
                    </label>
                    <input
                      type="number"
                      name="componentNumber"
                      value={formData.componentNumber}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Component Path
                    </label>
                    <input
                      type="text"
                      name="path"
                      value={formData.path}
                      disabled={true}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {formData.props.map((prop, index) => {
                    return (
                      <div
                        key={index}
                        className="border rounded-lg p-4 space-y-4"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-[35%] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 flex justify-between">
                            <p>{prop.key}</p>
                            {prop.type === "TEXT" && (
                              <div className="flex gap-5">
                                <FaCode
                                  size={20}
                                  onClick={() =>
                                    handleInputView(index, "exitor")
                                  }
                                />
                                <MdInput
                                  size={20}
                                  onClick={() =>
                                    handleInputView(index, "input")
                                  }
                                />
                              </div>
                            )}
                          </div>

                          {prop.type === "MEDIA" ? (
                            prop?.value ? (
                              <img
                                onClick={() =>
                                  openMediaLibrary(
                                    prop.key,
                                    index,
                                    prop?.value || ""
                                  )
                                }
                                src={prop?.value}
                                alt="Comfygen"
                                className="w-24 h-24 object-cover rounded"
                              ></img>
                            ) : (
                              <button
                                type="button"
                                onClick={() =>
                                  openMediaLibrary(
                                    prop.key,
                                    index,
                                    prop?.value || ""
                                  )
                                }
                                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              >
                                Select Media
                              </button>
                            )
                          ) : inputView?.[index]?.type === "exitor" ? (
                            <div className="bg-white border rounded mb-[30px] max-w-[75%]">
                              <Editor
                                index={index}
                                value={prop.value || ""}
                                onChange={handlePropChange}
                              />
                            </div>
                          ) : (
                            <input
                              type="text"
                              value={prop.value}
                              onChange={(e) =>
                                handlePropChange(index, "value", e.target.value)
                              }
                              disabled={prop.type !== "TEXT"}
                              placeholder="Prop value"
                              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                          )}
                        </div>

                        {prop.type === "ARRAYOFSTRING" && (
                          <ArrayStringField
                            values={prop.stringArray || []}
                            onChange={(values) =>
                              handlePropChange(index, "stringArray", values)
                            }
                          />
                        )}

                        {prop.type === "OBJECT" && (
                          <ObjectField
                            pageName={pageName}
                            properties={prop.objectProps || []}
                            onChange={(properties) =>
                              handlePropChange(index, "objectProps", properties)
                            }
                          />
                        )}

                        {prop.type === "ARRAYOFOBJECT" && (
                          <ArrayObjectField
                            pageName={pageName}
                            items={prop.arrayObjectProps || []}
                            onChange={(items) =>
                              handlePropChange(index, "arrayObjectProps", items)
                            }
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </button>
              </form>
            </div>
          )}
        </React.Fragment>
      )}
      {isMediaLibraryOpen && (
        <MediaLibraryModal
          getFunctionStateCurrenctData={getFunctionStateCurrenctData}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          isOpen={isMediaLibraryOpen}
          onClose={() => mediaLibraryClose()}
          pageName={pageName}
        ></MediaLibraryModal>
      )}
    </div>
  );
};

export default ComponentForm;
