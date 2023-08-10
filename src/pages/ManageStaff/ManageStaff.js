import React, { useState } from "react";
import "./ManageStaff.css";
import Navigation from "../../components/Navigation";
import { TableDisplay } from "../../components/TableDisplay";
import DataTable from "../../tables/DataTable";

export const ManageStaff = () => {
  const [group, setGroup] = useState();
  return (
    <div className="page__staff">
      <Navigation />
      <DataTable />
    </div>
  );
};
