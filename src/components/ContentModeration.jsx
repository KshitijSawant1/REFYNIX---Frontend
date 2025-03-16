import React, { useState, useRef } from "react";
import Content from "../assets/Page_Images/ContentPageImage.png";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { GoogleGenerativeAI } from "@google/generative-ai";

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

const ContentModeration = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [copied, setCopied] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [markdownData, setMarkdownData] = useState(`
`);

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

    if (!userInput.trim() || !selectedPlatform) {
      alert("Please select a platform and enter a post.");
      return;
    }

    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    try {
      const result = await chatSession.sendMessage(
        `Generate a ${selectedPlatform} post:\n"${userInput}"\n\nOptimize the above user-input and make it postable on the selected social media platform.\nOnly return the optimized paragraphs followed by a line break and pointers for improvement.`
      );

      // Ensure response is valid
      const responseText =
        result?.response?.text() || "Error: No response received.";
      setMarkdownData(responseText);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while processing your request.");
    }
  };

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900">
        {/* Main Container */}
        <div className="container mx-auto max-w-6xl bg-white shadow-lg rounded-lg dark:bg-gray-800 p-12 flex flex-col items-center text-center">
          {/* Title Section with Image */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center text-center sm:text-left space-y-6 sm:space-y-0 sm:space-x-8">
            {/* Image */}
            <img
              className="h-auto max-w-xs rounded-[5%]"
              src={Content}
              alt="image description"
            />

            {/* Title & Subtitle */}
            <div>
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                AI for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-green-400">
                  Content Moderation
                </span>{" "}
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl text-justify">
                AI for content moderation filters harmful content like hate
                speech, spam, and inappropriate material, ensuring a safe and
                respectful online environment for social platforms, communities,
                businesses, and organizations globally, preventing misuse and
                harm while maintaining user trust and safety. damage.
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
                <h3 className="text-xl font-medium">
                  Select platform, Write post
                </h3>
                <p className="text-sm">Choose platform and compose content</p>
              </span>
            </li>
            <li className="flex flex-col items-center text-blue-600 dark:text-blue-500 text-center">
              <span className="flex items-center justify-center w-12 h-12 border border-blue-600 rounded-full text-lg dark:border-blue-500">
                2
              </span>
              <span className="mt-2">
                <h3 className="text-xl font-medium">Process Post</h3>
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
                <h3 className="text-xl font-medium"> Optimized post-results</h3>
                <p className="text-sm">
                  Filtered and safe content ready for publishing
                </p>
              </span>
            </li>
          </ol>

          {/* Social Media Buttons & Refresh Button */}
          <div className="w-full flex flex-wrap justify-center items-center gap-3 mt-6">
            {["LinkedIn", "Twitter (X)", "YouTube Community", "Instagram"].map(
              (platform, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPlatform(platform)}
                  className={`relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 
          rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 
          group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none 
          focus:ring-green-200 dark:focus:ring-green-800 transition-all
          ${
            selectedPlatform === platform
              ? "bg-gradient-to-br from-green-400 to-blue-600 text-white" // Selected button effect
              : "text-gray-900 bg-white border border-gray-300 hover:from-green-400 hover:to-blue-600 hover:text-white"
          }`}
                >
                  <span
                    className={`relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md ${
                      selectedPlatform === platform
                        ? "bg-transparent text-white" // Remove background on selection
                        : "bg-white dark:bg-gray-900 group-hover:bg-transparent group-hover:dark:bg-transparent"
                    }`}
                  >
                    {platform}
                  </span>
                </button>
              )
            )}

            {/* Refresh Button */}
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

          {/* Post Input Form */}
          <form className="w-full max-w-3xl mt-6" onSubmit={handleSubmit}>
            <div className="w-full mb-4 border border-gray-300 rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div className="px-4 py-2 rounded-t-lg dark:bg-gray-800">
                <label htmlFor="postInput" className="sr-only">
                  Your Post
                </label>
                <textarea
                  className="w-full p-4 border rounded-lg"
                  placeholder="Write a Post..."
                  onChange={(e) => setUserInput(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t border-gray-300 dark:border-gray-600">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
                >
                  Process
                </button>
              </div>
            </div>
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
    </>
  );
};

export default ContentModeration;
