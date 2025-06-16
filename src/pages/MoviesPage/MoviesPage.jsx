import { useEffect, useState } from "react";
import { getMovieByQueryAPI } from "../../service/moviedbAPI";
import s from "./MoviesPage.module.css";
import Container from "../../components/Container/Container";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [movieByQuery, setMovieByQuery] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams(); // access to url
  const query = searchParams.get("query") ?? "";

  //hendlers
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return setInputValue("");

    const nextSearchParams = new URLSearchParams(searchParams); // new instance of url
    nextSearchParams.set("query", inputValue); // put new key with value
    setSearchParams(nextSearchParams); // replace url

    setInputValue("");
  };

  //

  useEffect(() => {
    const getMovieByQuery = async () => {
      try {
        const { results } = await getMovieByQueryAPI(query);
        setMovieByQuery(results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieByQuery();
  }, [query]);

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
