import React, { useState } from "react";
import "./Role.scss";
import _, { cloneDeep } from "lodash";
import { v4 as uuidv4 } from "uuid";
const Role = (props) => {
  const [listChilds, setListChilds] = useState({
    child1: { url: "", description: "" },
  });

  const hanldeOnChangeInput = (name, value, key) => {
    const _listChilds = _.cloneDeep(listChilds);
    _listChilds[key][name] = value;
    setListChilds(_listChilds);
  };

  const handleOnClickAddNew = () => {
    const _listChilds = _.cloneDeep(listChilds);
    _listChilds[`child-${uuidv4()}`] = {
      url: "",
      description: "",
    };
    setListChilds(_listChilds);
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
                      className="form-control"
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
            <button className="btn btn-warning mt-3">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Role;
