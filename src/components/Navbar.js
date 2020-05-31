import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className="test">
        <nav className="navigation">
          <ul className="navigation__area">
            <li><a href="home.html">Home</a></li>
            <li><a className="active" href="product.html">Product</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>

      </div>
    )
  }
}
