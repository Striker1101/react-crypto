import React from 'react'
import { Helmet } from 'react-helmet'
export default function analysis() {

  return (
    <div  className='chat' style={{width: "100%"}}>
       <Helmet>
       <script src="https://widgets.coingecko.com/coingecko-coin-heatmap-widget.js"></script>
       </Helmet>
        <coingecko-coin-heatmap-widget  height="400" locale="en"></coingecko-coin-heatmap-widget>
        <div className='cover'></div>
    </div>

  )
}
