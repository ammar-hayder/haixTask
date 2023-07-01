import React from "react";
import Plot from "react-plotly.js";
import { useQuery } from "@tanstack/react-query";
import { fetchData, Data } from "../utils"; // Assuming fetchData returns a Promise<Data>

interface PlotData {
  x: string[];
  y: number[];
}

const HashtagsComponent: React.FC = () => {
  const { isLoading, error, data } = useQuery<Data>({
    queryKey: ["hashtagsQuery"],
    queryFn: () => fetchData("hashtagsData"),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error || !data) {
    return <div>Error fetching data</div>;
  }

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
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "blue" },
          },
        ]}
        layout={{ title: "Hashtags Data" }}
      />
    </div>
  );
};

export default HashtagsComponent;
