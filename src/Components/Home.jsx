import React from "react";
import "../sass/styles.scss";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="display-1">Split Your Bills</h1>
        <Link className="addGroupBtn" to="/add">
          Add group
        </Link>
        <Link className="addGroupBtn" to="/dashboard">
          Choose group
        </Link>
        <Link className="addGroupBtn" to="/split">
          Split bill
        </Link>
      </div>
    );
  }
}

export default Home;
