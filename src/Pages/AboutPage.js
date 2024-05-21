import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Components/css/about.css";
import NavBar from "../Components/NavBar";
import Foterr from "../Components/Foterr";

function AboutPage() {
  return (
    <div className="mainCon">
      <NavBar />
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <br />
            <h2>Tentang Kami</h2>
            <div className="profile-wrapper">
              <img
                src={"/img/avatar.png"}
                alt="Profile"
                className="profile-pic mt-5"
              />
            </div>
            <br />
            <p className="mb-4 tentang">
              Selamat datang di Sajian Sedap Warung Nasi Mamah Lulu, tempat Anda dapat menemukan
             makanan berkualitas dengan harga yang terjangkau. Dengan pengalaman
              lebih dari 15 tahun di industri ini, kami telah membangun reputasi
              yang baik dalam memberikan layanan terbaik dan produk berkualitas
              kepada pelanggan kami. Kami percaya bahwa bisnis yang sukses
              dibangun dengan memberikan pelayanan yang ramah, pengiriman yang
              tepat waktu, dan harga yang terjangkau. Kami selalu berusaha untuk
              memberikan produk terbaik dan layanan yang memuaskan bagi
              pelanggan kami.
            </p>
            <h5 style={{ textAlign: "center",marginTop:'100px' }}>
              Disini kami juga menyediakan pesanan untuk..
            </h5>
            <div className="pemesanan d-flex">
              <div className="cathering">
                <p>Cathering</p>
                <img src="/img/catering.png" alt="" style={{cursor:'pointer'}}  onClick={() => {
                    window.location.href = `https://wa.me/628986081372?text=Halo%2C%20saya%20tertarik%20dengan%20 Jasa Catering nya`;
                  }} />
              </div>
              <div className="DO">
                <p>Delivery Order</p>
                <img src="/img/delivery.png" alt="" />
              </div>
            </div>
            <div
              className="layanan "
              style={{ textAlign: "center", marginTop: "80px" }}
            >
              <div className="layCat">
                <h3 className="mt-4">Cathering</h3>
                <p style={{textAlign:'left'}}>
                  Nikmati hidangan lezat dan sehat untuk acara kantor, ulang
                  tahun, atau pesta keluarga dengan layanan catering kami yang
                  profesional dan terjangkau.
                </p>
                <img src="/img/pesCat.png" alt="" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position:'absolute',top:'335px',left:'0px',opacity:'.3'}}>
                  <path
                    fill="#808080"
                    fill-opacity="1"
                    d="M0,192L80,181.3C160,171,320,149,480,122.7C640,96,800,64,960,48C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="layDo mt-5">
                <h3 className="mt-4">Delivery Order</h3>
                <p style={{textAlign:'left'}}>
                  Nikmati pilihan menu yang lezat dan berkualitas dari restoran
                  terbaik kota dengan layanan delivery order kami, yang andal,
                  cepat, dan praktis.
                </p>
                <img src="/img/pesD.png" alt="" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position:'absolute',top:'337px',left:'0px',opacity:'.3'}}>
                  <path
                    fill="#808080"
                    fill-opacity="1"
                    d="M0,192L80,181.3C160,171,320,149,480,122.7C640,96,800,64,960,48C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <Foterr />
    </div>
  );
}
export default AboutPage;
