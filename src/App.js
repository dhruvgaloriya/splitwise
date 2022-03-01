import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home.jsx";
import SplitBill from "./Components/SplitBill/SplitBill.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import AddGroup from "./Components/AddGroup/AddGroup.jsx";
import "./sass/styles.scss";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfGroups: []
    };
  }

  onUpdateGroupInfo = (nameOfGroup, names) => {
    this.setState({
      arrayOfGroups: [
        ...this.state.arrayOfGroups,
        { nameOfGroup: nameOfGroup, people: names, bills: [] }
      ]
    });
  };

  onUpdateNewInfoBill = (
    newDebts,
    nameOfBill,
    total,
    paidBy,
    nameOfCheckedGroup
  ) => {
    console.log(newDebts, nameOfCheckedGroup);
    let groups = this.state.arrayOfGroups;
    console.log(groups)
    let checkedGroupIndx = groups.findIndex(
      (group) => group.nameOfGroup === nameOfCheckedGroup
    );
    groups[checkedGroupIndx].bills = [
      ...groups[checkedGroupIndx].bills,
      { name: nameOfBill, total: total, debts: newDebts, paidBy: paidBy }
    ];
    this.setState({
      arrayOfGroups: groups
    });
    localStorage.setItem("arrayOfGroups", groups);
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route
            path="/add"
            render={(props) => (
              <AddGroup {...props} onUpdateGroupInfo={this.onUpdateGroupInfo} />
            )}
          ></Route>
          <Route
            path="/dashboard"
            render={(props) => (
              <Dashboard {...props} arrayOfGroups={this.state.arrayOfGroups} />
            )}
          ></Route>
          <Route
            path="/split"
            render={(props) => (
              <SplitBill
                {...props}
                arrayOfGroups={this.state.arrayOfGroups}
                updateNewInfoBill={this.onUpdateNewInfoBill}
              />
            )}
          ></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
