import React from 'react'
import { Link } from 'react-router-dom'
import cardPic from '../../assets/card image.jpg'
import { Icon } from "@iconify/react";

const Card = () => {
  return (
   
    <div className="card bg-[#f0f6ff] hover:shadow-md ease-out 0.5s">
  <div className="card-body">
  <Icon icon="bi:folder-fill" width="48" height="48" className='text-primary' />
      <p className='text-gray-800 font-semibold' >Folder name</p>

    <p className='text-[#204780] text-sm font-semibold' >23 files</p>

  </div>
</div>

  )
}

export default Card