import React from "react";
class PeopleList extends React.Component {
  render() {
    const { clickedGroup } = this.props;
    console.log(clickedGroup);
    return (
      <div className="d-flex justify-content-center align-items-center">
        <h1>Group Members</h1>
        {clickedGroup.people.map((name, indx) => (
          <button
            type="button"
            key={indx}
            className="btn btn-primary m-2"
            disabled
          >
            {name}
          </button>
        ))}
      </div>
    );
  }
}
export default PeopleList;
