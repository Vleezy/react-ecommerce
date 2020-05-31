import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="test">
                <ul className="navigation">
  <li className="nav-item">
    <a className="nav-link active" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Products</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contact</a>
  </li>
</ul>
            </div>
        )
    }
}
