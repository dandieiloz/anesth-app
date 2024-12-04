import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const OnCall = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>לוח כונניות</h2>
      <Zoom>
        <img
          src={`${process.env.PUBLIC_URL}/oncall.jpg`}
          alt="On Call Schedule"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Zoom>
    </div>
  );
};

export default OnCall;
