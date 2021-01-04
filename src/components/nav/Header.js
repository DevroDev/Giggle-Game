import React, { useState } from "react";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";
import { Drawer, Button } from "antd";
import "./NavStyle.css";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="pb-5">
      <nav className="menuBar container-fluid">
        <div className="menuCon">
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <div className="rightMenu">
            <RightMenu />
          </div>
          <Button className="barsMenu" onClick={showDrawer}>
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            title="Giggle CMS"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <LeftMenu />
            <RightMenu />
          </Drawer>
        </div>
      </nav>
    </div>
  );
};

export default Header;
