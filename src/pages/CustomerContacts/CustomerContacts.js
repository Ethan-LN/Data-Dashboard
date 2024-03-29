import React from "react";
import "./CustomerContacts.css";
import Navigation from "../../components/Navigation";
import DataTable from "../../tables/DataTable";
import { useState, useEffect } from "react";
import axios from "axios";

export const CustomerContacts = () => {
  const [customerData, setCustomerData] = useState("");
  const [loading, setLoading] = useState(true);
  const backendUrl = process.env.REACT_APP_DJANGO_RESTFULAPI_MONGODB_URL

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/customers/`)
      .then((response) => {
        console.log(response);
        if (response.status !== 200) {
          throw new Error("Error in : " + response.status);
        }
        return response.data;
      })
      .then((data) => {
        const parsed_data = JSON.parse(data.customers_data);
        setCustomerData(Object.values(parsed_data[0]).slice(0, -1));
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
    { field: "address", headerName: "Address", width: 250 },
    { field: "zip_code", headerName: "Zip Code", width: 120 },
  ];

  return (
    <div className="page__customer">
      <Navigation />
      <DataTable data={customerData} columns={columns} />
    </div>
  );
};
