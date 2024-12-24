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
    <div>
      <header
      aria-label="Site Header"
      className='pt-8 mx-16 '
    >
      
  


<div className=" flex flex-wrap justify-between py-4 px-8 rounded-md border bg-white">
 <p className="font-semibold">
   <span className="font-bold text-blue-700">Document Name : </span>
   hello
 </p>
 <p className="font-semibold">
   <span className="font-bold text-blue-700">Document Id : </span>
   hello        </p>
   <p className="font-semibold">
   <span className="font-bold text-blue-700">Category : </span>
   hello        </p>
 <p className="font-semibold">
   <span className="font-bold text-blue-700">No of Files : </span>
   hello        </p>
 <p className="font-semibold">
   <span className="font-bold text-blue-700">Date added : </span>
   hello        </p>

   <p className="font-semibold">
   <span className="font-bold text-blue-700">Last Updated : </span>
   hello        </p>
 </div>


    </header>
    <h2 className=' px-16 mt-8 font-bold text-xl text-primary'>Files</h2>

      <div className='grid grid-cols-4 px-8 py-4 gap-4'>
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
<div className='w-full flex justify-center items-center'>
<button
                className="mb-8  px-10 py-3 mx-16 text-sm font-medium rounded-lg text-white bg-primary opacity-75 hover:opacity-100"
              >
                Add More Files
              </button>
</div>

     
     
    </div>
  )
}

export default DocumentDetail;