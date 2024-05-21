import React from "react";
import { useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Modal } from "react-bootstrap";
import Foterr from "../Components/Foterr";
import NavBar from "../Components/NavBar";
import { Food } from "../data/dataMakanan";
import "../Components/css/produk.css";

function FoodList() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedItems, setSelectedItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  function addToCart(food) {
    setSelectedItems([...selectedItems, { ...food, count: 1 }]);
    setShowCart(true);
  }

  function addPorsi(item) {
    const itemIndex = selectedItems.findIndex(
      (selectedItem) => selectedItem.nama === item.nama
    );
    const updatedItems = [...selectedItems];
    updatedItems[itemIndex].count += 1;
    setSelectedItems(updatedItems);
  }

  function removePorsi(item) {
    const itemIndex = selectedItems.findIndex(
      (selectedItem) => selectedItem.nama === item.nama
    );
    const updatedItems = [...selectedItems];
    updatedItems[itemIndex].count -= 1;
    if (updatedItems[itemIndex].count <= 0) {
      updatedItems.splice(itemIndex, 1);
    }
    setSelectedItems(updatedItems);
  }

  function clearCart() {
    setSelectedItems([]);
    setShowCart(false);
  }
  const totalHarga = selectedItems.reduce(
    (total, item) => total + item.count * item.harga,
    0
  );

  return (
    <div style={{ backgroundColor: "#f4a273" }}>
      <NavBar />
      <br />
      <div
        className="mainMenu"
        style={{ width: "90%", margin: "100px auto 0 auto" }}
      >
        <div className="menu-container">
          <h2 className="headerContenct">Daftar Makanan</h2>
          <div className="row mt-5">
            {Food.map((food) => (
              <div className="col-md-4 mb-4" key={food.nama}>
                <Card className="mt-4 mb-4">
                  <CardImg
                    className="imgProduk"
                    top
                    width="100%"
                    src={food.img}
                    alt={food.nama}
                  />
                  <CardBody>
                    <CardTitle tag="h5">{food.nama}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Rp.{food.harga}
                    </CardSubtitle>
                    <Button
                      onClick={() => {
                        addToCart(food);
                      }}
                    >
                      Tambahkan Makanan
                    </Button>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
        {showCart && (
          <div className="selected-container" style={{ marginTop: "156px" }}>
            <h3>List Makanan Anda:</h3>
            <ul>
              {selectedItems.map((item, index) => (
                <li key={index}>
                  {item.nama}
                  <br />
                  <Button
                    style={{ marginLeft: "10px" }}
                    onClick={() => addPorsi(item)}
                  >
                    +
                  </Button>
                  <span style={{ margin: "0 10px" }}>{item.count}/Porsi</span>
                  <Button onClick={() => removePorsi(item)}>-</Button>
                </li>
              ))}
            </ul>
            <h4 style={{ margin: "40px 0" }}>Total Harga : Rp. {totalHarga}</h4>
            <Button onClick={clearCart}>Hapus Semua Pesanan</Button>
            <br />
            <br />
            <Button onClick={handleShow}>Pesan Sekarang</Button>
          </div>
        )}
        <div className="modals">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Mohon Perhatikan Pesanan Anda</Modal.Title>
            </Modal.Header>
            <Modal.Body>
             Apakah Pesanan Anda Sudah Benar
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Belum
              </Button>
              <Button variant="primary" onClick={() => {
                const orderText = selectedItems
                  .map(
                    (item) =>
                      `${item.nama} (${item.count} porsi) - Rp. ${
                        item.harga * item.count
                      }`
                  )
                  .join("%0A");
                const message = `Halo, saya ingin memesan:%0A${orderText}%0A%0ATotal Harga : Rp. ${totalHarga}%0A`;
                window.open(
                  `https://wa.me/6289612021737?text=${message}`,
                  "_blank"
                );
              }}>
                Sudah Benar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <Foterr />
    </div>
  );
}

export default FoodList;
