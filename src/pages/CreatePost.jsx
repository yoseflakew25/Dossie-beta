import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import Datepicker from "react-tailwindcss-datepicker"; 


const CreatePost = () => {

  const [formData, setFormData] = useState({
    title: '',
    category: 'Construction and water works',
    price: '',
    startDate: '',
  endDate: '',
  detail: ''
  });
  const [publishError, setPublishError] = useState(null);

  const [value, setValue] = useState({ 
    
    startDate: new Date(), 
    endDate: new Date().setMonth(11) 
    }); 


    const handleValueChange = (newValue) => {

      setFormData({ ...formData, startDate: newValue.startDate,endDate: newValue.endDate });

      } 




  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log('handleSubmit')

  
    e.preventDefault();
    console.log(formData)
    try {
      const res = await fetch('http://localhost:3000/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.title}`);
      }
    } catch (error) {
      setPublishError('Something went wrong');
    }
  };

  return (
    <div className="rounded-3xl bg-white w-full lg:px-80 pt-2 pb-16" >
    <h1 className="text-3xl font-semibold text-center my-7 text-primary">Create a tender Post</h1>
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
       <div className='flex flex-col gap-4 sm:flex-row justify-between'>
      <div className='flex gap-4 justify-center items-center w-full'>
      <input
          type="text"
          placeholder="Title" 
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
          id="username"
          className="border p-3 rounded-lg w-full" 
          required
         
        />

<select
  className="select select-bordered w-full max-w-xs"
  onChange={(e) =>
    setFormData({ ...formData, category: e.target.value })
  }
  defaultValue={formData.category}
>
  <option disabled>Category</option>
  <option value="construction and waterworks">Construction and Waterworks</option>
  <option value="sales, Disposals and Foreclosure">Sales, Disposals and Foreclosure</option>
  <option value="Electrical, Electromechanical and Electronics">Electrical, Electromechanical and Electronics</option>
  <option value="Textile, Garment and leather">Textile, Garment and Leather</option>
  <option value="Office Supplies and Services">Office Supplies and Services</option>
  <option value="IT and Telecom Services">IT and Telecom Services</option>
  <option value="Consultancy">Consultancy</option>
  <option value="Furniture and Furnishing">Furniture and Furnishing</option>
  <option value="Advertising and Promotion">Advertising and Promotion</option>
  <option value="Rent">Rent</option>
</select>


      </div>
     
        </div>
        <div className='grid grid-cols-3 gap-4 justify-center items-center' >
          <p> Tender opening and closing date</p>
          <div>
                         <Datepicker 
  required
primaryColor={"purple"} 
value={value} 
onChange={handleValueChange} 
showShortcuts={true} 
/> 


          </div>
  
                <input
          type="number"
          placeholder="Document Price" 
          onChange={(e) =>
            setFormData({ ...formData, price: e.target.value })
          }
          id="docprice"
          className="border p-3 rounded-lg w-full " 
          required
         
        />
        </div>
    <textarea 
    required
    className="textarea textarea-primary h-56" 
    placeholder="Tender Detail"   
    onChange={(e) =>
            setFormData({ ...formData, detail: e.target.value })
          }></textarea>
      </form>
      <button onClick={handleSubmit}>publish</button>
    </div>
  )
}

export default CreatePost