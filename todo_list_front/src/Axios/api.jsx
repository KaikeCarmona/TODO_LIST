// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/task'; // URL da sua API

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

export const createTask = async (task) => {
  try {
    const response = await axios.post(`${API_URL}/post`, task);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

export const updateTask = async (id, task) => {
  try {
    const response = await axios.put(`${API_URL}/update/${id}`, task);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.error : error.message);
  }
};