import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";

export default function SearchForm() {
  const [query, setQuery] = useState('');

  const googleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      const encodedQuery = encodeURIComponent(query);
      window.open(`https://www.google.com/search?q=${encodedQuery}`, '_blank');
    }
  };

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
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-100">AI Finder</h1>
        </motion.div>

        {/* Search Input */}
        <motion.form 
          onSubmit={googleSearch}
          className="relative w-full max-w-lg sm:max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-[600px] p-3 pl-10 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            placeholder="Search information" 
          />
          <button 
            type="submit"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
          >
            <CiSearch />
          </button>
        </motion.form>
      </div>
    </div>
  );
}
