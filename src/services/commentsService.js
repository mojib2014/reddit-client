import http from "./httpService";

export const fetchPostComments = async (post) => {
  try {
    const { data } = await http.get(`${post.permalink}.json?limit=30`);
    return data[1].data.children.map((subreddit) => subreddit.data);
  } catch (error) {
    console.log("comments service", error.response.data.message);
  }
};
