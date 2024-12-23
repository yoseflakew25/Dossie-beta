import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      localStorage.setItem('isLoggedIn', 'true');
      toast.success('Login successful!');
      navigate('/documents');
    } else {
      toast.error('User not found. Please check your credentials.');
    }
  };

  return (
    <div className='p-3 py-24 max-w-lg mx-auto'>
      <h1 className='text-center font-semibold my-7 mb-8'>
        <span className='text-md'>ሰላም 👋 , Welcome Back!</span> <br />
        <span className='text-4xl font-bold text-primary opacity-75'>Login to Dossie</span>
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />
        <button
          className='bg-primary opacity-75 text-white p-3 rounded-lg uppercase hover:opacity-95'
        >
          sign in
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
    </div>
  );
}