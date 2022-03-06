import React from "react";
import "../../sass/styles.scss";

class SplitPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRadio: "",
      debts: this.props.debts,
      paidBy: "",
    };
  }

  // handleRadioBtn = (e) => {
  //   console.log(e);
  //   this.setState(
  //     {
  //       selectedRadio: e.target.value,
  //       paidBy: this.props.checkedGroup.people[0],
  //     },
  //     () => {
  //       console.log(this.state);
  //       if (this.state.selectedRadio === "equally") {
  //         let debts = this.state.debts;
  //         console.log(debts);
  //         for (let i = 0; i < debts.length; i++) {
  //           if (debts[i].name === this.state.paidBy) {
  //             debts[i].debt = this.props.total;
  //           } else {
  //             debts[i].debt = 0;
  //           }
  //         }
  //         this.setState(
  //           {
  //             debts: debts,
  //             paidBy: this.state.paidBy,
  //           },
  //           () => this.props.updateNewDebts(this.state.debts, this.state.paidBy)
  //         );
  //         this.handlePaidBy = (e) => {
  //           this.setState({
  //             paidBy: e.target.value,
  //           });
  //         };
  //       } else if (this.state.selectedRadio === "unequally") {
  //         this.handleDebts = (e, indx) => {
  //           let thisContribution = e.target.dataset.indx;
  //           let newDebts = [...this.state.debts];
  //           newDebts[thisContribution].debt =
  //             Math.round(e.target.value * 100) / 100;
  //           this.setState(
  //             {
  //               debts: newDebts,
  //               paidBy: "Shared",
  //             },
  //             () =>
  //               this.props.updateNewDebts(this.state.debts, this.state.paidBy)
  //           );
  //         };
  //       }
  //     }
  //   );
  // };

  handleRadioBtn = (e) => {
    console.log(this.props.checkedGroup.people[0]);
    this.setState(
      {
        selectedRadio: e.target.value,
        paidBy: this.props.checkedGroup.people[0],
      },
      () => {
        console.log(this.state);
        if (this.state.selectedRadio === "equally") {
          this.handlePaidBy = (e) => {
            this.setState(
              {
                paidBy: e.target.value,
              },
              () => {
                let debts = this.state.debts;
                console.log(debts);
                for (let i = 0; i < debts.length; i++) {
                  if (debts[i].name === this.state.paidBy) {
                    debts[i].debt = this.props.total;
                  } else {
                    debts[i].debt = 0;
                  }
                }
                this.setState(
                  {
                    debts: debts,
                    paidBy: this.state.paidBy,
                  },
                  () =>
                    this.props.updateNewDebts(
                      this.state.debts,
                      this.state.paidBy
                    )
                );
              }
            );
          };
        } else if (this.state.selectedRadio === "unequally") {
          this.handleDebts = (e, indx) => {
            let thisContribution = e.target.dataset.indx;
            let newDebts = [...this.state.debts];
            newDebts[thisContribution].debt =
              Math.round(e.target.value * 100) / 100;
            this.setState(
              {
                debts: newDebts,
                paidBy: "Shared",
              },
              () =>
                this.props.updateNewDebts(this.state.debts, this.state.paidBy)
            );
          };
        }
      }
    );
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      debts: nextProps.debts,
    });
  }

  render() {
    return (
      <div className="splitBox">
        <div className="splitInputs">
          <div className="custom-control custom-radio custom-control-inline">
            <input
              id="equally"
              type="radio"
              value="equally"
              className="custom-control-input"
              onChange={(e) => {
                this.handleRadioBtn(e);
              }}
              checked={this.state.selectedRadio === "equally"}
            />
            <label htmlFor="equally" className="custom-control-label">
              Equally
            </label>
          </div>
          <div></div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              id="unequally"
              type="radio"
              value="unequally"
              className="custom-control-input"
              onChange={(e) => {
                this.handleRadioBtn(e);
              }}
              checked={this.state.selectedRadio === "unequally"}
            />
            <label htmlFor="unequally" className="custom-control-label">
              Unequally
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Paid By</label>
          {this.state.selectedRadio === "equally" && (
            <select
              className="form-control"
              value={this.state.paidBy}
              onChange={(e) => this.handlePaidBy(e)}
            >
              {this.props.checkedGroup.people.map((name, indx) => (
                <option key={indx} value={name}>
                  {name}
                </option>
              ))}
            </select>
          )}
        </div>
        <ul className="unequallyInputs">
          {this.props.checkedGroup.people.map((name, indx) => (
            <li key={indx}>
              {name}
              {this.state.selectedRadio === "unequally" && (
                <input
                  type="number"
                  value={this.state.debts.debt}
                  data-indx={indx}
                  className="custom-control-input"
                  onChange={(e) => this.handleDebts(e, indx)}
                ></input>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default SplitPeople;
