import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import { Forum } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="personIcon" />
      </IconButton>
      <img
        src="https://globaldatinginsights.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-17-at-10.04.531.png"
        alt=""
      />
      <IconButton>
        <Forum className="forumIcon" />
      </IconButton>
    </div>
  );
}

export default Header;
