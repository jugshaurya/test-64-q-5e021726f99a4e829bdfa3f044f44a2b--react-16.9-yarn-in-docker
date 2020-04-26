import React, { useState, useEffect } from "react";
import "./App.css";
import modalWrapper from "./components/modalWrapper";
import AddForm from "./components/AddForm";
import UpdateForm from "./components/UpdateForm";
import DeleteForm from "./components/DeleteForm";

// BACKEND ENDPOINT BASE URL
// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "http://3.219.31.158:4059";

const handleDelete = () => {};
const handleUpdate = () => {};
const handleAdd = async (e, setData, requestObj) => {
  e.preventDefault();
  try {
    const response = await fetch(`${API_URL}/api/leads/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestObj),
    });

    await response.json();
    fetchData(setData);
  } catch (err) {
    console.log("Something is Wrong");
    console.error(err);
  }
};

const AddFromModal = modalWrapper(AddForm);
const UpdateFromModal = modalWrapper(UpdateForm);
const DeleteFromModal = modalWrapper(DeleteForm);

// Page Endpoint:  /index
const renderDataInTable = (dataset) => {
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
          onSubmit={handleUpdate}
        >
          Update
        </UpdateFromModal>
        <DeleteFromModal
          launch_btn_text="Delete"
          launch_btn_class="delete_lead_modal_btn"
          modal_heading="Do you wish to delete this lead?"
          onSubmit={handleDelete}
        >
          Delete
        </DeleteFromModal>
      </td>
    </tr>
  ));
};
const fetchData = async (setData) => {
  console.log("df");
  const response = await fetch(
    // API: /api/leads/?location_string=India
    `${API_URL}/api/leads/?format=json&location_string=India`,
    {
      method: "GET",
    }
  );

  const data = await response.json();
  setData(data);
};

const App = () => {
  const [dataset, setData] = useState([]);

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div className="App">
      {/* 2. Add a Lead Using Modal Window */}
      <AddFromModal
        launch_btn_text="Add Lead"
        launch_btn_class="add_lead_modal_btn"
        modal_heading="Add Lead"
        onSubmit={(e, requestObj) => handleAdd(e, setData, requestObj)}
      ></AddFromModal>

      <table className="leads_table" border="1" cellPadding="10">
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
        <tbody>{renderDataInTable(dataset)}</tbody>
      </table>
    </div>
  );
};

export default App;
