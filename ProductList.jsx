import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";
import { Link } from "react-router-dom";

const plants = [
  { id: 1, name: "Monstera", price: 120000, category: "Indoor", img: "/p1.jpg" },
  { id: 2, name: "Lidah Mertua", price: 80000, category: "Indoor", img: "/p2.jpg" },
  { id: 3, name: "Kaktus", price: 50000, category: "Outdoor", img: "/p3.jpg" },
  { id: 4, name: "Aloe Vera", price: 60000, category: "Outdoor", img: "/p4.jpg" },
  { id: 5, name: "Anggrek", price: 150000, category: "Bunga", img: "/p5.jpg" },
  { id: 6, name: "Mawar", price: 100000, category: "Bunga", img: "/p6.jpg" }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isAdded = id => cartItems.some(item => item.id === id);

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div>
      <nav>
        <Link to="/">Beranda</Link> |{" "}
        <Link to="/products">Tanaman</Link> |{" "}
        <Link to="/cart">Keranjang ({cartCount})</Link>
      </nav>

      {["Indoor", "Outdoor", "Bunga"].map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div className="products">
            {plants
              .filter(p => p.category === cat)
              .map(p => (
                <div key={p.id}>
                  <img src={p.img} width="120" />
                  <h4>{p.name}</h4>
                  <p>Rp {p.price}</p>
                  <button
                    disabled={isAdded(p.id)}
                    onClick={() => dispatch(addToCart(p))}
                  >
                    Tambahkan ke Keranjang
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
