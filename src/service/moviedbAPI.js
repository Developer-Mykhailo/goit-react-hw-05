import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["accept"] = "application/json";
axios.defaults.headers.common["Authorization"] = API_KEY;

//---------------------trend------------------------------
export const getMovieAPI = async () => {
  try {
    const { data } = await axios.get("trending/movie/day", {
      params: { language: "en-US" },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

//-------------------- cast | reviews ----------------------
export const getMovieDataByTypeAPI = async (id, type = "") => {
  const url = type ? `movie/${id}/${type}` : `movie/${id}`;
  try {
    const { data } = await axios.get(url, {
      params: { language: "en-US" },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

//------------------------- query ---------------------------
export const getMovieByQueryAPI = async (query) => {
  try {
    const { data } = await axios.get("search/movie", {
      params: {
        language: "en-US",
        query,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
