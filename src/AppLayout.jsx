import React, { useState, useMemo } from "react";
import { Layout, Menu } from "antd";
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
          <div
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: 600,
              userSelect: "none",
              position: "absolute",
              left: 24,
              top: "50%",
              transform: "translateY(-50%)",
              whiteSpace: "nowrap",
            }}
          >
            Berber Ali Görür
          </div>

          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[activePageKey]}
            onClick={handleMenuClick}
            style={{
              margin: "0 auto",
              backgroundColor: "transparent",
              border: "none",
              fontSize: 16,
              minWidth: 300,
              justifyContent: "center",
            }}
            items={menuItems}
          />
        </Header>

        <Content style={{ padding: 0 }}>
          <ActivePageComponent />
        </Content>
      </Layout>
    </PageContext.Provider>
  );
};

export default AppLayout;
