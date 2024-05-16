import React from "react"; // Fixed incorrect import statement
import "./NextHoliday.scss"; // Corrected path
import Container from "react-bootstrap/Container";
import NextHolidayItems from "../../Assets/NextHolidayItems"; // Corrected path
import NextHolidayCard from "../../Components/NextHoliday/NextHolidayCard"; // Corrected path

function NextHoliday() {
  // Fixed function declaration
  return (
    <div className="next-holiday-section my-4 my-sm-5">
      <Container>
        <h2 className="text-uppercase fw-semibold mb-4 mb-sm-5">
          Your next holiday
        </h2>
        <div className="row g-4">
          {NextHolidayItems.map((item) => (
            <NextHolidayCard key={item.id} itemTitle={item.itemTitle} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default NextHoliday;
