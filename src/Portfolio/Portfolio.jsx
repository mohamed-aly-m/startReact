import React, { useState } from 'react'
import './Portfolio.css'
import StarB from '../Star/StarB/StarB'
import CardInside from './CardInside/CardInside'




export default function Portfolio() {
  const [cards, setCards] = useState([
    {name: "LOG CABIN", image: <img className='w-100 rounded-4' src= '../src/assets/Images/cabin.png' />},
    {name: "TASTY CAKE", image: <img className='w-100 rounded-4' src= '../src/assets/Images/cake.png' />},
    {name: "CIRCUS TENT", image: <img className='w-100 rounded-4' src= '../src/assets/Images/circus.png' />},
    {name: "CONTROLER", image: <img className='w-100 rounded-4' src= '../src/assets/Images/game.png' />},
    {name: "LOCKED SAFE", image: <img className='w-100 rounded-4' src= '../src/assets/Images/safe.png' />},
    {name: "SUBMARINE", image: <img className='w-100 rounded-4' src= '../src/assets/Images/submarine.png' />},
    

  ])
      
   
      
   
  
  
  



  return (
    <>
        
        
        
        <div id='Portfolio' className="container-fluid py-5">
            <div className="container my-5 py-5">
                <div>
                  <h2 className=' fw-bold text-center'>PORTFOLIO</h2>
                  <StarB />
                </div>
                <div className="row g-4">
                  {
                      cards.map((card, index) => {
                        return <div key={index} onClick={()=> clickImage()} className="col-lg-4 col-md-6 col-sm-12 ">
                            <CardInside card={card} index={index} />
                            
                            


                        </div>
                        
                    })
                    
                  }
                </div>
            </div>
        </div>

        
       
    
    </>
  )
}
