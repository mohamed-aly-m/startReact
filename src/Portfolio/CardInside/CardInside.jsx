import React from 'react'
import './CardInside.css'





export default function CardInside(props, index) {
    

    function closeCard(){
        addEventListener("click", function(){
        document.querySelector(".CoverCard").classList.add("d-none")
    })  
  }
        function openCard(){
              addEventListener("click", function(){
              document.querySelector(".CoverCard").classList.remove("d-none")
          })  
        }

        
    
    
  return (
    <>
          
        <div onClick={() => openCard()} id='cardM' className='text-center  position-relative '>
            
            <div  className='cardCover  rounded-4   d-flex justify-content-center align-items-center '>
                <div className="position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-plus text-white-50 fa-4x "></i>
                </div>
                
            </div>
            <div className='cImage '>
                
                {props.card.image}
                    
            </div> 
            
            
        </div>
            <div  className="CoverCard py-3 mt-5  d-none  ">

                         <div onClick={() => closeCard()} className=" boxCard rounded-3 text-center">
                                    <div className='container '>
                                        <h2>{props.card.name}</h2>
                                        <div className='w-50 m-auto'>{props.card.image}</div>
                                        {/* {console.log(props)} */}
                                    </div> 
                        </div>
                     
                                 
                
            </div>
            
        


    </>
  )
}
