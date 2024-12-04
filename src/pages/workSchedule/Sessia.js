import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Sessia = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>לוח ססיות</h2>
      <Zoom>
        <img
          src={`${process.env.PUBLIC_URL}/sessia.jpg`}
          alt="Sessia"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Zoom>
    </div>
  );
};

export default Sessia;
