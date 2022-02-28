import React from "react";
import "../../../sass/styles.scss";

class PeopleList extends React.Component {
  render() {
    const { clickedGroup } = this.props;
    console.log(clickedGroup)
    return (
      <div className="people">
        <ul>
          {clickedGroup.people.map((name, indx) => (
            <li key={indx}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default PeopleList;
