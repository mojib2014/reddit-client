import http from "./httpService";

export default async function getCategories(category) {
  return await http.get(`/r/${category}`);
}
