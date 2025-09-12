import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaLinkedin, FaFacebook, FaArrowRight } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="flex w-full max-w-5xl shadow-2xl rounded-3xl bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl">
        
        {/* Left side - Login Form */}
        <div className="flex-1 flex flex-col justify-center py-12 px-8 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            {/* Logo / Branding */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16  rounded-full shadow-lg mb-4">
                <img src=".\src\assets\logo.jpg" alt="" className="" />
              </div>
              
              <p className="mt-2  text-xl font-sans text-gray-900">
               Log in or sign up
              </p>
            </div>

            {/* Email Login */}
            {isEmailLogin ? (
              <div className="space-y-6">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required
                    className="block w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="name@company.com"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${isFocused ? 'w-full' : 'w-0'}`}></div>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Continue <FaArrowRight className="w-3 h-3" />
                </button>
                
                <button
                  onClick={() => setIsEmailLogin(false)}
                  className="w-full text-center text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  Back to all options
                </button>
              </div>
            ) : (
              <>
                {/* Social Logins */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex justify-center items-center gap-2 p-3 border border-gray-200 rounded-xl shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-0.5">
                    <FaGoogle className="w-4 h-4 text-red-500" />
                  </button>
                  <button className="flex justify-center items-center gap-2 p-3 border border-gray-200 rounded-xl shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-0.5">
                    <FaGithub className="w-4 h-4" />
                  </button>
                  <button className="flex justify-center items-center gap-2 p-3 border border-gray-200 rounded-xl shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-0.5">
                    <FaLinkedin className="w-4 h-4 text-blue-600" />
                  </button>
                  <button className="flex justify-center items-center gap-2 p-3 border border-gray-200 rounded-xl shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-0.5">
                    <FaFacebook className="w-4 h-4 text-blue-500" />
                  </button>
                </div>

                {/* Divider */}
                <div className="relative flex items-center my-8">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="flex-shrink mx-4 text-gray-400 text-xs">OR</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>

                {/* Email Login Option */}
                <button
                  onClick={() => setIsEmailLogin(true)}
                  className="w-full flex justify-between items-center py-3 px-4 border border-gray-200 rounded-xl shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Continue with email address
                  <FaArrowRight className="w-3 h-3" />
                </button>
              </>
            )}

            {/* Terms */}
            <p className="mt-8 text-xs text-gray-500 text-center">
              By logging in, you agree to our{" "}
              <span className="underline cursor-pointer hover:text-gray-700 transition-colors">Terms</span> &{" "}
              <span className="underline cursor-pointer hover:text-gray-700 transition-colors">Privacy Policy</span>.
            </p>

           
          </div>
        </div>

        {/* Right side - Testimonial */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 items-center justify-center p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-200 opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-indigo-200 opacity-20"></div>
          
          <div className="relative max-w-md text-center z-10">
            <div className="text-7xl text-blue-800 mb-6 opacity-20">"</div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed font-light">
              It's amazing to see how fast devs go from 0 to Blog under a
              domain they own on our platform. It reminds me a lot of what
              Substack did for journalists.
            </p>
            <div className="mt-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                  alt="Guillermo Rauch" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-medium text-gray-900">Guillermo Rauch</p>
              <p className="text-gray-600 text-sm">CEO, Vercel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}