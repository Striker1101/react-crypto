import React from 'react'

export default function Ask({handleClick}) {
  
  return (
    <div 
    style={{display:'flex',
    margin:'0',
     justifyContent:'center', 
     alignItems:'center',
      flexDirection:'column'}}>
      we offer two type of withdraw service
      <p>choose one to proceed</p>
      <ul>
        <li>
            <label htmlFor="bank">
            Bank 
            <input  type="checkbox" name="bank" id="bank" />
            </label>
        </li>
        <li>
            <label htmlFor="crypto">
                CrptoCurrency
                <input type="checkbox" name="crypto" id="crypto" />
            </label>
        </li>
      </ul>
      <button style={{borderRadius:"30px", boxShadow:"2px .5px 1px 1px black" }} type="submit" onClick={()=>{  handleClick()}}>Proceed</button>
    </div>
  )
}
