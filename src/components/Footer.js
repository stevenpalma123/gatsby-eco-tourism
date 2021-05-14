import React from "react"
import { Link } from "gatsby"

const config = require('../../config/site')

const Footer = ({}) => {
  return (
    <footer id="site-footer" role="contentinfo" className="header-footer-group">
      <div className="section-inner">
        <div className="footer-credits">
          <p>
            <a href="mailto:info@ecotourismbelize.com">info@ecotourismbelize.com</a> | Office: <a href="tel:+5017220108">+501 722-0108</a> | WhatsApp: <a href="tel:+5016312205">+501 652-7552</a>
          </p>
          <img src="/images/logo.png" className="etb"/>
          <div className="row">
            <div className="column-2">
              <img src="/images/yaaxche-logo.png" />
            </div>
            <div className="column-10">
              <p>
                <a href="https://yaaxche.org">Ya’axché Conservation Trust is the proud parent organization for EcoTourism Belize.<br/><br/>EcoTourism Belize is raising funds for our critical work in southern Belize.</a>
              </p>
            </div>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()}{" "}
            <Link to={"/"}>{config.company}</Link> | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
