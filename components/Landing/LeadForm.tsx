'use client';

import { FormEvent, useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    apptype: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    console.log('Form submitted:', formData);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert('Thank you! Our team will reach out within 4 hours.');

    setFormData({
      name: '',
      email: '',
      phone: '',
      apptype: '',
    });

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      id="hero-form"
      onSubmit={handleSubmit}
      className="relative rounded-[20px] border border-[#E8E2DD] bg-white p-5 shadow-[0_20px_60px_rgba(26,22,20,0.08)] sm:p-7 lg:p-8"
    >
      {/* FREE Badge */}
      <div className="absolute -top-[14px] right-6 rounded-full bg-[#FF5A3C] px-3.5 py-1.5 text-[11px] font-bold tracking-[0.05em] text-white">
        FREE
      </div>

      {/* Heading */}
      <h3 className="mb-1.5 font-[Fraunces] text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#1A1614] sm:text-[24px]">
        Book Your Free 30-Min Strategy Call
      </h3>

      {/* Sub Text */}
      <p className="mb-5 flex items-center gap-1.5 text-[13px] text-[#7A716C]">
        <span>🔒</span>
        100% confidential. NDA signed before discussion. No spam.
      </p>

      {/* Name */}
      <div className="mb-3">
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-xl border-[1.5px] border-[#E8E2DD] bg-[#FAF6F2] px-4 py-3.5 text-[14px] outline-none transition-all duration-200 placeholder:text-[#9A918B] focus:border-[#FF5A3C] focus:bg-white"
        />
      </div>

      {/* Email */}
      <div className="mb-3">
        <input
          type="email"
          name="email"
          placeholder="Work Email *"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl border-[1.5px] border-[#E8E2DD] bg-[#FAF6F2] px-4 py-3.5 text-[14px] outline-none transition-all duration-200 placeholder:text-[#9A918B] focus:border-[#FF5A3C] focus:bg-white"
        />
      </div>

      {/* Phone */}
      <div className="mb-3">
        <input
          type="tel"
          name="phone"
          placeholder="WhatsApp / Phone (with country code) *"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-xl border-[1.5px] border-[#E8E2DD] bg-[#FAF6F2] px-4 py-3.5 text-[14px] outline-none transition-all duration-200 placeholder:text-[#9A918B] focus:border-[#FF5A3C] focus:bg-white"
        />
      </div>

      {/* Select */}
      <div className="mb-3">
        <select
          name="apptype"
          required
          value={formData.apptype}
          onChange={handleChange}
          className="w-full rounded-xl border-[1.5px] border-[#E8E2DD] bg-[#FAF6F2] px-4 py-3.5 text-[14px] text-[#1A1614] outline-none transition-all duration-200 focus:border-[#FF5A3C] focus:bg-white"
        >
          <option value="">What type of app? *</option>
          <option>Custom Food Delivery App</option>
          <option>Zomato / Swiggy Clone</option>
          <option>Cloud Kitchen App</option>
          <option>Multi-Vendor Marketplace</option>
          <option>Single Restaurant App</option>
          <option>Hyperlocal Delivery App</option>
          <option>Not Sure — Need Consultation</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full rounded-xl bg-[#FF5A3C] px-4 py-4 text-[15px] font-bold text-white transition-all duration-200 hover:bg-[#E63E20] hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting
          ? 'Sending...'
          : 'Schedule Free Consultation →'}
      </button>

      {/* Footer */}
      <p className="mt-3.5 text-center text-[12px] text-[#7A716C]">
        ⏱️ Average response time: under 4 hours
      </p>
    </form>
  );
}