import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 font-[200] px-6 py-8 text-center bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#512c64] text-white">
      &copy; {new Date().getFullYear()} No rights reserved :)
    </footer>
  );
}
