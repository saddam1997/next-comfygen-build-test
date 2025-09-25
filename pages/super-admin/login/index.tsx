"use client";

import React, { FormEvent, useState } from "react";
import { LuAsterisk } from "react-icons/lu";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { SyncLoader } from "react-spinners";
import { loginApi } from '../../../super-admin-components/apiFunctions';
import Image from "next/image";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const validateForm = () => {
    const errors: { username?: string; password?: string } = {};
    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (validateForm()) {
      loginApi({ userName: username, password })
      setLoading(false);
    }
  };


  return (
    <div className="bg-[#F3F4F6]">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <SyncLoader color='#1b2c55' size={20} />
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-11/12 max-w-2xl bg-white border border-neutral-300 md:p-10 py-10 px-4 rounded-3xl shadow-xl">
            <div className="text-center mb-10">
              <Image
                src="/svg/Logo1.svg"
                alt="comfygen-logo"
                className="mx-auto"
                width={240}
                height={51}
                priority
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="">
                  <label
                    className="block mb-2 md:text-base text-sm font-medium text-[#131327]"
                    htmlFor="username"
                  >
                    User Name
                    <LuAsterisk className="inline text-[#8B0A1A] absolute" />
                  </label>
                  <input
                    className={`w-full md:p-3 p-2 leading-6 md:text-base text-sm  placeholder-[#131327]/70 bg-[#D0D5DD] font-normal border-2 rounded-lg outline-none ${errors.username ? "border-red-500" : "border-gray-300"
                      }`}
                    id="username"
                    type="text"
                    placeholder="Enter your username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onBlur={() => validateForm()}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                  )}
                </div>
                <div className="">
                  <label
                    className="block mb-2 md:text-base text-sm font-medium text-[#131327]"
                    htmlFor="password"
                  >
                    Password
                    <LuAsterisk className="inline text-[#8B0A1A] absolute" />
                  </label>
                  <div className="relative">
                    <input
                      className={`w-full md:p-3 p-2 leading-6 md:text-base text-sm  placeholder-[#131327]/70 bg-[#D0D5DD] font-normal border-2 rounded-lg outline-none ${errors.username ? "border-red-500" : "border-gray-300"
                        }`}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={() => validateForm()}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible size={22} />
                      ) : (
                        <AiOutlineEye size={22} />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className={`w-full md:py-3 py-2 px-6  text-center md:text-lg text-base md:mt-10 mt-5 text-white font-medium bg-[#5556D1] rounded-lg transform transition-all duration-700 ${!username && !password ? "cursor-not-allowed opacity-50" : "hover:bg-"}`}
                disabled={!username && !password}>
                LOGIN
              </button>
            </form>
          </div>
        </div>)}
    </div>
  )
}