import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import logo from "../assets/images/yumverse-logo.png";

const Footer = () => {
  return (
    <footer className="bg-darkpurple text-white p-7 pb-5">
      <div className="flex justify-between">
        <img src={logo} alt="Logo" className="w-44" />
        <div>
          <h3 className="text-[20px] font-[600] !mb-1">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/recipes">Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/terms-n-conditions">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-[20px] font-[600] !mb-1">Social Links</h3>
            <ul className="flex space-x-2.5">
              <li>
                <a
                  className="text-2xl"
                  href="https://wa.link/ew633l"
                  target="_blank"
                >
                  <RiWhatsappFill />
                </a>
              </li>
              <li>
                <a className="text-[22px]" href="javascript:void(0)">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  className="text-2xl"
                  href="https://www.instagram.com/yum_verse25?igsh=MTA1Zml0aHdkaGt5Yg=="
                  target="_blank"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-[600] !mb-1">Contact Us:</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="mailto:yumverse25@gmail.com"
                  className="socialLink"
                  target="_blank"
                >
                  Mail Us: yumverse25@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923362298975" target="_blank">
                  Call Us: +923362298975
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center mt-7 pt-4 border-t">
        Copyright &copy; 2025 Yumverse. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
