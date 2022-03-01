import React from "react";
import "../../sass/styles.scss";
import { Link } from "react-router-dom";
import SplitFormInputs from "./SplitFormInputs.jsx";
import SplitPeople from "./SplitPeople.jsx";

export class SplitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameBill: "",
      total: "",
      debts: this.props.debts,
      paidBy: "",
    };
  }
  onHandleFormInputs = (nameBill, total) => {
    this.setState({
      nameBill: nameBill,
      total: total,
    });
  };

  updateBillInfo = (e) => {
    if (this.state.nameBill && this.state.total) {
      this.props.updateNewInfoBill(
        this.state.debts,
        this.state.nameBill,
        this.state.total,
        this.state.paidBy
      );
    } else {
      alert("please add name of bill and total");
    }
  };
  updateNewDebts = (newDebts, paidBy) => {
    this.setState({
      debts: newDebts,
      paidBy: paidBy,
    });
  };

  render() {
    return (
      <form className="splitForm d-flex">
        <SplitFormInputs
          checkedOption={this.props.checkedOption}
          onHandleFormInputs={this.onHandleFormInputs}
        />
        {this.props.checkedGroup && (
          <SplitPeople
            checkedGroup={this.props.checkedGroup}
            total={this.state.total}
            debts={this.props.debts}
            updateNewDebts={this.updateNewDebts}
          />
        )}
        <div>
          <Link
            className="addBillBtn"
            to="/dashboard"
            onClick={(e) => this.updateBillInfo(e)}
          >
            Submit Bill
          </Link>
        </div>
      </form>
    );
  }
}

export default SplitForm;
