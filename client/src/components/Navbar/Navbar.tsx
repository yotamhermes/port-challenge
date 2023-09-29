import React, { useState } from "react";
import { Menu, MenuProps } from "antd";
import { DashboardOutlined, SettingOutlined } from "@ant-design/icons";
import { Link, useLocation, Outlet } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: (
      <Link to="dashboard">
        <DashboardOutlined />
      </Link>
    ),
  },
  {
    label: "Admin",
    key: "admin",
    icon: (
      <Link to="admin">
        <SettingOutlined />
      </Link>
    ),
  },
];

function NavBar() {
  const location = useLocation().pathname.replace("/", "");

  const [current, setCurrent] = useState(location);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Outlet />
    </>
  );
}

export default NavBar;
