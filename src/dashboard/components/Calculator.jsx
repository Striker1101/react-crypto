import React from 'react'
import {Helmet} from 'react-helmet'
export default function Calculator() {
  return (
    <div>
      <Helmet>
        <script src="https://widgets.coingecko.com/coingecko-coin-converter-widget.js">
            </script></Helmet> 
        <coingecko-coin-converter-widget  coin-id="bitcoin" currency="usd" background-color="#ffffff" font-color="#4c4c4c" locale="en">

        </coingecko-coin-converter-widget>
    </div>
  )
}
