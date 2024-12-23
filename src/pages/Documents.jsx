import React, { useEffect, useState } from 'react'
import Card from '../components/UI/Card'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'

// import TenderLists from '../components/TenderLists'

const Documents = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='bg-[#F3F4F6] '>
      <header
      aria-label="Site Header"
      className='pt-8 mx-16 flex gap-8'
    >
      
      <label className="input input-bordered flex items-center gap-2">
  <input type="text" style={{ width: '400px' }} className="grow" placeholder="Search" /> {/* {{ edit_3 }} */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>


<div className='flex gap-4'>
<button
            
              className="px-10 py-3 text-sm font-medium rounded-2xl text-primary border border- border-primary opacity-75 hover:opacity-100"
            >
Category            </button>

            <button
            
            className="px-10 py-3 text-sm font-medium rounded-2xl text-primary border border- border-primary opacity-75 hover:opacity-100"
          >
Category          </button>

          <button
            
              className="px-10 py-3 text-sm font-medium rounded-2xl text-primary border border- border-primary opacity-75 hover:opacity-100"
            >
Category            </button>


            <button
            
            className="px-10 py-3 text-sm font-medium rounded-2xl text-primary border border- border-primary opacity-75 hover:opacity-100"
          >
Category          </button>

          <button
            
              className="px-10 py-3 text-sm font-medium rounded-2xl text-primary border border- border-primary opacity-75 hover:opacity-100"
            >
             Category
            </button>
            

</div>


    </header>
      <div className='grid grid-cols-3 px-16 py-8 gap-8'>
        {loading ? (
          <>
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
          </>
        ) : (
          <>
          <Link to="/documents/fdfdfd">
          <Card />

          </Link>
          <Link to="/documents/fdfdfd">
          <Card />

          </Link>

          <Link to="/documents/fdfdfd">
          <Card />

          </Link>
          <Link to="/documents/fdfdfd">
          <Card />

          </Link>
          <Link to="/documents/fdfdfd">
          <Card />

          </Link>
          <Link to="/documents/fdfdfd">
          <Card />

          </Link>
          <Link to="/documents/fdfdfd">
          <Card />

          </Link>
            
          </>
        )}
      </div>
     
    </div>
  )
}

export default Documents