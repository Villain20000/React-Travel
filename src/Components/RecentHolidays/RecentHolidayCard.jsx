import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; // Import Button from react-bootstrap
import "./RecentHolidayCard.scss";

function RecentHolidayCard(props) {
  return (
    <div className="col-lg-6">
      <Card className="shadow d-flex flex-sm-row h-100 overflow-hidden">
        <div className="img-div img-hover col-sm-6"></div>
        <div className="col-sm-6">
          <Card.Body className="p-4">
            <Card.Title className="text-start text-uppercase fw-bold">
              {props.itemTitle}
            </Card.Title>
            <ul className="list-unstyled">
              <li className="text-start">{props.itemDescription}</li>
              <li className="text-start">{props.itemNights}</li>
              <li className="price text-start text-green">
                <strong>{props.itemPrice}</strong>{" "}
                {/* Possible typo, was it supposed to be itemPrice? */}
              </li>
            </ul>
            <Button variant="dark">View Now</Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default RecentHolidayCard;
