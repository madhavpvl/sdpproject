import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSighnup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <div className='form-cont1'>
    <img src="/images/img-1.jpg" />
      <div className='form-container1'>
    
        <div className='form-content-left1'>
         <h1>Come on!</h1>
         <p>join with us</p>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
     </div>
    </>
  );
};

export default Form;