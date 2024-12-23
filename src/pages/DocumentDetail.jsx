import React, { useEffect, useState } from 'react'
import Card from '../components/UI/FileCard'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// import TenderLists from '../components/TenderLists'

const DocumentDetail = () => {
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
      className='pt-8 mx-16 '
    >
      
  


<div className=" flex flex-wrap justify-between py-4 px-8 rounded-md border bg-white">
 <p className="font-semibold">
   <span className="font-bold text-blue-700">Reg. Number : </span>
   hello
 </p>
 <p className="font-semibold">
   <span className="font-bold text-blue-700">Name : </span>
   hello        </p>
 <p className="font-semibold">
   <span className="font-bold text-blue-700">Age : </span>
   hello        </p>
 <p className="font-semibold">
   <span className="font-bold text-blue-700">Sex : </span>
   hello        </p>

   <p className="font-semibold">
   <span className="font-bold text-blue-700">Sex : </span>
   hello        </p>
 </div>


    </header>
      <div className='grid grid-cols-4 px-16 py-8 gap-8'>
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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </>
        )}
      </div>
     
    </div>
  )
}

export default DocumentDetail;