import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        {/* Logo / Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Minimal</h3>
        <p className="text-gray-600 text-sm mb-6">
          A clean, minimal blog focused on design, technology, and thoughtful writing.
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 mb-6">
          {["Privacy", "Terms", "Contact", "RSS"].map((link, idx) => (
            <a
              key={idx}
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-6"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Minimal Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
