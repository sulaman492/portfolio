// src/components/sections/WorkTogetherSection.jsx
import React, { useState } from 'react';

const WorkTogetherSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/sulamanshahzad492@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Contact] ${formData.subject}`,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        throw new Error('API submission failed');
      }
    } catch (err) {
      // Fallback to mailto link
      const mailtoLink = `mailto:sulamanshahzad492@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      setStatus('success');
      setStatusMessage('Opening your email client to complete sending...');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="mt-16 w-full pr-4 md:pr-8 mb-16">
      {/* Headline */}
      <h1 
        className="font-bold leading-none tracking-normal text-white text-5xl sm:text-7xl md:text-[90px]"
        style={{
          color: '#FFFFFF',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          fontFamily: 'Poppins, "Poppins Placeholder", sans-serif',
        }}
      >
        LET'S WORK
      </h1>
      <h1 
        className="font-bold leading-none tracking-normal text-[rgba(182,180,189,0.2)] text-5xl sm:text-7xl md:text-[90px]"
        style={{
          fontFamily: 'Poppins, "Poppins Placeholder", sans-serif',
        }}
      >
        TOGETHER
      </h1>

      {/* Form Container */}
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 w-full" noValidate>
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label 
              htmlFor="name" 
              className="text-[#998F8F] text-sm font-medium"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full bg-[#2B2928] text-white placeholder-[#7D7777] rounded-lg px-4 py-2 outline-none border transition-all duration-200 text-sm ${
                errors.name ? 'border-red-500' : 'border-transparent focus:border-[#F85B2B]'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            />
            {errors.name && (
              <span className="text-red-400 text-xs mt-0.5">{errors.name}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label 
              htmlFor="email" 
              className="text-[#998F8F] text-sm font-medium"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your@email.com"
              className={`w-full bg-[#2B2928] text-white placeholder-[#7D7777] rounded-lg px-4 py-2 outline-none border transition-all duration-200 text-sm ${
                errors.email ? 'border-red-500' : 'border-transparent focus:border-[#F85B2B]'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            />
            {errors.email && (
              <span className="text-red-400 text-xs mt-0.5">{errors.email}</span>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="flex flex-col gap-1.5 w-full">
          <label 
            htmlFor="subject" 
            className="text-[#998F8F] text-sm font-medium"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className={`w-full bg-[#2B2928] text-white placeholder-[#7D7777] rounded-lg px-4 py-2 outline-none border transition-all duration-200 text-sm ${
              errors.subject ? 'border-red-500' : 'border-transparent focus:border-[#F85B2B]'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          />
          {errors.subject && (
            <span className="text-red-400 text-xs mt-0.5">{errors.subject}</span>
          )}
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-1.5 w-full">
          <label 
            htmlFor="message" 
            className="text-[#998F8F] text-sm font-medium"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className={`w-full bg-[#2B2928] text-white placeholder-[#7D7777] rounded-lg px-4 py-2 outline-none border transition-all duration-200 resize-none text-sm ${
              errors.message ? 'border-red-500' : 'border-transparent focus:border-[#F85B2B]'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          />
          {errors.message && (
            <span className="text-red-400 text-xs mt-0.5">{errors.message}</span>
          )}
        </div>

        {/* Status Alert Message */}
        {statusMessage && (
          <div className={`p-2.5 rounded-lg text-sm font-medium ${
            status === 'success' ? 'bg-green-900/40 text-green-300 border border-green-700/50' : 'bg-red-900/40 text-red-300 border border-red-700/50'
          }`}>
            {statusMessage}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-[#F85B2B] hover:bg-[#E24E20] disabled:bg-[#F85B2B]/60 text-white font-semibold text-sm py-2 rounded-lg transition-colors duration-200 cursor-pointer shadow-md mt-1 flex items-center justify-center gap-2"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
};

export default WorkTogetherSection;