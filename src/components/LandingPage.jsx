import React from "react";
import RefynixLogo from "../assets//logos/RLogoBluerm.png";
import KS from "../assets/Contributors/KS.png";
import MZ from "../assets/Contributors/MZ.png";
import JD from "../assets/Contributors/JD.png";
import PK from "../assets/Contributors/PK.png";
const LandingPage = () => {
  return (
    <>
      {/* Hero Section with Fixed Gradient */}
      <section className="relative bg-white dark:bg-gray-900">
        {/* Gradient Background (Always Behind) */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 z-0"></div>

        {/* Content (Now Above Gradient) */}
        <div className="relative z-10 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-7xl font-extrabold text-transparent sm:text-9xl md:text-[10rem]">
            REFYNIX
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Empowering Data, Enhancing Intelligence
            </h2>
            <p className="text-gray-500 md:mt-4 text-justify leading-relaxed">
              Data is the foundation of progress, but refinement is the key to
              transformation. By structuring, summarizing, and optimizing
              information, we unlock intelligence, enhance decision-making, and
              pave the way for a smarter, more efficient future.
            </p>
            <div className="mt-4 md:mt-8 flex justify-start">
              <button
                type="button"
                className="px-6 py-3.5 text-base font-medium text-white flex items-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 animate-bounce"
              >
                <svg
                  className="w-5 h-5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
                  />
                </svg>
                Get Started Today
              </button>

              <button
                type="button"
                className="px-3 py-3.5 text-base font-medium text-white flex items-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-3"
                onClick={() =>
                  document
                    .getElementById("problem-statement")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 19 20"
                >
                  <path d="M16.025 15H14.91c.058-.33.088-.665.09-1v-1h2a1 1 0 0 0 0-2h-2.09a5.97 5.97 0 0 0-.26-1h.375a2 2 0 0 0 2-2V6a1 1 0 0 0-2 0v2H13.46a6.239 6.239 0 0 0-.46-.46V6a3.963 3.963 0 0 0-.986-2.6l.693-.693A1 1 0 0 0 13 2V1a1 1 0 0 0-2 0v.586l-.661.661a3.753 3.753 0 0 0-2.678 0L7 1.586V1a1 1 0 0 0-2 0v1a1 1 0 0 0 .293.707l.693.693A3.963 3.963 0 0 0 5 6v1.54a6.239 6.239 0 0 0-.46.46H3V6a1 1 0 0 0-2 0v2a2 2 0 0 0 2 2h.35a5.97 5.97 0 0 0-.26 1H1a1 1 0 0 0 0 2h2v1a6 6 0 0 0 .09 1H2a2 2 0 0 0-2 2v2a1 1 0 1 0 2 0v-2h1.812A6.012 6.012 0 0 0 8 19.907V10a1 1 0 0 1 2 0v9.907A6.011 6.011 0 0 0 14.188 17h1.837v2a1 1 0 0 0 2 0v-2a2 2 0 0 0-2-2ZM11 6.35a5.922 5.922 0 0 0-.941-.251l-.111-.017a5.52 5.52 0 0 0-1.9 0l-.111.017A5.924 5.924 0 0 0 7 6.35V6a2 2 0 1 1 4 0v.35Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <img
          alt="Refinx banner"
          src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
          className="relative z-10 h-full w-full object-cover sm:h-[calc(100%-2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%-4rem)] md:rounded-ss-[60px]"
        />
      </section>

      {/* Problem Statement Section */}
      <section className="relative z-10 bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <h2
              id="problem-statement"
              className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
            >
              <mark className="px-4  text-white bg-blue-600 rounded-sm dark:bg-blue-500">
                Problem Statement
              </mark>
            </h2>

            <p
              className="text-lg font-normal text-black dark:text-gray-400 mb-6 leading-relaxed"
              style={{ textAlign: "justify" }}
            >
              With the increasing reliance on data-driven processes, businesses,
              developers, and content creators face several challenges:
            </p>

            {/* Challenges List */}
            <div className="flow-root">
              <dl className="-my-3 divide-y divide-gray-300 text-sm">
                {[
                  {
                    title: "Data Overload & Unstructured Information",
                    description:
                      "Extracting meaningful insights from large volumes of unstructured data is time-consuming and inefficient.",
                  },
                  {
                    title: "Content Moderation & Optimization Challenges",
                    description:
                      "Crafting optimized, platform-specific content requires time and expertise.",
                  },
                  {
                    title: "Code Complexity & Lack of Readability",
                    description:
                      "Developers struggle with code summarization, formatting inconsistencies, and optimization inefficiencies.",
                  },
                  {
                    title: "Security & Compliance Issues",
                    description:
                      "Ensuring secure data processing, compliance with regulations, and preventing misinformation are crucial challenges.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 gap-2 py-3 sm:grid-cols-3 sm:gap-4"
                  >
                    <dt
                      className="font-medium text-black"
                      style={{ textAlign: "justify" }}
                    >
                      {item.title}
                    </dt>
                    <dd
                      className="text-black sm:col-span-2 leading-relaxed"
                      style={{ textAlign: "justify" }}
                    >
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <p
              className="text-lg font-normal text-black dark:text-gray-400 mt-6 leading-relaxed"
              style={{ textAlign: "justify" }}
            >
              Refinx addresses these challenges by integrating multiple AI
              agents to streamline data extraction, summarization, automation,
              and security, making complex processes more efficient and
              user-friendly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <mark className="px-4  text-white bg-blue-600 rounded-sm dark:bg-blue-500">
                  Vision
                </mark>
              </h2>

              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4 text-justify">
                To create a unified AI-driven ecosystem that simplifies data
                processing, enhances content moderation, optimizes code, and
                ensures secure and efficient automation for developers,
                businesses, and content creators worldwide.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <mark className="px-4  text-white bg-blue-600 rounded-sm dark:bg-blue-500">
                  Mission
                </mark>
              </h2>

              <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 ">
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <b>Effortless Data Processing :</b> AI-driven extraction and
                  summarization.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <b>Streamlined Development :</b>Enhanced code efficiency.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <b>Smart Content Creation :</b>Optimized and refined posts.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <b>Secure & Compliant : </b>Reliable AI solutions.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <b>AI for All :</b> Boosting productivity and accessibility.
                </li>
              </ul>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <h1 className="pt-5 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Contributors
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="flex flex-wrap justify-center gap-6 p-5">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                {/* Image Section */}
                <a href="#">
                  <img
                    className="h-auto w-full rounded-t-lg transition-all duration-300 filter grayscale hover:grayscale-0"
                    src={KS}
                    alt="Profile Cover"
                  />
                </a>

                {/* Content Section */}
                <div className="p-5 text-center">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Kshitij K Sawant
                    </h5>
                  </a>
                  <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                    Software Developer | AI & Data Science Visionary | Educator
                  </p>

                  {/* Buttons Section */}
                  <div className="flex flex-col gap-2">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#24292F] rounded-lg hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Explore Github
                    </a>

                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0A66C2] rounded-lg hover:bg-[#0A66C2]/90 focus:ring-4 focus:outline-none focus:ring-[#0A66C2]/50 dark:focus:ring-[#0A66C2]/55"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.08 20.45H3.56V9h3.52v11.45zM5.32 7.53c-1.13 0-2.05-.92-2.05-2.05 0-1.13.92-2.05 2.05-2.05s2.05.92 2.05 2.05c0 1.13-.92 2.05-2.05 2.05zm14.62 12.92h-3.52v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7H9.88V9h3.38v1.57h.05c.47-.9 1.62-1.86 3.34-1.86 3.57 0 4.23 2.35 4.23 5.42v6.32z" />
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-wrap justify-center gap-6 p-5">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                {/* Image Section */}
                <a href="#">
                  <img
                    className="h-auto w-full rounded-t-lg transition-all duration-300 filter grayscale hover:grayscale-0"
                    src={MZ}
                    alt="Profile Cover"
                  />
                </a>

                {/* Content Section */}
                <div className="p-5 text-center">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Maaz A Shaikh
                    </h5>
                  </a>
                  <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                    Software Developer | AI & Data Science Visionary | Educator
                  </p>

                  {/* Buttons Section */}
                  <div className="flex flex-col gap-2">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#24292F] rounded-lg hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Explore Github
                    </a>

                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0A66C2] rounded-lg hover:bg-[#0A66C2]/90 focus:ring-4 focus:outline-none focus:ring-[#0A66C2]/50 dark:focus:ring-[#0A66C2]/55"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.08 20.45H3.56V9h3.52v11.45zM5.32 7.53c-1.13 0-2.05-.92-2.05-2.05 0-1.13.92-2.05 2.05-2.05s2.05.92 2.05 2.05c0 1.13-.92 2.05-2.05 2.05zm14.62 12.92h-3.52v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7H9.88V9h3.38v1.57h.05c.47-.9 1.62-1.86 3.34-1.86 3.57 0 4.23 2.35 4.23 5.42v6.32z" />
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-wrap justify-center gap-6 p-5">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                {/* Image Section */}
                <a href="#">
                  <img
                    className="h-auto w-full rounded-t-lg transition-all duration-300 filter grayscale hover:grayscale-0"
                    src={JD}
                    alt="Profile Cover"
                  />
                </a>

                {/* Content Section */}
                <div className="p-5 text-center">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Jash V Damania
                    </h5>
                  </a>
                  <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                    Software Developer | AI & Data Science Visionary | Educator
                  </p>

                  {/* Buttons Section */}
                  <div className="flex flex-col gap-2">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#24292F] rounded-lg hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Explore Github
                    </a>

                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0A66C2] rounded-lg hover:bg-[#0A66C2]/90 focus:ring-4 focus:outline-none focus:ring-[#0A66C2]/50 dark:focus:ring-[#0A66C2]/55"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.08 20.45H3.56V9h3.52v11.45zM5.32 7.53c-1.13 0-2.05-.92-2.05-2.05 0-1.13.92-2.05 2.05-2.05s2.05.92 2.05 2.05c0 1.13-.92 2.05-2.05 2.05zm14.62 12.92h-3.52v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7H9.88V9h3.38v1.57h.05c.47-.9 1.62-1.86 3.34-1.86 3.57 0 4.23 2.35 4.23 5.42v6.32z" />
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-wrap justify-center gap-6 p-5">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                {/* Image Section */}
                <a href="#">
                  <img
                    className="h-auto w-full rounded-t-lg transition-all duration-300 filter grayscale hover:grayscale-0"
                    src={PK}
                    alt="Profile Cover"
                  />
                </a>

                {/* Content Section */}
                <div className="p-5 text-center">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Prathmesh Kulkarni
                    </h5>
                  </a>
                  <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                    Software Developer | AI & Data Science Visionary | Educator
                  </p>

                  {/* Buttons Section */}
                  <div className="flex flex-col gap-2">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#24292F] rounded-lg hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Explore Github
                    </a>

                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0A66C2] rounded-lg hover:bg-[#0A66C2]/90 focus:ring-4 focus:outline-none focus:ring-[#0A66C2]/50 dark:focus:ring-[#0A66C2]/55"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.08 20.45H3.56V9h3.52v11.45zM5.32 7.53c-1.13 0-2.05-.92-2.05-2.05 0-1.13.92-2.05 2.05-2.05s2.05.92 2.05 2.05c0 1.13-.92 2.05-2.05 2.05zm14.62 12.92h-3.52v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7H9.88V9h3.38v1.57h.05c.47-.9 1.62-1.86 3.34-1.86 3.57 0 4.23 2.35 4.23 5.42v6.32z" />
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <h1 className="pt-5 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Testimonials
          </h1>

          <div className="grid mb-8 border border-gray-200 rounded-lg shadow-xs dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Very easy this was to integrate
                </h3>
                <p className="my-4">
                  If you care for your time, I hands down would go with this."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Bonnie Green</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 ">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Solid foundation for any project
                </h3>
                <p className="my-4">
                  Designing with Figma components that can be easily translated
                  to the utility classes of Tailwind CSS is a huge timesaver!"
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Roberta Casas</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Lead designer at Dropbox
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Mindblowing workflow
                </h3>
                <p className="my-4">
                  Aesthetically, the well designed components are beautiful and
                  will undoubtedly level up your next application."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Jese Leos</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Software Engineer at Facebook
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Efficient Collaborating
                </h3>
                <p className="my-4">
                  You have many examples that can be used to create a fast
                  prototype for your team."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Joseph McFall</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    CTO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-7xl md:text-8xl">
                  REFYNIX
                </h1>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Tech Stack
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                  <li>
                    <a href="https://react.dev/" className="hover:underline">
                      React.js
                    </a>
                  </li>
                  <li>
                    <a href="https://vite.dev/" className="hover:underline">
                      Vite.js
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind.css
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://flowbite.com/docs/getting-started/introduction/"
                      className="hover:underline"
                    >
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hyperui.dev/"
                      className="hover:underline"
                    >
                      Hyper UI
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  API / AI
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                  <li>
                    <a
                      href="https://www.google.com/search?q=google+ai+studio&oq=google+AI+Studio&sourceid=chrome&ie=UTF-8https://aistudio.google.com/prompts/new_chat"
                      className="hover:underline"
                    >
                      Google AI Studio
                    </a>
                  </li>
                  <li>
                    <a href="https://openai.com/" className="hover:underline">
                      Open AI
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gemini.google.com/?hl=en-IN"
                      className="hover:underline"
                    >
                      Gemini
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.copilotkit.ai/"
                      className="hover:underline"
                    >
                      Copliot Kit Library
                    </a>
                  </li>
                  <li>
                    <a href="https://jina.ai/" className="hover:underline">
                      Jina.AI
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="https://www.firecrawl.dev/"
                      className="hover:underline"
                    >
                      Firecrawl API
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      READme.md
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      MIT Lisence
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
