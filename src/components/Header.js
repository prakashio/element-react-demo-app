import React from "react";
import { Layout, Menu } from "element-react";

function Header(props, { store }) {
  return (
    <Layout.Col span="24">
      <div className="line" />
      <Menu defaultActive="1" className="el-menu-demo" mode="horizontal">
        <Menu.Item index="1">Processing Center</Menu.Item>
        <Menu.SubMenu index="2" title="Workspace">
          <Menu.Item index="2-1">Option 1</Menu.Item>
          <Menu.Item index="2-2">Option 2</Menu.Item>
          <Menu.Item index="2-3">Option 3</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item index="3">Orders</Menu.Item>
      </Menu>
    </Layout.Col>
  );
}

export default Header;
