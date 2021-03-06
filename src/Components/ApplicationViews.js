import {Route} from 'react-router-dom'
import React, {Component} from "react"
import LocationList from './Location/LocationList'
import EmployeeList from './Employee/EmployeeList'
import AnimalList from './AnimalList/AnimalList'
import OwnerList from './OwnerList/OwnerList'

class ApplicationViews extends Component {

state = {
  employees: [],
  locations: [],
  animals: [],
  owners: []
}

componentDidMount() {
  const newState = {}

  fetch("http://localhost:5002/animals")
      .then(r => r.json())
      .then(animals => newState.animals = animals)
      .then(() => fetch("http://localhost:5002/employees")
      .then(r => r.json()))
      .then(employees => newState.employees = employees)
      .then(() => fetch("http://localhost:5002/locations")
      .then(r => r.json()))
      .then(locations => newState.locations = locations)
      .then(() => fetch("http://localhost:5002/owners")
      .then(r => r.json()))
      .then(owners => newState.owners = owners)
      .then(() => this.setState(newState))
}

deleteAnimal = id => {
  return fetch(`http://localhost:5002/animals/${id}`, {
      method: "DELETE"
  })
  .then(e => e.json())
  .then(() => fetch(`http://localhost:5002/animals`))
  .then(e => e.json())
  .then(animals => this.setState({
      animals: animals
  })
)
}

deleteEmployee = id => {
  return fetch(`http://localhost:5002/employees/${id}`, {
      method: "DELETE"
  })
  .then(e => e.json())
  .then(() => fetch(`http://localhost:5002/employees`))
  .then(e => e.json())
  .then(employees => this.setState({
      employees: employees
  })
)
}

deleteOwner = id => {
  return fetch(`http://localhost:5002/owners/${id}`, {
      method: "DELETE"
  })
  .then(e => e.json())
  .then(() => fetch(`http://localhost:5002/owners`))
  .then(e => e.json())
  .then(owners => this.setState({
      owners: owners
  })
)
}

render() {
  return (
    <React.Fragment>
      <Route exact path="/" render={(props) => {
        return <LocationList locations={this.state.locations}/>
        }}/>
      <Route path="/employees" render={(props) => {
        return <EmployeeList
        employees = {this.state.employees}
        deleteEmployee = {this.deleteEmployee}/>
        }}/>
      <Route path="/animals" render={(props) => {
        return <AnimalList
        animals = {this.state.animals}
        owners = {this.state.owners}
        deleteAnimal = {this.deleteAnimal}/>
        }}/>
      <Route path="/owners" render={(props) => {
        return <OwnerList
        owners={this.state.owners}
        deleteOwner = {this.deleteOwner}/>
      }}/>
      </React.Fragment>
  )
}
}

export default ApplicationViews