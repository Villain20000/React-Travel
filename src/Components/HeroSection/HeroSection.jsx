import React from "react";
import "./HeroSection.scss";
import Carousel from "react-bootstrap/Carousel";
import GreenBtn from "../GreenBtn/GreenBtn";

function HeroSection() {
  return (
    <div className="hero-section">
      <Carousel>
        <Carousel.Item className="carousel-item1 vh-100">
          <Carousel.Caption className="h-100 d-flex flex-column justify-content-top align-items-center">
            <div className="row h-100">
              <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                <h1 className="text-capitalize text-start">
                  Find your perfect holiday
                </h1>
                <p className="text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi tempore aspernatur repellat deserunt laborum dicta
                  minima nisi ex non architecto?
                </p>
                <GreenBtn
                  btnTitle="Check our Holidays"
                  btnLink="/holidays"
                ></GreenBtn>
              </div>
              <div>
                <div className="col-lg-6 none d-none d-lg-block"></div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item2 vh-100">
          <Carousel.Caption className="h-100 d-flex flex-column justify-content-top align-items-center">
            <div className="row h-100">
              <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                <h1 className="text-capitalize text-start">
                  Do you need a City Break?{" "}
                </h1>
                <p className="text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi tempore aspernatur repellat deserunt laborum dicta
                  minima nisi ex non architecto?
                </p>
                <GreenBtn
                  btnTitle="Our City Breaks"
                  btnLink="/city-breaks"
                ></GreenBtn>
              </div>
              <div>
                <div className="col-lg-6 none d-none d-lg-block"></div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item3 vh-100">
          <Carousel.Caption className="h-100 d-flex flex-column justify-content-top align-items-center">
            <div className="row h-100">
              <div className="col-lg-6 none d-none d-lg-block"></div>
              <div className="col-lg-6 d-flex flex-column align-items-end justify-content-center">
                <h1 className="text-capitalize text-start">Travel anywhere</h1>
                <p className="text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi tempore aspernatur repellat deserunt laborum dicta
                  minima nisi ex non architecto?
                </p>
                <GreenBtn
                  btnTitle="Check all destinations"
                  btnLink="/destinations"
                ></GreenBtn>
              </div>
              <div></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default HeroSection;
