import React from 'react'

export default function Frame({url, name}) {
 console.log(name, url)
  return (
    <div>
       <iframe  src={url + '?autoplay=0&mute=1'} width="600" height="300" frameBorder="0" alt ="intro video"
        ></iframe>
        <p style={{textAlign:'center'}}>{name}</p>
    </div>
  )
}
