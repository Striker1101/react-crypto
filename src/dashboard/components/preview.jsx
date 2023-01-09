import React from 'react'
import { Helmet } from 'react-helmet'
export default function preview() {
  return (
    <div className='chat' style={{width: "100%"}}>
      <Helmet>
      <script src="https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js"></script>
      </Helmet>
      <coingecko-coin-compare-chart-widget  coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" locale="en"
      ></coingecko-coin-compare-chart-widget>
      <div className='cover'></div>
    </div>
  )
}
