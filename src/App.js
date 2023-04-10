import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from "./Header";
import { Footer } from "./Footer";

function App() {
  const [trendingGifs, setTrendingGifs] = useState([]);
  useEffect(() => {
    async function fetchTrendingGifs() {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f&limit=21`
      );
      const data = await response.json();
      setTrendingGifs(data.data);
    }
    fetchTrendingGifs();
  }, []);
  return (
    <>
    <Header/>
    <div className="container">
    
    <div className="row">
      {trendingGifs.map((gif) => (
        <div key={gif.id} className="col-4">
          <img src={gif.images.fixed_height.url} alt={gif.title} />
        </div>
      ))}
    </div>
    
  </div>
  <Footer/>
  </>
  );
}

export default App;
