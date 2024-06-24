import React from "react";
import { Dropdown, Menu } from "antd";
import "./App.css";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Utility from "./Utility";
export default function MainLayout() {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Home
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          About
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Social
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Contact
        </a>
      ),
    },
  ];
  return (
    <div className="flex flex-col relative">
      <div className="absolute inset-x-0 top-0 z-10 ">
        <div className="flex  items-center gap-10 md:px-[10%] px-[5%]">
          <Dropdown
            overlay={
              <Menu className="md:block block">
                {items.map((item) => (
                  <Menu.Item key={item.key}>{item.label}</Menu.Item>
                ))}
              </Menu>
            }
            placement="bottomCenter"
          >
            <img
              src="/images/LogoMain.png"
              className="md:h-[15vh] md:w-[15vh] h-[10vh] w-[10vh] cursor-pointer"
              alt="Background Icon"
            />
          </Dropdown>
          <div className="md:flex  hidden flex-row gap-10 text-[17px] font-roboto font-medium text-[#002d64]">
            <p>Home</p>
            <p>About</p>
            <p>Social</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className="relative z-0">
        <LandingPage />
        <Utility />
        <Footer />
      </div>
    </div>
  );
}
