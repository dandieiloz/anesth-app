import React from "react";
import { Typography, List, ListItem, Link } from "@mui/material";

const Protocols = () => {
  const protocols = [
    { name: "Trom helper", link: "https://notebooklm.google.com/notebook/055cc480-67d7-4ad0-acc6-b9ab817748d2" },
    { name: "Protocol B", link: "/protocols/protocol-b.pdf" },
    { name: "Protocol C", link: "/protocols/protocol-c.docx" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Protocols
      </Typography>
      <List>
        {protocols.map((protocol, index) => (
          <ListItem key={index}>
            <Link href={protocol.link} target="_blank" rel="noopener noreferrer">
              {protocol.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Protocols;
