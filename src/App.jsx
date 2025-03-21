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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./components/Text";
import AgentBuilder from "./components/AgentBuilder";
import { CopilotPopup } from "@copilotkit/react-ui";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/card" element={<Card />} />
          <Route path="/web-scrap" element={<WebScarpingandSummarization />} />
          <Route path="/content" element={<ContentModeration />} />
          <Route path="/code" element={<CodeSummarization />} />
          <Route path="/language" element={<NLPinRegionalLLanguage />} />
          <Route path="/pdf-scrap" element={<PdfScrapingandSummarization />} />
          <Route path="/governance" element={<GoveranceProcess />} />
          <Route path="/agentbuilder" element={<AgentBuilder />} />
        </Routes>
      </Router>
      <CopilotPopup
        instructions={
          "You are assisting the user as best as you can. Answer in the best way possible given the data you have."
        }
        labels={{
          title: "Popup Assistant",
          initial: "Need any help?",
        }}
      />
    </>
  );
}

export default App;
