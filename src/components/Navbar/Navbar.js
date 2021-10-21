import React from "react";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;
const Navbar = () => {
  return (
    <div>
      <Header theme="light">
        <Menu theme="dark" mode="horizontal" style={{ float: "right" }}>
          <Menu.Item icon="">
              <Link to="/"/>
              Home</Menu.Item>
          <Menu.Item>
            <Link to="/ProductDetails" />
            Product Details
          </Menu.Item>
          <Menu.Item>Home</Menu.Item>
        </Menu>
      </Header>
    </div>
  );
};

export default Navbar;
