
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import '../Styles/Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchProduct = async () => {
        try {
            const res = await axios.get("/api/products");

            const productList = Array.isArray(res.data)
                ? res.data
                : res.data.products;

            if (!Array.isArray(productList)) {
                throw new Error("API response does not contain a products array");
            }

            setProducts(productList.slice(0, 3));
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
                <p>Discover the best products at unbeatable prices.</p>
            </div>

            <h2>Featured Products</h2>

            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : products.length === 0 ? (
                <div>No products found.</div>
            ) : (
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
