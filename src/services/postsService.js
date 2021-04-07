import http from "./httpService";

export const fetchPosts = async (subreddit) => {
  const { data } = await http.get(`${subreddit}.json`);
  return data.data.children.map((post) => post.data);
};

export const getSubPosts = async () => {
  const { data } = await http.get("/subreddits.json");
  return data.children.map((subreddit) => subreddit.data);
};
