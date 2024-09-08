import { useEffect, useState } from "react";
import styles from "../css/SubmitJoke.module.css";

const SubmitJoke = () => {
  const [newJoke, setNewJoke] = useState("");
  const [allNewJokes, setAllNewJokes] = useState<string[]>([]);

  useEffect(() => {
    const savedJokes = localStorage.getItem("jokes");
    if (savedJokes) {
      try {
        setAllNewJokes(JSON.parse(savedJokes));
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
      }
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newJoke.trim() === "") {
      alert("Please enter a joke before submitting.");
      return;
    }

    const updatedJokes = [...allNewJokes, newJoke];
    setAllNewJokes(updatedJokes);
    setNewJoke("");

    localStorage.setItem("jokes", JSON.stringify(updatedJokes));
    alert(`Your Dad Joke: "${newJoke}" submitted successfully!`);
  };

  return (
    <div className={styles.container}>
      <h1>Dad Joke Submission Zone</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your dad jokes here...."
          className={styles.inputWrapper}
          value={newJoke}
          onChange={(e) => setNewJoke(e.target.value)}
        ></textarea>
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
        <p className={styles.text}>
          <a href="/newly-submitted-joke">
            or you can view newly submitted dad joke here
          </a>
        </p>
      </form>
    </div>
  );
};

export default SubmitJoke;
