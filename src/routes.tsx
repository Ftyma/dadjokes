import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import JokeResult from "./pages/JokeResult";
import Landing from "./pages/Landing";
import NewJoke from "./pages/NewJoke";
import SubmitJoke from "./pages/SubmitJoke";

const RouterConfig = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/results" element={<JokeResult />} />
          <Route path="/submit-a-joke" element={<SubmitJoke />} />
          <Route path="/about" element={<About />} />
          <Route path="/newly-submitted-joke" element={<NewJoke />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default RouterConfig;
