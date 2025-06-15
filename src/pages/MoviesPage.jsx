import { useState } from "react";
import { getMovieByQueryAPI } from "../service/moviedbAPI";
import { Link } from "react-router-dom";

const MoviesPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [movieByQuery, setMovieByQuery] = useState([]);
  //

  //hendlers
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          value={inputValue}
        />
        <button type="submit">Search</button>
      </form>

      {movieByQuery.length > 0 ? (
        <ul>
          {movieByQuery.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Type somthing</p>
      )}
    </div>
  );
};

export default MoviesPage;
