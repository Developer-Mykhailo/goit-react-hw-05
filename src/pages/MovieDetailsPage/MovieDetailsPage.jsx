import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { getMovieDataByTypeAPI } from "../../service/moviedbAPI";
import Container from "../../components/Container/Container";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  //
  useEffect(() => {
    const getMovieById = async () => {
      try {
        const movieObj = await getMovieDataByTypeAPI(movieId);

        setMovie(movieObj);
      } catch (error) {
        console.log(error);
        navigate("/notfound");
      }
    };

    getMovieById();
  }, [movieId, navigate]);

  const { poster_path, title, overview, genres, vote_average, release_date } =
    movie;

  return (
    <Container>
      <Link className={s.link_back} to="/">
        Go back
      </Link>

      <div className={s.movie_container}>
        <div className={s.img_wrap}>
          <img
            src={
              poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://placehold.co/180x270?text=photo missing"
            }
            alt={title}
          />
        </div>

        <div className={s.content_wrap}>
          <h3>
            {title}({release_date?.slice(0, 4)})
          </h3>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <p className={s.subtitle}>Overview</p>
          <p>{overview}</p>
          <p className={s.subtitle}>Genres</p>
          <p>{genres?.map((genre) => genre.name).join(" ")}</p>
        </div>
      </div>

      <div className={s.more_info}>
        <ul>
          <li>
            <Link to={"cast"}>Cast</Link>
          </li>
          <li>
            <Link to={"reviews"}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </Container>
  );
};

export default MovieDetailsPage;
