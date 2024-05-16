import React from "react";
import Card from "react-bootstrap/Card";
import "./LastHolidayCard.scss";

function LastHolidayCard(props) {
  return (
    <div className="col-lg-4">
      <Card className="shadow h-100 pverflow-hidden">
        <Card.Img className="img-hover" variant="top" src={props.itemImage} />
        <Card.Body className="P-4">
          <Card.Title className="text-start text-uppercase fw-bold">
            {props.itemTitle}
          </Card.Title>
          <Card.Text className="text-start">{props.itemDescription}</Card.Text>
          <a href="/" className="text-green text-capitalize fw-bold">
            Book now
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}
export default LastHolidayCard;
