import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
import styles from "./NetflixSeries.module.css";

const NetflixSeries = () => {
  console.log("netflixseries rendered");
  const sudents = [];
  function handleListClick() {
    alert("Hi dear!");
  }
  return (
    <ul className={`${styles.grid} ${styles["grid-three-col"]}`}>
      {/* <Profile /> */}
      {seriesData.map((currData) => {
        return (
          <SeriesCard
            onCardClick={handleListClick}
            key={currData.key}
            currData={currData}
          />
        );
      })}
    </ul>
  );
};

export default NetflixSeries;

export const Footer = () => {
  return <p>Copyright thapa</p>;
};
