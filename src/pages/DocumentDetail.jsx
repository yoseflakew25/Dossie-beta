import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/UI/FileCard'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { insuranceFolders } from '../data/data'
import filee from '../assets/Sample_Insurance_Cert.pdf'


const DocumentDetail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [folderDetails, setFolderDetails] = useState(null)

  const file = {
    type: 'image', // or 'pdf'
    src: 'https://www.letterofcredit.biz/wp-content/uploads/insurance-certificate-sample.gif',
    name: 'Sample Image Document',
    fileCount: 24
  };
  


  const file2 = {
    type: 'pdf',
    src: [filee],
    name: 'Sample PDF Document',
    fileCount: 1
  };
  
  // In your render method


  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      const folder = insuranceFolders.find(folder => folder.folderId === id)
      setFolderDetails(folder)
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [id])

  return (
    <div>
      <header
      aria-label="Site Header"
      className='pt-8 mx-16 '
    >
      
  


<div className=" flex flex-wrap justify-between py-4 px-8 rounded-md border bg-white">
 <p className="font-semibold">
   Document Name :    <span className="font-bold text-blue-700">{folderDetails?.folderName} </span>

 </p>
 <p className="font-semibold">
 Document Id : <span className="font-bold text-blue-700">  {folderDetails?.folderId}  </span>
        </p>
   <p className="font-semibold">
   Category : <span className="font-bold text-blue-700"> {folderDetails?.category} </span>
          </p>
 <p className="font-semibold">
 No of Files : <span className="font-bold text-blue-700">  {folderDetails?.noOfFiles}</span>
          </p>
 <p className="font-semibold">
  
  Date added :    <span className="font-bold text-blue-700">  {folderDetails?.dateAdded} </span>    </p>

   <p className="font-semibold">
   Last Updated : <span className="font-bold text-blue-700">{folderDetails?.dateLastUpdated} </span>
          </p>
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
            <Card file={file}/>
            <Card file={file2}/>
            <Card file={file}/>
            <Card file={file}/>
            <Card file={file2}/>
            <Card file={file}/>
            <Card file={file2}/>
            <Card file={file}/>
            <Card file={file}/>
            
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