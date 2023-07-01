import React from "react";
import Plot from "react-plotly.js";
import { useQuery } from "@tanstack/react-query";
import { Data, fetchData } from "../utils";

interface PlotData {
  x: string[];
  y: number[];
}
const SentimentComponent: React.FC = () => {
  const { isLoading, error, data } = useQuery<Data>({
    queryKey: ["sentimentQuery"],
    queryFn: () => fetchData("sentimentData"),
    staleTime: 5000,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error || !data) {
    return <div>Error fetching data</div>;
  }
  console.log(data);
  // Assuming `data` is of type `Data` and has `x` and `y` properties as arrays
  const plotData: PlotData = {
    x: data.x,
    y: data.y,
  };

  return (
    <div className="SecondTab">
      <Plot
        data={[
          {
            ...plotData,
            type: "bar",
            mode: "lines+markers",
            marker: { color: "blue" },
          },
        ]}
        layout={{ title: "Sentiment Data" }}
      />
    </div>
  );
};

export default SentimentComponent;
