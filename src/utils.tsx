import HashtagsData, { HashTagsDataType } from "./hashtags.dummy";
import Sentiments, { SentimentDataType } from "./sentiment.dummy";
// Define the dummy API data response
export interface Data {
  x: string[];
  y: number[];
}

export interface DummyData {
  sentimentData: SentimentDataType;
  hashtagsData: HashTagsDataType;
}
const dummyData: DummyData = {
  sentimentData: { ...Sentiments },
  hashtagsData: HashtagsData,
};

// Simulate the API call
export const fetchHashtags = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return dummyData.hashtagsData;
};

export const fetchSentiment = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return dummyData.sentimentData;
};
