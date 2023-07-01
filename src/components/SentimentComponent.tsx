import Plot from "react-plotly.js";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../utils";

const SentimentComponent: React.FC = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["fetchHashtagsDummy"],
    queryFn: () => fetchData("sentimentData"),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }
  return (
    <div className="FirstTab">
      <Plot
        data={[
          {
            x: data?.x,
            y: data?.y,
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
