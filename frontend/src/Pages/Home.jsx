import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProduct = async () => {
    try {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="home-container">
      <div className="hero-banner">
        <h1>Welcome to ShopNest</h1>
        <p>Discover the best product at Unbeatable price.</p>
      </div>
      
    </div>
  );
};

export default Home;
