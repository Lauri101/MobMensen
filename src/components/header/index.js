import React from "react";
import "./style.css";

/**
 * @Lauri_Pechbrenner
 * @header
 **/

const Header = (props) => {
  return (
    <header>
      <div class="oben">
        <div class="oben-navigation">HELLS MENSEN</div>
        <span class="logo">
          <img src="/images/HellsLogo_Groß.png" alt="" id="HellsMensenLogo" />
        </span>
      </div>
    </header>
  );
};

export default Header;
