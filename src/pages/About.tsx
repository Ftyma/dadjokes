import styles from "../css/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <p>
        Welcome to <span className={styles.title}>The Dad Jokes</span> —a fun
        personal project that brings the best (or worst!) dad jokes, one pun at
        a time.
      </p>
      <p>
        This project using API from{" "}
        <a href="https://icanhazdadjoke.com/">icanhazdadjoke</a>.
      </p>
    </div>
  );
};

export default About;
