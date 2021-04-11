import http from "./httpService";

export default async function getCategories() {
  try {
    const { data } = await http.get("/subreddits.json");
    return data.data.children.map((subreddit) => subreddit.data);
  } catch (error) {
    console.log(error.response.data.message);
  }
}
