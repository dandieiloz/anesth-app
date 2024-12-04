import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const DailySchedule = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>סידור עבודה יומי</h2>
      <Zoom>
        <img
          src={`${process.env.PUBLIC_URL}/daily.jpg`}
          alt="Daily Schedule"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Zoom>
    </div>
  );
};

export default DailySchedule;
