import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default function Dashboard() {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    
  return (
    <Layout>
    <Header style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between', padding: '0 5%', background: colorBgContainer }}>
      <p style={{fontSize:20}}>Dashboard</p>
      <div style={{backgroundColor:'gray',width:'2.5rem',height:'2.5rem',borderRadius:50}}></div>
    </Header>
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      Dashboard
    </Content>
  </Layout>
  )
}
