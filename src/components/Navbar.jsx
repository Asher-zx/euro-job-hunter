import { Button } from "@/components/ui/button"
import { Menu, X, Briefcase } from "lucide-react"
import { useState } from "react"
import "./navbar-footer.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Briefcase className="icon-primary" />
          <span className="navbar-title">EuroTech Jobs</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-desktop">
          <div className="navbar-links">
            <a href="#jobs" className="navbar-link">Browse Jobs</a>
            <a href="#companies" className="navbar-link">Companies</a>
            <a href="#about" className="navbar-link">About</a>
            <a href="#contact" className="navbar-link">Contact</a>
          </div>
          <div className="navbar-actions">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Post Job
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="navbar-mobile-btn">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="icon-menu" /> : <Menu className="icon-menu" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-links">
            <a href="#jobs" className="navbar-link">Browse Jobs</a>
            <a href="#companies" className="navbar-link">Companies</a>
            <a href="#about" className="navbar-link">About</a>
            <a href="#contact" className="navbar-link">Contact</a>
            <div className="navbar-mobile-actions">
              <Button variant="ghost" className="navbar-mobile-action">
                Sign In
              </Button>
              <Button className="navbar-mobile-action">
                Post Job
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar