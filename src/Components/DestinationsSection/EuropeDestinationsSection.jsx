import React from "react";
import "../../Components/CityBreakSection/CityBreakSection.scss";
import Container from "react-bootstrap/Container";
import CityBreakCard from "../CityBreakSection/CityBreaksCard";
import EuropeDestinationsItems from "../../Assets/EuropeDestinationsItems";

function EuropeDestinationsSection() {
  return (
    <div className="city-break-section my-4 my-sm-5">
      <Container>
        <h3 className="text-start text-uppercase fw-semibold mb-4 mb-sm-5">
          Europe
        </h3>
        <div className="row g-4">
          {EuropeDestinationsItems.map((item) => (
            <CityBreakCard
              key={item.id}
              itemImage={item.itemImage}
              itemTitle={item.itemTitle}
              itemSubtitle={item.ItemSubTitle}
              itemNights={item.itemNights}
              itemPrice={item.itemPrice}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default EuropeDestinationsSection;
