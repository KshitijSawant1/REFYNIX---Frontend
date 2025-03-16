import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { GoogleGenerativeAI } from "@google/generative-ai";
import GovProcess from "../assets/Page_Images/GoveranceProcessPageImage.png";

// Initialize AI Model
const apiKey = "AIzaSyD4rZax_2OFJmxT7BhOXnz8FuDZzwHER6c";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const GoveranceProcess = () => {
  const [copied, setCopied] = useState(false);
  const [prompt, setPrompt] = useState(""); // User input
  const [markdownData, setMarkdownData] = useState(""); // AI response
  const markdownRef = useRef(null);

  const handleCopy = () => {
    if (markdownRef.current) {
      const textToCopy =
        markdownRef.current.innerText || markdownRef.current.textContent;
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt) {
      alert("Please enter a governance-related query.");
      return;
    }

    const chatSession = model.startChat({ generationConfig, history: [] });

    try {
      const result = await chatSession.sendMessage(`
        Answer the following question with respect to the procedure of the Indian governance for various processes, including applying for documents. Also include the required documents and the number of working days it may take: ${prompt}
      `);

      const responseText = result?.response?.text();
      if (!responseText) {
        throw new Error("Received empty response from API");
      }

      setMarkdownData(responseText);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while processing your request.");
    }
  };

  return (
    <>
      <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900">
        {/* Main Container*/}
        <div className="container mx-auto max-w-6xl bg-white shadow-lg rounded-lg dark:bg-gray-800 p-12 flex flex-col items-center text-center">
          {/* Title Section with Image */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center text-center sm:text-left space-y-6 sm:space-y-0 sm:space-x-8">
            {/* Image */}
            <img
              className="h-auto max-w-xs rounded-[5%]"
              src={GovProcess}
              alt="image description"
            />

            {/* Title & Subtitle */}
            <div>
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                AI for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-purple-700">
                  Governance Process
                </span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl text-justify">
                AI for governance process streamlines document analysis by
                extracting and summarizing key insights from complex governance
                documents. It minimizes manual effort, ensuring accurate and
                timely processing of governance tasks, improving overall
                productivity and decision-making efficiency.
              </p>
            </div>
          </div>

          {/* Search Input Section */}
          <form className="w-full max-w-3xl mt-10" onSubmit={handleSubmit}>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="block w-full p-5 pl-14 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Governance-Related Query"
                required
              />
            </div>
          </form>

          {/* Process Button */}
          <div className="flex flex-wrap justify-center mt-6 space-x-4">
            {/* Process Button */}
            <button
              type="button"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 bg-white border border-gray-900 rounded-lg transition duration-300 ease-in-out hover:bg-gray-200 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-400 focus:bg-gray-200 focus:text-black dark:border-white dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600
  sm:px-6 sm:py-3 sm:text-base md:px-7 md:py-3 md:text-lg lg:px-8 lg:py-4 lg:text-xl"
              onClick={handleSubmit}
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white mr-3" // **Added "mr-3" for spacing**
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
              </svg>
              Process
            </button>

            {/* Reload Button */}
            <button
              type="button"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 bg-white border border-gray-900 rounded-lg transition duration-300 ease-in-out hover:bg-gray-200 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-400 focus:bg-gray-200 focus:text-black dark:border-white dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600
    sm:px-6 sm:py-3 sm:text-base md:px-7 md:py-3 md:text-lg lg:px-8 lg:py-4 lg:text-xl"
              onClick={() => window.location.reload()}
            >
              <svg
                className="w-7 h-7 text-gray-800 dark:text-white mr-3 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
                <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
              </svg>
              Reload
            </button>
          </div>
        </div>
      </section>

      {/* Output Box Section */}
      <div className="container mx-auto max-w-6xl bg-blue-100 dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center mt-10 text-center">
        <div className="w-full bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="mb-2 flex justify-between items-center">
            <span className="bg-blue-100 text-blue-800 text-2xl font-semibold px-3 py-1 rounded-sm dark:bg-blue-200 dark:text-blue-800">
              Generated Content:
            </span>
          </div>

          {/* Render Markdown Output */}
          <div className="w-full bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-300 text-justify">
            <div
              ref={markdownRef}
              className="whitespace-pre-wrap break-words prose max-w-none text-gray-800 dark:text-gray-200"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdownData || "No data available yet."}
              </ReactMarkdown>
            </div>
          </div>

          {/* Copy Button */}
          <div className="flex justify-end mt-2">
            <button
              onClick={handleCopy}
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoveranceProcess;
