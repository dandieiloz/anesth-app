import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // Space between title and logo
        padding: "1px 10px",
        backgroundColor: "#003f88",
        color: "#ffffff",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        height: "80px", // Increase height to avoid trimming
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ fontSize: "18px", margin: 0, whiteSpace: "nowrap" }}>
        Beilinson Anesthesiology Department
      </h1>
      <img
        src={`${process.env.PUBLIC_URL}/icon-512x512.png`}
        alt="App Logo"
        style={{
          height: "115px", // Adjust logo height
          objectFit: "contain", // Ensure full image is shown
        }}
      />
    </div>
  );
};

export default Header;
