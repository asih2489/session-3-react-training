import React from "react";

export default function Card(props) {
  return (
    <div
      style={{
        border: `2px solid ${props.color || "#ccc"}`,
        borderRadius: 12,
        padding: 12
      }}
    >
      {props.children}
    </div>
  );
}











