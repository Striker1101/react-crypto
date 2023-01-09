import React from 'react'
import {Helmet} from 'react-helmet'
export default function coinWatch() {
  return (
    <div>
     <Helmet><script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script></Helmet>
      <div className="livecoinwatch-widget-3" lcw-base="USD" lcw-d-head="true" lcw-d-name="true" lcw-d-code="true" lcw-d-icon="true" lcw-color-tx="#ffffff" lcw-color-bg="#1f2434" lcw-border-w="1" ></div>
    </div>
  )
}
