import SentimentData from "./sentiment.dummy";
import HashtagsData from "./hashtags.dummy";

// Define the dummy API data response
export interface Data {
  x: string[];
  y: number[];
}

export interface DummyData {
  sentimentData: Data;
  hashtagsData: Data;
}
const dummyData: DummyData = {
  sentimentData: SentimentData,
  hashtagsData: HashtagsData,
};

// Simulate the API call
export const fetchData = async (key: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return dummyData[key as keyof DummyData];
};
