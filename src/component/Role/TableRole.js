import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { deleteRole, fetchListRole } from "../../service/roleService";
import { toast } from "react-toastify";

const TableRole = forwardRef((props, ref) => {
  const [listRoles, setListRoles] = useState("");

  useEffect(() => {
    getAllRole();
  }, []);

  const getAllRole = async () => {
    let res = await fetchListRole();
    if (res && res.EC === 0) {
      setListRoles(res.DT);
    }
  };

  const handleDeleteUser = async (role) => {
    let res = await deleteRole(role);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      await getAllRole();
    }
  };

  useImperativeHandle(ref, () => ({
    fetchListRoleAgain() {
      getAllRole();
    },
  }));

  return (
    <>
      <div className="container">
        <div className="manage-user-container">
          <div className="user-header">
            <div className="title">
              <h3>Manage Roles</h3>
            </div>
          </div>
          <div className="user-body mt-3">
            <table class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">URL</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {listRoles && listRoles.length > 0 ? (
                  <>
                    {listRoles.map((item, index) => {
                      return (
                        <tr key={`row-${index}`}>
                          <td>{item.id}</td>
                          <td>{item.url}</td>
                          <td>{item.description}</td>
                          <td>
                            <span
                              title="Delete"
                              className="delete"
                              onClick={() => handleDeleteUser(item)}
                            >
                              <i class="fa fa-trash"></i>
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <tr>
                      <td colSpan={4}>Not found user</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
});

export default TableRole;
