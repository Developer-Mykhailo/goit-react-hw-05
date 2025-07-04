import { useEffect, useState } from "react";
import { getMovieDataByTypeAPI } from "../../service/moviedbAPI";
import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  //
  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const { cast } = await getMovieDataByTypeAPI(movieId, "credits");

        setCredits(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCredits();
  }, [movieId]);

  //jsx
  return (
    <div>
      {credits.length !== 0 ? (
        <ul className={s.character_list}>
          {credits.map(({ character, id, profile_path, original_name }) => (
            <li key={id}>
              <div className={s.img_wrap}>
                <img
                  src={
                    profile_path !== null
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : "https://placehold.co/180x270?text=photo missing"
                  }
                  alt={original_name}
                />
              </div>
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information</p>
      )}
    </div>
  );
};

export default MovieCast;
