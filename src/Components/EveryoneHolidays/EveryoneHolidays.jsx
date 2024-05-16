import React from "react";
import "./EveryoneHolidays.scss";
import Container from "react-bootstrap/Container";
import EveryoneHolidayItems from "../../Assets/EveryoneHolidayItems";
import EveryoneHolidaysCard from "./EveryoneHolidaysCard";

function EveryoneHolidays() {
  return (
    <div className="everyone-holidays-section my-4 my-sm-5">
      <Container>
        <h2 className="text-uppercase fw-semibold mb-4 mb-sm-4">
          Holidays for Everyone
        </h2>
        <div className="row g-4">
          {EveryoneHolidayItems.map((item) => (
            <EveryoneHolidaysCard
              key={item.id}
              itemTitle={item.itemTitle}
              itemSubtitle={item.itemSubtitle}
              itemPrice={item.itemPrice}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default EveryoneHolidays;
