import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Languages: Mandarin (Native) &nbsp;•&nbsp; English (Proficient) &nbsp;•&nbsp; Japanese (Conversational) &nbsp;•&nbsp; German (Conversational)
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          CodeByCindy © copyright 2026   <></>
          <a href="/"><img src={require("../../assets/images/logo-64x64.png")} alt="cindy" /></a>
        </p>

      </div>
    </Fade>
  );
}
