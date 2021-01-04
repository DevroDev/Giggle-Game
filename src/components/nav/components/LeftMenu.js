import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Grid } from "antd";

import {
  AppstoreOutlined,
  BankOutlined,
  UnorderedListOutlined,
  ContactsOutlined,
  ReadOutlined
} from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
const { useBreakpoint } = Grid;
const { Item } = Menu;

const LeftMenu = () => {
  const [current, setCurrent] = useState("home");
  let { cart } = useSelector((state) => ({ ...state }));
  const { md } = useBreakpoint();

  const handleClick = (e) => {
    //console.log(e.key)
    setCurrent(e.key);
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode={md ? "horizontal" : "inline"}>
      <Item key="home" icon={<BankOutlined />}>
        <Link to="/">Home</Link>
      </Item>
      <Item key="news" icon={<AppstoreOutlined />}>
        <Link to="/games">Games</Link>
      </Item>
      <Item key="about" icon={<UnorderedListOutlined />}>
        <Link to="/categories">Category</Link>
      </Item>
      <Item key="commission" icon={<ReadOutlined />}>
        <Link to="/blog">Blog</Link>
      </Item>
      <Item key="contact" icon={<ContactsOutlined />}>
        <Link to="/contact">Contact</Link>
      </Item>
    </Menu>
  );
};

export default LeftMenu;
