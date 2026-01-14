import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import { Link } from "react-router-dom";

const categories = {
  Indoor: [
    { id: 1, name: "Monstera", price: 120 },
    { id: 2, name: "Snake Plant", price: 80 },
    { id: 3, name: "Peace Lily", price: 90 },
    { id: 4, name: "ZZ Plant", price: 100 },
    { id: 5, name: "Philodendron", price: 110 },
    { id: 6, name: "Pothos", price: 70 }
  ],
  Outdoor: [
    { id: 7, name: "Palm", price: 150 },
    { id: 8, name: "Bamboo", price: 130 },
    { id: 9, name: "Aloe Vera", price: 60 },
    { id: 10, name: "Cactus", price: 50 },
    { id: 11, name: "Agave", price: 140 },
    { id: 12, name: "Yucca", price: 160 }
  ],
  Flowering: [
    { id: 13, name: "Rose", price: 100 },
    { id: 14, name: "Orchid", price: 180 },
    { id: 15, name: "Tulip", price: 120 },
    { id: 16, name: "Lily", price: 110 },
    { id: 17, name: "Daisy", price: 70 },
    { id: 18, name: "Sunflower", price: 90 }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const isInCart = id => cartItems.some(item => item.id === id);
  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>

      {Object.keys(categories).map(category => (
        <div key={category}>
          <h2>{category}</h2>
          {categories[category].map(plant => (
            <div key={plant.id}>
              <h4>{plant.name}</h4>
              <p>${plant.price}</p>
              <button
                disabled={isInCart(plant.id)}
                onClick={() => dispatch(addItem(plant))}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
