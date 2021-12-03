import React,{useRef,useState} from 'react';
import validate from './Validateinfo';
import useForm from './useForm';
import './Form.css';



const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit,values, errors } = useForm(
    submitForm,
    validate
  );
  
   

  return (
    <div className='form-content-right1'>
      <form onSubmit={handleSubmit} className='form1' method="POST" noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs1'>
          <label className='form-label1'>Username</label>
          <input
            className='form-input1'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs1'>
          <label className='form-label1'>Email</label>
          <input
            className='form-input1'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs1'>
          <label className='form-label1'>Password</label>
          <input
            className='form-input1'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
            
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs1'>
          <label className='form-label1'>Confirm Password</label>
          <input
            className='form-input1'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button  className='form-input-btn1' type='submit'>
          Sign up
        </button>
        <span className='form-input-login1'>
          Already have an account? Login <a href='/Login'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;