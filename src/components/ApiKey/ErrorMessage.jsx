import React from "react";

function ErrorMessage({ message }) {
  return (
    <div className="text-center mt-4 bg-red-800 bg-opacity-70 text-white text-opacity-1 p-3 rounded-md text-sm min-w-full">
      {message}
    </div>
  );
}

export default ErrorMessage;
