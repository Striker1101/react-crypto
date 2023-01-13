import React from 'react'
import Frame from './Frame'
export default function Proofs() {
    const frame= [
        {
            video:'https://www.youtube.com/embed/twciaIo4xEk',
            name:'faheem yaseen'
        },
        {
            video:'https://www.youtube.com/embed/lky30gCn3vY',
            name:'Lindy Shirries'
        },
        {
            video:'https://www.youtube.com/embed/hEnBGa88rqY',
            name:'Isaac Joshua Chiroma'
        },
        {
            video:'https://www.youtube.com/embed/_tD1zLijM3I',
            name:'Mulalo'
        },
        {
            video:'https://www.youtube.com/embed/s1qLOHmtzno',
            name:'Ruth'
        },
        {
            video:'https://www.youtube.com/embed/dqSHWISZZhc',
            name:'Johnmary'
        }
    ]
  return (
    <div 
    style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    }}>
      <h3>What members says about us</h3>
      <div style={{
        width:'100%',
        display:'flex',
        flexWrap:'wrap',
        gap:'10px',
        alignItems:'center',
        justifyContent:'center',
      }}>
        {
            frame.map((e,i)=>{
                console.log(e)
                return(
                   <div 
                   key={i} 
                   style={{
                    position: 'relative',
                     borderRadius: '20px',
                      overflow: 'hidden',
                   }}>
                     <Frame
                      url={e.video} 
                       name={e.name}/>
                   </div>
                )
            })
        }
        </div>
    </div>
  )
}
