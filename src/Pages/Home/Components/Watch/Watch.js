import React from 'react'
import video from '../../../../Assets/vedios/videom.mp4'
import device from '../../../../Assets/ntfimages/device-pile-in.png'
import '../Watch/Watch.css'

const Watch = () => {
  return (
    <>
        <div className="container_border">
          <div className="container">
              <div className="watchtext">
                  <h2 className='heading' >Watch everywhere</h2>
                  <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
              </div>

              <div className="watchVideo">
                  <div className="watchImg">
                      <img src={device} alt="" />
                      <video src={video} autoPlay loop muted ></video>
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Watch