import React from "react";
import "./CityBreakSection.scss"; // Ensure the path is correct and use only normal hyphens/dashes
import Container from "react-bootstrap/Container";
import LondonCityBreaksItems from "../../Assets/LondonCityBreaksItems"; // Correct the path
import CityBreakCard from "./CityBreaksCard"; // Ensure the path is correct

function LondonCityBreaksSection() {
  return (
    <div className="city-break-section my-4 my-sm-5">
      <Container>
        <h3 className="mb-4 mb-sm-5 text-start text-uppercase fw-semibold">
          London City Breaks
        </h3>
        <div className="row g-4">
          {LondonCityBreaksItems.map((item) => (
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

export default LondonCityBreaksSection;
