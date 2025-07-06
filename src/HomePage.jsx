import React, { useContext } from "react";
import { Button } from "antd";
import { FaArrowRight } from "react-icons/fa";
import { PageContext } from "./PageContext"; 
import "./index.css";

const HomePage = () => {
  const { setActivePageKey } = useContext(PageContext); 

  return (
    <div
      style={{
        backgroundColor: "rgb(3, 7, 17)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        padding: "0 40px",
        color: "white",
        boxSizing: "border-box",
        position: "relative", 
      }}
    >
      <div style={{ maxWidth: 500 }}>
        <h2 style={{ marginBottom: 30, fontSize: 35 }}>Tekrardan Hoşgeldin,</h2>
        <Button
          onClick={() => setActivePageKey("about")} 
          type="primary"
          size="large"
          style={{
            fontWeight: "600",
            backgroundColor: "white",
            color: "black",
            boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.8)",
            border: "none",
          }}
        >
          Hemen Randevu Al <FaArrowRight style={{ marginLeft: 8 }} />
        </Button>
      </div>
    </div>
  );
};

export default HomePage;