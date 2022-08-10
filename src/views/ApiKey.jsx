import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaDotCircle } from "react-icons/fa";
import ErrorMessage from "../components/ApiKey/ErrorMessage";
import { checkApiKeyValid } from "../core/apiRequests";

function ApiKey() {
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [message, setMessage] = useState(false);
  const handleClick = async () => {
    setIsLoading(!isLoading);
    if (apiKey) {
      setMessage(await checkApiKeyValid(apiKey));
    }
    await setIsLoading(false);
  };

  useEffect(() => {
    apiKey.length === 0 && setMessage(false);
  }, [apiKey]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center max-w-2xl mx-auto">
      <h2 className=" text-5xl text-white mb-8">Api Key</h2>
      <div className="relative flex items-center border-indigo-900 border-4 p-2 rounded-full w-full">
        <input
          type="text"
          placeholder="Enter Api Key"
          className="text-2xl rounded-full py-2 px-4 w-full"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />

        {apiKey.length > 0 && (
          <button
            className="absolute  bg-indigo-700 p-2 right-4 border-gray-600 border-2 text-white rounded-full text-xl hover:text-indigo-700 hover:bg-white transition-all"
            onClick={handleClick}
          >
            {isLoading ? (
              <FaDotCircle className="animate-ping text-white" />
            ) : (
              <FaArrowRight />
            )}
          </button>
        )}
      </div>
      <span className="text-white text-center mt-4">
        To get a api key visit www.
      </span>
      {message && <ErrorMessage message={message.message} />}
    </div>
  );
}

export default ApiKey;
