import React from "react";
import "../../sass/styles.scss";
import { Link, withRouter } from "react-router-dom";

class GroupList extends React.Component {
  handleClickedGroup = (e, indx, group) => {
    e.preventDefault();
    this.props.onHandleClickedGroup(group, indx);
    this.props.history.push(`dashboard/${indx}`);
  };
  render() {
    return (
      <ul className="listOfGroups">
        {this.props.arrayOfGroups.map((group, indx) => (
          <li
            key={group.nameOfGroup}
            onClick={(e) => this.handleClickedGroup(e, indx, group)}
          >
            <span className="linkStyle">{group.nameOfGroup}</span>
          </li>
        ))}
        <Link className="addGroupBtn" to="/add">
          Add Your Group
        </Link>
      </ul>
    );
  }
}

export default withRouter(GroupList);
