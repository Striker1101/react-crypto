import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
    <div className="hamburger-menu">
    <input id="menu__toggle" type="checkbox"  />
    <label className="menu__btn" htmlFor="menu__toggle">
      <span></span>
    </label>

    <ul className="menu__box">
      <li><a className="menu__item" href="#home">Home</a></li>
      <li><a className="menu__item" href="#hts">How to start</a></li>
      <li><a className="menu__item" href="#news">About</a></li>
      <li>< Link className="menu__item" to={'/login'}>Login</Link></li>
      <li><Link className="menu__item" to={'/register'}> register</Link></li>
    </ul>
</div>
  )
}
