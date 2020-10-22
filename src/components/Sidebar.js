import React from "react";
import "../styles/Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div>
      <h2>I am the Sidebar</h2>
      <div class="sidebar__top">
        <h3>Home</h3>
        <ExpandMoreIcon />
      </div>
    </div>
  );
}

export default Sidebar;
