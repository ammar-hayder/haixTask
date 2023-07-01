import React from "react";
import Plot, { PlotParams } from "react-plotly.js";
import { useQuery } from "@tanstack/react-query";
import { fetchHashtags } from "../utils";
import { HashTagsDataType } from "../hashtags.dummy";
import * as Plotly from "plotly.js";

const HashtagsComponent: React.FC = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["hashtagsKey"],
    queryFn: fetchHashtags,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error || !data) {
    return <div>Error fetching data</div>;
  }

  // Assuming `data` is of type `Data` and has `x` and `y` properties as arrays
  const Data: Plotly.Data[] = [];
  Object.keys(data).forEach((e: keyof HashTagsDataType) => {
    Data.push({
      x: data[e].x,
      y: data[e].y,
      mode: "markers",
      name: e as string,
      marker: {
        size: [20],
      },
    });
  });
  return (
    <div className="SecondTab">
      <Plot
        data={[...Data]}
        layout={{ width: 600, height: 400, title: "Hashtags Data" }}
      />
    </div>
  );
};

export default HashtagsComponent;
