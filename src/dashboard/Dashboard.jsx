import { useEffect, useState } from "react";
import { Layout, theme } from "antd";
import AnalysCompont from "../component/dashboard/AnalysCompont";
import BarChart from "../component/dashboard/BarChart";
import axios from "axios";
import PieChart from "../component/dashboard/PieChart";

const { Header, Content } = Layout;

export default function Dashboard() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [orders, setOrders] = useState();
  const [downloads, setDownloads] = useState();
  const [customer, setCustomer] = useState();
  const [seller, setSeller] = useState();
  const [revenue, setRevenue] = useState({});
  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "https://ewamallbe.onrender.com/api/Dashboard/GetAllOrder"
      );
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  const fetchSeller = async () => {
    try {
      const response = await axios.get(
        "https://ewamallbe.onrender.com/api/DashBoard/GetAllSeller"
      );
      setSeller(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  const fetchCustomer = async () => {
    try {
      const response = await axios.get(
        "https://ewamallbe.onrender.com/api/DashBoard/GetAllCustomer"
      );
      setCustomer(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  const fetchDownloads = async () => {
    try {
      const response = await axios.get(
        "https://ewamallbe.onrender.com/api/DashBoard/GetAllDownloader"
      );
      setDownloads(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  const fetchRevenue = async () => {
    try {
      const response = await axios.get(
        "https://ewamallbe.onrender.com/api/DashBoard/GetAllRevenue"
      );
      setRevenue(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  const totalRevenue = Object.values(revenue).reduce(
    (acc, revenue) => acc + revenue,
    0
  );
  const formattedNumber = totalRevenue.toLocaleString("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
  });
  const pieChart = {
    totalSeller: seller?.total,
    totalCustomer: customer?.total,
  };
  useEffect(() => {
    fetchOrders();
    fetchDownloads();
    fetchCustomer();
    fetchRevenue();
    fetchSeller();
  }, []);
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5%",
          background: colorBgContainer,
        }}
      >
        <p style={{ fontSize: 20 }}>Dashboard</p>
        <div
          style={{
            backgroundColor: "gray",
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: 50,
          }}
        ></div>
      </Header>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          overflowY: "scroll",
        }}
      >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 h-32  grid grid-cols-12 gap-4">
            <AnalysCompont
              title="Total Revenue"
              nameIcon="money"
              data={formattedNumber}
            />

            <AnalysCompont
              title="Order"
              nameIcon="sales"
              data={orders?.total}
            />

            <AnalysCompont
              title="Customer"
              nameIcon="customer"
              data={customer?.total}
            />

            <AnalysCompont
              title="Downloads"
              nameIcon="downloads"
              data={downloads?.total}
            />
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-4">
            <div className="col-span-7 ">
              <BarChart dataChart={revenue} />
            </div>
            <div className="col-span-5 ">
              <PieChart dataChart={pieChart} />
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
