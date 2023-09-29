import React, { useState } from "react";
import { Menu, MenuProps } from "antd";
import { DashboardOutlined, SettingOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: <DashboardOutlined />,
  },
  {
    label: "Admin",
    key: "admin",
    icon: <SettingOutlined />,
  },
];

function NavBar() {
  const [current, setCurrent] = useState("dashboard");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}

export default NavBar;
