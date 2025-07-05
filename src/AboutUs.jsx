import { Button, Typography, Card, Row, Col } from "antd";
import {
  WhatsAppOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  const WHATSAPP_NUMBER = "+905384719737";
  const WHATSAPP_MESSAGE = "Merhaba, randevu oluşturmak istiyorum.";
  const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.471671832628!2d28.87097531514351!3d40.97898177931479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabd361229d385%3A0x3a70692dd4ee8f14!2sBerber%20Ali%20G%C3%B6r%C3%BCr%2C%20Yakut%20Sk.%20Sinano%C4%9Flu%20Pasaj%C4%B1%20No%3A28%2F26%2C%2034140%20Bak%C4%B1rk%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1688579735845!5m2!1str!2str";
  
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const contactInfo = [
    {
      icon: <EnvironmentOutlined />,
      title: "Adres",
      content: "Yakut Sk. Sinanoğlu Pasajı No:28/26, 34140 Bakırköy/İstanbul",
    },
    {
      icon: <PhoneOutlined />,
      title: "Telefon",
      content: "+90 538 471 97 37",
    },
    {
      icon: <ClockCircleOutlined />,
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cumartesi: 09:00 - 21:00",
    },
  ];

  const styles = {
    container: {
      backgroundColor: "rgb(3, 7, 17)",
      minHeight: "100vh",
      padding: "60px 20px",
      boxSizing: "border-box",
      color: "white",
    },
    content: {
      maxWidth: 1200,
      margin: "0 auto",
    },
    whatsappButton: {
      height: 60,
      padding: "0 40px",
      fontWeight: "600",
      fontSize: 16,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderColor: "white",
      borderRadius: 12,
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
    },
    card: {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: 16,
      textAlign: "center",
      padding: "20px 10px",
      backdropFilter: "blur(10px)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    cardIcon: {
      color: "#1890ff",
      fontSize: 32,
      marginBottom: 16,
    },
    cardTitle: {
      color: "white",
      marginBottom: 8,
    },
    cardContent: {
      color: "rgba(255, 255, 255, 0.8)",
      margin: 0,
    },
    mapContainer: {
      width: "100%",
      maxWidth: 1000,
      height: 450,
      margin: "0 auto",
      borderRadius: 20,
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      border: "2px solid rgba(255, 255, 255, 0.1)",
      position: "relative",
    },
    iframe: {
      border: 0,
    },
  };

  const handleCardMouseEnter = (e) => {
    const card = e.currentTarget;
    card.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
    card.style.transform = "translateY(-4px)";
    card.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.3)";
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "none";
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <Button
            type="primary"
            size="large"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            icon={<WhatsAppOutlined />}
            style={styles.whatsappButton}
          >
            WhatsApp'tan Randevu Al
          </Button>
        </div>

        <Row gutter={[24, 24]} style={{ marginBottom: 60 }}>
          {contactInfo.map((info, index) => (
            <Col xs={24} md={8} key={index}>
              <Card
                style={styles.card}
                bodyStyle={{ padding: 0 }}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <div style={styles.cardIcon}>{info.icon}</div>
                <Title level={4} style={styles.cardTitle}>
                  {info.title}
                </Title>
                <Paragraph style={styles.cardContent}>
                  {info.content}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: "center" }}>
          <div style={styles.mapContainer}>
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={styles.iframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Berber Ali Görür Konum"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;