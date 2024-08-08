import React, { useState } from 'react';
import HeadText from '../components/UI/HeadText';
import { BACKEND_API } from '../utils/constants';
import InputField from '../components/contact-page/InputField';
import TextAreaField from '../components/contact-page/TextAreaField';
import SubmitButton from '../components/contact-page/SubmitButton';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const clearMessages = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    const payload = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    try {
      const response = await fetch(`${BACKEND_API}/api/feedback`, { 
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      
      if (response.ok) {
        setSuccessMessage(result.message);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(clearMessages, 5000); 
      } else {
        throw new Error(`Server responded with status ${response.status}: ${result.message}`);
      }
    } catch (error) {
      setErrorMessage(error.message || 'Unknown Error! Response is not sent....');
      setTimeout(clearMessages, 5000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-full max-w-2xl">
        <HeadText heading="Contact" />
        <form 
          onSubmit={handleSubmit}
          className='flex flex-col mt-10 gap-6 items-center bg-content-1 bg-opacity-50 dark:bg-opacity-20 shadow-gray-400 dark:shadow-gray-700 dark:bg-content-2 p-6 rounded-lg shadow-lg'
        >
          <InputField 
            label="name" 
            type="text" 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name" 
          />
          <InputField 
            label="email" 
            type="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
          />
          <TextAreaField 
            label="message" 
            name="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Enter your message" 
          />
          <SubmitButton submitting={submitting} />
          {successMessage && <p className="text-green-600">{successMessage}</p>}
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </form>
        <h3 className='dark:text-zinc-400 text-black text-xs font-semibold mt-1 p-4'><span className='text-base font-bold text-accent-1 dark:text-accent-2'>*</span>server goes to downtime after inactivity so if your message is stuck at submitting please wait for a minute or <a href= {`${BACKEND_API}`}  className='text-accent-1 dark:text-accent-2 underline'>click here</a></h3>
      </div>
    </div>
  );
};

export default Contact;
