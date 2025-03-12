import React, { useState, useRef } from "react";
import "./Role.scss";
import _, { cloneDeep } from "lodash";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { createNewRole } from "../../service/roleService";
import TableRole from "./TableRole";

const Role = (props) => {
  const dataChildDefault = {
    url: " ",
    description: "",
    isValidUrl: true,
  };

  const childRef = useRef();

  const [listChilds, setListChilds] = useState({
    child1: dataChildDefault,
  });

  const hanldeOnChangeInput = (name, value, key) => {
    const _listChilds = _.cloneDeep(listChilds);
    _listChilds[key][name] = value;
    if (value && name === "url") {
      _listChilds[key]["isValidUrl"] = true;
    }
    setListChilds(_listChilds);
  };

  const handleOnClickAddNew = () => {
    const _listChilds = _.cloneDeep(listChilds);
    _listChilds[`child-${uuidv4()}`] = dataChildDefault;
    setListChilds(_listChilds);
  };

  const builDataToPersist = () => {
    let _listChilds = _.cloneDeep(listChilds);
    let result = [];
    {
      Object.entries(_listChilds).map(([key, child], index) => {
        result.push({
          url: child.url,
          description: child.description,
        });
      });
      return result;
    }
  };

  const handleSave = async () => {
    let isValidObj = Object.entries(listChilds).find(([key, child]) => {
      return !child.url.trim();
    });
    if (!isValidObj) {
      let data = builDataToPersist();
      let res = await createNewRole(data);
      if (res && res.EC === 0) {
        toast.success(res.EM);
        childRef.current.fetchListRoleAgain();
      }
    } else {
      toast.error("Input URL must not bt empty ... ");
      let _listChilds = _.cloneDeep(listChilds);
      const key = isValidObj[0];
      _listChilds[key]["isValidUrl"] = false;
      setListChilds(_listChilds);
    }
    console.log("isValidObj", isValidObj);
  };

  const handleOnClickDelete = (key) => {
    const _listChilds = _.cloneDeep(listChilds);
    delete _listChilds[key];
    setListChilds(_listChilds);
  };

  return (
    <div className="role-container">
      <div className="container">
        <div className="mt-3">
          <div className="title-role "> Add a new role</div>
          <div className="role-parent">
            {Object.entries(listChilds).map(([key, child], index) => {
              return (
                <div className="row role-child" key={`childs-${key}`}>
                  <div className={`form-group col-5 mt-3 ${key}`}>
                    <label>URL:</label>
                    <input
                      className={
                        child.isValidUrl
                          ? "form-control "
                          : "form-control is-invalid"
                      }
                      type="text"
                      value={child.url}
                      onChange={(event) =>
                        hanldeOnChangeInput("url", event.target.value, key)
                      }
                    />
                  </div>
                  <div className="form-group col-5 mt-3">
                    <label>Description:</label>
                    <input
                      className="form-control"
                      type="text"
                      value={child.description}
                      onChange={(event) =>
                        hanldeOnChangeInput(
                          "description",
                          event.target.value,
                          key
                        )
                      }
                    />
                  </div>
                  <div className="col-2 actions">
                    <i
                      class="fa fa-plus-circle add"
                      onClick={() => handleOnClickAddNew()}
                    ></i>
                    {index >= 1 && (
                      <i
                        class="fa fa-trash delete"
                        onClick={() => handleOnClickDelete(key)}
                      ></i>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <button
              className="btn btn-warning mt-3"
              onClick={() => handleSave()}
            >
              Save
            </button>
          </div>
        </div>
        <div className="mt-3">
          <TableRole ref={childRef} />
        </div>
      </div>
    </div>
  );
};

export default Role;
