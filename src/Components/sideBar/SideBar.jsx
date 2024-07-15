import React from "react";
import "../../Style/sideBar.css";

function SideBar({ Show, onClose, children }) {
  if (!Show) {
    return null;
  }
  return (
    <div className="sideBarOwerlay">
      <button className="sideBarClose" onClick={onClose}>
        x
      </button>
      <div className="modalContent">{children}</div>
    </div>
  );
}

export default SideBar;
