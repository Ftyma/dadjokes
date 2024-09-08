import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NoJoke from "../components/noJoke";
import styles from "../css/Result.module.css";

interface Joke {
  id: string;
  joke: string;
}
const JokeResult = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [totalJokes, setTotalJokes] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("term") || "";

  const fetchJokes = async () => {
    try {
      const res = await fetch(
        `https://icanhazdadjoke.com/search?term=${encodeURIComponent(query)}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await res.json();
      setJokes(data.results);
      setTotalJokes(data.total_jokes);
    } catch (error) {
      console.error("Error fetching jokes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Your Dad Jokes</h1>
      {loading ? (
        <p>Dad Joke Loading...</p>
      ) : (
        <>
          <p className={styles.subtitle}>
            "{query}" found {totalJokes} jokes{" "}
          </p>
          <div className={styles.cardContainer}>
            {jokes.length > 0 ? (
              jokes.map((joke) => (
                <div key={joke.id} className={styles.card}>
                  {joke.joke}
                </div>
              ))
            ) : (
              <>
                <NoJoke />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default JokeResult;
