import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Menu from "./Menu"
import ToggleIcon from "../assets/svg/toggle.inline.svg"
// import FluidImage from "./FluidImage"
// import Img from 'gatsby-image'
// import Image from "./Image"
import Logo from "./Logo"
import UniversalLink from "./UniversalLink"
import { FaPhone } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'

const Header = ({ pageContext, toggleBackdrop, ...props }) => {
  const { wp } = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)
  return (
    <header id="site-header" className="header-footer-group" role="banner">
      <div className="header-inner section-inner">
        <div className="header-titles-wrapper">
          <div className="header-titles">
            <UniversalLink
              to="/"
            >
              <Logo />
            </UniversalLink>
          </div>
          <div className="header-icons">
            <UniversalLink
              to="tel:5017220108"
            >
              <FaPhone />
            </UniversalLink>
            <UniversalLink
              to="mailto:info@ecotourismbelize.com"
            >
              <MdMail />
            </UniversalLink>
          </div>
        </div>

        <div className="header-navigation-wrapper">
          <Menu />
        </div>

        <button
            className="toggle nav-toggle mobile-nav-toggle"
            data-toggle-target=".menu-modal"
            data-toggle-body-class="showing-menu-modal"
            aria-expanded="false"
            data-set-focus=".close-nav-toggle"
            onClick={(e) => toggleBackdrop(e, true)}
          >
            <span className="toggle-inner">
              <span className="toggle-icon">
                <ToggleIcon />
              </span>
              <span className="toggle-text">Menu</span>
            </span>
          </button>
        </div>

        <div className="header-toggles hide-no-js">
          <div className="toggle-wrapper nav-toggle-wrapper has-expanded-menu">
            <button
              className="toggle nav-toggle desktop-nav-toggle"
              data-toggle-target=".menu-modal"
              data-toggle-body-class="showing-menu-modal"
              aria-expanded="false"
              data-set-focus=".close-nav-toggle"
              onClick={(e) => toggleBackdrop(e, true)}
            >
              <span className="toggle-inner">
                <span className="toggle-text">Menu</span>
                <span className="toggle-icon">
                  <ToggleIcon />
                </span>
              </span>
            </button>
          </div>
        </div>


    </header>
  )
}

export default Header
