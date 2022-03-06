import React from "react";
import "../../sass/styles.scss";
import { Link } from "react-router-dom";
import AddGroupCounter from "./AddGroupCounter";

class AddGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [""],
      nameOfGroup: "",
    };
  }

  updateGroupName = (e) => {
    this.setState({
      nameOfGroup: e.target.value,
    });
  };

  updateGroupInfo = (e) => {
    e.stopPropagation();
    if (this.state.nameOfGroup && this.state.names.length) {
      this.props.onUpdateGroupInfo(this.state.nameOfGroup, this.state.names);
    } else {
      alert("please enter group name and names");
    }
  };
  updateMembersNames = (names) => {
    this.setState({
      names: names,
    });
  };
  render() {
    return (
      <div className="addGroup">
        <div className="menu">
          <h1>Add group</h1>
          <Link className="exitBtn" to="/">
            Home
          </Link>
          <Link className="addGroupBtn" to="/setting">
            Setting
          </Link>
          <Link className="exitBtn" to="/dashboard">
            Back
          </Link>
        </div>
        <div className="addGroupBox">
          <form>
            <input
              id="nameOfGroup"
              className="form-control"
              type="text"
              placeholder="Name of the group"
              value={this.state.nameOfGroup}
              onChange={(e) => this.updateGroupName(e)}
            />
            <AddGroupCounter updateMembersNames={this.updateMembersNames} />
            <Link
              className="addGroupBtn"
              to="/dashboard"
              onClick={(e) => this.updateGroupInfo(e)}
            >
              Update Your Group
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default AddGroup;
