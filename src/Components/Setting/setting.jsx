import React from "react";
import "../../sass/styles.scss";
import { Link } from "react-router-dom";

class DarkMode extends React.Component {
  state = {
    isDark: false,
  };

  componentDidMount() {
    let isDark = localStorage.getItem("theme", "dark");
    if (isDark === "dark") {
      this.setState(
        {
          isDark: true,
        },
        () => {
          this.setDark();
        }
      );
    } else {
      this.setState(
        {
          isDark: false,
        },
        () => {
          this.setLight();
        }
      );
    }
  }

  toggleTheme = (e) => {
    this.setState(
      {
        isDark: e.target.checked,
      },
      () => {
        if (this.state.isDark) {
          this.setDark();
        } else {
          this.setLight();
        }
      }
    );
  };

  setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  render() {
    return (
      <>
        <div className="menu">
          <h1>Choose Your Theme</h1>
          <Link className="exitBtn" to="/">
            Home
          </Link>
        </div>
        <div className="toggle-box">
          <span>🌞</span>
          <label className="toggle-theme" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              onChange={this.toggleTheme}
              checked={this.state.isDark}
            />
            <span className="slider round"></span>
          </label>
          <span>🌒</span>
        </div>
      </>
    );
  }
}

export default DarkMode;
