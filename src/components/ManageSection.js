import "../styles/ManageSection.css";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import StackedLineChartOutlinedIcon from "@mui/icons-material/StackedLineChartOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import LegendToggleOutlinedIcon from "@mui/icons-material/LegendToggleOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from "react-router-dom";

export const ManageSection = () => {
  return (
    <div className="section">
      <div className="data__nav">Data </div>
      <div className="btns__group">
        <Link to="/staff">
          <div className="icons__section">
            <GroupOutlinedIcon className="icons"/>
            <button>Manage Staff</button>
          </div>
        </Link>
        <Link to="/customer">
          <PermContactCalendarOutlinedIcon className="icons"/>
          <button>CustomerContact</button>
        </Link>
        <Link to="/invoice">
          <LocalAtmOutlinedIcon className="icons"/>
          <button>Invoice Balance</button>
        </Link>
      </div>

      <div className="charts__nav">Charts </div>
      <div className="btns__group">
        <Link to="/line">
          <StackedLineChartOutlinedIcon className="icons"/>
          <button>Line Chart</button>
        </Link>
        <Link to="/bar">
          <LeaderboardOutlinedIcon className="icons"/>
          <button>Bar Chart</button>
        </Link>
        <Link to="/pie">
          <DonutSmallOutlinedIcon className="icons"/>
          <button>Pie Chart</button>
        </Link>
        <Link to="/area">
          <LegendToggleOutlinedIcon className="icons"/>
          <button>Area Chart</button>
        </Link>
        <Link to="/map">
          <MapOutlinedIcon className="icons"/>
          <button>Map Chart</button>
        </Link>
      </div>
      <Link to="/">
        <HomeOutlinedIcon className="icons" />
        <button>Dashboard Home</button>
      </Link>
    </div>
  );
};
