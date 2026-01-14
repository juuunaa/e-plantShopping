import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "./CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <nav>
        <Link to="/">Beranda</Link> |{" "}
        <Link to="/products">Tanaman</Link> |{" "}
        <Link to="/cart">Keranjang</Link>
      </nav>

      <h2>Keranjang Belanja</h2>

      {items.map(item => (
        <div key={item.id}>
          <img src={item.img} width="100" />
          <h4>{item.name}</h4>
          <p>Harga: Rp {item.price}</p>
          <p>Total: Rp {item.price * item.quantity}</p>

          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Hapus
          </button>
        </div>
      ))}

      <h3>Total Keranjang: Rp {total}</h3>

      <button>Checkout (Segera Hadir)</button>
      <br />
      <Link to="/products">Lanjutkan Berbelanja</Link>
    </div>
  );
};

export default CartItem;
