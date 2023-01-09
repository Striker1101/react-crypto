import React from 'react'

export default function AccountUpgrade() {
  return (
    <div style={{
        background:'white',
        width:'80%',
        borderRadius:'20px',
        padding:'20px'
        
    }}>
      <div>
        <img src="" alt="" />
        <span><h3>Account upgrade</h3></span>
        <p style={{color:'green'}}>Package due : </p>
        <span> none</span> 
      </div>
      <button type='submit' style={{float:'right'}}>Pay Invoice</button>
    </div>
  )
}
