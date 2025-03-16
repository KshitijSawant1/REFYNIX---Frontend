import React, { useState, useRef, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Code from "../assets/Page_Images/CodePageImage.png";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyD4rZax_2OFJmxT7BhOXnz8FuDZzwHER6c");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const CodeSummarization = () => {
  const [copied, setCopied] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [markdownData, setMarkdownData] = useState("");
  const markdownRef = useRef(null);

  // Function to Copy Generated Content
  const handleCopy = () => {
    if (markdownRef.current) {
      const textToCopy =
        markdownRef.current.innerText || markdownRef.current.textContent;
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Function to Handle Form Submission
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault(); // Prevent page refresh

      if (!selectedLanguage || !userInput.trim()) {
        alert("Please select a language and enter code.");
        return;
      }

      try {
        const chatSession = model.startChat({ generationConfig, history: [] });
        const result = await chatSession.sendMessage(
          `Language: ${selectedLanguage}
        Code:
        """${userInput}"""
        
        **Summary:** Provide a concise summary of the code.
        
        **Formatted Code:**
        Reformat the code properly while keeping the same logic.
        
        **Optimized Code:**
        Optimize the code with better time & space complexity.
        
        **Optimization Explanation:**
        Explain optimizations in bullet points.
        `
        );

        // ✅ Fix: Correctly Retrieve Response
        if (result?.response) {
          const responseText = await result.response.text();
          setMarkdownData(responseText);
        } else {
          setMarkdownData("Error: No response received.");
        }
      } catch (error) {
        console.error("Error generating response:", error);
        alert("An error occurred while processing the request.");
      }
    },
    [selectedLanguage, userInput]
  );
  // Dependencies

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900 ">
        {/* Main Container */}
        <div className="container mx-auto max-w-6xl bg-white shadow-lg rounded-lg dark:bg-gray-800 p-12 flex flex-col items-center text-center mt-[50px]">
          {/* Title Section with Image */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center text-center sm:text-left space-y-6 sm:space-y-0 sm:space-x-8">
            <img
              className="h-auto max-w-xs rounded-[5%]"
              src={Code}
              alt="image description"
            />
            {/* Title & Subtitle */}
            <div>
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                AI for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-violet-400">
                  Code Summarization
                </span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl text-justify">
                AI generates concise summaries of complex code, making it easier
                for developers to understand key functions, structures, and
                logic, improving collaboration, maintenance, speeding up code
                reviews, enhancing project efficiency, reducing errors, ensuring
                quality, and accelerating development timelines.
              </p>
            </div>
          </div>

          {/* Step-by-Step Guide (Now with More Space) */}
          <ol className="w-full max-w-4xl flex flex-col items-center justify-center space-y-6 sm:flex-row sm:justify-center sm:space-x-12 sm:space-y-0 mt-12">
            <li className="flex flex-col items-center text-blue-600 dark:text-blue-500 text-center">
              <span className="flex items-center justify-center w-12 h-12 border border-blue-600 rounded-full text-lg dark:border-blue-500">
                1
              </span>
              <span className="mt-2">
                <h3 className="text-xl font-medium">Select Code language</h3>
                <p className="text-sm">
                  Choose programming language, input code
                </p>
              </span>
            </li>
            <li className="flex flex-col items-center text-blue-600 dark:text-blue-500 text-center">
              <span className="flex items-center justify-center w-12 h-12 border border-blue-600 rounded-full text-lg dark:border-blue-500">
                2
              </span>
              <span className="mt-2">
                <h3 className="text-xl font-medium">Process code</h3>
                <p className="text-sm">
                  AI analyzes and extracts key information
                </p>
              </span>
            </li>
            <li className="flex flex-col items-center text-blue-600 dark:text-blue-500 text-center">
              <span className="flex items-center justify-center w-12 h-12 border border-blue-600 rounded-full text-lg dark:border-blue-500">
                3
              </span>
              <span className="mt-2">
                <h3 className="text-xl font-medium">Optimized code-results</h3>
                <p className="text-sm">
                  Generated summary of code structure and functions
                </p>
              </span>
            </li>
          </ol>

          {/* Programming Language Selection */}
          <div className="w-full flex flex-wrap justify-center items-center gap-3 mt-6">
            {[
              "C",
              "C++",
              "C#",
              "Java",
              "JavaScript",
              "Python",
              "JSON",
              "CSS",
              "HTML",
            ].map((language, index) => (
              <button
                key={index}
                onClick={() => setSelectedLanguage(language)}
                className={`relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 
                  rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 
                  group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none 
                  focus:ring-green-200 dark:focus:ring-green-800 transition-all
                  ${
                    selectedLanguage === language
                      ? "bg-gradient-to-br from-green-400 to-blue-600 text-white"
                      : "text-gray-900 bg-white border border-gray-300 hover:from-green-400 hover:to-blue-600 hover:text-white"
                  }`}
              >
                <span
                  className={`relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md ${
                    selectedLanguage === language
                      ? "bg-transparent text-white"
                      : "bg-white dark:bg-gray-900 group-hover:bg-transparent group-hover:dark:bg-transparent"
                  }`}
                >
                  {language}
                </span>
              </button>
            ))}
            <button
              className="relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 
      rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 
      hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      onClick={() => window.location.reload()}
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

          {/* Input Section */}
          <div className="container mx-auto max-w-6xl bg-transparent dark:bg-transparent shadow-none rounded-lg flex flex-col items-center mt-6 text-center">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="w-full rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-300 p-4">
                <label htmlFor="codeInput" className="sr-only">
                  Write Code in Selected Language
                </label>
                <textarea
                  rows="12"
                  className="w-full h-[300px] px-4 py-2 text-sm text-gray-900 bg-white border border-gray-400 dark:bg-gray-800 focus:ring-0 dark:text-white rounded-md resize-none"
                  placeholder="Write your code here..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full mt-4 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-md focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Submit the Code
                </button>
              </div>
            </form>
          </div>

          {/* Output Section with Copy Feature */}
          <div className="container mx-auto max-w-6xl bg-transparent dark:bg-transparent shadow-none rounded-lg flex flex-col items-center mt-6 text-center">
            <div className="w-[100%] h-[100%] bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="mb-2 flex justify-between items-center">
                <span className="bg-blue-100 text-blue-800 text-2xl font-semibold px-3 py-1 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                  Generated Content:
                </span>
              </div>

              {/* Render Markdown Output */}
              <div className="w-full bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-300 text-justify">
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
        </div>
      </section>
    </>
  );
};

export default CodeSummarization;
