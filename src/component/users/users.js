import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
const Users = (props) => {
  let history = useHistory();

  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (!session) {
      history.push("/login");
    }
  }, []);
  return (
    <div className="user-container">
      <div>User Compoment</div>
    </div>
  );
};

export default Users;
