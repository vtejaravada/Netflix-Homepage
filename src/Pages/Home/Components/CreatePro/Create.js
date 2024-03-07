import React from 'react'
import '../CreatePro/Create.css'
import aifunny from '../../../../Assets/ntfimages/aifunnyimges.png'

const Create = () => {
  return (
    <>
      <div className="container_border">
          <div className="container">
                <div className="createImg">
                    <img src={aifunny} alt="" />
                </div>
                <div className="createText">
                    <h2 className='headingDown' >Create profiles for kids</h2>
                    <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>
          </div>
      </div>
    </>
  )
}

export default Create