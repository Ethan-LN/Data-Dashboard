import "../styles/Dashboard.css";
import { AreaGraph } from "../charts/AreaGraph";
import { LineGraph } from "../charts/LineGraph";
import { BarGraph } from "../charts/BarGraph";
import { PieGraph } from "../charts/PieGraph";
import { ScatterGraph } from "../charts/ScatterGraph";
import { RadarGraph } from "../charts/RadarGraph";
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';

const Dashboard = () => {
  return (
      <div className="dashboard__container">
        <div className="dashboard">
          <div className="parent">
            <div className="div1"> <AttachMoneyOutlinedIcon className="icons__account"/> REVENUE<p>$323,290.00</p></div>
            <div className="div2"> <PaidOutlinedIcon className="icons__account"/>COST <p>$101,280.00</p></div>
            <div className="div3"> <PriceCheckOutlinedIcon className="icons__account"/>PROFIT<p>$222,010.00</p></div>
            <div className="div4"> <RequestQuoteOutlinedIcon className="icons__account"/>LOSS<p>$23,219.00</p></div>
            <div className="div5"> <LineGraph /></div>
            <div className="div6"> <BarGraph /></div>
            <div className="div7"> <PieGraph /> </div>
            <div className="div8"> <AreaGraph /> </div>
            <div className="div9"> <RadarGraph /></div>
            <div className="div10"> <ScatterGraph /></div>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
