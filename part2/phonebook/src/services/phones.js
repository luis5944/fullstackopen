import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios(baseUrl);
};

const getById = (id) => {
  return axios.get(`${baseUrl}/${id}`);
};

const createPhone = (phone) => {
  return axios.post(baseUrl, phone);
};

const updatePhone = (id, phone) => {
  return axios.put(`${baseUrl}/${id}`, { ...phone, number: phone.number });
};

const deletePhone = (id) => {
  axios.delete(`${baseUrl}/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: getAll,
  getById: getById,
  createPhone: createPhone,
  updatePhone: updatePhone,
  deletePhone: deletePhone,
};
