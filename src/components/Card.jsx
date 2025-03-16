import React from "react";
import { Link, useNavigate } from "react-router-dom";
import WebScrap from "../assets/Page_Images/WebScrapPageImage.png";
import Code from "../assets/Page_Images/CodePageImage.png";
import Content from "../assets/Page_Images/ContentPageImage.png";
import NLPLanguage from "../assets/Page_Images/NLPLanguagePageImage.png";
import PdfScrap from "../assets/Page_Images/PdfScrapPageImage.png";
import GovProcess from "../assets/Page_Images/GoveranceProcessPageImage.png";
import AgentBuild from "../assets/Page_Images/AgentBuilderPageImage.png";

const Card = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900">
      {/* Title Section */}
      <div className="flex flex-col items-center text-center mb-10 mt-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Professional Network of{" "}
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            AI AGENTS
          </span>
        </h1>
      </div>

      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-1 bg-gray-200 border-0 rounded-sm dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <svg
            className="w-4 h-4 text-gray-700 dark:text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 w-full max-w-6xl place-items-center justify-center">
        {/* Card 1 */}
        <div className=" h-140 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={WebScrap} alt="Technology" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                AI for Web Scraping & Summarization
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
              AI automates web data extraction, transforming unstructured
              content into actionable structured data for research, analysis,
              and market insights, saving time and improving accuracy.
            </p>
            <Link
              to="/web-scrap"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* Card 2 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-140">
          <a href="#">
            <img className="rounded-t-lg" src={PdfScrap} alt="Technology" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                AI for PDF Scraping & Summarization
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
              AI extracts key insights from PDFs and provides concise summaries,
              allowing users to quickly digest crucial information, saving time
              and highlighting important details.
            </p>
            <Link
              to="/pdf-scrap"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>{" "}
        {/* Card 3 */}
        <div className="h-140 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={Code} alt="Technology" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                AI for Code Summarization
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
              AI generates concise summaries of complex code, making it easier
              for developers to understand key functions and logic, improving
              collaboration and reducing review time.
            </p>
            <Link
              to="/code"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>{" "}
        {/* Card 4 */}
        <div className="h-140 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={Content} alt="Technology" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                AI for Content Moderation
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
              AI for content moderation filters harmful content like hate speech
              and spam, ensuring a safe and respectful online environment for
              social platforms and online communities.
            </p>
            <Link
              to="/content"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>{" "}
        {/* Card 5 */}
        <div className=" h-140 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={NLPLanguage} alt="Technology" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                AI for NLP in Regional Language
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
              AI translates between regional languages accurately, preserving
              meaning and context, helping businesses and content creators
              communicate effectively with multilingual and regional audiences.
            </p>
            <Link
              to="/language"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>{" "}
        {/* Card 7 */}
        <div className="h-140 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={GovProcess} alt="Technology" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                AI for Governace Process
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
              AI simplifies governance document review, providing concise
              summaries for improved decision-making, compliance, and
              productivity.
            </p>
            <Link
              to="/governance"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* Card 6 */}
        <div className="h-140 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={AgentBuild} alt="Technology" />
          </a>
          <div className="p-5 flex flex-col items-start">
            {/* Future Aspect Badge */}
            <span className="bg-blue-100 text-blue-800 text-lg font-semibold px-3 py-1 rounded-md dark:bg-blue-200 dark:text-blue-800 mb-3">
              Future Aspect
            </span>

            {/* Title */}
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Build your AI Agent
              </h5>
            </a>

            {/* Description */}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
              AI for building custom agents automates workflows by processing
              URLs, text, and images.
            </p>

            <Link
              to="/agentbuilder"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
