import http from "./httpService";

export default async function getPopular() {
  try {
    const { data } = await http.get("/hot.json");
    return data;
  } catch (error) {
    return error;
  }
}
