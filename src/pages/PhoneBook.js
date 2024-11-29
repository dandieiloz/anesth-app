import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
  TextField,
} from "@mui/material";
import StethoscopeIcon from "@mui/icons-material/MedicalServices";
import NurseIcon from "@mui/icons-material/FaceRetouchingNatural";
import TrainIcon from "@mui/icons-material/Train";

const PhoneBook = () => {
  const contacts = [
    { name: "Dr. Alice Smith", phone: "123-456-7890", department: "Orthopedics", role: "Dr." },
    { name: "Bob Johnson", phone: "987-654-3210", department: "Cardiac", role: "Nurse" },
    { name: "Carol Williams", phone: "555-123-4567", department: "General", role: "Sanitar" },
    { name: "David Brown", phone: "444-555-6666", department: "Orthopedics", role: "Dr." },
    { name: "Emily Clark", phone: "111-222-3333", department: "Cardiac", role: "Nurse" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Map role to icons
  const roleIcons = {
    "Dr.": <StethoscopeIcon style={{ color: "#003f88", marginRight: "8px" }} />,
    Nurse: <NurseIcon style={{ color: "#87ceeb", marginRight: "8px" }} />,
    Sanitar: <TrainIcon style={{ color: "#5081c1", marginRight: "8px" }} />,
  };

  // Group contacts by department
  const groupedContacts = contacts.reduce((acc, contact) => {
    if (contact.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      if (!acc[contact.department]) {
        acc[contact.department] = [];
      }
      acc[contact.department].push(contact);
    }
    return acc;
  }, {});

  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f4ff", minHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom style={{ color: "#003f88" }}>
        Phone Book
      </Typography>

      {/* Search Bar */}
      <TextField
        label="Search Contacts"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
        }}
      />

      {/* Nested List by Department */}
      <List>
        {Object.keys(groupedContacts).map((department) => (
          <div key={department}>
            <ListSubheader style={{ backgroundColor: "#003f88", color: "#ffffff" }}>
              {department}
            </ListSubheader>
            {groupedContacts[department].map((contact) => (
              <ListItem
                key={contact.name}
                style={{
                  borderBottom: "1px solid #ddd",
                  backgroundColor: "#ffffff",
                  marginBottom: "5px",
                  borderRadius: "8px",
                }}
              >
                {roleIcons[contact.role]}
                <ListItemText
                  primary={contact.name}
                  secondary={
                    <a
                      href={`tel:${contact.phone}`}
                      style={{ textDecoration: "none", color: "#5081c1" }}
                    >
                      {contact.phone}
                    </a>
                  }
                  primaryTypographyProps={{ style: { color: "#003f88" } }}
                />
              </ListItem>
            ))}
          </div>
        ))}
        {Object.keys(groupedContacts).length === 0 && (
          <Typography variant="body1" style={{ marginTop: "10px", color: "#888" }}>
            No contacts found.
          </Typography>
        )}
      </List>
    </div>
  );
};

export default PhoneBook;
