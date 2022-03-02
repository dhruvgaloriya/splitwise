import React from "react";
import "../../../sass/styles.scss";

class Bill extends React.Component {
  render() {
    return (
      <div className="bill">
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-warning m-1">
            {this.props.name} Total:{" "}
            <span
              className="badge badge-secondary"
              style={{ backgroundColor: "grey" }}
            >
              {this.props.total}&#8377;
            </span>
          </button>
          <button type="button" className="btn btn-warning m-1">
            Paid By:{" "}
            <span
              className="badge badge-secondary"
              style={{ backgroundColor: "grey" }}
            >
              {this.props.paidBy}
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default Bill;
