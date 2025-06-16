import { Link } from "react-router-dom";
import Container from "../components/Container/Container";
import { useEffect, useState } from "react";
import { getMovieAPI } from "../service/moviedbAPI";
import MovieList from "../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const { results } = await getMovieAPI();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, []);

  //
  return (
    <Container>
      <h1 style={{ marginBottom: "10px" }}>Trending today</h1>
      <MovieList movies={movies} />
    </Container>
  );
};

export default HomePage;
