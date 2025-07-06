import { Typography } from "antd";
import "./index.css";

const { Paragraph } = Typography;

const Gallery = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(3, 7, 17)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",  
        alignItems: "center",     
        textAlign: "center",       
        padding: 20,              
      }}
    >
      <Paragraph
        style={{
          color: "white",
          fontSize: 24,
          margin: 0,               
        }}
      >
        Heyecanla hazırlanıyoruz! Çok yakında sizlerle.
      </Paragraph>
    </div>
  );
};

export default Gallery;