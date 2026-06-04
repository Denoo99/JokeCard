function ProductCard({ title, price, image, onAddToCart, isInCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />

      <h3>{title}</h3>

      <p>{price.toFixed(2)} €</p>

      <button onClick={onAddToCart} disabled={isInCart}>
        {isInCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
