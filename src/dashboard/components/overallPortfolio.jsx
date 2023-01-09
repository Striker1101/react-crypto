import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import NoData from '../../media/noTransaction.png'
export default function OverallPortfolio() {
    const [data, setData] = useState([])
    const styled ={
        backgroundColor: 'white',
        height: '500px',
        width: '80%',
        marginTop: "10px",
        borderRadius: '20px'
    }
    const nodata = {
        position: 'relative',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    }
    return (

    <div style={styled} className='overall'>
      <p>Overall Portfolio</p>
      <div className='trans'>
        {
            data?
            <div style={nodata}>
                <img src={NoData} alt="no transaction" />
                <div>
                <p>No transaction yet</p>
                <button><Link to={'/dashboard/deposit'}>Deposit now</Link></button>
                </div>
                </div> 
            : <div>data here</div>
        }

      </div>
    </div>
  )
}
