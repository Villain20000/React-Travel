import React from "react";
import "./Footer.scss";
import Copyright from "../../Assets/airliner.svg";

function Footer() {
  return (
    <div className="py-3">
      <p className="mb-0">
        Copyright @2024{" "}
        <img
          src={Copyright}
          className="mx-1"
          alt="copyright"
          style={{ width: "20px" }} // Applying inline style for width
        />{" "}
        Ioannis Ioannidis
      </p>
    </div>
  );
}

export default Footer;
