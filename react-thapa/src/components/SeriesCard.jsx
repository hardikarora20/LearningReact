import styles from "./NetflixSeries.module.css";

export const SeriesCard = ({ currData, onCardClick }) => {
  const { id, img_url, name, rating, summ, key } = currData;
  const ratingColor = rating >= 8.5 ? styles.hit : styles.flop;

  return (
    <li onClick={onCardClick} className={styles["grid-element"]} key={key}>
      <img src={img_url} />
      <h1>
        {/*Name: */}
        {name}
      </h1>
      <h4>
        Rating:
        <span className={`${styles.rating} ${ratingColor}`}>{rating}</span>
      </h4>
      <p>
        {/*Summary: */}
        {summ}
      </p>
      <button className={styles.ratingColor}>Watch Now</button>
    </li>
  );
};
