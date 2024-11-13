import { Table } from "antd";
import "./App.css";
import GeolocationExample from "./Location";
import TimeZoneInfo from "./Timezone";
import GetCurrentAddress from "./Time";

const columns = [
  {
    title: "Price",
    dataIndex: "Price",
    key: "Price",
  },
  {
    title: "Monthly",
    dataIndex: "Monthly",
    key: "Monthly",
  },
  {
    title: "Annual",
    dataIndex: "Annual",
    key: "Annual",
  },
];
const dataSource = [
  {
    key: "1",
    Price: 30,
    Monthly: 30 * 30,
    Annual: 30 * 30 * 12,
  },
];

const App = () => {
  return (
    <>
      <div>
        <GetCurrentAddress />
        <TimeZoneInfo />
      </div>
    </>
  );
};

export default App;
