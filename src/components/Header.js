import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Center content horizontally
        padding: "10px 20px",
        backgroundColor: "#003f88",
        color: "#ffffff",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/icon-512x512.png`}
        alt="App Logo"
        style={{ height: "100px", marginRight: "10px" }} // Add margin to separate the logo and title
      />
      <h1 style={{ fontSize: "18px", margin: 0 }}>Beilinson Anesthesilogy Department</h1>
    </div>
  );
};

export default Header;
