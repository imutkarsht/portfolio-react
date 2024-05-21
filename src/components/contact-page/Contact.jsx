import React, { useState } from 'react';
import HeadText from '../UI/HeadText';
import { scriptURL } from '../../utils/constants';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import SubmitButton from './SubmitButton';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Email', email);
    formData.append('Message', message);

    try {
      const response = await fetch(scriptURL, { method: 'POST', body: formData });
      console.log(response);
      if (response.ok) {
        setSuccessMessage('Thank you! Your response was recorded successfully.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error(`Server responded with status ${response.status}`);
      }
    } catch (error) {
      setErrorMessage('Unknown Error! Response is not sent....');
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
          className='flex flex-col mt-10 gap-6 items-center bg-content-1 bg-opacity-50 dark:bg-opacity-20 border-2 border-black dark:border-white dark:bg-content-2 p-6 rounded-lg shadow-lg'
        >
          <InputField 
            label="Name" 
            type="text" 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name" 
          />
          <InputField 
            label="Email" 
            type="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
          />
          <TextAreaField 
            label="Message" 
            name="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Enter your message" 
          />
          <SubmitButton submitting={submitting} />
          {successMessage && <p className="text-green-600">{successMessage}</p>}
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;