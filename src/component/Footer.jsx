import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b5d3b] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="space-y-4 lg:col-span-1">
          <h2 className="text-3xl font-bold text-lime-400">Trash2Cash</h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Sell Used Electronics the Smart Way
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Sell Now</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="font-semibold mb-4">Policies</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="hover:text-white cursor-pointer">
              Cancellation Policy
            </li>
            <li className="hover:text-white cursor-pointer">Shipment Policy</li>
            <li className="hover:text-white cursor-pointer">
              Privacy & Cookies
            </li>
            <li className="hover:text-white cursor-pointer">Terms of Use</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-semibold mb-4">Help</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">
              Bulk Pickup Request
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-5">
          <h4 className="font-semibold">Get in Touch With Us!</h4>

          {/* Socials */}
          <div className="flex gap-4">
            <SocialIcon icon={Facebook} />
            <SocialIcon icon={Instagram} />
            <SocialIcon icon={Linkedin} />
            <SocialIcon icon={Youtube} />
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 text-sm text-white/90">
            <Phone className="w-5 h-5" />
            <span>+91-XXXXXXXXXX</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 text-sm text-white/90">
            <Mail className="w-5 h-5" />
            <span>support@trash2cash.in</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6 text-center text-sm text-white/80">
        © 2026 Trash2Cash. All rights reserved.
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon: Icon }) => (
  <div className="w-9 h-9 rounded-full bg-white text-[#0b5d3b] flex items-center justify-center cursor-pointer hover:scale-110 transition">
    <Icon className="w-4 h-4" />
  </div>
);

export default Footer;
