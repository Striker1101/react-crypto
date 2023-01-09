import React from 'react'
import {Helmet} from 'react-helmet'

export default function TopMarket() {
  return (
    <div className='top'>
   <Helmet>
   <script src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"></script></Helmet>
<coingecko-coin-price-marquee-widget  coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" background-color="#ffffff" locale="en"></coingecko-coin-price-marquee-widget> 
   </div>
    
  )
}
