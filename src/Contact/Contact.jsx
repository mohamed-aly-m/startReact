import React from 'react'
import './Contact.css'
import StarB from '../Star/StarB/StarB'

export default function Contact() {
  return (
    <>
    <div id='Contact'  className="container-fluid  py-5  ">
        <div className="container my-5 py-5">

            <h2 className='fw-bold text-center'>CONTACT ME</h2>
                <StarB />

            <div className="row ">
                <div className="col-lg-2 col-sm-1"></div>
                <div className="col-lg-8 col-sm-10 mx-auto">
                    <div className='container'>
                        <div className="inputGroup">
                            <input type="text" placeholder="User Name" class="   w-75 " />
                        </div>
                        <div className="inputGroup">
                            <input type="email" placeholder="Email Address" class=" my-4  w-75 " />
                        </div>
                        <div className="inputGroup">
                            <input type="number" placeholder="Phone Number" class="   w-75 " />
                        </div>
                        <div className="inputGroup">
                            <input type="password" placeholder="User Password" class="my-4 w-75 " />
                        </div>
                        <div className="inputGroup">
                            <button className='btn btn-S text-white  my-3 fw-semibold'>Send Message</button>
                            
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        
    </div>
    
    
    </>
  )
}
