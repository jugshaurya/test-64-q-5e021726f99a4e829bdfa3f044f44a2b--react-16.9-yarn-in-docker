// BACKEND ENDPOINT BASE URL
const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = "http://3.228.13.3:4000";

export const handleDelete = async (e, setData, id) => {
  e.preventDefault();
  await fetch(`${API_URL}/api/leads/${id}`, {
    method: "DELETE",
  });
  fetchData(setData);
};

export const handleUpdate = async (e, setData, requestObj, id) => {
  e.preventDefault();
  const response = await fetch(`${API_URL}/api/mark_lead/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestObj),
  });

  await response.json();
  fetchData(setData);
};

export const handleAdd = async (e, setData, requestObj) => {
  e.preventDefault();
  const response = await fetch(`${API_URL}/api/leads/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestObj),
  });

  await response.json();
  fetchData(setData);
};

// Page Endpoint:  /index
export const fetchData = async (setData) => {
  const response = await fetch(`${API_URL}/api/leads/?location_string=India`, {
    method: "GET",
  });
  const data = await response.json();
  setData(data);
};
