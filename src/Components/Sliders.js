import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./css/slider.css";
import { Pagination } from "swiper";
import { MakananData } from "../data/dataMakanan";

export default function Slider() {
  return (
    <div className="slideCon">
      {MakananData.map((data) => (
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          id={data.id}
          key={data.id}
        >
          <SwiperSlide>
            <Card className="swiperCard">
              <Card.Img
                variant="top"
                src={data.img}
                alt=""
                srcset=""
                width={"20%"}
                height={"800px"}
              />
              <Card.Body>
                <Card.Title>{data.nama}</Card.Title>
                <Card.Title>Harga Rp.{data.harga}</Card.Title>
                <Button
                  variant="success"
                  onClick={() => {
                    window.location.href = `https://wa.me/${data.nomorWa}?text=Halo%2C%20saya%20tertarik%20dengan%20${data.nama}`;
                  }}
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
                  Pesan via WhatsApp
                </Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      ))}
    </div>
  );
}
