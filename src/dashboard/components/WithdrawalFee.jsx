import React from 'react'

export default function WithdrawalFee() {
  return (
    <div
    style={{
        background:'white',
        width:'80%',
        borderRadius:'20px',
        padding:'20px'
        
    }}
    >
     <img src="" alt="" />
     <span><h3>Withdrawal fee</h3></span>
     <p style={{color:'green'}}>Amount : $ <span>0</span></p>
     <button type='submit' style={{float:'left'}}>Pay invoice</button>
    </div>
  )
}
