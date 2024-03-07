import React from 'react'
import '../Enjoy on/Enjoy.css'
import video from '../../../../Assets/ntfimages/vediok.mp4'
import Tv from '../../../../Assets/ntfimages/tv.png'
const Enjoy = () => {
  return (
    <>
        <div className="container_border">
            <div className="container">

                <div className="enjoytext">
                    <h2 className='heading' >Enjoy on your TV</h2>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>

                <div className="enjoyVideo">
                    <div className="enjoyImg">
                        <img src={Tv} alt="" />
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Enjoy;