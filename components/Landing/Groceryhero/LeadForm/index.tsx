'use client';

import { FormEvent, useEffect, useState } from 'react';

import JSON_DATA from './json/country.json';
import { useRouter } from "next/router";


export default function LeadForm({ Apptype, lead }:any) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    apptype: '',
  });

  const router = useRouter();

  const [countryCode, setCountryCode] = useState('+91');


  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState<any>({});

  const [ipInfo, setIpInfo] = useState<any>({});

  // FETCH USER COUNTRY
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch(
          'https://ipinfo.io/json?token=55503f8d72626d'
        );

        const data = await response.json();

        setIpInfo(data);

        const selectedCountry = JSON_DATA.Country.find(
          (item: any) => item.code === data.country
        );

        if (selectedCountry) {
          setCountryCode(selectedCountry.stdCode);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchIP();
  }, []);

  // INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  // VALIDATION
  const validateForm = () => {
    let newErrors: any = {};

    if (!formData.name) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email) {
      newErrors.email = 'Please enter your email';
    }

    if (!formData.phone) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^\d{7,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter valid phone number';
    }

    if (!formData.apptype) {
      newErrors.apptype = 'Please select app type';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const fullPhoneNumber = `${formData.phone}`;

    const payload = {
      name: formData.name,
      email: formData.email,
      mobNo: fullPhoneNumber,
      stdCode: countryCode,
      subject: lead,
      msg: `Interested In: ${formData.apptype}`,
      ipInfo,
    };

    try {
      const response = await fetch(
        'https://www.comfygen.com/api/v1/createContactUs1111',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      console.log(result, "Response");

      if (result?.code === 0) {
        // alert('Thank you! Our team will reach out within 4 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          apptype: '',
        });

        router.push("/thank-you");
      } else {
        alert(result?.message || 'Something went wrong');
      }
    } catch (error) {
      alert('Network Error');
    }

    setIsSubmitting(false);
  };

  return (
    <form
      id="hero-form"
      onSubmit={handleSubmit}

    >

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

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name}
          </p>
        )}
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

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      {/* PHONE */}
      <div className="mb-3">
        <div className="flex overflow-hidden rounded-xl border-[1.5px] border-[#E8E2DD] bg-[#FAF6F2] text-black focus-within:border-[#FF5A3C] focus-within:bg-white">

          {/* COUNTRY CODE */}
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="w-[110px] border-r border-[#E8E2DD] bg-transparent text-black px-2 text-[14px] outline-none"
          >
            {JSON_DATA.Country.map((country: any, index: number) => (
              <option key={index} value={country.stdCode}>
                {country.flag} {country.stdCode}
              </option>
            ))}
          </select>

          {/* PHONE INPUT */}
          <input
            type="tel"
            name="phone"
            placeholder="WhatsApp / Phone Number *"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent px-4 py-3.5 text-[14px] outline-none placeholder:text-[#9A918B]"
          />
        </div>

        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">
            {errors.phone}
          </p>
        )}
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
          {
            Apptype.map((type: any, index: any) => (
              <option key={index}>{type}</option>
            ))
          }
        </select>

        {errors.apptype && (
          <p className="mt-1 text-sm text-red-500">
            {errors.apptype}
          </p>
        )}
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

    </form>
  );
}