import React from "react";
import { Button, Grid } from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { useNavigate } from "react-router-dom";

const WorkSchedule = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {/* Button 1: סידור עבודה יומי */}
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<TodayIcon />}
            onClick={() => navigate("/work-schedule/daily")}
          >
            סידור עבודה יומי
          </Button>
        </Grid>
        {/* Button 2: לוח תורנויות */}
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            startIcon={<AssignmentIcon />}
            onClick={() => navigate("/work-schedule/shifts")}
          >
            לוח תורנויות
          </Button>
        </Grid>
        {/* Button 3: לוח ססיות */}
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            startIcon={<EventNoteIcon />}
            onClick={() => navigate("/work-schedule/sessia")}
          >
            לוח ססיות
          </Button>
        </Grid>
        {/* Button 4: לוח כונניות */}
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            color="info"
            fullWidth
            startIcon={<PermContactCalendarIcon />}
            onClick={() => navigate("/work-schedule/oncall")}
          >
            לוח כונניות
          </Button>
        </Grid>
        {/* Button 5: טכנאי הרדמה */}
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            color="warning"
            fullWidth
            startIcon={<EngineeringIcon />}
            onClick={() => navigate("/work-schedule/tech")}
          >
            טכנאי הרדמה
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default WorkSchedule;
