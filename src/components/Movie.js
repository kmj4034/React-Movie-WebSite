import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieDetail.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to={`/`}>
          <img src={`https://yts.mx/assets/images/website/logo-YTS.svg`} />
        </Link>
      </nav>
      <section
        style={{ display: "flex", alignItems: "center", marginBottom: "90px" }}
      >
        <Link to={`/movie/${id}`}>
          <img className={styles.coverImg} src={coverImg} alt={title} />
        </Link>
        <div>
          <h2 style={{ fontSize: "30px", fontWeight: "800" }}>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p>{summary}</p>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
