import React from "react";
import NavBar from "../Components/NavBar";

import "../Components/css/modal.css";
import { Button } from "reactstrap";

export default function MainPage() {
  return (
    <div style={{ overflow: "hidden" }}>
      <NavBar />
      <div
        className="text"
        style={{
          position: "absolute",
          top: "180px",
          left: "50px",
          zIndex: "99",
        }}
      >
        <p style={{ fontSize: "45px" }}>
          Warung Nasi <br /> Mamah Lulu
        </p>
        <p style={{ width: "450px" }}>
          Dibuat dengan hati dan diolah dengan teknik khusus, setiap sajian
          makanan dijamin memberikan pengalaman makan yang tak terlupakan.
        </p>
        <br /> <Button Link href='/Daftar-menu' style={{backgroundColor:'gray',height:'38px'}}>Belanja Sekarang</Button>
        <img style={{position:'absolute',zIndex:'2',top:'5px',left:'700px'}} src="/img/uduk.png" alt="" srcset="" />
      </div>  
      <svg style={{marginTop:'431px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8ecae6" fill-opacity="1" d="M0,256L60,256C120,256,240,256,360,266.7C480,277,600,299,720,293.3C840,288,960,256,1080,224C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
  );
}
