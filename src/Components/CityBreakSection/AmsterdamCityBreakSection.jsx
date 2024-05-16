import React from "react";
import AmsterdamCityBreaksItems from "../../Assets/AmsterdamCityBreaksItems";
import "./CityBreakSection.scss";
import Container from "react-bootstrap/Container";
import CityBreakCard from "./CityBreaksCard";

function AmsterdamCityBreakSection() {
  return (
    <div className="city-break-section mb-5">
      <Container>
        <h3 className="mb-4 mb-sm-5 text-center text-uppercase fw-semibold">
          Amsterdam City
        </h3>
        <div className="row g-4">
          {AmsterdamCityBreaksItems.map((item) => (
            <CityBreakCard
              key={item.id}
              itemImage={item.itemImage}
              itemTitle={item.itemTitle}
              itemSubTitle={item.itemSubTitle}
              itemNights={item.itemNights}
              itemPrice={item.itemPrice}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AmsterdamCityBreakSection;
