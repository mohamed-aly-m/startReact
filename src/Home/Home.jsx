
import './Home.css'
import Images1 from '../assets/Images/home.svg'
import Star from '../Star/StarW/Star'





export default function Home(){


    return<>
        
        <div id='Home' className="container-fluid  py-5 d-flex flex-column justify-content-center align-items-center">
            <div className='container my-5  text-white text-center'>
                <img className='py-4' src={Images1}   />
                <h1 className='fw-bold'>START REACT</h1>
                <Star />
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
            
        </div>
    
    </>
}