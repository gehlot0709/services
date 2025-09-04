import React, { useState } from "react";
import "./ThemeSwitch.css";

const ThemeSwitch = ({ toggleTheme }) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
    toggleTheme(!checked);
  };

  return (
    <label className="theme-switch cursor-pointer">
      <input
        type="checkbox"
        className="theme-switch__checkbox"
        checked={checked}
        onChange={handleToggle}
      />
      <div className="theme-switch__container">
        <div className="theme-switch__clouds"></div>
        <div className="theme-switch__stars-container">
          {/* Add your SVG here */}
        </div>
        <div className="theme-switch__circle-container">
          <div className="theme-switch__sun-moon-container">
            <div className="theme-switch__moon">
              <div className="theme-switch__spot"></div>
              <div className="theme-switch__spot"></div>
              <div className="theme-switch__spot"></div>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
};

export default ThemeSwitch;
