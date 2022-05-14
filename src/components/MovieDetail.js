import React from "react";
import styles from "./MovieDetail.module.css";
import { Link } from "react-router-dom";

function MovieDetail({
  url,
  coverImg,
  title,
  description,
  genres,
  backgroundImg,
  rating,
  runtime,
  year,
}) {
  return (
    <div className={styles.body}>
      <nav className={styles.nav}>
        <Link to={`/`}>
          <img src={`https://yts.mx/assets/images/website/logo-YTS.svg`} />
        </Link>
      </nav>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={backgroundImg} className={styles.backgroundImg} />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={coverImg} alt={title} className={styles.coverImg} />
          <div>
            <h2>
              <a className={styles.title} href={url}>
                {title}
              </a>
            </h2>
            <ul
              style={{
                color: "#fff",
                display: "flex",
                listStyle: "none",
                textAlign: "center",
                paddingLeft: "0px",
              }}
            >
              <li className={styles.info}>평점 : {rating}</li>
              <li className={styles.info}>{year}년</li>
              <li className={styles.info}>{runtime}분</li>
            </ul>
            <p className={styles.description}>{description}</p>
            <ul style={{ display: "flex", paddingLeft: "0px" }}>
              {genres.map((g) => (
                <li className={styles.genres} key={g}>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
