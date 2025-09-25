import { Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import MediaLibraryModal from "../../../../super-admin-components/MediaLibraryModal";
import { MdOutlinePermMedia } from "react-icons/md";
import { pageSave } from "../../../../super-admin-components/apiFunctions";
import { IoMdClose } from "react-icons/io";
import { SyncLoader } from "react-spinners";
import CustomToast from "../../../../super-admin-components/CustomToast";

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

interface PageFormData {
  _id?: string;
  name: string;
  siteTitle: string;
  metaDesc: string;
  metsKeyValues: Array<{
    key: string;
    value: string;
    type: "TEXT" | "MEDIA";
  }>;
  linkKeyValues: Array<{
    key: string;
    value: string;
    type: "TEXT" | "MEDIA";
  }>;
  faqSchema?: Array<ObjectFaqProp>;
  productSchema?: IProduct | null;
  serviceSchema?: IService | null;
}

interface ObjectProp {
  key: string;
  value: string;
  type: "TEXT" | "MEDIA";
}

interface ObjectFaqProp {
  question: string;
  answer: string;
}

interface MetaKeyValue {
  key: string;
  value: string;
  type: "MEDIA" | "TEXT";
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
  faqSchema: Array<ObjectFaqProp>;
  productSchema: IProduct | null;
  serviceSchema: IService | null;
}

interface EditPageType {
  pageData: PageDataType;
}
const EditPage: React.FC<EditPageType> = ({ pageData }) => {
  if (!pageData) return null;
  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState(null);

  const [errors, setErrors] = useState<{
    [key in keyof PageFormData]?: string;
  }>({});
  const [formData, setFormData] = useState<PageFormData>({
    _id: pageData?._id,
    name: pageData.name,
    siteTitle: pageData.siteTitle,
    metaDesc: pageData.metaDesc,
    metsKeyValues: pageData.metsKeyValues,
    linkKeyValues: pageData?.linkKeyValues || [],
    faqSchema: pageData?.faqSchema || [],
    productSchema: pageData?.productSchema || null,
    serviceSchema: pageData?.serviceSchema || null,
  });
  // console.log("faqSchema", formData?.faqSchema)
  // console.log("serviceSchema", formData?.serviceSchema)
  // console.log("productSchema", formData?.productSchema)
  const handlePropChange = (properties: ObjectProp[]): void => {
    setFormData({
      ...formData,
      metsKeyValues: properties,
    });
  };
  const handleLinkPropChange = (properties: ObjectProp[]): void => {
    setFormData({
      ...formData,
      linkKeyValues: properties,
    });
  };
  const handleFaqChange = (properties: ObjectFaqProp[]): void => {
    setFormData({
      ...formData,
      faqSchema: properties,
    });
  };
  const handleServiceChange = (properties: IService): void => {
    setFormData({
      ...formData,
      serviceSchema: properties,
    });
  };
  const handleProductChange = (properties: IProduct): void => {
    setFormData({
      ...formData,
      productSchema: properties,
    });
  };
  const validateField = (): boolean => {
    const newErrors: { [key in keyof PageFormData]?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.siteTitle.trim()) {
      newErrors.siteTitle = "Site title is required.";
    }

    if (!formData.metaDesc.trim()) {
      newErrors.metaDesc = "Meta description is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateField()) {
      try {
        setLoading(true);
        let res = await pageSave(formData);
        setToast({
          message: res?.message || "Page Could Not Be Updated.",
          type: "success",
        });
        setLoading(false);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <React.Fragment>
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
        <div className="w-full mb-[150px] bg-white rounded-lg  ">
          <div className="p-4">
            <div className="flex justify-between items-center border-b-2">
              <h2 className="text-xl font-semibold">Edit Page</h2>
              <button className="mb-2 p-2 bg-black/10 rounded-full text-black hover:bg-black/60 hover:text-white">
                <IoMdClose className="h-5 w-5" />
              </button>
            </div>
            <div className="overflow-y-auto">
              <form className="m-b[100px]" onSubmit={handleSubmit}>
                <div className="space-y-4 mt-4">
                  <h3 className="text-lg font-semibold">PAGE INFO</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mt-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-[#1E293B] font-normal"
                        >
                          Page Slug
                        </label>
                        <input
                          className="w-full p-2 text-md bg-gray-100 border border-gray-300 rounded outline-none"
                          id="name"
                          placeholder="Enter Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="siteTitle"
                          className="text-[#1E293B] font-normal"
                        >
                          Title
                        </label>
                        <input
                          className="w-full p-2 text-md bg-gray-100 border border-gray-300 rounded outline-none"
                          id="siteTitle"
                          placeholder="Enter Site Title"
                          value={formData.siteTitle}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              siteTitle: e.target.value,
                            })
                          }
                        />
                        {errors.siteTitle && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.siteTitle}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label
                        htmlFor="metaDesc"
                        className="text-[#1E293B] font-normal"
                      >
                        Meta Description
                      </label>
                      <textarea
                        id="metaDesc"
                        value={formData.metaDesc}
                        onChange={(e) =>
                          setFormData({ ...formData, metaDesc: e.target.value })
                        }
                        className="w-full p-2 text-md bg-gray-100 border border-gray-300 rounded outline-none"
                        placeholder="Additional Meta Description"
                        rows={4}
                      />
                      {errors.metaDesc && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.metaDesc}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Meta Og Tags</h3>
                    <ObjectField
                      properties={formData.metsKeyValues}
                      onChange={handlePropChange}
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Link Tags</h3>
                    <ObjectField
                      properties={formData.linkKeyValues}
                      onChange={handleLinkPropChange}
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Faq's Schema</h3>
                    <QuestionAnswerField
                      items={formData?.faqSchema || []}
                      onChange={handleFaqChange}
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Service Schema</h3>
                    <ServiceFormField
                      service={formData?.serviceSchema || null}
                      onChange={handleServiceChange}
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Product Schema</h3>
                    <ProductFormField
                      product={formData?.productSchema || null}
                      onChange={handleProductChange}
                    />
                  </div>

                  <div className="space-y-1">
                    <button
                      type="submit"
                      className="w-full py-2 bg-[#5556D1] text-white font-normal rounded-lg hover:bg-[#151515] transition duration-300"
                      disabled={loading}
                    >
                      Update Page
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const ObjectField: React.FC<{
  properties: ObjectProp[];
  onChange: (properties: ObjectProp[]) => void;
}> = ({ properties, onChange }) => {
  console.log("propertiesproperties", properties);
  const [isMediaLibraryOpen, setIsMediaLibraryOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [propIndex, setPropIndex] = useState(0);
  const [propKey, setPropKey] = useState("");
  const addProperty = () => {
    onChange([...properties, { key: "", value: "", type: "TEXT" }]);
  };

  const removeProperty = (index: number) => {
    onChange(properties.filter((_, i) => i !== index));
  };

  const updateProperty = (
    index: number,
    field: keyof ObjectProp,
    value: string
  ) => {
    const newProperties = [...properties];
    newProperties[index] = {
      ...newProperties[index],
      [field]: value,
    };
    onChange(newProperties);
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

  const openMediaLibrary = (key: string, index: number) => {
    setPropIndex(index);
    setPropKey(key);
    setIsMediaLibraryOpen(true);
  };

  const customScrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      border-radius: 25px;
      background-color: #F5F5F5;
    }
  
    .custom-scrollbar::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #F5F5F5;
       border-radius: 25px;
    }
  
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: #5556D1;
       border-radius: 25px;
    }
  `;

  return (
    <>
      <style>{customScrollbarStyles}</style>
      <div className="space-y-2 overflow-hidden overflow-y-auto h-100 custom-scrollbar">
        {properties.map((prop, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={prop.key}
                onChange={(e) => updateProperty(index, "key", e.target.value)}
                className="border-2 py-2 px-2 rounded-lg w-full"
                placeholder="Key"
              />
              {prop.type === "MEDIA" ? (
                prop?.value ? (
                  <img
                    src={prop.value || ""}
                    onClick={() => openMediaLibrary(prop.key, index)}
                    className=" h-24 object-cover rounded w-full"
                    alt="Selected Media"
                  ></img>
                ) : (
                  <button
                    type="button"
                    onClick={() => openMediaLibrary(prop.key, index)}
                    className="bg-[#131327] text-white py-2 px-4 whitespace-nowrap rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 flex items-center gap-1"
                  >
                    {" "}
                    <MdOutlinePermMedia /> Select Media
                  </button>
                )
              ) : (
                <input
                  type="text"
                  value={prop.value}
                  onChange={(e) =>
                    updateProperty(index, "value", e.target.value)
                  }
                  className=" border-2 py-2 px-2 rounded-lg w-full"
                  placeholder="Value"
                />
              )}
              <div className="bg-[#131327] text-white py-1 px-3 rounded-md">
                <select
                  value={prop.type}
                  onChange={(e) =>
                    updateProperty(
                      index,
                      "type",
                      e.target.value as "TEXT" | "MEDIA"
                    )
                  }
                  className="bg-[#131327] focus:outline-none"
                >
                  <option value="TEXT">TEXT</option>
                  <option value="MEDIA">MEDIA</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => removeProperty(index)}
                className="p-1 text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addProperty}
          className="inline-flex items-center px-2 py-1 text-sm text-blue-600 hover:text-blue-800"
        >
          <Plus className="h-4 w-4 mr-1" /> Add Property
        </button>
        {isMediaLibraryOpen && (
          <MediaLibraryModal
            getFunctionStateCurrenctData={getFunctionStateCurrenctData}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            isOpen={isMediaLibraryOpen}
            onClose={() => mediaLibraryClose()}
          ></MediaLibraryModal>
        )}
      </div>
    </>
  );
};

const QuestionAnswerField: React.FC<{
  items: Array<{ question: string; answer: string }>;
  onChange: (items: Array<{ question: string; answer: string }>) => void;
}> = ({ items, onChange }) => {
  const addItem = () => {
    onChange([...items, { question: "", answer: "" }]);
  };

  const removeItem = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  const updateItem = (
    index: number,
    field: "question" | "answer",
    value: string
  ) => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      [field]: value,
    };
    onChange(newItems);
  };

  const customScrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      border-radius: 25px;
      background-color: #F5F5F5;
    }
  
    .custom-scrollbar::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #F5F5F5;
      border-radius: 25px;
    }
  
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: #5556D1;
      border-radius: 25px;
    }
  `;

  return (
    <>
      <style>{customScrollbarStyles}</style>
      <div className="space-y-2 overflow-hidden overflow-y-auto h-100 custom-scrollbar">
        {items.map((item, index) => (
          <div key={index} className="space-y-2 mb-4 p-3 border rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <label className="font-medium text-gray-700 w-24">
                Question:
              </label>
              <input
                type="text"
                value={item.question}
                onChange={(e) => updateItem(index, "question", e.target.value)}
                className="border-2 py-2 px-2 rounded-lg w-full"
                placeholder="Enter question"
              />
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="p-1 text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-start space-x-2">
              <label className="font-medium text-gray-700 w-24">Answer:</label>
              <textarea
                value={item.answer}
                onChange={(e) => updateItem(index, "answer", e.target.value)}
                className="border-2 py-2 px-2 rounded-lg w-full min-h-24"
                placeholder="Enter answer"
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="inline-flex items-center px-4 py-2 bg-[#131327] text-white rounded-md hover:bg-[#22223A]"
        >
          <Plus className="h-4 w-4 mr-1" /> Add Question
        </button>
      </div>
    </>
  );
};

const ServiceFormField: React.FC<{
  service: {
    name: string;
    description: string;
    url: string;
    mainEntityOfPage: string;
    serviceType: string[];
  } | null;
  onChange: (
    service: {
      name: string;
      description: string;
      url: string;
      mainEntityOfPage: string;
      serviceType: string[];
    } | null
  ) => void;
}> = ({ service, onChange }) => {
  // Handle changes to text fields
  const updateField = (field: string, value: string) => {
    if (!service) return;

    onChange({
      ...service,
      [field]: value,
    });
  };

  // Handle service type changes
  const addServiceType = () => {
    if (!service) return;

    onChange({
      ...service,
      serviceType: [...service.serviceType, ""],
    });
  };

  const updateServiceType = (index: number, value: string) => {
    if (!service) return;

    const newServiceTypes = [...service.serviceType];
    newServiceTypes[index] = value;
    onChange({
      ...service,
      serviceType: newServiceTypes,
    });
  };

  const removeServiceType = (index: number) => {
    if (!service) return;

    onChange({
      ...service,
      serviceType: service.serviceType.filter((_, i) => i !== index),
    });
  };

  // Create a new empty service
  const createNewService = () => {
    onChange({
      name: "",
      description: "",
      url: "",
      mainEntityOfPage: "",
      serviceType: [""],
    });
  };

  // Remove the service
  const removeService = () => {
    onChange(null);
  };

  const customScrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      border-radius: 25px;
      background-color: #F5F5F5;
    }
  
    .custom-scrollbar::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #F5F5F5;
      border-radius: 25px;
    }
  
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: #5556D1;
      border-radius: 25px;
    }
  `;

  return (
    <>
      <style>{customScrollbarStyles}</style>
      <div className="space-y-4 overflow-hidden overflow-y-auto h-100 custom-scrollbar p-4">
        {service === null ? (
          // Add Service button when no service exists
          <div className="flex justify-center py-6">
            <button
              type="button"
              onClick={createNewService}
              className="inline-flex items-center px-4 py-2 bg-[#131327] text-white rounded-md hover:bg-[#22223A]"
            >
              <Plus className="h-5 w-5 mr-2" /> Add Service
            </button>
          </div>
        ) : (
          // Service form when service exists
          <>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Service Details</h3>
              <button
                type="button"
                onClick={removeService}
                className="p-1 text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>

            {/* Name Field */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={service.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="border-2 py-2 px-2 rounded-lg w-full"
                placeholder="Service name"
              />
            </div>

            {/* Description Field */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={service.description}
                onChange={(e) => updateField("description", e.target.value)}
                className="border-2 py-2 px-2 rounded-lg w-full min-h-24"
                placeholder="Service description"
              />
            </div>

            {/* URL Field */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                URL
              </label>
              <input
                type="url"
                value={service.url}
                onChange={(e) => updateField("url", e.target.value)}
                className="border-2 py-2 px-2 rounded-lg w-full"
                placeholder="https://example.com/service"
              />
            </div>

            {/* Main Entity Of Page Field */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Main Entity Of Page
              </label>
              <input
                type="text"
                value={service.mainEntityOfPage}
                onChange={(e) =>
                  updateField("mainEntityOfPage", e.target.value)
                }
                className="border-2 py-2 px-2 rounded-lg w-full"
                placeholder="Main entity page URL or identifier"
              />
            </div>

            {/* Service Types */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Service Types
              </label>
              {service.serviceType.map((type, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={type}
                    onChange={(e) => updateServiceType(index, e.target.value)}
                    className="border-2 py-2 px-2 rounded-lg w-full"
                    placeholder="Service type"
                  />
                  <button
                    type="button"
                    onClick={() => removeServiceType(index)}
                    className="p-1 text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addServiceType}
                className="inline-flex items-center px-3 py-1.5 text-sm bg-[#131327] text-white rounded-md hover:bg-[#22223A]"
              >
                <Plus className="h-4 w-4 mr-1" /> Add Service Type
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

const ProductFormField: React.FC<{
  product: IProduct | null;
  onChange: (product: IProduct | null) => void;
}> = ({ product, onChange }) => {
  const [isMediaLibraryOpen, setIsMediaLibraryOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [propKey, setPropKey] = useState("");
  // Handle changes to product fields
  const updateField = (field: keyof IProduct, value: string) => {
    if (!product) return;

    onChange({
      ...product,
      [field]: value,
    });
  };

  // Create a new empty product
  const createNewProduct = () => {
    onChange({
      name: "",
      imageUrl: "",
      description: "",
      ratingValue: "",
      reviewCount: "",
    });
  };

  // Remove the product
  const removeProduct = () => {
    onChange(null);
  };

  const customScrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      border-radius: 25px;
      background-color: #F5F5F5;
    }
  
    .custom-scrollbar::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #F5F5F5;
      border-radius: 25px;
    }
  
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: #5556D1;
      border-radius: 25px;
    }
  `;
  const mediaLibraryClose = () => {
    setPropKey("");
    setSelectedFile("");
    setIsMediaLibraryOpen(false);
  };
  const openMediaLibrary = (key: string) => {
    setPropKey(key);
    setIsMediaLibraryOpen(true);
  };

  const getFunctionStateCurrenctData = (data: string) => {
    onChange({
      ...product,
      imageUrl: data,
    });
  };

  return (
    <>
      <style>{customScrollbarStyles}</style>
      <div className="space-y-4 overflow-hidden overflow-y-auto h-100 custom-scrollbar p-4">
        {product === null ? (
          // Add Product button when no product exists
          <div className="flex justify-center py-6">
            <button
              type="button"
              onClick={createNewProduct}
              className="inline-flex items-center px-4 py-2 bg-[#131327] text-white rounded-md hover:bg-[#22223A]"
            >
              <Plus className="h-5 w-5 mr-2" /> Add Product
            </button>
          </div>
        ) : (
          // Product form when product exists
          <>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Product Details</h3>
              <button
                type="button"
                onClick={removeProduct}
                className="p-1 text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>

            {/* Name Field */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={product.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="border-2 py-2 px-2 rounded-lg w-full"
                placeholder="Product name"
              />
            </div>

            {/* Image URL Field */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <div className="flex space-x-2">
                {/* <input
                  type="text"
                  value={product.imageUrl}
                  onChange={(e) => updateField("imageUrl", e.target.value)}
                  className="border-2 py-2 px-2 rounded-lg w-full"
                  placeholder="https://example.com/image.jpg"
                /> */}
                <button
                  type="button"
                  onClick={() => openMediaLibrary("imageUrl")}
                  // className="bg-[#131327] text-white py-2 px-4 whitespace-nowrap rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 flex items-center gap-1"
                  className="border-2 py-2 px-2 rounded-lg w-full"
                >
                  {/* <MdOutlinePermMedia />  */}
                  Select Media
                </button>
                {product.imageUrl && (
                  <div className="flex-shrink-0 w-12 h-12 border rounded-md overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt="Product preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>';
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Description Field */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={product.description}
                onChange={(e) => updateField("description", e.target.value)}
                className="border-2 py-2 px-2 rounded-lg w-full min-h-24"
                placeholder="Product description"
              />
            </div>

            {/* Rating Value Field */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Rating Value
              </label>
              <input
                type="text"
                value={product.ratingValue}
                onChange={(e) => updateField("ratingValue", e.target.value)}
                className="border-2 py-2 px-2 rounded-lg w-full"
                placeholder="4.5"
              />
            </div>

            {/* Review Count Field */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Review Count
              </label>
              <input
                type="text"
                value={product.reviewCount}
                onChange={(e) => updateField("reviewCount", e.target.value)}
                className="border-2 py-2 px-2 rounded-lg w-full"
                placeholder="42"
              />
            </div>
          </>
        )}
        {isMediaLibraryOpen && (
          <MediaLibraryModal
            getFunctionStateCurrenctData={getFunctionStateCurrenctData}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            isOpen={isMediaLibraryOpen}
            onClose={() => mediaLibraryClose()}
          ></MediaLibraryModal>
        )}
      </div>
    </>
  );
};

export default EditPage;
