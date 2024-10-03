import React,{useState} from 'react'
import "./BgTextContent.css"
import { Navigate, useNavigate } from 'react-router-dom'


function BgTextContent() {
  const navigate = useNavigate();

  return (
    <div className='BgTextContent-container standard-padding-space standard-margin-space'>
        <div className='container my-5'>
            <div className='text-content text-center py-5'>
                <h3 className='head-h3 my-3 px-3 px-lg-1' style={{color:"white"}}>Transform Your Space Today!</h3>
                <p className='body-paragraph px-3 px-lg-5' style={{color:"white"}}>Unlock the full potential of your home with our expert staging—click here to get started on your stunning transformation!</p>
               
                <button onClick={() => {
                  navigate("/contact")
                }} className="connect-button mt-2">WORK WITH US</button>
               
                
            </div>

        </div>
    </div>
  )
}

export default BgTextContent