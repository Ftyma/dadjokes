import { useLocation, useNavigate } from "react-router-dom";
import styles from "../css/noJoke.module.css";

const NoJoke = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("term") || "";

  const navigate = useNavigate();
  const goToSubmit = () => {
    navigate("/submit-a-joke");
  };

  return (
    <div className={styles.container}>
      <img
        src={"https://pbs.twimg.com/media/FVUZvGuWIAEwaTd.jpg"}
        className={styles.img}
      />
      <p className={styles.text}>
        Uhh Oh... Looks like Dad hasn't come up with any jokes about "{query}"
        yet.
      </p>
      <button className={styles.submitBtn} onClick={goToSubmit}>
        Submit Your Own Dad Joke!
      </button>
    </div>
  );
};

export default NoJoke;
