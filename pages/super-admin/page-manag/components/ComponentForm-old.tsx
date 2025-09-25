"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Plus, Trash2, Save, ConstructionIcon } from 'lucide-react';
import { axiosPrivate } from '../../../../super-admin-components/apiFunctions';

let TYPES: string[] = [];
const getTypes = async () => {
  try {
    const res = await axiosPrivate.get("/component/types");
    TYPES = res?.data?.data || [];

  } catch (errror) {
    console.error(errror);
    return [];
  }
}
getTypes();


interface ObjectProp {
  key: string;
  value: string;
  type: string;
}

interface ArrayObjectProp {
  properties: ObjectProp[];
}

interface Prop {
  key: string;
  value: string;
  type: typeof TYPES[number];
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
  slug?: string
}

const formInitData = {
  _id: "",
  name: "",
  path: "",
  props: [],
  createdAt: "",
  isDisable: false,
  slug: ""
}


const getComponentData = async (_id: string) => {
  try {
    const res = await axiosPrivate.get("/component/getMetaComponent", {
      params: {
        _id
      }
    })
    return res?.data?.data;
  } catch (error) {
    console.error(error);
  }
}

// Simple loading spinner using CSS animation
const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

const ArrayStringField: React.FC<{
  values: string[];
  onChange: (values: string[]) => void;
}> = ({ values, onChange }) => {
  const addValue = () => {
    onChange([...values, '']);
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
  properties: ObjectProp[];
  onChange: (properties: ObjectProp[]) => void;
}> = ({ properties, onChange }) => {

  const updateProperty = (index: number, field: keyof ObjectProp, value: string) => {
    const newProperties = [...properties];
    newProperties[index] = { ...newProperties[index], [field]: value };
    onChange(newProperties);
  };

  return (
    <div className="ml-4 space-y-2">
      {properties.map((prop, index) =>{
        return(
          <div key={index} className="flex items-center space-x-2">
          <input
            type="text"
            value={prop.key}
            disabled={true}
            onChange={(e) => updateProperty(index, 'key', e.target.value)}
            className="w-1/3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Key"
          />
          <input
            type="text"
            value={prop.value}
            onChange={(e) => updateProperty(index, 'value', e.target.value)}
            className="w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Value"
          />

        </div>
        )
      })}
    </div>
  );
};

const ArrayObjectField: React.FC<{
  items: ArrayObjectProp[];
  onChange: (items: ArrayObjectProp[]) => void;
}> = ({ items, onChange }) => {

  const updateItem = (index: number, properties: ObjectProp[]) => {
    const newItems = [...items];
    newItems[index] = { properties };
    onChange(newItems);
  };

  return (
    <div className="ml-4 
      space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border rounded-md p-4 bg-gray-50 ">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium">Object {index + 1}</h4>
          </div>
          <ObjectField
            properties={item.properties}
            onChange={(properties) => updateItem(index, properties)}
          />
        </div>
      ))}
    </div>
  );
};

interface ComponentDataTypes {
  _id: string;
  componentId: ComponentDataInterface;
  props: Prop[];
  // values: [];
  pageId: string;
  pageNumber: number;
  slug: string;
  isDisable: boolean;
  createdAt: number
}

interface ComponentData {
  componentValue: ComponentDataTypes
}

const ComponentForm: React.FC<ComponentData> = ({ componentValue }) => {
  if (!componentValue) return;
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<ComponentDataInterface>({...componentValue.componentId, props: componentValue.props.length===0? componentValue.componentId.props :componentValue.props });
  
  useEffect(() => {
    setFormData(formInitData)
    if (componentValue) {
      setFormData({...componentValue.componentId, props: componentValue.props.length===0? componentValue.componentId.props :componentValue.props });
    } 
  }, [componentValue]);

  type PropType = typeof TYPES[number];

  const handlePropChange = (index: number, field: keyof Prop, value: any): void => {
    const newProps = [...formData.props];
    if (field === 'type') {
      // Reset specific type data when changing type
      newProps[index] = {
        ...newProps[index],
        type: value as PropType,
        stringArray: value === 'ARRAYOFSTRING' ? [] : undefined,
        objectProps: value === 'OBJECT' ? [] : undefined,
        arrayObjectProps: value === 'ARRAYOFOBJECT' ? [] : undefined
      };
    } else {
      newProps[index] = {
        ...newProps[index],
        [field]: value
      };
    }
    setFormData({
      ...formData,
      props: newProps
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
        props: formData.props
        // ...formData
      }
      await axiosPrivate.post('/pageV2/save', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setLoading(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="h-[calc(100ch-4rem)] overflow-y-auto bg-gray-50 py-10 ">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
          <form onSubmit={handleSubmit} className="space-y-6 mb-[100px]">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Component Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Component slug</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Component Path</label>
                <input
                  type="text"
                  name="path"
                  value={formData.path}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-4">

              {formData.props.map((prop, index) => {
                return (
                  <div key={index} className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center space-x-4">
                    <input
                      type="text"
                      value={prop.key}
                      onChange={(e) => handlePropChange(index, 'key', e.target.value)}
                      placeholder="Prop name"
                      disabled={true}
                      className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />

                    <input
                      type="text"
                      value={prop.value}
                      onChange={(e) => handlePropChange(index, 'value', e.target.value)}
                      placeholder="Prop value"
                      className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  {prop.type === 'ARRAYOFSTRING' && (
                    <ArrayStringField
                      values={prop.stringArray || []}
                      onChange={(values) => handlePropChange(index, 'stringArray', values)}
                    />
                  )}

                  {prop.type === 'OBJECT' && (
                    <ObjectField
                      properties={prop.objectProps || []}
                      onChange={(properties) => handlePropChange(index, 'objectProps', properties)}
                    />
                  )}

                  {prop.type === 'ARRAYOFOBJECT' && (
                    <ArrayObjectField
                      items={prop.arrayObjectProps || []}
                      onChange={(items) => handlePropChange(index, 'arrayObjectProps', items)}
                    />
                  )}
                </div>
              )})}
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
    </div>
  );
};

export default ComponentForm;