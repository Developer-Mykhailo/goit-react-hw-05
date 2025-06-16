import { useState } from "react";
import { getMovieByQueryAPI } from "../../service/moviedbAPI";
import s from "./MoviesPage.module.css";
import Container from "../../components/Container/Container";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [movieByQuery, setMovieByQuery] = useState([]);
  //

  //hendlers
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return setInputValue("");
    try {
      const { results } = await getMovieByQueryAPI(inputValue);
      setMovieByQuery(results);
    } catch (error) {
      console.log("Search failed:", error);
    }
    setInputValue("");
  };

  //JSX
  return (
    <Container>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={inputValue}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movieByQuery} />
    </Container>
  );
};

export default MoviesPage;
