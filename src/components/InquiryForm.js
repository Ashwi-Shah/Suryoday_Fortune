import React, { useState } from 'react';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interested: '',
    range: ''
  });

  const validateForm = () => {
    if (!formData.name) return "Name is required";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) return "Valid 10-digit mobile number is required";
    if (!formData.email) return "Email is required";
    if (!formData.interested) return "Interest selection is required";
    if (!formData.range) return "Price range is required";
    return null;
  };

  const downloadBrochure = () => {
    const errorMessage = validateForm();
    if (errorMessage) {
      alert(errorMessage);
      return;
    }
    const brochureUrl = '/assets/brochure.pdf';
    window.open(brochureUrl, '_blank');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="inquiry-form bg-gray-900 text-[#0C102D] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72 py-8 sm:py-16 rounded-md">
      <div className="bg-gray-200 px-4 sm:px-6 md:px-8 lg:px-12 py-8 border border-gray-300 rounded-md">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl text-[#0C102D] font-bold font-serif mb-6 sm:mb-8">Inquiry Form</h2>
        <label htmlFor="name" className="block text-[#0C102D] font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-gray-400 bg-gray-200 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        />
        <label htmlFor="phone" className="block text-[#0C102D] font-bold mt-4 mb-2">10-Digit Mobile Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full rounded-md bg-gray-200 border border-gray-400 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        />
        <label htmlFor="email" className="block text-[#0C102D] font-bold mt-4 mb-2">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-md bg-gray-200 border border-gray-400 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        />
        <label htmlFor="interested" className="block text-[#0C102D] font-bold mt-4 mb-2">Interested in luxurious 3 & 4 BHK Flats in Gandhinagar?</label>
        <select
          id="interested"
          name="interested"
          value={formData.interested}
          onChange={handleChange}
          required
          className="w-full rounded-md bg-gray-200 border text-[#0C102D] border-gray-400 py-2 px-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          <option value="">Select One</option>
          <option value="3bhk_ground">Interested in Ground Floor</option>
          <option value="3bhk_1st">Interested in 1st Floor</option>
          <option value="3bhk_2nd">Interested in 2nd Floor</option>
          <option value="4bhk_3rd">Interested in 3rd Floor</option>
        </select>
        <label htmlFor="range" className="block text-[#0C102D] font-bold mt-4 mb-2">Price Range:</label>
        <select
          id="range"
          name="range"
          value={formData.range}
          onChange={handleChange}
          required
          className="w-full rounded-md bg-gray-200 border text-[#0C102D] border-gray-400 py-2 px-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          <option value="">Select One</option>
          <option value="1-1.5">Front Portion</option>
          <option value="1.5-2">Middle Portion</option>
          <option value="2-3">Back Portion</option>
        </select>
        <button
          type="button"
          onClick={downloadBrochure}
          className="bg-[#0C102D] text-white hover:bg-gray-200 hover:border hover:border-black hover:text-black focus:ring-2 focus:outline-none focus:ring-[#171d50] font-medium rounded-lg text-sm px-4 sm:px-5 py-2.5 mr-auto mt-6 sm:mt-8 transition-all duration-400 ease-linear hover:tracking-wider hover:shadow-[0_5px_40px_-10px_rgba(0,0,0,0.57)]"
        >
          Download Brochure Now
        </button>
      </div>
    </div>
  );
};

export default InquiryForm;
