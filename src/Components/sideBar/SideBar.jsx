import React from "react";

function SideBar({ Show, onClose, children }) {
  if (!Show) {
    return null;
  }
  return (
    <div className="sideBarOwerlay">
      <button className="sideBarClose" onClick={onClose}>
        Close
      </button>
      <div className="modalContent">{children}</div>
    </div>
  );
}

export default SideBar;
