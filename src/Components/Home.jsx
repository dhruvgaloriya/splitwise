import React from "react";
import { Link } from "react-router-dom";
import "../sass/styles.scss";
class Home extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="display-1">Split Your Billssss</h1>
        <Link className="addGroupBtn" to="/add">
          Add group
        </Link>
        <Link className="addGroupBtn" to="/dashboard">
          Choose group
        </Link>
        <Link className="addGroupBtn" to="/split">
          Split bill
        </Link>
        <Link className="addGroupBtn" to="/setting">
          Setting
        </Link>
      </div>
    );
  }
}

export default Home;
