import RandomJoke from "../components/RandomJoke";
import SearchBar from "../components/SearchBar";
import styles from "../css/Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Dad Jokes</h1>
      <h3 className={styles.subtitle}>Your dad jokes are funny, actually.</h3>
      <SearchBar page="Landing" />

      <RandomJoke />
    </div>
  );
};

export default Landing;
