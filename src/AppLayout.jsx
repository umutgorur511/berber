import React, { useState, useMemo } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import { PageContext } from "./PageContext";
import "./index.css";

const { Header, Content } = Layout;

const PAGE_CONFIG = {
  home: {
    key: "home",
    label: "Ana Sayfa",
    component: HomePage,
  },
  gallery: {
    key: "gallery",
    label: "Galeri",
    component: Gallery,
  },
  about: {
    key: "about",
    label: "Hakkımızda",
    component: AboutUs,
  },
};

const AppLayout = () => {
  const [activePageKey, setActivePageKey] = useState("home");
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = useMemo(
    () =>
      Object.values(PAGE_CONFIG).map(({ key, label }) => ({
        key,
        label,
      })),
    []
  );

  const ActivePageComponent = useMemo(() => {
    const pageConfig = PAGE_CONFIG[activePageKey];
    return pageConfig?.component || HomePage;
  }, [activePageKey]);

  const handleMenuClick = ({ key }) => {
    setActivePageKey(key);
    setDrawerVisible(false);
  };

  return (
    <PageContext.Provider value={{ activePageKey, setActivePageKey }}>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            backgroundColor: "rgb(3, 7, 17)",
            display: "flex",
            alignItems: "center",
            height: 64,
            padding: "0 24px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            position: "relative",
          }}
        >
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: "white", fontSize: 22 }} />}
            onClick={() => setDrawerVisible(true)}
            style={{ marginRight: 16 }}
          />

          <div
            onClick={() => setActivePageKey("home")}
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: 600,
              userSelect: "none",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            Berber Ali Görür
          </div>

          <Drawer
            placement="left"
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
            bodyStyle={{ backgroundColor: "rgb(3, 7, 17)", padding: 0 }}
            headerStyle={{
              backgroundColor: "rgb(3, 7, 17)",
              color: "white",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Menu
              mode="vertical"
              selectedKeys={[activePageKey]}
              onClick={handleMenuClick}
              items={menuItems}
              style={{
                backgroundColor: "rgb(3, 7, 17)",
                color: "white",
                borderRight: 0,
              }}
              theme="dark"
            />
          </Drawer>
        </Header>

        <Content style={{ padding: 0 }}>
          <ActivePageComponent />
        </Content>
      </Layout>
    </PageContext.Provider>
  );
};

export default AppLayout;
