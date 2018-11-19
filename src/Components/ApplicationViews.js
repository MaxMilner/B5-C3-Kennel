import {Route} from 'react-router-dom'
import React, {Component} from "react"
import LocationList from './Location/LocationList'
import EmployeeList from './Employee/EmployeeList'
import AnimalList from './AnimalList/AnimalList'
import OwnerList from './OwnerList/OwnerList'

class ApplicationViews extends Component {

locationsFromAPI = [
  {id: 1, name: "Nashville North", address: "500 Circle Way"},
  {id: 2, name: "Nashville South", address: "10101 Binary Court"}
]

employeesFromAPI = [
{id: 1, name: "Jessica Younker"},
{id: 2, name: "Jordan Nelson"},
{id: 3, name: "Zoe LeBlanc"},
{id: 4, name: "Blaise Roberts"}
]

animalsAPI = [
{id: 1, name: "Fartbarf"},
{id: 2, name: "Clinton"},
{id: 3, name: "Karate Guy"},
{id: 4, name: "Chainsaw"},
{id: 5, name: "Sgt. Pepper"},
{id: 6, name: "Dan Schneider"}
]

ownersAPI = [
{id: 1, name: "Carl Malone", phoneNumber: 882-452-9932},
{id: 2, name: "Kevin Tarantula", phoneNumber: 827-268-8521},
{id: 3, name: "Emily Dickinson", phoneNumber: 1-800-337-737-7733},
{id: 4, name: "Bobby Flay", phoneNumber: 266-533-6387},
{id: 5, name: "Micky Dolenz", phoneNumber: 123-456-7890},
{id: 6, name: "Jackie Chan", phoneNUmber: 198-765-4321}
]

state = {
  employees: this.employeesFromAPI,
  locations: this.locationsFromAPI,
  animals: this.animalsAPI,
  owners: this.ownersAPI
}

render() {
  return (
    <React.Fragment>
      <Route exact path="/" render={(props) => {
        return <LocationList locations={this.state.locations}/>
        }}/>
      <Route path="/employees" render={(props) => {
        return <EmployeeList employees={this.state.employees}/>
        }}/>
      <Route path="/animals" render={(props) => {
        return <AnimalList animals={this.state.animals}/>
        }}/>
      <Route path="/owners" render={(props) => {
        return <OwnerList owners={this.state.owners}/>
      }}/>
      </React.Fragment>
  )
}
}

export default ApplicationViews