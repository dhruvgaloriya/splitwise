import React from "react";
import "../../../sass/styles.scss";
import Bill from "./Bill";

class BillList extends React.Component {
  render() {
    const { clickedGroupBills } = this.props;
    return (
      <div className="billList">
        <h2>All bills</h2>
        {clickedGroupBills.map((bill, indx) => (
          <Bill
            key={indx}
            name={bill.name}
            total={bill.total}
            paidBy={bill.paidBy}
          />
        ))}
      </div>
    );
  }
}

export default BillList;
