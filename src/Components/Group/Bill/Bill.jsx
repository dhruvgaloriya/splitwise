import React from "react";
import "../../../sass/styles.scss";

class Bill extends React.Component {
  render() {
    return (
      <ul className="bill">
        <li>
          {this.props.name} TOTAL: {this.props.total}
          <div>
            <p>paid by</p>
            <div className="paidBy">
              <p>{this.props.paidBy}</p>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

export default Bill;
