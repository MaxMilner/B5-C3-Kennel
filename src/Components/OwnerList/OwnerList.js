import React, { Component } from 'react'
import "./Owner.css"

export default class OwnerList extends Component {
  render () {
    return (
      <section className="owners">
      {
        this.props.owners.map(owner =>
          <div key={owner.id} className="card">
          <div className="card-body">
            <h5 className="card-title">
              {owner.name}
              <a href="#"
              onClick={() => this.props.deleteOwner(owner.id)}
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

// class OwnerList extends Component {
//   render() {
//     return (
//     <section className="owners">
//   {
//       this.props.owners.map(owner => <div key={owner.id}>{owner.name}</div>
//       )
//   }
//     </section>
//   )
//   }
// }

// export default OwnerList