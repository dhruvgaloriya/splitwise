import React from "react";
import "../sass/styles.scss";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div className="mainBox">
        <h1>
          Easy split bills <br /> with your friends
        </h1>
        <Link className="navigation" to="/add">
          Add group
        </Link>
        <Link className="navigation" to="/dashboard">
          Choose group
        </Link>
        <Link className="navigation splitButton" to="/split">
          Split bill
        </Link>
      </div>
    );
  }
}

export default Home;
