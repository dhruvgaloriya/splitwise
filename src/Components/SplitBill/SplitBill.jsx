import React from "react";
import "../../sass/styles.scss";
import { Link } from "react-router-dom";
import SplitForm from "./SplitForm.jsx";
import SplitOptions from "./SplitOptions.jsx";

class SplitBill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: this.props.arrayOfGroups,
      checkedOption: null,
      checkedGroup: "",
      debts: []
    };
  }

  checkOption = (checked) => {
    this.setState(
      {
        checkedGroup: checked
      },
      () => {
        this.updatingDebtsName();
      }
    );
  };

  updatingDebtsName = () => {
    let debts = [];
    let names = this.state.checkedGroup.people;
    for (let i = 0; i < names.length; i++) {
      debts.push({
        name: names[i],
        debt: 0
      });
    }
    this.setState({
      debts: debts
    });
  };

  updateNewInfoBill = (newDebts, nameBill, total, paidBy) => {
    this.props.updateNewInfoBill(
      newDebts,
      nameBill,
      total,
      paidBy,
      this.state.checkedGroup.nameOfGroup
    );
  };

  render() {
    return (
      <div>
        <div className="menu">
          <h1>Split bill</h1>
          <Link className="exitBtn" to="/dashboard"></Link>
        </div>
        <div className="splitBill">
          <SplitOptions
            arrayOfGroups={this.props.arrayOfGroups}
            checkOption={this.checkOption}
          />
          <SplitForm
            arrayOfGroups={this.props.arrayOfGroups}
            checkedOption={this.state.checkedOption}
            checkedGroup={this.state.checkedGroup}
            debts={this.state.debts}
            updateNewInfoBill={this.updateNewInfoBill}
          />
        </div>
      </div>
    );
  }
}
export default SplitBill;
