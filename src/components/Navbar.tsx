import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../css/Navbar.module.css";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lists = {
    name: ["Home", "Submit a Joke", "About"],
    link: ["home", "submit-a-joke", "about"],
  };

  const navigate = useNavigate();
  const goLanding = () => {
    navigate("/");
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          onClick={goLanding}
          src={
            "https://play-lh.googleusercontent.com/MaHSnW87Az16WFdTIWXn3GoM1zNq-6UTYRqYLB7nUsBZ9NVAVgagjQDuaLhZ38qdiHI"
          }
          alt="Logo"
        />
      </div>
      <ul className={styles.navItems}>
        {lists.name.map((item, i) => (
          <li key={i}>
            <NavLink
              className={`${styles.navLink} ${
                i === activeIndex ? styles.active : ""
              }`}
              to={lists.link[i]}
              onClick={() => setActiveIndex(i)}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
