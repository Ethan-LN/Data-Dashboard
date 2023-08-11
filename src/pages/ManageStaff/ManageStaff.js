import React, { useState } from "react";
import "./ManageStaff.css";
import Navigation from "../../components/Navigation";
import DataTable from "../../tables/DataTable";
import { useEffect } from "react";
import axios from "axios";

export const ManageStaff = () => {
  const [staffData, setStaffData] = useState("");
  const [loading, setLoading] = useState(true);
  const backendUrl = process.env.REACT_APP_DJANGO_RESTFULAPI_MYSQL_URL

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/staff/`)
      .then((response) => {
        console.log(response);
        if (response.status !== 200) {
          throw new Error("Error in : " + response.status);
        }
        return response.data;
      })
      .then((data) => {
        setStaffData(data);
        console.log(staffData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "First Name", width: 130 },
    { field: "last_name", headerName: "Last Name", width: 130 },
    { field: "age", headerName: "Age", type: "number", width: 90 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "contact", headerName: "Contact", width: 150 },
    { field: "access_level", headerName: "Access Level", width: 130 },
  ];

  return (
    <div className="page__staff">
      <Navigation />
      <DataTable data={staffData} columns={columns} />
    </div>
  );
};
