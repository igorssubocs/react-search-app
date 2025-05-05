import React from "react";
import { motion } from "framer-motion";
import { SlSocialGithub } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

export default function Header() {
  return (
    <motion.header
      className="w-full bg-transparent py-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="container mx-auto flex justify-between items-center sm:px-6">
        {/* <a className="text-xl font-extrabold italic text-white">AI Finder</a> */}

        <ul className="grid grid-cols-2 gap-1">
          <li>
            <a href="https://github.com/igorssubocs" target="_blank" className="text-white hover:opacity-60 transition">
              <SlSocialGithub className="text-lg" />
            </a>
          </li>
          <li>
            <a href="https://x.com" target="_blank" className="text-white hover:opacity-60 transition">
              <FaXTwitter className="text-lg" />
            </a>
          </li>
        </ul>

        <button className="text-white hover:opacity-60 hover:rotate-45 hover:transition duration-300 dalay-300">
          <IoSettingsOutline className="text-xl" />
        </button>
      </nav>
    </motion.header>
  );
}
