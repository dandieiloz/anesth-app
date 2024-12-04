import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const WorkShifts = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>לוח תורנויות</h2>
      <Zoom>
        <img
          src={`${process.env.PUBLIC_URL}/workSchedule.jpg`}
          alt="Work Shifts"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Zoom>
    </div>
  );
};

export default WorkShifts;