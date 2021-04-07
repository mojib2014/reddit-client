import http from "./httpService";

export const fetchPostComments = async (permalink) => {
  try {
    const { data } = await http.get(`${permalink}.json?limit=10`);
    return data[1].data.children.map((subreddit) => subreddit.data);
  } catch (error) {
    console.log("comments service", error);
  }
};
