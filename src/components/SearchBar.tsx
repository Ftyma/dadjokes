import React, { useState } from "react";
import commonStyles from "../css/SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import landingStyle from "../css/SearchBarLanding.module.css";
import homeStyle from "../css/SearchBarHome.module.css";

interface SearchBarProps {
  page: "Landing" | "Home";
}

const SearchBar: React.FC<SearchBarProps> = ({ page }) => {
  const styles = page === "Landing" ? landingStyle : homeStyle;
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/results?term=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className={`${commonStyles.inputWrapper} ${styles.inputWrapper}`}>
      <input
        placeholder="Search for terrible jokes...."
        className={commonStyles.input}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="button"
        onClick={handleSearch}
        className={commonStyles.searchBtn}
      >
        <FaSearch
          className={`${commonStyles.searchIcon} ${styles.searchIcon}`}
        />
      </button>
    </div>
  );
};

export default SearchBar;
