import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SentimentComponent from "./components/SentimentComponent";
import HashtagsComponent from "./components/HashtagsComponent";
import "./styles.css";
const GraphComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
    <div className="App">
      <div className="Tabs">
        <ul className="nav">
          <li
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
          >
            Sentiment
          </li>
          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
          >
            Hashtags
          </li>
        </ul>
        <div className="outlet">
          {activeTab === "tab1" && <SentimentComponent />}
          {activeTab === "tab2" && <HashtagsComponent />}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GraphComponent />
    </QueryClientProvider>
  );
};

export default App;
