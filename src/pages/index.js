import React from "react"
import Layout from "../components/Layout"
import Slider from "../components/Slider/Slider"

export default () => (
  <div className="landing-page">
    <Layout>
      <div className="slider-wrapper">
        <Slider />
      </div>
        <div className="post-inner">
          <div className="entry-content">
            <h2>TRANSFORMATIVE EXPERIENCES</h2>
            <p>
              EcoTourism Belize is <strong>connecting nature, wildlife and communities for a more sustainable world.</strong><br/><br/>

              Our primary objective is to be an exemplary model for sustainable tourism and development in the Toledo district by creating transformative experiences with nature and local communities. These experiences have been carefully designed to provide an authentic experience through local guidance, while minimizing our impact on the natural environment and reinvesting in conservation.<br/><br/>

              EcoTourism Belize provides an opportunity for local and international guests to come and experience our one of a kind tours in the Golden Stream Corridor Preserve – where they get to see wildlife in the pristine forests, surrounded by breathtaking views of natural waters. EcoTourism Belize offers rare opportunities of interacting with Maya healers, indulging in chocolate, and snorkeling at the southern tip of the world’s largest living Barrier Reef System.<br/><br/>

              By booking a tour or a stay with us, you are directly supporting conservation in southern Belize!
            </p>
            <h2>OUR POPULAR EXPERIENCES</h2>
            <div className="row">
              <div className="column">
                <a href="/day-tours/ranger-for-a-day/" className="img-link"><img src="/images/tile-dt-1.jpg" /></a>
                <h3><a href="/day-tours/ranger-for-a-day/">RANGER FOR A DAY</a></h3>
                <p>Patrol the Golden Stream Corridor Preserve alongside a local Maya Ranger for an unparalleled experience in the Belizean jungle. You will be part of an official Ya’axché ranger patrol at an important forest corridor.</p>
              </div>
              <div className="column">
                <a href="/day-tours/ranger-for-a-day/" className="img-link"><img src="/images/tile-dt-2.jpg" /></a>
                <h3><a href="/day-tours/ranger-for-a-day/">BIRDS OF BELIZE</a></h3>
                <p>Explore the Golden Stream Corridor Preserve with one of our bird specialists for an early morning bird monitoring session. Belize has around 600 birds and half are at Golden Stream Corridor Preserve.</p>
              </div>
              <div className="column">
                <a href="/day-tours/ranger-for-a-day/" className="img-link"><img src="/images/tile-dt-3.jpg" /></a>
                <h3><a href="/day-tours/ranger-for-a-day/">MAYA HEALING</a></h3>
                <p>Delve into the traditional Maya medicinal world and experience a spiritual healing ceremony practiced for centuries by Maya Shamans. Presently, only a handful of Maya Healers are found in southern Belize.</p>
              </div>
            </div>
            <h2>OUR DEEP ROOTS IN CONSERVATION</h2>
            <p>
              EcoTourism Belize is a social business initiative of Ya’axché Conservation Trust , an award-winning, local, non-governmental organization that has been working to conserve forests and empower communities of the Maya Golden Landscape since 1998.<br/><br/>

              We hope to facilitate income generation opportunities for our partners to improve and sustain local livelihoods.  Get this amazing experience and leave knowing that <strong>100% of profits are directly supporting our conservation work in the Maya Golden Landscape.</strong>
            </p>
            <div>
              <iframe width="958" height="539" src="https://www.youtube.com/embed/UHoesVD3Fck" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p>
              Ya’axché has had a long-lasting impact in the <a href="https://yaaxche.org/about-us/our-work#where-we-work">Maya Golden Landscape</a> and Belize. Ya’axché continues to grow as an organization, expanding its reach and increasing its impact.
            </p>
          </div>
        </div>
    </Layout>
  </div>
)
