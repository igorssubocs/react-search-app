import React from 'react';
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";

export default function SearchForm() {
  return (
    <div className="grid h-full place-items-center">
      <div className="container max-w-[1440px] grid gap-10 text-center mx-auto px-4 sm:px-6 md:px-8">
        {/* Title Animation */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-100">Google</h1>
        </motion.div>

        {/* Search Input */}
        <motion.div 
          className="relative w-full max-w-lg sm:max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <input 
            type="text" 
            className="w-full sm:w-[600px] p-3 pl-10 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            placeholder="Search Google or type a URL" 
          />
          <button 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
          >
            <CiSearch />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
