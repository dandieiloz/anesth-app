import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

const Announcements = () => {
  const announcements = [
    "New anesthesia protocol released.",
    "Department meeting on Dec 5th at 3 PM.",
    "Submit research proposals by Dec 10th.",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Announcements
      </Typography>
      <List>
        {announcements.map((announcement, index) => (
          <ListItem key={index}>
            <ListItemText primary={announcement} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Announcements;
