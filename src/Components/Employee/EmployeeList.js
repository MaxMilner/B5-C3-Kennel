import React, { Component } from 'react'
import "./Employee.css"

export default class EmployeeList extends Component {
    render () {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {employee.name}
                                <a href="#"
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}

// Chapter 4
// import React, {Component} from 'react'

// class EmployeeList extends Component {
//   render() {
//     return (
//       <section className="employees">
//       {
//        this.props.employees.map(employee => <div key={employee.id}>{employee.name}</div>
//        )
//       }
//       </section>
//     )
//   }
// }

// export default EmployeeList