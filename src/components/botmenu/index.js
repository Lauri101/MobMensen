import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

/**
 * @LauriPechbrenner
 * @Botmenu
 **/

const Botmenu = (props) => {
  return (
    <div>
      <div class="bottom-nav">
        <div class="mdc-bottom-navigation">
          <nav class="mdc-bottom-navigation-list">
            <span class="mdc-bottom-navigation-list-item">
              <span class="material-icons mdc-bottom-navigation-list-item-icon">
                local_dining
              </span>
              <NavLink to="/">
                <span class="mdc-bottom-navigation-list-item-text">
                  Speiseplan
                </span>
              </NavLink>
            </span>
            <span class="mdc-bottom-navigation-list-item">
              <span class="material-icons mdc-bottom-navigation-list-item-icon">
                info
              </span>
              <NavLink to="/Informationen">
                <span class="mdc-bottom-navigation-list-item-text">
                  Informationen
                </span>
              </NavLink>
            </span>
            <span class="mdc-bottom-navigation-list-item">
              <span class="material-icons mdc-bottom-navigation-list-item-icon">
                location_on
              </span>
              <NavLink to="/standort">
                <span class="mdc-bottom-navigation-list-item-text">
                  Standort
                </span>
              </NavLink>
            </span>
            <span class="mdc-bottom-navigation-list-item">
              <span class="material-icons mdc-bottom-navigation-list-item-icon">
                settings
              </span>
              <NavLink to="/Einstellungen">
                <span class="mdc-bottom-navigation-list-item-text">
                  Einstellungen
                </span>
              </NavLink>
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Botmenu;
