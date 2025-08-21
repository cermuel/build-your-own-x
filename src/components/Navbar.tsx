"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center md:px-20 px-5 py-4">
      <h1 className="font-extrabold md:text-2xl">Build Your Own</h1>
      <ul className="flex items-center gap-4">
        <li
          className="cursor-pointer"
          onClick={() =>
            window.open("https://twitter.com/yrn_cermuel", "_blank")
          }
        >
          <FaTwitter className="md:size-5.5 " />
        </li>
        <li
          className="cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ngene-samuel-obasi/",
              "_blank"
            )
          }
        >
          <FaLinkedin className="md:size-5.5 " />
        </li>
        <li
          className="cursor-pointer"
          onClick={() =>
            window.open("https://github.com/cermuel/build-your-own-x", "_blank")
          }
        >
          <FaGithub className="md:size-5.5 " />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
