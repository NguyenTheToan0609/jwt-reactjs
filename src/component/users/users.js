import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { fetchListUser, deleteUser } from "../../service/userService";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import ModalDelete from "./ModalDelete";
import ModalUser from "./ModalUser";

const Users = (props) => {
  const [listUser, setListUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setcurrentLimit] = useState(2);
  const [totalPages, setTotalPages] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const [isShowModalUser, setIsShowModalUser] = useState(false);
  useEffect(() => {
    fetchUser();
  }, [currentPage]);

  const fetchUser = async () => {
    let res = await fetchListUser(currentPage, currentLimit);
    if (res && res.data && res.data.EC === 0) {
      setTotalPages(res.data.DT.totalPages);
      setListUser(res.data.DT.users);
    }
  };

  const handlePageClick = (event) => {
    setCurrentPage(+event.selected + 1);
  };

  const handleDeleteUser = async (user) => {
    setIsShowModal(true);
    setDataModal(user);
  };

  const handleClose = () => {
    setIsShowModal(false);
    setDataModal({});
  };

  const onHideModalUser = () => {
    setIsShowModalUser(false);
  };

  const handleConfirmDelete = async () => {
    let res = await deleteUser(dataModal);
    console.log(res);
    if (res && res.data.EC === 0) {
      toast.success(res.data.EM);
      await fetchUser();
      setIsShowModal(false);
    } else {
      toast.error(res.data.EM);
    }
  };

  return (
    <>
      <div className="container">
        <div className="manage-user-container">
          <div className="user-header">
            <div className="title">
              <h3>Table User</h3>
            </div>
            <div className="actions">
              <button className="btn btn-success">Refesh</button>
              <button
                className="btn btn-primary"
                onClick={() => setIsShowModalUser(true)}
              >
                Add new user
              </button>
            </div>
          </div>
          <div className="user-body mt-3">
            <table class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Id</th>
                  <th scope="col">Email</th>
                  <th scope="col">UserName</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Group</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {listUser && listUser.length > 0 ? (
                  <>
                    {listUser.map((item, index) => {
                      return (
                        <tr key={`row-${index}`}>
                          <td>{index + 1}</td>
                          <td>{item.id}</td>
                          <td>{item.email}</td>
                          <td>{item.username}</td>
                          <td>{item.phone}</td>
                          <td>{item.Group ? item.Group.name : ""}</td>
                          <td>
                            <button className="btn btn-warning mx-3">
                              Edit
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDeleteUser(item)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <tr>
                      <td>Not found user</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
          {totalPages > 0 && (
            <div className="user-footer">
              <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={totalPages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
            </div>
          )}
        </div>
      </div>
      <ModalDelete
        isShowModal={isShowModal}
        handleClose={handleClose}
        handleConfirmDelete={handleConfirmDelete}
        dataModal={dataModal}
      />

      <ModalUser
        title={"Create new user"}
        show={isShowModalUser}
        onHide={onHideModalUser}
      />
    </>
  );
};

export default Users;
