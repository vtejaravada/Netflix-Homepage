import React from 'react'
import watchimg from '../../../../Assets/ntfimages/mobile-0819.jpg'
import watchGif from '../../../../Assets/ntfimages/download-icon.gif'
import watchpos from '../../../../Assets/ntfimages/boxshot.png'
import '../Download/Download.css'

const Download = () => {
  return (
    <>
      <div className="container_border">
          <div className="container">

              <div className="downloadposImg">
                  <div className="downloadImg">

                      <div className="watchTop">
                          <img src={watchpos} alt="" />
                          <p>stranger things <br /> <span>downloading...</span> </p>
                          <img src={watchGif} alt="" />
                      </div>

                      <img src={watchimg} alt="" className='bgImg' />
                      
                  </div>
              </div>

              <div className="downloadText">
                  <h2 className='headingDown' >Download your shows to watch offline</h2>
                  <p>Save your favourites easily and always have something to watch.</p>
              </div>

          </div>
      </div>
    </>
  )
}

export default Download