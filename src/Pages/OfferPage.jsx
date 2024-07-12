import React from 'react'
import SubNavOffer from '../Components/Offer/SubNavOffer'
import OfferCards from '../Components/Offer/OfferCards'
import NavBar from "../Components/NavBar/NavBar"

function OfferPage() {
  return (
    <div>
      <NavBar/>
        <SubNavOffer />
        <OfferCards />
    </div>
  )
}

export default OfferPage