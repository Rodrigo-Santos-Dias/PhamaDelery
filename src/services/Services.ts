import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.PharmaDelivery.com/', 
});

type Data = Record<string, any>;
type Header = Record<string, any>;


export const registerUser = async (
  url: string,
  data: Data,
  setData: (data: Data) => void
) => {
  try {
    const response = await api.post(url, data);
    setData(response.data);
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const login = async (
  url: string,
  data: Data,
  setData: (data: Data) => void
) => {
  try {
    const response = await api.post(url, data);
    setData(response.data);
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};


export const find = async (
  url: string,
  setData: (data: Data) => void,
  header: Header = {}
) => {
  try {
    const response = await api.get(url, { headers: header });
    setData(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


export const create = async (
  url: string,
  data: Data,
  setData: (data: Data) => void,
  header: Header = {}
) => {
  try {
    const response = await api.post(url, data, { headers: header });
    setData(response.data);
  } catch (error) {
    console.error('Error creating data:', error);
    throw error;
  }
};


export const update = async (
  url: string,
  data: Data,
  setData: (data: Data) => void,
  header: Header = {}
) => {
  try {
    const response = await api.put(url, data, { headers: header });
    setData(response.data);
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};


export const deleteData = async (
  url: string,
  header: Header = {}
) => {
  try {
    await api.delete(url, { headers: header });
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};