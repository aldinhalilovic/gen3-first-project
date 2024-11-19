import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      style={{
        height: "15vh",
        background: "gray",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div>
        <h3>© Created by: Moja poslednja grupa</h3>
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        <a href="www.github.com/aldinhalilovic" target="_blank">
          <FaGithub size={35} color="black" />
        </a>
        <FaInstagram size={35} />
      </div>
    </div>
  );
}
