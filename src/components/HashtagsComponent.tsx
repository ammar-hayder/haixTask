import Plot from "react-plotly.js";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../utils";

const HashtagsComponent: React.FC = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["fetchSentimentDummy"],
    queryFn: () => fetchData("hashtagsData")
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <Plot
      data={[
        {
          x: data.x,
          y: data.y,
          type: "line",
          marker: { color: "green" }
        }
      ]}
      layout={{ title: "Hashtags Data" }}
    />
  );
};
export default HashtagsComponent;
