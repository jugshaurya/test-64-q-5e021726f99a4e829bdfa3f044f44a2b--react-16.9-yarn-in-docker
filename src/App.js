import React, { useState, useEffect } from "react";

import UpdateForm from "./components/UpdateForm";
import DeleteForm from "./components/DeleteForm";
import AddForm from "./components/AddForm";
import modalWrapper from "./HOC/modalWrapper";

import {
  fetchData,
  handleAdd,
  handleUpdate,
  handleDelete,
} from "./utils/utils";

import "./App.css";

const AddFromModal = modalWrapper(AddForm);
const UpdateFromModal = modalWrapper(UpdateForm);
const DeleteFromModal = modalWrapper(DeleteForm);

const renderDataInTable = (dataset, setData) => {
  return dataset.map((data) => (
    <tr key={data.id}>
      <td>{`${data.first_name} ${data.last_name}`}</td>
      <td>{data.email}</td>
      <td>{data.mobile}</td>
      <td>{data.location_type}</td>
      <td>{data.location_string}</td>
      <td>
        <UpdateFromModal
          launch_btn_text="Mark Update"
          launch_btn_class="update_lead_modal_btn"
          modal_heading="Mark Communication"
          value={data.communication}
          onSubmit={(e, requestObj) =>
            handleUpdate(e, setData, requestObj, data.id)
          }
        >
          Update
        </UpdateFromModal>
        <DeleteFromModal
          launch_btn_text="Delete"
          launch_btn_class="delete_lead_modal_btn"
          modal_heading="Do you wish to delete this lead?"
          onSubmit={(e) => handleDelete(e, setData, data.id)}
        >
          Delete
        </DeleteFromModal>
      </td>
    </tr>
  ));
};

const App = () => {
  const [dataset, setData] = useState([]);
  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div className="App">
      <AddFromModal
        launch_btn_text="Add Lead"
        launch_btn_class="add_lead_modal_btn"
        modal_heading="Add Lead"
        onSubmit={(e, requestObj) => handleAdd(e, setData, requestObj)}
      ></AddFromModal>

      <table className="leads_table" border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Location Type</th>
            <th>Location String</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderDataInTable(dataset, setData)}</tbody>
      </table>
    </div>
  );
};

export default App;
