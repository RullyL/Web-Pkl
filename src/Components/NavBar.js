import React, { useState } from "react";
import { Button, Tab, Navbar, Nav, Container } from "react-bootstrap";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./css/navbar.css";
import "./css/kontak.css";

function NavBar() {
  const [showTab, setShowTab] = useState(false);

  const toggleTab = () => setShowTab(!showTab);

  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        style={{ height: "80px" }}
      >
        <Container>
          <Navbar.Brand className="brand">
            <img src="./img/lllogo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mainNav me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Daftar-menu">Produk Kami</Nav.Link>
              <Nav.Link href="/Tentang">Tentang Kami</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={toggleTab}>
                <Button
                  className="kontak-nav"
                  style={{ fontSize: "20px" }}
                  variant="light"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="whats me-2" />
                  Kontak
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Tab.Container activeKey={showTab ? "kontak" : "Tutup"}>
        <Tab.Content>
          <Tab.Pane eventKey="kontak">
            <div className="kontak-sidebar">
              <div
                className="MaincontainerKontak"
                style={{
                  position: "fixed",
                  top: "100px",
                  right: 0,
                  bottom: 0,
                  left: "800px",
                  overflowx: "scroll",
                }}
              >
                <h1 className="contact-info">Hubungi Kami</h1>
                <br />
                <div className="contact-info">
                  <h5>Informasi Kontak</h5>
                  <p>Untuk Informasi kontak bisa hubungi dibawah ini</p>
                </div>
                <div className="contact-info">
                  <FontAwesomeIcon icon={faPhone} />
                  <a
                    target="_blank"
                    href="https://wa.me/628986081372?text=Halo%2C%20dengan%20warung%20nasi%20&20Mamah&20Lulu "
                    rel="noopener noreferrer"
                  >
                    +62 898-6081-372
                  </a>
                  <p style={{ fontSize: "12px" }}>
                    (Klik Kontak Di atas untuk memesan makanan Custom)
                  </p>
                </div>
                <div className="contact-info">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a
                    target="_blank"
                    href="mailto:WarungNasiMamahLulu@gmail.com"
                    rel="noopener noreferrer"
                  >
                    WarungNasiMamahLulu@gmail.com
                  </a>
                </div>
                <div className="contact-info">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/WgYb2ubaFzEtfvTP8"
                    rel="noopener noreferrer"
                  >
                    Jl. Cipeer, Cingcin, Kec. Soreang, Kabupaten Bandung
                  </a>
                </div>
                <div className="csImg ms-1">
                  <img
                    src="/img/kontak.png"
                    alt=""
                    style={{ width: "220px", height: "220px" }}
                  />
                </div>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
}

export default NavBar;
