import React from 'react'
import '../Email/Email.css'
import { IoIosArrowForward } from "react-icons/io";

const Email = () => {
  return (
            <div className="heroButtontext">
                <p>Ready to watch? Enter your email to create or restart your membership.</p>

                    <div className="heroButton">
                        <input type="text" placeholder='Email address' />
                        <div className="arrowBu">
                        <button>Get Started <IoIosArrowForward  className='buttonarrow'/></button>
                        </div>
                    </div> 
            </div>
  )
}
export default Email;