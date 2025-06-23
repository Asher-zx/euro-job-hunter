import { Button } from "@/components/ui/button"
import { Briefcase, Mail, MapPin, Github, Twitter, Linkedin } from "lucide-react"
import "./navbar-footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-logo">
              <Briefcase className="icon-primary" />
              <span className="footer-title">EuroTech Jobs</span>
            </div>
            <p className="footer-desc">
              Connecting talented developers with innovative companies across Europe's thriving tech ecosystem.
            </p>
            <div className="footer-social">
              <Button variant="ghost" size="icon">
                <Twitter className="icon-social" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="icon-social" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="icon-social" />
              </Button>
            </div>
          </div>

          {/* Job Categories */}
          <div className="footer-block">
            <h3 className="footer-block-title">Job Categories</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Frontend Development</a></li>
              <li><a href="#" className="footer-link">Backend Development</a></li>
              <li><a href="#" className="footer-link">Full Stack</a></li>
              <li><a href="#" className="footer-link">DevOps & Cloud</a></li>
              <li><a href="#" className="footer-link">Data Science</a></li>
              <li><a href="#" className="footer-link">Mobile Development</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="footer-block">
            <h3 className="footer-block-title">Top Locations</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Amsterdam</a></li>
              <li><a href="#" className="footer-link">Berlin</a></li>
              <li><a href="#" className="footer-link">Paris</a></li>
              <li><a href="#" className="footer-link">Stockholm</a></li>
              <li><a href="#" className="footer-link">Dublin</a></li>
              <li><a href="#" className="footer-link">Barcelona</a></li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div className="footer-block">
            <h3 className="footer-block-title">Resources</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
              <li><a href="#" className="footer-link">Help Center</a></li>
            </ul>
            <div className="footer-contact">
              <div className="footer-contact-info">
                <Mail className="icon-contact" />
                <span>hello@eurotechjobs.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              © 2025 EuroTech Jobs. All rights reserved.
            </p>
            <div className="footer-bottom-location">
              <div className="footer-location-info">
                <MapPin className="icon-contact" />
                <span>Serving Europe's Tech Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer