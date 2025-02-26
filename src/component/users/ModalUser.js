import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalUser.scss";
import { getListGroup } from "../../service/userService";
import { escapeRegExp } from "lodash";

const ModalUser = (props) => {
  const [listGroup, setListGroup] = useState([]);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [group, setGroup] = useState("");

  useEffect(() => {
    getGroup();
  }, []);

  const getGroup = async () => {
    let res = await getListGroup();
    if (res && res.data.EC === 0) {
      setListGroup(res.data.DT);
    } else {
      setListGroup(res.data.EM);
    }
  };

  return (
    <Modal show={true} size="lg" className="modal-user">
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="content-modal-user row">
          <div className="col-12 col-sm-6 form-group">
            <label>
              Email (<span className="red">*</span>):
            </label>
            <input className="form-control" type="email" />
          </div>
          <div className="col-12 col-sm-6 form-group">
            <label>
              Phone Number (<span className="red">*</span>):
            </label>
            <input className="form-control" type="text" />
          </div>
          <div className="col-12 col-sm-6 form-group">
            <label>User Name :</label>
            <input className="form-control" type="password" />
          </div>
          <div className="col-12 col-sm-6 form-group">
            <label>
              Password (<span className="red">*</span>):
            </label>
            <input className="form-control" type="password" />
          </div>
          <div className="col-12 form-group">
            <label>Address:</label>
            <input className="form-control" type="password" />
          </div>
          <div className="col-6 form-group ">
            <label>Gender:</label>
            <select class="form-select ">
              <option defaultValue="Male" selected>
                Male
              </option>
              <option valdefaultValueue="Female">Female</option>
              <option defaultValue="Other">Other</option>
            </select>
          </div>
          <div className="col-6 form-group ">
            <label>Group:</label>
            <select class="form-select ">
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
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUser;
