import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className="test">
        <nav className="navigation">
          <ul className="navigation__area">
            <li><a href="http://www.code-test.site/index.html">Home</a></li>
            <li><a className="active" href="https://ecommerce-vlad.netlify.app">Product</a></li>
            <li><a href="http://www.code-test.site/contact.html">Contact</a></li>
          </ul>
        </nav>

      </div>
    )
  }
}
