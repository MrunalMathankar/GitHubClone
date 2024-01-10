import React from 'react'
import '../MyStyles/HeaderStyles.css'

export default function Header() {
  return (
   <>
       <nav className="navbarWrapper">
        <div className="grid-container-navbar">
          <div className="grid-items-navbar"><img src='github-mark-white.png' alt="logo" className="github-logo"/></div>
          <div className="grid-items-navbar">
            <div><h3 className="nav-link">Products</h3></div>
            <div><h3 className="nav-arrow">&#129175;</h3></div>
          </div>
          <div className="grid-items-navbar">
            <div><h3 className="nav-link">Solutions</h3></div>
            <div><h3 className="nav-arrow">&#129175;</h3></div>
        </div>
          <div className="grid-items-navbar">
            <div><h3 className="nav-link">OpenSource</h3></div>
            <div><h3 className="nav-arrow">&#129175;</h3></div>
          </div>
          <div className="grid-items-navbar">
            <div><h3 className="nav-link">Pricing</h3></div>
          </div>
          <div className="grid-items-navbar"></div>
          <div className="grid-items-navbar"><input type="search" className="navbar-search" placeholder="Search or jump to ..."></input></div>
          <div className="grid-items-navbar"><button className="navbar-buttons">Sign In</button></div>
          <div className="grid-items-navbar"><button className="navbar-buttons">Sign Up</button></div>
        </div>
      </nav>
    </>
  )
}
