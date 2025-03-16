import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import AgentBuild from "../assets/Page_Images/AgentBuilderPageImage.png";

const AgentBuilder = () => {
  const steps = [
    {
      step: "Obtain website URL",
      desc: "Collect the website URL to scrape content from.",
      icon: "1",
    },
    {
      step: "Take screenshot of website URL",
      desc: "Capture a screenshot of the web page to analyze.",
      icon: "2",
    },
    {
      step: "Choose best LLM model",
      desc: "Select the most suitable LLM model based on task complexity and output quality.",
      icon: "3",
    },
    {
      step: "Fit scraped data to LLM model",
      desc: "After selecting the model, input scraped data with clear instructions to the LLM for processing.",
      icon: "4",
    },
    {
      step: "Format output",
      desc: "Structure the LLM model output in a user-friendly format, such as markdown for clarity.",
      icon: "5",
    },
  ];
  return (
    <div>
      <>
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900">
          {/* Main Container*/}
          <div className="container mx-auto max-w-6xl bg-white shadow-lg rounded-lg dark:bg-gray-800 p-12 flex flex-col items-center text-center">
            {/* Title Section with Image */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-center text-center sm:text-left space-y-6 sm:space-y-0 sm:space-x-8">
              {/* Image */}
              <img
                className="h-auto max-w-xs rounded-[5%]" // Rounded border
                src={AgentBuild}
                alt="image description"
              />

              {/* Title & Subtitle */}
              <div>
                {/* Future Aspect Badge */}
                <span className="bg-blue-100 text-blue-800 text-2xl font-semibold px-3 py-1 rounded-md dark:bg-blue-200 dark:text-blue-800 mb-4 inline-block">
                  Future Aspect
                </span>

                {/* Title with Spacing */}
                <h1 className="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                  Build{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-purple-400">
                    Your AI Agent
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl text-justify">
                  AI for building custom agents automates the creation and
                  execution of personalized workflows, allowing users to process
                  inputs like URLs, text, and images. This low-code/no-code
                  solution simplifies development, enabling both technical and
                  non-technical users to improve productivity, reduce manual
                  effort, and automate tasks efficiently.
                </p>
              </div>
            </div><hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>

            <h1 className="pt-5 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Summary
            </h1>
            <form className="w-full max-w-4xl mx-auto mt-6">
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                {/* Agent Name */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Agent Name
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 
          dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter agent name"
                    required
                  />
                </div>

                {/* Upload File */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Upload Icon File
                  </label>
                  <input
                    type="file"
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer 
          bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-300">
                    SVG, PNG, JPG, or GIF (MAX. 800x400px).
                  </p>
                </div>

                {/* Agent Username */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Agent Username
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 
          dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter username"
                    required
                  />
                </div>

                {/* Agent Status */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Agent Status
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 
          dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Active/Inactive"
                    required
                  />
                </div>

                {/* Agent Description */}
                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Agent Description
                  </label>
                  <textarea
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 
          dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter description"
                    rows="3"
                    required
                  />
                </div>

                {/* Approximate Runtime */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Approximate Runtime (in hrs)
                  </label>
                  <input
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 
          dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter runtime"
                    required
                  />
                </div>

                {/* Agent Tags */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Agent Tags
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 
          dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="AI, Automation, NLP"
                    required
                  />
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 
        focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
                  required
                />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  I agree with the{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
            </form>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <h1 className="pt-5 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Smart Flow
            </h1>
            {/* Action Button Group */}
            <div className="flex items-center justify-center space-x-4 bg-white border border-gray-300 rounded-lg p-3 shadow-lg dark:bg-gray-800 ">
              {/* Trigger Button */}
              <button
                type="button"
                className="flex items-center px-6 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 focus:ring-2 focus:ring-gray-500 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                  />
                  <path
                    fill="#fff"
                    d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                  />
                </svg>
                Trigger
              </button>

              {/* Add Action Button */}
              <button
                type="button"
                className="flex items-center px-6 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 focus:ring-2 focus:ring-gray-500 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                  <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>
                Add Action
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center mt-6 space-x-6 bg-white p-6 rounded-lg shadow-lg">
              {steps.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Step Icon */}
                  <div className="flex items-center justify-center w-12 h-12 text-xl bg-gray-200 rounded-full ring-4 ring-white dark:ring-gray-900">
                    {item.icon}
                  </div>

                  {/* Step Title */}
                  <h3 className="mt-3 font-semibold text-gray-900 dark:text-white text-center">
                    {item.step}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center max-w-xs">
                    {item.desc}
                  </p>
                  {/* Modify & Delete Buttons */}
                  <div className="flex space-x-3 mt-3">
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Modify
                    </button>
                    <button
                      type="button"
                      className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
                    >
                      Delete
                    </button>
                  </div>
                  {/* Line Separator (except last step) */}
                  {index < steps.length && (
                    <div className="w-16 border-t-4 border-gray-300 mt-6"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center mt-6 space-x-4">
              {/* Process Button */}
              <button
                type="button"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 bg-white border border-gray-900 rounded-lg transition duration-300 ease-in-out hover:bg-gray-200 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-400 focus:bg-gray-200 focus:text-black dark:border-white dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600
        sm:px-6 sm:py-3 sm:text-base md:px-7 md:py-3 md:text-lg lg:px-8 lg:py-4 lg:text-xl"
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
      </>
    </div>
  );
};

export default AgentBuilder;
