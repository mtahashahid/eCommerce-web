import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Input, Space } from "antd";
import { ShoppingCartOutlined, HomeOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { Search } = Input;
const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i class="fas fa-shopping-cart"></i>
          <span>Shopping</span>
        </div>
        <div>
          <Search
            placeholder="input search text"
            // onSearch={onSearch}
            enterButton
            className="search-box"
          />
        </div>

        <Header>
          <Menu mode="horizontal" className="header-menu">
            <Menu.Item icon="">
              <Link to="/" />
              <HomeOutlined
                style={{ fontSize: "26px", color: "#08c", marginRight: "6px" }}
              />
              Home
            </Menu.Item>
            <Menu.Item>
              <Link to="/Login" />
              Login
            </Menu.Item>
            <Menu.Item>
              <ShoppingCartOutlined
                style={{ fontSize: "26px", color: "#08c" }}
              />
            </Menu.Item>
          </Menu>
        </Header>
      </div>
    </div>
  );
};

export default Navbar;
