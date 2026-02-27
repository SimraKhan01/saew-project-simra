import { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header>
      <h1 className="company-title">STAR AUTO ENGINEERING WORKS</h1>

      <button
        type="button"
        className={`hamburger-btn ${isOpen ? "open" : ""}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <button
        type="button"
        aria-label="Close navigation menu"
        className={`menu-overlay ${isOpen ? "show" : ""}`}
        onClick={closeMenu}
      />

      <nav className={`nav-bar ${isOpen ? "open" : ""}`}>
        <Link to="/" className="nav-item" onClick={closeMenu}>HOME</Link>
        <Link to="/about" className="nav-item" onClick={closeMenu}>ABOUT US</Link>
        <Link to="/contact" className="nav-item" onClick={closeMenu}>CONTACT</Link>
        <Link to="/services" className="nav-item" onClick={closeMenu}>SERVICES</Link>
      </nav>
    </header>
  )
}

export default Header
