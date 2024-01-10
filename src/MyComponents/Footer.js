import React from 'react'
import '../MyStyles/Footer.css'

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className="footer-col-1">
           <div className="col-1-row-1">
                <a>GithHub</a>
           </div>
           <div className="col-2-row-2"></div>
           <div className="col-3-row-3">
                <h5 className='footer-fonts'><strong>Subscribe to our developer newsletter</strong></h5>
                <h5 className='footer-h5-desc'>Get tips, technical guides, and best practices. Once a month. Right in your inbox.</h5>
           </div>
           <div className="col-4-row-4">
           <button className='navbar-buttons'>Subscribe</button>
           </div>
      </div>
      <div className="footer-col">
        <div className="footer-fonts"><a>Product</a></div>
        <div className="footer-fonts"><a>Features</a></div>
        <div className="footer-fonts"><a>Enterprise</a></div>
        <div className="footer-fonts"><a>Copilot</a></div>
        <div className="footer-fonts"><a>Security</a></div>
        <div className="footer-fonts"><a>Pricing</a></div>
        <div className="footer-fonts"><a>Team</a></div>
        <div className="footer-fonts"><a>Resources</a></div>
        <div className="footer-fonts"><a>Roadmap</a></div>
        <div className="footer-fonts"><a>Compare GitHub</a></div>
      </div>
      <div className="footer-col">
       <div className="footer-fonts"><a>Platform</a></div>
       <div className="footer-fonts"><a>Developer API</a></div>
       <div className="footer-fonts"><a>Partners</a></div>
       <div className="footer-fonts"><a>Electron</a></div>
       <div className="footer-fonts"><a>GitHub Desktop</a></div>
      </div>
      <div className="footer-col">
        <div className="footer-fonts"><a>Support</a></div>
        <div className="footer-fonts"><a>Docs</a></div>
        <div className="footer-fonts"><a>Community Forum</a></div>
        <div className="footer-fonts"><a>Professional Service</a></div>
        <div className="footer-fonts"><a>Premium Support</a></div>
        <div className="footer-fonts"><a>Skills</a></div>
        <div className="footer-fonts"><a>Status</a></div>
        <div className="footer-fonts"><a>Contact GitHub</a></div>
      </div>
      <div className="footer-col">
        <div className="footer-fonts"><a>Company</a></div>
        <div className="footer-fonts"><a>About</a></div>
        <div className="footer-fonts"><a>Customer stories</a></div>
        <div className="footer-fonts"><a>Blog</a></div>
        <div className="footer-fonts"><a>The ReadME Project</a></div>
        <div className="footer-fonts"><a>Carrers</a></div>
        <div className="footer-fonts"><a>Press</a></div>
        <div className="footer-fonts"><a>Inclusion</a></div>
        <div className="footer-fonts"><a>Social Impact</a></div>
        <div className="footer-fonts"><a>Shop</a></div>
      </div>

    </footer>
  )
}
