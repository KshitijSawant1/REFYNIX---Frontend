import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import PdfScrap from "../assets/Page_Images/PdfScrapPageImage.png";
import remarkGfm from "remark-gfm";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyD4rZax_2OFJmxT7BhOXnz8FuDZzwHER6c";
const jina_api_key =
  "jina_ac2c3bb1706a4d299f8e35050b6d8973jfvgk4BIjBWU3_OXX8e1MuifVEWB";

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const extractPDFText = async (pdfUrl) => {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({ url: pdfUrl });

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jina_api_key}`, // Ensure correct API key
        "X-No-Cache": "true",
        "Content-Type": "application/json",
      },
      body: postData,
    };

    fetch("https://r.jina.ai/", options)
      .then(async (res) => {
        const contentType = res.headers.get("content-type");

        // ✅ Check if response is markdown or plain text
        if (contentType && contentType.includes("text/plain")) {
          return res.text(); // Return raw text
        } else if (contentType && contentType.includes("application/json")) {
          return res.json(); // Parse JSON if available
        } else {
          throw new Error("Invalid response format from API");
        }
      })
      .then((data) => {
        // If data is an object (JSON), extract the 'text' property
        if (typeof data === "object" && data.text) {
          resolve(data.text);
        } else if (typeof data === "string") {
          resolve(data); // Directly return markdown response
        } else {
          reject("No text extracted from PDF.");
        }
      })
      .catch((error) => {
        console.error("Error fetching PDF data:", error);
        reject(error);
      });
  });
};

const processWithGemini = async (pdfText) => {
  try {
    const chatSession = model.startChat({ generationConfig, history: [] });

    const prompt = `
      **Summarized PDF Data:**
      ${pdfText}

      **Explanation of PDF Data:**
      Provide a detailed explanation.
    `;

    const result = await chatSession.sendMessage(prompt);
    return result?.response?.text() || "Error: No response from Gemini AI.";
  } catch (error) {
    console.error("Error processing text with Gemini AI:", error);
    return "Error processing text.";
  }
};

const PdfScrapingandSummarization = () => {
  const [pdfUrl, setPdfUrl] = useState(""); // Store PDF URL
  const [summary, setSummary] = useState(""); // Store AI response
  const [loading, setLoading] = useState(false); // Loading state

  const [copied, setCopied] = useState(false);
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

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900">
        {/* Main Container*/}
        <div className="container mx-auto max-w-6xl bg-white shadow-lg rounded-lg dark:bg-gray-800 p-12 flex flex-col items-center text-center">
          {/* Title Section with Image */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center text-center sm:text-left space-y-6 sm:space-y-0 sm:space-x-8">
            {/* Image */}
            <img
              className="h-auto max-w-xs rounded-[5%]" // Rounded border
              src={PdfScrap}
              alt="image description"
            />

            {/* Title & Subtitle */}
            <div>
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                AI for PDF{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-gray-400">
                  Scraping & Summarization
                </span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl text-justify">
                AI extracts key insights from PDFs, summarizing lengthy
                documents into concise, digestible content, allowing users to
                quickly absorb crucial information, saving time, highlighting
                important details, ensuring efficient document review and
                comprehension, and improving productivity.
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
                <h3 className="text-xl font-medium">Enter Pdf URL</h3>
                <p className="text-sm">Enter Hosted Pdf document URL </p>
              </span>
            </li>
            <li className="flex flex-col items-center text-blue-600 dark:text-blue-500 text-center">
              <span className="flex items-center justify-center w-12 h-12 border border-blue-600 rounded-full text-lg dark:border-blue-500">
                2
              </span>
              <span className="mt-2">
                <h3 className="text-xl font-medium">Process PDF</h3>
                <p className="text-sm">
                  AI extracts relevant content from the document
                </p>
              </span>
            </li>
            <li className="flex flex-col items-center text-blue-600 dark:text-blue-500 text-center">
              <span className="flex items-center justify-center w-12 h-12 border border-blue-600 rounded-full text-lg dark:border-blue-500">
                3
              </span>
              <span className="mt-2">
                <h3 className="text-xl font-medium">Summarized content</h3>
                <p className="text-sm">
                  AI provides a concise document summary
                </p>
              </span>
            </li>
          </ol>

          {/* Search Input Section */}
          <form className="w-full max-w-3xl mt-10">
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
                type="text"
                id="pdf-url"
                value={pdfUrl}
                onChange={(e) => setPdfUrl(e.target.value)}
                className="block w-full p-5 pl-14 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Enter Hosted PDF URL"
                required
              />
            </div>
          </form>

          <div className="flex flex-wrap justify-center mt-6 space-x-4">
            {/* Process Button */}
            <button
              type="button"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 bg-white border border-gray-900 rounded-lg transition duration-300 ease-in-out hover:bg-gray-200 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-400 focus:bg-gray-200 focus:text-black dark:border-white dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600
  sm:px-6 sm:py-3 sm:text-base md:px-7 md:py-3 md:text-lg lg:px-8 lg:py-4 lg:text-xl"
              onClick={async () => {
                setLoading(true);
                try {
                  const extractedText = await extractPDFText(pdfUrl);
                  const processedText = await processWithGemini(extractedText);
                  setSummary(processedText);
                } catch (error) {
                  console.error(error);
                  setSummary("Failed to process PDF.");
                }
                setLoading(false);
              }}
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
      <div className="container mx-auto max-w-6xl bg-blue-100 dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center mt-[10px] mb-[10px] text-center">
        <div className="w-[100%] h-[100%] bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="mb-2 flex justify-between items-center">
            <span className="bg-blue-100 text-blue-800 text-2xl font-semibold px-3 py-1 rounded-sm dark:bg-blue-200 dark:text-blue-800">
              Generated Content:
            </span>
          </div>

          {/* Render Markdown Output */}
          <div className="w-full bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-300 text-justify mt-4">
            <div className="whitespace-pre-wrap break-words prose max-w-none text-gray-800 dark:text-gray-200">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {summary || "No data available yet."}
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

export default PdfScrapingandSummarization;
