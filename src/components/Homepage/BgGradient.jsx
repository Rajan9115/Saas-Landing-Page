import React from "react";

const BgGradient = ({
  top,
  left,
  size = 64,
  from = "#494955",
  to = "#141414",
}) => {
  return (
    <div
      className="absolute rounded-4xl blur-sm backdrop-blur-3xl bg-white/30"
      style={{
        top,
        left,
        width: size,
        height: size,
        background: `radial-gradient(circle at 25% 25%, ${from}, ${to} 35%)`,
        boxShadow: "0 0 30px rgba(255,255,255,0.2)",
      }}
    />
  );
};

export default BgGradient;
