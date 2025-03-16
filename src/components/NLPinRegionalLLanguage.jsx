import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NLPLanguage from "../assets/Page_Images/NLPLanguagePageImage.png";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyD4rZax_2OFJmxT7BhOXnz8FuDZzwHER6c";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
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
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const NLPinRegionalLanguage = () => {
  const [copied, setCopied] = useState(false);
  const markdownRef = useRef(null);
  const [isInputDropdownOpen, setIsInputDropdownOpen] = useState(false);
  const [isOutputDropdownOpen, setIsOutputDropdownOpen] = useState(false);

  const [inputLanguage, setInputLanguage] = useState("Select Input Language");
  const [outputLanguage, setOutputLanguage] = useState(
    "Select Output Language"
  );
  const languages = ["English", "Marathi", "Hindi"];
  const [userInput, setUserInput] = useState("");
  const [markdownData, setMarkdownData] = useState("");

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
    e.preventDefault(); // Prevents page refresh

    if (
      inputLanguage === "Select Input Language" ||
      outputLanguage === "Select Output Language"
    ) {
      alert("Please select both input and output languages.");
      return;
    }

    const chatSession = model.startChat({ generationConfig, history: [] });

    try {
      const result = await chatSession.sendMessage(
        `
        Precondition: any line starting with '//' is an instruction for you
        This is an ${inputLanguage} text:\n
        \"${userInput}\"\n
        //Leave a line
        //give title **Summarized:**\n
        Summarize the above text in ${inputLanguage}
        //Leave a line
        //give title **Explanation:**
        Explain the above text in ${inputLanguage}
        //Leave a line
        //give title **Translation:**
        Translate the above ${inputLanguage} text in ${outputLanguage}
        //Leave a line
        //give title **Summarization in ${outputLanguage}:**
        Summarize the above ${inputLanguage} text in ${outputLanguage}
        //Leave a line
        //give title **Explanation in ${outputLanguage}:**
        Explain the above ${inputLanguage} text in ${outputLanguage}
        `
      );

      // Check if response contains text
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

              <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl text-justify">
                AI translates between regional languages accurately, preserving
                meaning, tone, and context, helping businesses, content
                creators, and users communicate effectively with multilingual,
                regional audiences and diverse communities globally.
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
                <h3 className="text-xl font-medium">Select Translation Path</h3>
                <p className="text-sm">Choose language pair, input text</p>
              </span>
            </li>
            <li className="flex flex-col items-center text-blue-600 dark:text-blue-500 text-center">
              <span className="flex items-center justify-center w-12 h-12 border border-blue-600 rounded-full text-lg dark:border-blue-500">
                2
              </span>
              <span className="mt-2">
                <h3 className="text-xl font-medium">Process translation</h3>
                <p className="text-sm">AI translates and adjusts for meaning</p>
              </span>
            </li>
            <li className="flex flex-col items-center text-blue-600 dark:text-blue-500 text-center">
              <span className="flex items-center justify-center w-12 h-12 border border-blue-600 rounded-full text-lg dark:border-blue-500">
                3
              </span>
              <span className="mt-2">
                <h3 className="text-xl font-medium">Translated text</h3>
                <p className="text-sm">
                  Display translated text with , ensuring context clarity
                </p>
              </span>
            </li>
          </ol>

          {/* Language Selection */}
          <div className="w-full flex flex-wrap justify-center items-center gap-4 mt-6 dropdown-container">
            {/* From Language Dropdown */}
            <span className="bg-blue-100 text-blue-800 text-2xl font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
              From:
            </span>

            <div className="relative">
              <button
                onClick={() => setIsInputDropdownOpen(!isInputDropdownOpen)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
      font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {inputLanguage}
                <svg
                  className="w-2.5 h-2.5 ml-3"
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
              {isInputDropdownOpen && (
                <div className="absolute mt-2 min-w-max z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-md dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {languages
                      .filter((lang) => lang !== outputLanguage)
                      .map((lang) => (
                        <li key={lang}>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              setInputLanguage(lang);
                              setIsInputDropdownOpen(false); // Close dropdown after selection
                            }}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {lang}
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>

            {/* To Language Dropdown */}
            <span className="bg-blue-100 text-blue-800 text-2xl font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
              To:
            </span>

            <div className="relative">
              <button
                onClick={() => setIsOutputDropdownOpen(!isOutputDropdownOpen)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
      font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {outputLanguage}
                <svg
                  className="w-2.5 h-2.5 ml-3"
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
              {isOutputDropdownOpen && (
                <div className="absolute mt-2 min-w-max z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-md dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {languages
                      .filter((lang) => lang !== inputLanguage)
                      .map((lang) => (
                        <li key={lang}>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              setOutputLanguage(lang);
                              setIsOutputDropdownOpen(false); // Close dropdown after selection
                            }}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {lang}
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
            
          </div>

          {/* Input Form */}
          <form className="w-full max-w-3xl mt-6" onSubmit={handleSubmit}>
            <textarea
              rows="4"
              className="w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white"
              placeholder="Enter a Text..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full mt-4 py-2.5 text-white bg-blue-600 rounded-lg"
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
              className="whitespace-pre-wrap break-words prose max-w-none text-gray-800 dark:text-gray-200 overflow-hidden text-justify"
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
