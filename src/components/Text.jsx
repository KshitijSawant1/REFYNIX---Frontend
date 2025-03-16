import React, { useState, useRef } from "react";
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

const Test = () => {
  const [copied, setCopied] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [markdownData, setMarkdownData] = useState("");
  const markdownRef = useRef(null);

  const handleCopy = () => {
    if (markdownRef.current) {
      navigator.clipboard.writeText(markdownRef.current.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedLanguage || !userInput.trim()) {
      alert("Please select a language and enter code.");
      return;
    }

    try {
      const chatSession = model.startChat({ generationConfig, history: [] });
      const result = await chatSession.sendMessage(
      `
        ${selectedLanguage}
        \"${userInput}\"\n
        \n
        Give a short concise summary of the user-input code
        Then leave a line
        print "**Formatted Code:**"
        Correctly format the above user-input code WITHOUT doing any logical changes in it\n
        Only give formatted code NOTHING ELSE!!! \n
        Then Leave a line
        print "**Optimized Code:**"
        Give an optimized version of the code, do correct logical changes in code to get good time and space complexity
        Then leave a line
        **Optimization:**
        Give bullet points on how you optimized the above code
        `
      );
      setMarkdownData(result.response.text());
    } catch (error) {
      console.error("Error generating response:", error);
    }
  };

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900 ">
        <div className="container mx-auto max-w-6xl bg-white shadow-lg rounded-lg dark:bg-gray-800 p-12 flex flex-col items-center text-center mt-[50px]">
          <div className="w-full flex flex-col sm:flex-row items-center justify-center text-center sm:text-left space-y-6 sm:space-y-0 sm:space-x-8">
            <img className="h-auto max-w-xs rounded-[5%]" src={Code} alt="image description" />
          </div>

          <div className="w-full flex flex-wrap justify-center items-center gap-3 mt-6">
            {["C", "C++", "C#", "Java", "JavaScript", "Python", "JSON", "CSS", "HTML"].map((language, index) => (
              <button
                key={index}
                onClick={() => setSelectedLanguage(language)}
                className={`relative inline-flex items-center justify-center p-0.5 text-sm font-medium rounded-lg ${{
                  'bg-gradient-to-br from-green-400 to-blue-600 text-white': selectedLanguage === language,
                  'text-gray-900 bg-white border border-gray-300 hover:from-green-400 hover:to-blue-600 hover:text-white': selectedLanguage !== language,
                }}`}
              >
                <span className={`relative px-5 py-2.5 rounded-md ${selectedLanguage === language ? 'bg-transparent text-white' : 'bg-white'}`}>{language}</span>
              </button>
            ))}
          </div>

          <div className="container mx-auto max-w-6xl bg-transparent dark:bg-transparent rounded-lg flex flex-col items-center mt-6 text-center">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="w-full rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 p-4">
                <textarea
                  id="codeInput"
                  rows="12"
                  className="w-full h-[300px] px-4 py-2 text-sm text-gray-900 bg-white border border-gray-400 dark:bg-gray-800 focus:ring-0 dark:text-white rounded-md resize-none"
                  placeholder="Write your code here..."
                  onChange={(e) => setUserInput(e.target.value)}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full mt-4 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800"
                >
                  Submit the Code
                </button>
              </div>
            </form>
          </div>

          <div className="container mx-auto max-w-6xl bg-transparent dark:bg-transparent rounded-lg flex flex-col items-center mt-6 text-center">
            <div className="w-[100%] h-[100%] bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="mb-2 flex justify-between items-center">
                <span className="bg-blue-100 text-blue-800 text-2xl font-semibold px-3 py-1 rounded-sm">Generated Content:</span>
              </div>
              <div className="w-full bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-300 text-left">
                <div ref={markdownRef} className="whitespace-pre-wrap break-words prose max-w-none text-gray-800 dark:text-gray-200">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownData}</ReactMarkdown>
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <button onClick={handleCopy} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5">
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

export default Test;