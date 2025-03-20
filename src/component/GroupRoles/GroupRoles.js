import React, { useEffect, useState } from "react";
import { getListGroup } from "../../service/userService";
import { fetchListRole, getAllRoles } from "../../service/roleService";

import _, { cloneDeep } from "lodash";
function GroupRoles(props) {
  const [listGroup, setListGroup] = useState([]);
  const [listRoles, setListRoles] = useState("");
  const [selectGroup, setSelectGroup] = useState("");
  const [assignRolesByGroup, setAssignRolesByGroup] = useState([]);

  useEffect(() => {
    getGroup();
    getAllRole();
  }, []);

  const getGroup = async () => {
    let res = await getListGroup();
    if (res && res.EC === 0) {
      setListGroup(res.DT);
    }
  };

  const getAllRole = async () => {
    let res = await fetchListRole();
    if (res && res.EC === 0) {
      setListRoles(res.DT);
    }
  };

  const hanleOnChangeByGroup = async (value) => {
    setSelectGroup(value);
    if (value) {
      let data = await getAllRoles(value);
      if (data && +data.EC === 0) {
        let res = builDataRolesByGroup(data.DT.Roles, listRoles);
        setAssignRolesByGroup(res);
      }
    }
  };

  const builDataRolesByGroup = (groupRoles, allRoles) => {
    let result = [];
    if (allRoles && allRoles.length > 0) {
      allRoles.map((role) => {
        let Object = {};
        Object.url = role.url;
        Object.description = role.description;
        Object.id = role.id;
        Object.isAssign = false;

        if (groupRoles && groupRoles.length > 0) {
          Object.isAssign = groupRoles.some((item) => item.url === Object.url);
        }
        result.push(Object);
      });
    }
    return result;
  };

  const hanldeOnChangeInput = (value) => {
    const _assignRolesByGroup = _.cloneDeep(assignRolesByGroup);
    let foundIndex = _assignRolesByGroup.findIndex(
      (item) => +item.id === +value
    );
    if (foundIndex > -1) {
      _assignRolesByGroup[foundIndex].isAssign =
        !_assignRolesByGroup[foundIndex].isAssign;
    }
    setAssignRolesByGroup(_assignRolesByGroup);
  };

  return (
    <div className="group-role-container">
      <div className="container">
        <div className="title mt-3">
          <h4>Group Role:</h4>
        </div>
        <div className="col-6 form-group ">
          <label>
            Select Group(<span className="red">*</span>):
          </label>
          <select
            className="form-select"
            onChange={(event) => hanleOnChangeByGroup(event.target.value)}
          >
            <option value="">Select Choose Role</option>;
            {listGroup &&
              listGroup.length > 0 &&
              listGroup.map((item, index) => {
                return (
                  <>
                    <option key={`group-${index}`} value={item.id}>
                      {item.name}
                    </option>
                  </>
                );
              })}
          </select>
        </div>

        <hr></hr>

        {assignRolesByGroup && (
          <div className="roles">
            {assignRolesByGroup &&
              assignRolesByGroup.length > 0 &&
              assignRolesByGroup.map((item, index) => {
                return (
                  <div class="form-check" key={`group-role-${index}`}>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value={item.id}
                      checked={item.isAssign}
                      id={`group-role-${index}`}
                      onChange={(event) =>
                        hanldeOnChangeInput(event.target.value)
                      }
                    />
                    <label class="form-check-label" for={`group-role-${index}`}>
                      {item.url}
                    </label>
                  </div>
                );
              })}
          </div>
        )}

        <div>
          <button className="btn btn-warning mt-3">Save</button>
        </div>
      </div>
    </div>
  );
}

export default GroupRoles;
