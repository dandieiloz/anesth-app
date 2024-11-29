import React from "react";
import { NavLink } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import AnnouncementIcon from "@mui/icons-material/Campaign";
import ProtocolIcon from "@mui/icons-material/Article";

const BottomNavigator = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#003f88",
        zIndex: 1000,
      }}
    >
      <BottomNavigationAction
        label="PhoneBook"
        icon={<PhoneIcon style={{ color: "white" }} />}
        component={NavLink}
        to="/phonebook"
        style={{
          color: value === 0 ? "white" : "#87ceeb",
        }}
      />
      <BottomNavigationAction
        label="Announcements"
        icon={<AnnouncementIcon style={{ color: "white" }} />}
        component={NavLink}
        to="/announcements"
        style={{
          color: value === 1 ? "white" : "#87ceeb",
        }}
      />
      <BottomNavigationAction
        label="Protocols"
        icon={<ProtocolIcon style={{ color: "white" }} />}
        component={NavLink}
        to="/protocols"
        style={{
          color: value === 2 ? "white" : "#87ceeb",
        }}
      />
    </BottomNavigation>
  );
};

export default BottomNavigator;
