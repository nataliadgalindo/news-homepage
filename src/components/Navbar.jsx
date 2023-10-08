import { useState } from "react"

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  function hamburgerToggle() {
    setShowMenu((prevState) => !prevState)
  }

  const navMenu = (
    <>
      <li>Home</li>
      <li>New</li>
      <li>Popular</li>
      <li>Trending</li>
      <li>Categories</li>
    </>
  )

  return (
    <nav>
      <img className="logo" src="/assets/images/logo.svg" alt="" />

      <ul className="desktop-menu">{navMenu}</ul>

      <img
        src={`/assets/images/icon-menu${showMenu ? "-close" : ""}.svg`}
        alt={`icon to ${showMenu ? "close" : "open"} mobile navigation menu`}
        onClick={hamburgerToggle}
        className="hamburger"
      />

      {showMenu ? (
        <>
          <div className="mobile-menu-container">
            <ul className="mobile-menu">{navMenu}</ul>
          </div>
          <div className="overlay"></div>
        </>
      ) : null}
    </nav>
  )
}

export default Navbar
