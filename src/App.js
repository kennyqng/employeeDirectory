import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Row from "./components/Row";
import Title from "./components/Title";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees: [...employees]
  };
  
  sortName = list => {
    return list.sort((a, b) => {
      if (a.name > b.name) return 1;
      else if (b.name > a.name) return -1;
      else return 0;
    });
  };
  sortOccupation = list => {
    return list.sort((a, b) => {
      if (a.occupation > b.occupation) return 1;
      else if (b.occupation > a.occupation) return -1;
      else return 0;
    });
  };
  
  handleName = event => {
    // event.preventDefault();
    const employees = this.sortName(this.state.employees);
    console.log(employees);
    this.setState({
      employees: employees
    });
  };
  handleOccupation = event => {
    // event.preventDefault();
    const employees = this.sortOccupation(this.state.employees);
    this.setState({
      employees: employees
    });
  };
  filterManagement = event => {
    // event.preventDefault();
    const employees = this.state.employees.filter(employee => employee.position === "Management");
    this.setState({
      employees: employees
    });
    console.log(employees);
  };
  filterWorker= () => {
    const employees = this.state.employees.filter(employee => employee.position === "Worker");
    this.setState({
      employees: employees
    });
    console.log(employees);
  };
  showAll = () => {
    this.setState({
      employees: [...employees]
    })
  }
  
  render() {
    return (
      <div>
        <Title>Employee Directory</Title>
        <Wrapper>
          {/* <form>
          <select name="dropdown">
            <option defaultValue="allEmployees">All Employees</option>
            <option value="management"onClick={this.filterManagement}>Management</option>
            <option value="workers">Workers</option>
          </select>
          <input type="submit" value="Submit"></input>
          </form> */}
          <button onClick={this.showAll}>show all Employees</button>
          <button onClick={this.filterManagement}>filter Managers</button>
          <button onClick={this.filterWorker}>filter Workers</button>
          <button onClick={this.handleName}>sort Names</button>
          <button onClick={this.handleOccupation}>sort Occupation</button>
        </Wrapper>
        {this.state.employees.map(employee => (
          <Row
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
            phone={employee.phone}
          />
        ))}
      </div>
    );
  }
}

export default App;
