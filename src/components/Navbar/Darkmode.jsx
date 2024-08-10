import React from 'react'
import Darkbuttton from '../../assets/sun.png'
import Lightbuttton from '../../assets/light-mode.png'


function Darkmode() {
  return (
    <div>
        <img src={Lightbuttton} className=' w-10 ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12'>
        </img>
    </div>
  )
}

export default Darkmode