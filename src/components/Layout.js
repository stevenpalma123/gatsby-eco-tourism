import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import SocialMenu from "./SocialMenu"
import theme from '../../config/theme'

import FooterWidgets from "./FooterWidgets"
import MenuModal from "./MenuModal"
import "@wordpress/block-library/build-style/style.css"
import { MdMail } from 'react-icons/md'

const backdropClasses = " backdrop"

const Layout = ({ children, bodyClass }) => {
  const [backdropActive, setBackdropActive] = useState(false)

  const toggleBackdrop = (e, active) => {
    e.preventDefault()
    setBackdropActive(active)
  }

  return (
    <div
      id={"GatsbyBody"}
      className={
        bodyClass +
        " showing-menu-modal showing-modal" +
        (backdropActive ? backdropClasses : "")
      }
    >
      <Header toggleBackdrop={toggleBackdrop} />

      <MenuModal isActive={backdropActive} toggleBackdrop={toggleBackdrop} />

      <main id="site-content" role="main">
        {children}
      </main>

      <div className="top-footer row">
        <div className="column">
          <h3><a href="/blog">Travel Blog</a></h3>
          <a href="/blog" className="img-link"><img src="/images/etb-blog.png" /></a>
          <p>Travel updates, specials and promotions from EcoTourism Belize in southern Belize.</p>
        </div>
        <div className="column">
          <h3><a href="https://www.tripadvisor.com/Attraction_Review-g291980-d7912656-Reviews-Eco_Tourism_Belize-Punta_Gorda_Toledo_District.html">Trip Advisor</a></h3>
          <a href="https://www.tripadvisor.com/Attraction_Review-g291980-d7912656-Reviews-Eco_Tourism_Belize-Punta_Gorda_Toledo_District.html" className="img-link"><img src="/images/etb-trip-advisor.png" /></a>
          <p>Check us out on <a href="https://www.tripadvisor.com/Attraction_Review-g291980-d7912656-Reviews-Eco_Tourism_Belize-Punta_Gorda_Toledo_District.html">TripAdvisor</a></p>
        </div>
        <div className="column">
          <h3><a href="https://moon.com/">Moon Guide</a></h3>
          <a href="https://moon.com/" className="img-link"><img src="/images/etb-moon-guide.png" /></a>
          <p>2018 Moon Guide reviewed us</p>
        </div>
      </div>

      <a className="email-widget" href="mailto:info@ecotourismbelize.com">
        <MdMail /> EMAIL US
      </a>

      <FooterWidgets />

      <Footer />
    </div>
  )
}

export default Layout
