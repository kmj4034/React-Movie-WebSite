import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import Loading from "../components/Loading";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <MovieDetail
            url={movie.url}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            description={movie.description_intro}
            genres={movie.genres}
            backgroundImg={movie.background_image}
            rating={movie.rating}
            runtime={movie.runtime}
            year={movie.year}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
