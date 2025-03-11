// import axios from "axios";
import axios from "../setup/axios";

const registerNewUser = (email, username, phone, password) => {
  return axios.post("/api/v1/register", {
    email,
    username,
    phone,
    password,
  });
};

const userLogin = (valueLogin, password) => {
  return axios.post("/api/v1/login", {
    valueLogin,
    password,
  });
};

const fetchListUser = (page, limit) => {
  return axios.get(`/api/v1/user/read?page=${page}&limit=${limit}`);
};

const deleteUser = (user) => {
  return axios.delete(`/api/v1/user/delete`, {
    data: { id: user.id },
  });
};

const getListGroup = () => {
  return axios.get(`/api/v1/group/read`);
};

const createNewUser = (userData) => {
  return axios.post(`/api/v1/user/create`, {
    ...userData,
  });
};

const updateUser = (userData) => {
  return axios.put(`/api/v1/user/update`, {
    ...userData,
  });
};

const getUserAccount = () => {
  return axios.get("/api/v1/account");
};

const userLogOut = () => {
  return axios.post("/api/v1/logout");
};

const createNewRole = (roles) => {
  return axios.post("/api/v1/role/create", [...roles]);
};

export {
  registerNewUser,
  userLogin,
  fetchListUser,
  deleteUser,
  getListGroup,
  createNewUser,
  updateUser,
  getUserAccount,
  userLogOut,
  createNewRole,
};
