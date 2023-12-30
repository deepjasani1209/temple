import React from "react";
import Slider from "react-slick";
// import "./style.css";
import Imgsilder from "./../checkoutform/images/silder_1.png";
import Surat from "./../checkoutform/images/surat.png";
import Rajkot from "./../checkoutform/images/rajkot.png";
import Kutch from "./../checkoutform/images/kutch.png";
import Somnath from "./../checkoutform/images/somanat.png";

import "./silderstyle.css";

// import Menu from "../menubar/MenuApi";
// import { baseUrl } from "./config";

function Sildertemple() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className="main-silder-div">
        <Slider {...settings}>
          <div className="silder-img-div d-flex justify-content-center">
            <img src={Imgsilder} className="slide_card" />
            <label className="img-label">Junagadh</label>
          </div>
          <div className="silder-img-div d-flex justify-content-center">
            <img src={Surat} className="slide_card" />
            <label className="img-label">Surat</label>
          </div>
          <div className="silder-img-div d-flex justify-content-center">
            <img src={Rajkot} className="slide_card" />
            <label className="img-label">Rajkot</label>
          </div>
          <div className="silder-img-div d-flex justify-content-center">
            <img src={Kutch} className="slide_card" />
            <label className="img-label">Kutch</label>
          </div>
          <div className="silder-img-div d-flex justify-content-center">
            <img src={Somnath} className="slide_card" />
            <label className="img-label">Somnath</label>
          </div>
          {/* <div className="silder-img-div d-flex justify-content-center">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.3umq9Zs6TbTMmNb4cbG3eAHaE8&pid=Api&P=0&h=180"
              className="slide_card"
            />
          </div>
          <div className="silder-img-div d-flex justify-content-center">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.osI1PzYc7ITwGZ2Ga1pllgHaFW&pid=Api&P=0&h=180"
              className="slide_card"
            />
          </div>
          <div className="silder-img-div d-flex justify-content-center">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.hycAnBA59LzLEo1MfEsrtwHaE8&pid=Api&P=0&h=180"
              className="slide_card"
            />
          </div>
          <div className="silder-img-div d-flex justify-content-center">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.rvDBZTaFvEaOUnW6UjPdgQHaEu&pid=Api&P=0&h=180"
              className="slide_card"
            />
          </div> */}
        </Slider>
      </div>
    </>
  );
}

export default Sildertemple;
