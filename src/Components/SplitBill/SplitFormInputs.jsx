import React from "react";
import "../../sass/styles.scss";

class SplitFormInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameBill: "",
      total: ""
    };
  }
  handleFormInputs = (e) => {
    this.setState(
      {
        [e.target.name]:
          e.target.type === "number"
            ? Math.round(e.target.value * 100) / 100
            : e.target.value
      },
      () => {
        this.props.onHandleFormInputs(this.state.nameBill, this.state.total);
      }
    );
  };

  render() {
    const checkedOption = this.props.checkedOption === "Create a group";
    return (
      <div>
        {checkedOption && <input placeholder="Name of group"></input>}
        <input
          name="nameBill"
          value={this.state.nameBill}
          placeholder="Name of the bill"
          className="form-control" 
          onChange={(e) => this.handleFormInputs(e)}
        />

        <input
          type="number"
          step="0.01"
          min="0"
          name="total"
          value={this.state.total}
          required
          placeholder="Total sum"
          className="form-control" 
          onChange={(e) => this.handleFormInputs(e)}
        />
      </div>
    );
  }
}

export default SplitFormInputs;
