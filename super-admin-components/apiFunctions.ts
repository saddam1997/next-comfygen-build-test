"use client";

import axios from 'axios';

// const apiUrl = 'https://comfgyen-dynamic-backend.vercel.app/api/v1'
// const apiUrl = 'https://comfygen-dynamic.jamsara.com/api/v1/';
// const apiUrl = 'http://localhost:1225/api/v1/'
const apiUrl = 'https://dynamic.comfygen.in/api/v1/';

const axiosPublic = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

const axiosPrivate = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosPrivate.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const returnData = sessionStorage.getItem('adminUser') || '';
      if (returnData) {
        const { token } = JSON.parse(returnData)
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);


// utils/axiosPublic.ts or axiosPrivate.ts
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      // Handle network error
      alert('Network error. Please try again.');
    } else {
      // Handle HTTP error responses
      switch (error.response.status) {
        case 401:
          alert('Unauthorized. Please log in.');
          break;
        case 500:
          alert('Server error. Please try again later.');
          break;
        default:
          alert('Something went wrong. Please try again.');
      }
    }
    return Promise.reject(error);
  }
);


export { axiosPrivate, axiosPublic };

interface LoginDataInterface {
  userName: string,
  password: string
}
export const loginApi = async ({ userName, password }: LoginDataInterface) => {
  try {
    const response = await axiosPublic.post('/admin/login', { userName: userName, password });
    const userData = response.data;
    if (userData?.data) {
      sessionStorage.setItem('adminUser', JSON.stringify(userData.data));
      window.location.href = "/super-admin/page-manag";
    }
  } catch (err) {
    console.error('Login failed:', err);
  }
};

interface GetComponentListTypes {
  keyWord?: string
}
export const getComponentList = async (filter: GetComponentListTypes) => {
  try {
    const response = await axiosPrivate.get('/component/getPageComponentList', {params: filter});
    const userData = response.data;
    return userData?.data || { total: 0, list: [] };
  } catch (err) {
    console.error('Login failed:', err);
  }
};
export const pageSave = async (data: any) => {
  try {
    const response = await axiosPrivate.post('/page/save', data);
    const userData = response.data;
    return userData;
  } catch (err) {
    console.error('pageSave failed:', err);
  }
};


export const UploadImage = async (media: FormData): Promise<string> => {
  try {
    const response = await axiosPrivate.post('/imageCategory/uploadMedia', media, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response && response.data && response.data.data) {
      const uploadedImage = response.data.data[0]?.imageURL;
      if (uploadedImage) {
        return uploadedImage;
      } else {
        throw new Error('Image URL not found in response');
      }
    } else {
      throw new Error('Invalid response from the server');
    }
  } catch (error) {
    console.error('UploadImage error:', error);
    throw error;
  }
};

export const deletePage = async (pageId: string) => {
  try {
    const response = await axiosPrivate.delete('/page/delete', {
      data: { pageId },
    });
    return response.data.success;
  } catch (error) {
    console.error('Error deleting page:', error);
    throw error;
  }
};


interface FilterTypes {
  keyWord?: string;
  size?: number;
}
export const fetchPageList = async (filter?: FilterTypes) => {
  try {
    const response = await axiosPrivate.get('/page/list', {
      params: filter
    });
    return response.data.data || { total: 0, list: [] };
  } catch (error) {
    console.error('Error fetching page list:', error);
    return [];
  }
};

export const EnableDisablePage = async (pageId: string) => {
  try {
    const response = await axiosPrivate.patch('/page/enableDisable', { pageId: pageId });
    return response.data.success;
  } catch (error) {
    console.error('Error deleting page:', error);
    throw error;
  }
};


export const fetchComponentList = async () => {
  try {
    const response = await axiosPrivate.get('/component/list');
    if (!response) {
      throw new Error(`Failed to fetch pages: ${response}`);
    }
    return response.data.data || { total: 0, list: [] };
  } catch (error) {
    console.error('Error fetching page list:', error);
    return [];
  }
};


interface PageCompoTypes {
  pageId: string
}
export const fetchPageComponentList = async (payload: PageCompoTypes) => {
  try {
    const response = await axiosPrivate.get('/pageV2/list', {
      params: {
        pageId: payload.pageId
      }
    });
    if (!response) {
      throw new Error(`Failed to fetch pages: ${response}`);
    }
    return response.data.data || { total: 0, list: [] };
  } catch (error) {
    console.error('Error fetching page list:', error);
    return [];
  }
};
export const fetchPageComponentList2 = async (payload: PageCompoTypes) => {
  try {
    const response = await axiosPrivate.get('/pageV2/list2', {
      params: {
        pageId: payload.pageId
      }
    });
    if (!response) {
      throw new Error(`Failed to fetch pages: ${response}`);
    }
    return response.data.data || { total: 0, list: [] };
  } catch (error) {
    console.error('Error fetching page list:', error);
    return [];
  }
};


export const addPageComponent = async (pageId: string, componentId: string) => {
  try {
    const response = await axiosPrivate.post('/pageV2/save', { pageId, componentId });
    if (!response) {
      throw new Error(`Failed to addPageComponent pages: ${response}`);
    }
    return response.data;
  } catch (error) {
    console.error('Error addPageComponent:', error);
    return [];
  }
};
export const deletePageComponent = async (_id: string) => {
  try {
    const response = await axiosPrivate.delete('/pageV2/delete', { data: { _id: _id } });
    if (!response) {
      throw new Error(`Failed to deletePageComponent pages: ${response}`);
    }
    return response.data;
  } catch (error) {
    console.error('Error deletePageComponent:', error);
    return [];
  }
};