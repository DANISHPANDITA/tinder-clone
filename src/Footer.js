import React from "react";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import ReplaySharpIcon from "@material-ui/icons/ReplaySharp";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import StarRateSharpIcon from "@material-ui/icons/StarRateSharp";
import "./Footer.css";
import { FlashOnOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import FavoriteBorderTwoToneIcon from "@material-ui/icons/FavoriteBorderTwoTone";
function Footer() {
  return (
    <div className="footerIcons">
      <IconButton>
        <ReplaySharpIcon className="footerReplay" />
      </IconButton>
      <IconButton>
        <CloseSharpIcon className="footerClose" />
      </IconButton>
      <IconButton>
        <StarRateSharpIcon className="footerStar" />
      </IconButton>
      <IconButton>
        <FavoriteBorderTwoToneIcon className="footerFav" />
      </IconButton>
      <IconButton>
        <FlashOnOutlined className="footerFlash" />
      </IconButton>
    </div>
  );
}

export default Footer;
