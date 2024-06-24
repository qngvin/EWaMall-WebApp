import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import { HiMiniUsers } from "react-icons/hi2";
import { BiSolidDashboard } from "react-icons/bi";
const { Header, Sider, Content } = Layout;
import { FaStore } from "react-icons/fa";
const DashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const menuItems = [
    {
      key: "1",
      icon: <BiSolidDashboard />,
      label: "Dashboard",
      to: "/manager",
    },
    {
      key: "2",
      icon: <FaStore />,
      label: "Seller",
      to: "/manager/seller",
    },
    {
      key: "3",
      icon: <HiMiniUsers />,
      label: "Customer",
      to: "/manager/customer",
    },
    {
      key: "4",
      icon: <HiMiniUsers />,
      label: "Product",
      to: "/manager/product",
    },
    {
      key: "5",
      icon: <HiMiniUsers />,
      label: "Order",
      to: "/manager/order",
    },
  ];
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div style={{ padding: "10% 5%" }}>
          <p
            onClick={() => setCollapsed(!collapsed)}
            style={{ color: "white", textAlign: "center" }}
          >
            EWaMall
          </p>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {menuItems.map(item => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.to}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Outlet />
    </Layout>
  );
};

export default DashboardLayout;
