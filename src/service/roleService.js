import axios from "../setup/axios";

const createNewRole = (roles) => {
  return axios.post("/api/v1/role/create", [...roles]);
};

const fetchListRole = () => {
  return axios.get(`/api/v1/role/read`);
};

const deleteRole = (role) => {
  return axios.delete(`/api/v1/role/delete`, {
    data: { id: role.id },
  });
};

const getAllRoles = (groupId) => {
  return axios.get(`/api/v1/role/by-group/${groupId}`);
};

export { createNewRole, fetchListRole, deleteRole, getAllRoles };
