import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["accept"] = "application/json";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDI1ZmJmYWI0MjFjYjFjZGRkZWVjMjU5YWYwMGExMSIsIm5iZiI6MTc0OTg1OTYxNi4zOTUsInN1YiI6IjY4NGNiZDIwMzYyODg5NDA4MjNkZjMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B4ystfuLacfyR5a0R4RoeE169M11LtF6137HWz4KImk";

export const getMovieAPI = async () => {
  const { data } = await axios.get("trending/movie/day", {
    params: { language: "en-US" },
  });

  return data;
};

//---------------------------------------------------------------

export const getMovieByIdAPI = async (id) => {
  const { data } = await axios.get(`movie/${id}`, {
    params: { language: "en-US" },
  });
  return data;
};
