import axios from "axios";

const registerNewUser = (email, username, phone, password) => {
  return axios.post("http://localhost:8080/api/v1/register", {
    email,
    username,
    phone,
    password,
  });
};

const userLogin = (valueLogin, password) => {
  return axios.post("http://localhost:8080/api/v1/login", {
    valueLogin,
    password,
  });
};

const fetchListUser = (page, limit) => {
  return axios.get(
    `http://localhost:8080/api/v1/user/read?page=${page}&limit=${limit}`
  );
};

const deleteUser = (user) => {
  return axios.delete(`http://localhost:8080/api/v1/user/delete`, {
    data: { id: user.id },
  });
};

const getListGroup = () => {
  return axios.get(`http://localhost:8080/api/v1/group/read`);
};

const createNewUser = (userData) => {
  return axios.post(`http://localhost:8080/api/v1/user/create`, {
    ...userData,
  });
};

const updateUser = (userData) => {
  return axios.put(`http://localhost:8080/api/v1/user/update`, {
    ...userData,
  });
};

export {
  registerNewUser,
  userLogin,
  fetchListUser,
  deleteUser,
  getListGroup,
  createNewUser,
  updateUser,
};
