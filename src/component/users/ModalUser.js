import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalUser.scss";
import {
  getListGroup,
  createNewUser,
  updateUser,
} from "../../service/userService";
import _, { groupBy } from "lodash";
import { toast } from "react-toastify";

const ModalUser = (props) => {
  const [listGroup, setListGroup] = useState([]);

  const defaultUserData = {
    email: "",
    phone: "",
    username: "",
    password: "",
    address: "",
    sex: "Male",
    group: "",
  };

  const validInputsDefault = {
    email: true,
    phone: true,
    username: true,
    password: true,
    address: true,
    sex: true,
    group: true,
  };

  const [userData, setUserData] = useState(defaultUserData);
  const [validInputs, setValidInputs] = useState(validInputsDefault);
  const { action, dataModalUser } = props;

  useEffect(() => {
    getGroup();
  }, []);

  useEffect(() => {
    if (action === "UPDATE") {
      setUserData({
        ...dataModalUser,
        group: dataModalUser.Group ? dataModalUser.Group.id : "",
      });
    }
  }, [dataModalUser]);

  useEffect(() => {
    if (action === "CREATE") {
      if (listGroup && listGroup.length > 0) {
        setUserData({ ...userData, group: listGroup[0].id });
      }
    }
  }, [action]);

  const getGroup = async () => {
    let res = await getListGroup();
    if (res && res.EC === 0) {
      setListGroup(res.DT);
      if (res.DT && res.DT.length > 0) {
        let groups = res.DT;
        setUserData({ ...userData, group: groups[0].id });
      }
    } else {
      setListGroup(res.EM);
    }
  };

  const checkValidateInputs = () => {
    setValidInputs(validInputsDefault);
    if (action === "UPDATE") return true;

    let arr = ["email", "phone", "password", "group"];
    let check = true;
    for (let i = 0; i < arr.length; i++) {
      if (!userData[arr[i]]) {
        let _validInputs = _.cloneDeep(validInputsDefault);
        _validInputs[arr[i]] = false;
        setValidInputs(_validInputs);
        toast.error(`Empty input ${arr[i]}`);
        check = false;
        break;
      }
    }
    return check;
  };

  const handleOnChangeInput = (value, name) => {
    console.log(`Input changed: ${name} = ${value}`);
    let _userData = _.cloneDeep(userData);
    _userData[name] = value;
    setUserData(_userData);
  };

  const handleConfirmUser = async () => {
    let check = checkValidateInputs();
    if (check === true) {
      let res =
        action === "CREATE"
          ? await createNewUser({ ...userData, groupId: userData["group"] })
          : await updateUser({ ...userData, groupId: userData["group"] });

      if (res && res.EC === 0) {
        toast.success(res.EM);
        props.onHide();
        setUserData({ ...defaultUserData, group: listGroup[0].id });
      }
      if (res.data && res.EC !== 0) {
        toast.error(res.EM);
        let _validInputs = _.cloneDeep(validInputsDefault);
        _validInputs[res.DT] = false;
        setValidInputs(_validInputs);
      }
    }
  };

  const handleCloseModalUser = () => {
    props.onHide();
    setUserData(defaultUserData);
    setValidInputs(validInputsDefault);
  };

  return (
    <Modal
      show={props.show}
      size="lg"
      className="modal-user"
      onHide={() => handleCloseModalUser()}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <span>
            {props.action === "CREATE" ? "Create New User" : "Edit User"}
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="content-modal-user row">
          <div className="col-12 col-sm-6 form-group">
            <label>
              Email (<span className="red">*</span>):
            </label>
            <input
              disabled={action === "CREATE" ? false : true}
              className={
                validInputs.email ? "form-control" : "form-control is-invalid"
              }
              value={userData.email}
              type="email"
              onChange={(event) =>
                handleOnChangeInput(event.target.value, "email")
              }
            />
          </div>
          <div className="col-12 col-sm-6 form-group">
            <label>
              Phone Number (<span className="red">*</span>):
            </label>
            <input
              disabled={action === "CREATE" ? false : true}
              className={
                validInputs.phone ? "form-control" : "form-control is-invalid"
              }
              type="text"
              value={userData.phone}
              onChange={(event) =>
                handleOnChangeInput(event.target.value, "phone")
              }
            />
          </div>
          <div className="col-12 col-sm-6 form-group">
            <label>User Name :</label>
            <input
              className="form-control"
              type="text"
              value={userData.username}
              onChange={(event) =>
                handleOnChangeInput(event.target.value, "username")
              }
            />
          </div>

          <div className="col-12 col-sm-6 form-group">
            {action === "CREATE" && (
              <>
                <label>
                  Password (<span className="red">*</span>):
                </label>
                <input
                  className={
                    validInputs.password
                      ? "form-control"
                      : "form-control is-invalid"
                  }
                  type="password"
                  value={userData.password}
                  onChange={(event) =>
                    handleOnChangeInput(event.target.value, "password")
                  }
                />
              </>
            )}
          </div>

          <div className="col-12 form-group">
            <label>Address:</label>
            <input
              className="form-control"
              type="text"
              value={userData.address}
              onChange={(event) =>
                handleOnChangeInput(event.target.value, "address")
              }
            />
          </div>
          <div className="col-6 form-group ">
            <label>Gender:</label>
            <select
              value={userData.sex}
              className="form-select"
              onChange={(event) =>
                handleOnChangeInput(event.target.value, "sex")
              }
            >
              <option defaultValue="Male" selected>
                Male
              </option>
              <option defaultValue="Female">Female</option>
              <option defaultValue="Other">Other</option>
            </select>
          </div>
          <div className="col-6 form-group ">
            <label>
              Group(<span className="red">*</span>):
            </label>
            <select
              value={userData.group}
              className={
                validInputs.group ? "form-select" : "form-select is-invalid"
              }
              onChange={(event) =>
                handleOnChangeInput(event.target.value, "group")
              }
            >
              {listGroup &&
                listGroup.length > 0 &&
                listGroup.map((item, index) => {
                  return (
                    <option key={`group-${index}`} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleCloseModalUser()}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleConfirmUser()}>
          {action === "CREATE" ? "Save" : "Update"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUser;
