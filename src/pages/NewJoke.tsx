import React, { useEffect, useState } from "react";
import styles from "../css/Home.module.css";

const NewJoke = () => {
  const [jokes, setJokes] = useState<string[]>([]);

  useEffect(() => {
    const savedJokes = localStorage.getItem("jokes");
    console.log("Saved jokes", savedJokes);
    if (savedJokes) {
      try {
        setJokes(JSON.parse(savedJokes));
      } catch (error) {
        console.error("Error from localStorage:", error);
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Freshly Submitted Laughs</h2>
      <div className={styles.cardContainer}>
        {jokes.length > 0 ? (
          jokes.map((joke, index) => (
            <div className={styles.card} key={index}>
              {joke}
            </div>
          ))
        ) : (
          <p>No jokes available.</p>
        )}
      </div>
    </div>
  );
};

export default NewJoke;
