import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { colors } from "../config/colours.js";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Logo + Description + Socials */}
          <div>
            <div className="flex items-center mb-4">
              <div
                className={`w-10 h-10 ${colors.dark} flex items-center justify-center mr-3 rounded-md`}
              >
                <span className="text-white font-bold text-[24px]">HF</span>
              </div>
              <h3 className="text-[24px] font-bold text-gray-800">
                Pool Resorto
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-md">
              HF Pool Resort empowers guests to transform raw relaxation into
              clear, compelling experiences — making luxury easier to share,
              understand, and enjoy.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-[#7db6c0] transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#7db6c0] transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#7db6c0] transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#7db6c0] transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
              <div>
                <h5 className="text-gray-800 font-medium text-sm mb-1">
                  Address
                </h5>
                <p className="text-gray-700 text-sm">
                  No 32, Shyamala Gardens, Kunal Garden Street,
                  <br />
                  Akkarai, Chennai, 600119, Tamil Nadu, India
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
              <div>
                <h5 className="text-gray-800 font-medium text-sm mb-1">
                  Phone
                </h5>
                <p className="text-gray-700 text-sm">
                  +91 9384842525
                  <br />
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
              <div>
                <h5 className="text-gray-800 font-medium text-sm mb-1">
                  Email
                </h5>
                <p className="text-gray-700 text-sm">
                  hfpoolresorto@gmail.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-[#e8d7b4] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 HF Pool Resort. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-[#7db6c0] transition text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#7db6c0] transition text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#7db6c0] transition text-sm"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
