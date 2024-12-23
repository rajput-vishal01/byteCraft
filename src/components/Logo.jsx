import React from "react";

function Logo() {
  return (
    <div
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="text-lg font-semibold text-[#1C1C1C] tracking-wide flex items-center justify-center">
      <span className="bg-gradient-to-r  font-bold from-[#000000] to-[#000000] bg-clip-text text-transparent">
        Byte
      </span>
      <span className="ml-1 font-bold text-[#000000]">Craft</span>
    </div>
  );
}

export default Logo;
