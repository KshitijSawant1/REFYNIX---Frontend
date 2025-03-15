import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Card from "./components/Card";
import WebScarpingandSummarization from "./components/WebScarpingandSummarization";
import ContentModeration from "./components/ContentModeration";
import CodeSummarization from "./components/CodeSummarization";
import LandingPage from "./components/LandingPage";
import NLPinRegionalLLanguage from "./components/NLPinRegionalLLanguage";
import PdfScrapingandSummarization from "./components/PdfScrapingandSummarization";
import GoveranceProcess from "./components/GoveranceProcess";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl container mx-auto">
        <LandingPage />
        <Card />
        <WebScarpingandSummarization />
        <PdfScrapingandSummarization />
        <CodeSummarization />
        <ContentModeration />
        <NLPinRegionalLLanguage />
        <GoveranceProcess/>
      </main>
    </>
  );
}

export default App;
