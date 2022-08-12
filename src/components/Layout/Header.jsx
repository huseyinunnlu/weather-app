import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="h-12 flex items-center">
      <button
        className="flex  items-center text-white font-bold text-2xl gap-x-3 hover:text-stone-300 transition-all"
        onClick={(e) => navigate(-1)}
      >
        <FaArrowLeft /> Go Back
      </button>
    </header>
  );
}

export default Header;
