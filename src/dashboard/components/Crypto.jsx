import React from 'react'

export default function Crypto() {
  return (
    <div 
    style={{display:'flex',
    justifyContent:'center'
    }}>
      <form action=""
      style={{display:'flex',
     justifyContent:'center',
     flexDirection:'column',
     padding:'10px',
     gap:'5px'
     }}>
      <label htmlFor="amount">
          Amount <span style={{background:'gold', borderRadius:'3px'}}>USD:</span> 
          <input type="number" name="amount" id="amount" min={100}  />
        </label>
        <label htmlFor="crypto">
          CryptoCurrency
          <input type="text" name="coin" id="coin" />
        </label>
        <label htmlFor="address">
          Address
          <input type="text" name="address" id="address" />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}
