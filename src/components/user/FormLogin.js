import React from 'react';
import validate from './Validateinfo';
import useForm2 from './useForm2';
import './Form2.css';


const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm2(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right1'>
      <form onSubmit={handleSubmit} className='form1' method="POST" noValidate>
        <h1>
          Log In
        </h1>
       
        <div className='form-inputs1'>
          <label className='form-label1'>Email</label>
          <input
            className='form-input1'
            type='email'
            name='email'
            placeholder='Enter your email'
           
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs1'>
          <label className='form-label'>Password</label>
          <input
            className='form-input1'
            type='password'
            name='password'
            placeholder='Enter your password'
            
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
       
        <button className='form-input-btn1' type='submit'>
          Log in
        </button>
        <span className='form-input-login1'>
         Forgot Password ? Click <a href='#'>here</a>
        </span>
        <ol>
         <li><i class="fab fa-facebook-f"></i></li>
         <li><i class="fab fa-twitter"></i></li>
         <li><i class="fab fa-instagram"></i></li>
         <li><i class="fab fa-linkedin-in"></i></li>
         <li><i class="fab fa-google"></i></li>
      </ol>
      </form>
    </div>
  );
};

export default FormLogin;