import React from 'react'
import './AddDownload.css'

import playapp from '../../assets/playapp.png'

const AddDownload = () => {
  return (
    <div className="app-download">
        <p>For Better Experience Download <br/> BE Bakers App</p>
        <div className="app-download-platforms">
       <img src={playapp} />
           
        </div>
    </div>
  )
}

export default AddDownload