import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
                
        <div id='Footer' className='container-fluid py-5'>
            <div  className="row container  d-flex justify-content-center align-items-center mx-auto py-4">
                <div className="col-lg-4 ">
                    <div className="text-center text-white">
                        <h3 className='fw-bolder'>LOCATION</h3>
                        <p className='mt-4 '>2215 John Daniel Drive <br /> Clark, MO 65243</p>
                        
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="text-center text-white ">
                        <h3 className='fw-bolder'>AROUND THE WEB</h3>
                        
                        <div className='d-flex justify-content-center align-items-center mt-4 '>
                            <a className='me-3'><i className="fa-brands fa-facebook-f btn btn-outline-light rounded-circle fa-1x p-3 fw-bold"></i></a>
                            <a className='me-3'><i className="fa-brands fa-twitter btn btn-outline-light rounded-circle fa-1x p-3 fw-bold "></i></a>
                            <a className='me-3'><i className="fa-brands fa-linkedin-in btn btn-outline-light rounded-circle fa-1x p-3 fw-bold"></i></a>
                            <a className='me-2'><i className="fa-brands fa-youtube btn btn-outline-light rounded-circle fa-1x p-3 fw-bold"></i></a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="text-center text-white mt-sm-4">
                        <h3 className='fw-bolder'>ABOUT FREELANCER</h3>
                        <p className='mt-4 '>Freelance is a free to use, MIT licensed Bootstrap <br /> theme created by Hamza Nouh</p>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        <div className=" container-fluid F-End py-3 ">
            <div className='text-white text-center  '>
                <h6>Copyright © Hamza Nouh 2022</h6>
            </div>
        </div>
    
    </>
    
  )
}
