import React from 'react'
import Star from '../Star/StarW/Star'
import './About.css'

export default function About() {
  return (
    <>
        <div id='About' className="container-fluid   py-5">
            <div className="container my-5 py-5">
                <h2 className='fw-bold text-center '>ABOUT</h2>
                    <Star  />
                <div className="row  ">
                    <div className="col-md-6 col-sm-12 ">
                        <div className='container d-flex justify-content-end align-content-center'>
                            <p>
                                Freelancer is a free bootstrap theme <br /> created by Route. The download <br />includes the complete source files <br />
                                including HTML, CSS, and JavaScript <br /> 
                                as well as optional SASS stylesheets <br /> for easy customization.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 ">
                        <div className='container d-flex justify-align-content-start align-content-center'>
                            <p>
                                You can create your own custom <br /> avatar for the masthead, change the <br /> icon in the dividers, 
                                and add your <br /> email address to the contact form to <br /> make it fully functional!
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    
    </>
  )
}
