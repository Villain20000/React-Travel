import React from "react";
import "./NeedInspirationSection.scss"; // Fixed the import statement
import Container from "react-bootstrap/Container";

function NeedInspirationSection() {
  return (
    <div className="need-inspiration-section py-5 position-relative">
      <div className="bg-shape position-absolute"></div>
      <Container>
        <div className="row">
          <div className="col-md-4 z-2">
            <h2 className="text-start text-light fw-semibold">
              Need inspiration?
            </h2>
            <p className="text-start text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis tempore soluta animi qui, consequatur expedita.
            </p>
            <div className="d-flex">
              <h5 className="text-light text-capitalize fw-semibold text-nowrap">
                Call us:
              </h5>
              <a href="tel:0900800700" className="text-light">
                0900800700
              </a>{" "}
              {/* Fixed the href attribute and phone number display */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NeedInspirationSection;
