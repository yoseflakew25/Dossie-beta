import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import temp from '../assets/sec.png'
import { toast } from 'react-toastify';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
        setError("Email and password are required.");
        return;
    }

    if (!emailRegex.test(formData.email)) {
        setError("Please enter a valid email address.");
        return;
    }

    localStorage.setItem('user', JSON.stringify(formData));
    console.log('User signed up:', formData);
    setLoading(false);

    toast.success('Registration successful! Please sign in.');

    navigate('/sign-in');
  };


  
  return (
    <div className=" py-24 mx-auto lg:grid-cols-2 lg:grid gap-2 lg:px-64 px-16">
       <div className=" w-3/4 md:6/12 lg:w-3/4">
            <img
              src={temp}
              alt="image"
              loading="lazy"
              width=""
              height=""
    
            />
          </div>

      <div>
      <h1 className='text-center font-semibold my-7 mb-8'>
        <span className='text-md'>ሰላም 👋 , Welcome to Dossie!</span> <br />
        <span className='text-4xl font-bold text-primary opacity-75'>አካውንት ይክፈቱ</span>
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
       
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="bg-primary opacity-75 text-white p-3 rounded-lg uppercase hover:opacity-100 disabled:opacity-55"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        {/* <OAuth/> */}
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-primary">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
          </div>
  );
}