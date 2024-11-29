import React from "react";
import { Typography, List, ListItem, Link } from "@mui/material";

const Protocols = () => {
  const protocols = [
    { name: "Protocol A", link: "/protocols/protocol-a.pdf" },
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
