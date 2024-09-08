import React, { useEffect, useState } from "react";
import styles from "../css/RandomJoke.module.css";

const RandomJoke = () => {
  const [random, setRandom] = useState("");

  const fetchRandom = async () => {
    try {
      const res = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });

      const data = await res.json();
      setRandom(data.joke);
    } catch (error) {
      console.log(error, "cant get a random joke ;(");
    }
  };

  useEffect(() => {
    fetchRandom();
  }, []);
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {" "}
        <span className={styles.title}>Daily Dad Laughs: </span> "{random}"
      </p>
    </div>
  );
};

export default RandomJoke;
