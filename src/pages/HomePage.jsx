import { Link } from "react-router-dom";
import Container from "../components/Container/Container";
import { useEffect, useState } from "react";
import { getMovieAPI } from "../service/moviedbAPI";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  //
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
      <h1>Trending today</h1>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default HomePage;
