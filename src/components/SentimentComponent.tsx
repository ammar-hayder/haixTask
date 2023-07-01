import React from "react";
import Plot from "react-plotly.js";
import { useQuery } from "@tanstack/react-query";
import { fetchSentiment } from "../utils";
import { SentimentDataType } from "../sentiment.dummy";

const SentimentComponent: React.FC = () => {
  const { isLoading, error, data } = useQuery<SentimentDataType>({
    queryKey: ["sentimentQuery"],
    queryFn: fetchSentiment,
    staleTime: 5000,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error || !data) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="SecondTab">
      <Plot
        data={[
          {
            ...data.meanData,
            type: "scatter",
            mode: "lines",
            name: "Average Sentiment",
            marker: { color: "blue" },
          },
        ]}
        layout={{
          width: 600,
          height: 320,
          title: "Average Sentiment Timeline",
        }}
      />{" "}
      <Plot
        data={[
          {
            ...data.positiveComments,
            type: "bar",
            mode: "lines+markers",
            name: "Positive",
            marker: { color: "green" },
          },
          {
            ...data.negativeComments,
            type: "bar",
            mode: "lines+markers",
            name: "Negative",
            marker: { color: "red" },
          },
          {
            ...data.neutralComments,
            type: "bar",
            mode: "lines+markers",
            name: "Neutral",
            marker: { color: "yellow" },
          },
        ]}
        layout={{
          width: 600,
          height: 320,
          title: "Sentiment Category Timeline",
        }}
      />
    </div>
  );
};

export default SentimentComponent;
