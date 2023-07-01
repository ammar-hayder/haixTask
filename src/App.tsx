import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SentimentComponent from "./components/SentimentComponent";
import HashtagsComponent from "./components/HashtagsComponent";
import "./styles.css";

interface Tabs{
  hashtags: boolean,
  sentiment: boolean
}
const GraphComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tabs>({
    hashtags: false,
    sentiment: false
  });
  //  Functions to handle Tab Switching
  const handleTab = (tab: keyof Tabs) => {
    setActiveTab((prevState) => ({
      ...prevState,
      [tab]: !prevState[tab],
    }));
  };
  return (
    <div className="App">
      <div className="Tabs">
        <ul className="nav">
          <li
            className={activeTab.sentiment ? "active" : ""}
            onClick={()=>handleTab('sentiment')}
          >
            Sentiment
          </li>
          <li
            className={activeTab.hashtags ? "active" : ""}
            onClick={()=>handleTab('hashtags')}
          >
            Hashtags
          </li>
        </ul>
        <div className="outlet">
          {activeTab.sentiment && <SentimentComponent />}
          {activeTab.hashtags && <HashtagsComponent />}
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
