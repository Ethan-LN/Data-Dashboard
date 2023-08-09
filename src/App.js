import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { CustomerContacts } from "./pages/CustomerContacts/CustomerContacts";
import { ManageStaff } from "./pages/ManageStaff/ManageStaff";
import { InvoiceBalance } from "./pages/InvoiceBalance/InvoiceBalance";
import { PageLineChart } from "./pages/PageLineChart/PageLineChart";
import { PageBarChart } from "./pages/PageBarChart/PageBarChart";
import { PagePieChart } from "./pages/PagePieChart/PagePieChart";
import { PageAreaChart } from "./pages/PageAreaChart/PageAreaChart";
import { PageMapChart } from "./pages/PageMapChart/PageMapChart";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<ManageStaff />} />
        <Route path="/customer" element={<CustomerContacts />} />
        <Route path="/invoice" element={<InvoiceBalance />} />
        <Route path="/line" element={<PageLineChart />} />
        <Route path="/bar" element={<PageBarChart />} />
        <Route path="/pie" element={<PagePieChart />} />
        <Route path="/area" element={<PageAreaChart />} />
        <Route path="/map" element={<PageMapChart />} />
      </Routes>
    </div>
  );
}

export default App;
