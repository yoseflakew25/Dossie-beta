import React from 'react'
import { Link } from 'react-router-dom'
import cardPic from '../../assets/card image.jpg'

const Cta = () => {
  return (
   
    <article className="flex bg-white transition hover:shadow-xl">
    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
      <time
        datetime="2022-10-10"
        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
      >
        <span>2022</span>
        <span className="w-px flex-1 bg-gray-900/10"></span>
        <span>Oct 10</span>
      </time>
    </div>
  
    <div className="hidden sm:block sm:basis-56">
      <img
        alt=""
        src={cardPic}
        className="aspect-square h-full w-full object-cover"
      />
    </div>
  
    <div className="flex flex-1 flex-col justify-between">
      <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
        <a href="#">
          <h3 className="font-bold uppercase text-gray-900">
            Finding the right guitar for your style - 5 tips
          </h3>
        </a>
  
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
          pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
          quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
          atque dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
  
      <div className="sm:flex sm:items-end sm:justify-end">
        <a
          href="#"
          className="block bg-[#3F8EFF] px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-yellow-400"
        >
          See more
        </a>
      </div>
    </div>
  </article>

  )
}

export default Cta