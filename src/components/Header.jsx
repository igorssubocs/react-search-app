import React from "react";
import { motion } from "framer-motion";
import { SlSocialGithub } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
  return (
    <motion.header
      className="w-full bg-transparent py-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="container max-w-[1440px] mx-auto flex justify-end items-center">
        {/* <a className="text-xl font-extrabold italic text-white">Google</a> */}

        <ul className="grid grid-cols-2 gap-1">
          <li>
            <a href="https://github.com/igorssubocs" target="_blank" className="text-white hover:opacity-60 transition">
              <SlSocialGithub />
            </a>
          </li>
          <li>
            <a href="https://x.com" target="_blank" className="text-white hover:opacity-60 transition">
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
