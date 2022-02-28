import React from "react";
import "../../sass/styles.scss";
import { Link } from "react-router-dom";

class GroupList extends React.Component {
  handleClickedGroup = (e, indx, group) => {
    e.preventDefault();
    this.props.onHandleClickedGroup(group, indx);
  };
  render() {
    return (
      <ul className="listOfGroups">
        {this.props.arrayOfGroups.map((group, indx) => (
          <li
            key={group.nameOfGroup}
            onClick={(e) => this.handleClickedGroup(e, indx, group)}
          >
            <Link className="linkStyle" to={`dashboard/${indx}`}>
              {group.nameOfGroup}
            </Link>
            <i className="far fa-trash-alt"></i>
          </li>
        ))}
        <Link className="addGroupBtn" to="/add">Add Your Group</Link>
      </ul>
    );
  }
}

export default GroupList;
