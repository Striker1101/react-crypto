import React, {useRef} from 'react'

export default function Crypto({click}) {
  const amount = useRef(null)
  function submit(){
    console.log(amount.current.value)
    let value = amount.current.value
    //current user amount goes inplace of 0
    if(value <= 0){
      click(true)
    }
  }
  return (
    <div 
    style={{display:'flex',
    justifyContent:'center'
    }}>
      <form action="#"
      style={{display:'flex',
     justifyContent:'center',
     flexDirection:'column',
     padding:'10px',
     gap:'5px'
     }}>
      <label htmlFor="amount">
          Amount <span style={{background:'gold', borderRadius:'3px'}}>USD:</span> 
          <input ref={amount} type="number" name="amount" id="amount" min={100}  />
        </label>
        <label htmlFor="crypto">
          CryptoCurrency
          <input type="text" name="coin" id="coin" />
        </label>
        <label htmlFor="address">
          Address
          <input type="text" name="address" id="address" />
        </label>
        <input type="submit" onClick={()=>{submit()}} value="submit" />
      </form>
    </div>
  )
}
