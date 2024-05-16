import React from "react";
import "./GreenBtn.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function GreenBtn(props) {
  return (
    <div>
      <Button id="green-btn">
        <Link
          to={props.btnLink}
          className="text-decoration-none text-light text-capitalize"
        >
          {props.btnTitle}
        </Link>
      </Button>
    </div>
  );
}

export default GreenBtn;
