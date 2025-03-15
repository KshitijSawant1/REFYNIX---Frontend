import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import NLPLanguage from "../assets/Page_Images/NLPLanguagePageImage.png";
const markdownData = `
### Web Scraping & Summarization
This AI tool extracts and summarizes web content efficiently.
---
## **🔍 Example Output**
\`\`\`json
{
  "title": "Web Scraping & Summarization",
  "summary": "This AI tool extracts and summarizes web content efficiently.",
  "url": "https://example.com/article"
}
\`\`\`
`;

const NLPinRegionalLanguage = () => {
  const [copied, setCopied] = useState(false);
  const markdownRef = useRef(null);
  const [inputLanguage, setInputLanguage] = useState("Select Input Language");
  const [outputLanguage, setOutputLanguage] = useState(
    "Select Output Language"
  );
  const languages = ["English", "Marathi", "Hindi"];

  const handleCopy = () => {
    if (markdownRef.current) {
      const textToCopy =
        markdownRef.current.innerText || markdownRef.current.textContent;
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900">
        <div className="container mx-auto max-w-6xl bg-white shadow-lg rounded-lg dark:bg-gray-800 p-12 flex flex-col items-center text-center">
          {/* Title Section with Image */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center text-center sm:text-left space-y-6 sm:space-y-0 sm:space-x-8">
            {/* Image */}
            <img
              className="h-auto max-w-xs rounded-[5%]"
              src={NLPLanguage}
              alt="image description"
            />

            {/* Title & Subtitle */}
            <div>
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                AI for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-pink-400">
                  NLP in Regional Language
                </span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>

          {/* Step-by-Step Guide */}
          <ol className="w-full max-w-4xl flex flex-col items-center justify-center space-y-6 sm:flex-row sm:justify-center sm:space-x-12 sm:space-y-0 mt-12">
            {["User Info", "Company Info", "Processing"].map((step, index) => (
              <li
                key={index}
                className="flex flex-col items-center text-gray-500 dark:text-gray-400 text-center"
              >
                <span
                  className={`flex items-center justify-center w-12 h-12 border ${
                    index === 0
                      ? "border-blue-600 text-blue-600"
                      : "border-gray-500"
                  } rounded-full text-lg dark:border-gray-400`}
                >
                  {index + 1}
                </span>
                <span className="mt-2">
                  <h3 className="text-xl font-medium">{step}</h3>
                  <p className="text-sm">Step details here</p>
                </span>
              </li>
            ))}
          </ol>

          {/* Language Selection */}
          <div className="w-full flex flex-wrap justify-center items-center gap-4 mt-6">
            {/* From Language Dropdown */}
            <span className="bg-blue-100 text-blue-800 text-2xl font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
              From:
            </span>

            <div className="relative">
              <button
                id="dropdownInputButton"
                data-dropdown-toggle="dropdownInput"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                {inputLanguage || "Select Input Language"}
                <svg
                  className="w-2.5 h-2.5 ml-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown List */}
              <div
                id="dropdownInput"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-md dark:bg-gray-700 absolute mt-2 min-w-max"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {languages
                    .filter((lang) => lang !== outputLanguage)
                    .map((lang) => (
                      <li key={lang} onClick={() => setInputLanguage(lang)}>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {lang}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* To Language Dropdown */}
            <span className="bg-blue-100 text-blue-800 text-2xl font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
              To:
            </span>

            <div className="relative">
              <button
                id="dropdownOutputButton"
                data-dropdown-toggle="dropdownOutput"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                {outputLanguage || "Select Output Language"}
                <svg
                  className="w-2.5 h-2.5 ml-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown List */}
              <div
                id="dropdownOutput"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-md dark:bg-gray-700 absolute mt-2 min-w-max"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {languages
                    .filter((lang) => lang !== inputLanguage)
                    .map((lang) => (
                      <li key={lang} onClick={() => setOutputLanguage(lang)}>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {lang}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Refresh Button */}
            <button
              className="relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 
      rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 
      hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span
                className="relative flex items-center gap-2 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 
      rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent"
              >
                {/* Icon */}
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
                  <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
                </svg>

                {/* Text */}
                <span>Reload</span>
              </span>
            </button>
          </div>

          {/* Input Form */}
          <form className="w-full max-w-3xl mt-6">
            <textarea
              rows="4"
              className="w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              placeholder="Enter a Text..."
              required
            ></textarea>
            <button
              type="submit"
              className="w-full mt-4 py-2.5 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
            >
              Process
            </button>
          </form>
        </div>
      </section>
      {/* Output Box Section */}
      <div className="container mx-auto max-w-6xl bg-blue-100 dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center mt-[10px] mb-[10px] text-center">
        <div className="w-[100%] h-[100%] bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="mb-2 flex justify-between items-center">
            <span className="bg-blue-100 text-blue-800 text-2xl font-semibold px-3 py-1 rounded-sm dark:bg-blue-200 dark:text-blue-800">
              Generated Content:
            </span>
          </div>

          {/* Render Markdown Output */}
          <div className="w-full bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-300 text-left">
            <div
              ref={markdownRef}
              className="whitespace-pre-wrap break-words prose max-w-none text-gray-800 dark:text-gray-200 overflow-hidden"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdownData}
              </ReactMarkdown>
            </div>
          </div>

          {/* Copy Button */}
          <div className="flex justify-end mt-2">
            <button
              onClick={handleCopy}
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NLPinRegionalLanguage;
