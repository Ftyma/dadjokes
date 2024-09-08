import { useEffect, useState } from "react";

import SearchBar from "../components/SearchBar";
import styles from "../css/Home.module.css";
import { MdContentCopy } from "react-icons/md";
interface Joke {
  id: string;
  joke: string;
}

interface ApiResponse {
  current_page: number;
  limit: number;
  next_page: number | null;
  previous_page: number | null;
  results: Joke[];
  total_jokes: number;
  total_pages: number;
}

const Home = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchJoke = async (page: number = 1) => {
    try {
      const res = await fetch(
        `https://icanhazdadjoke.com/search?page=${page}&limit=20`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data: ApiResponse = await res.json();
      setJokes(data.results);
      setCurrentPage(data.current_page);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching jokes:", error);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      fetchJoke(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      fetchJoke(currentPage - 1);
    }
  };

  const copyJoke = (joke: string) => {
    navigator.clipboard
      .writeText(joke)
      .then(() => {
        alert("Joke copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy joke:", error);
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Dad Joke Headquarters</h1>
      <SearchBar page="Home" />
      <div>
        <p className={styles.text}>
          <a href="/newly-submitted-joke">
            or you can view newly submitted dad joke here
          </a>
        </p>
      </div>

      <div>
        <div className={styles.cardContainer}>
          {jokes.map((joke) => (
            <div key={joke.id} className={styles.card}>
              <div>{joke.joke}</div>
              <button
                onClick={() => copyJoke(joke.joke)}
                className={styles.copyBtn}
              >
                <MdContentCopy />
              </button>
            </div>
          ))}
        </div>
        <div className={styles.paginateBtn}>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={styles.backBtn}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={styles.nextBtn}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
