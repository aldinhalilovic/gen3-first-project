import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2024-11-15&to=2024-11-15&sortBy=popularity&apiKey=01e6292bd6294b649bb8675dbc01e555"
      )
      .then((data) => setArticles(data.data.articles));
  }, []);

  console.log(articles);

  return (
    <div>
      <Navbar />
      <HomePage articles={articles} />
      <Footer />
      <div
        style={{
          position: "fixed",
          bottom: 50,
          right: 15,
          height: 75,
          width: 75,
          backgroundColor: "beige",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => window.scroll({ top: 500, behavior: "smooth" })}
      >
        <FaArrowUp size={35} />
      </div>
    </div>
  );
}

export default App;
