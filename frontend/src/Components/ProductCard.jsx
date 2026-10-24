import {Limk} from 'react-router-dom'
import "../Styles/ProductCard.css"

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
     <img src={product.imageUrl} alt={product.name} className="product-image" />
     <div classname="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <link to={`/product/${product._id}`} className="view-details-button">View Details</link>
     </div>
    </div>
  );
};

export default ProductCard;