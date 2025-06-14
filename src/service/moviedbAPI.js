import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["accept"] = "application/json";
axios.defaults.headers.common["Authorization"] = API_KEY;

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

//---------------------------------------------------------------
export const getMovieCreditsAPI = async (id) => {
  const { data } = await axios.get(`movie/${id}/credits`, {
    params: { language: "en-US" },
  });
  return data;
};
