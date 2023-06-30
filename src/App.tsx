import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SentimentComponent from "./components/SentimentComponent";
import HashtagsComponent from "./components/HashtagsComponent";

const GraphComponent: React.FC = () => {
  return (
    <>
      <SentimentComponent />
      <HashtagsComponent />
    </>
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
