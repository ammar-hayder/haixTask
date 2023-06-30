import SentimentData from "./sentiment.dummy";
import HashtagsData from "./hashtags.dummy";

// Define the dummy API data response
const dummyData = {
  sentimentData: SentimentData,
  hashtagsData: HashtagsData
};

// Simulate the API call
export const fetchData = async (key) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return dummyData[key];
};
