import React from "react";
import "../sass/styles.scss";
import { Route, Link } from "react-router-dom";
import Groups from "./Group/Groups.jsx";
import Group from "./Group/Group.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedGroup: "",
      clickedIndx: 0,
    };
  }
  onHandleClickedGroup = (clickedGroup, clickedIndx) => {
    this.setState({
      clickedGroup: clickedGroup,
      clickedIndx: clickedIndx,
    });
  };
  render() {
    let url = this.props.match.url;
    return (
      <div>
        <Route
          exact
          path={url}
          render={(props) => (
            <Groups
              {...props}
              arrayOfGroups={this.props.arrayOfGroups}
              onHandleClickedGroup={this.onHandleClickedGroup}
            />
          )}
        ></Route>
        <Route
          path={`${url}/:${this.state.clickedIndx}`}
          render={(props) => (
            <Group
              {...props}
              clickedGroup={this.state.clickedGroup}
              clickedIndx={this.state.clickedIndx}
            />
          )}
        ></Route>
        <div className="footer">
          <Link className="addBillBtn" to="/split">
            Add your bills
          </Link>
        </div>
      </div>
    );
  }
}
export default Dashboard;
