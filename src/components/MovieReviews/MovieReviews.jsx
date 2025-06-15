import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDataByTypeAPI } from "../../service/moviedbAPI";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  //
  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const { results } = await getMovieDataByTypeAPI(movieId, "reviews");
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieReviews();
  }, [movieId]);

  //JSX
  return (
    <>
      {reviews.length !== 0 ? (
        <ul className={s.reviews_list}>
          {reviews.map(({ author, id, content }) => (
            <li key={id}>
              <p className={s.author}>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default MovieReviews;
