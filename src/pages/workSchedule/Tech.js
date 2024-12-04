import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Tech = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>טכנאי הרדמה</h2>
      <Zoom>
        <img
          src={`${process.env.PUBLIC_URL}/tech.jpg`}
          alt="Anesthesia Technician"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Zoom>
    </div>
  );
};

export default Tech;
