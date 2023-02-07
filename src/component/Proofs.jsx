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
            video:'https://www.youtube.com/embed/VBUXWW2Llw8',
            name:'Alexey'
        },
        {
            video:'https://www.youtube.com/embed/FywgPS5B2pI',
            name:'Shihan Sumon'
        },
        {
            video:'https://www.youtube.com/embed/-9Dw7vDufuo',
            name:'Shyam Aharwar'
        },
        {
            video:'https://www.youtube.com/embed/sJm0kTUfeZo',
            name:'Irfan Rohyana'
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
      <h1>What members says about us</h1>
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
        <div style={{border:'3px solid white',
         borderRadius:'20px',
         color:'white',
         height:'50px',
         display:'flex',
         justifyContent:'center',
         alignItems:'center' }}>
            <a href="https://meta-force.space/reviews">See more Review</a>
        </div>
    </div>
  )
}
