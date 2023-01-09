import React from 'react'
import CountryList  from './CountryList'
export default function Bank() {
  return (
    <div style={{display:'flex',
     justifyContent:'center'
     }} >
      <form action=""
       style={{display:'flex',
     justifyContent:'center',
     flexDirection:'column',
     padding:'10px',
     gap:'5px'
     }}>
      <h3 style={{textAlign:'center'}}>Fill the form correctly</h3>
      <CountryList />
        <label htmlFor="amount">
          Amount <span style={{background:'gold', borderRadius:'3px'}}>USD:</span> 
          <input type="number" name="amount" id="amount" min={100}  />
        </label>
        
        <label htmlFor="name">
          Bank Name
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="Bankuser">
          Account User
          <input type="text" name="user" id="user" />
        </label>
        <label htmlFor="accountNum">
          Account Number
          <input type="number" name="accountNum" id="accountNum" />
        </label>
        <label htmlFor="zipCode">
          Zip Code
          <input type="number" name="zip" id="zip" />
        </label>
        <label htmlFor="postalCode">
          Postal Code
          <input type="number" name="postaCode" id="postal" />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}
