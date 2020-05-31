import React, { Component } from 'react'

export default class Footers extends Component {
    render() {
        return (
            <div>
                 <footer className="footer__area">

    <nav>
      <ul className="footer__area--icons">
        <li><a href="http://www.facebook.com" target="_blank" rel="noopener"><img className="icon__facebook"
              src="/images/facebook.png" alt="Facebook" /></a></li>

        <li><a href="http://www.twitter.com" target="_blank" rel="noopener"><img className="icon__twitter" src="/images/twitter.png"
              alt="Twitter" /></a></li>

        <li><a href="http://www.youtube.com" target="_blank" rel="noopener"><img className="icon__youtube" src="/images/youtube.png"
              alt="Youtube" /></a></li>

        <li><a href="http://www.instagram.com" target="_blank" rel="noopener"><img className="icon__instagram"
              src="/images/instagram.png" alt="Instagram" /></a></li>
      </ul>
    </nav>

    <div className="footer__area--copyright">
      <p> 2020 &copy; | R2H eCommerce Project </p>
    </div>
  </footer>

            </div>
        )
    }
}
