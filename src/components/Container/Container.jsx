import React from "react";

export default function Container({ children }) {
  return (
    <div
      style={{
        maxWidth: "1200px",
        padding: "0 15px",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
}
