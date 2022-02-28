import React from "react";
import "../../sass/styles.scss";
import GroupList from "./GroupList.jsx";

class Groups extends React.Component {
  onHandleClickedGroup = (clickedGroup, clickedIndx) => {
    this.props.onHandleClickedGroup(clickedGroup, clickedIndx);
  };

  render() {
    return (
      <div>
        <div className="menu">
          <h1>All groups</h1>
        </div>
        <GroupList
          arrayOfGroups={this.props.arrayOfGroups}
          onHandleClickedGroup={this.onHandleClickedGroup}
        />
      </div>
    );
  }
}

export default Groups;
