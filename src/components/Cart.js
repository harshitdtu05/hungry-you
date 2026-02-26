import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utilities/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-auto">
      <span className="font-bold text-2xl p-4 m-4">CART</span>
      <button
        className="font-mono m-1 p-1 bg-black text-white rounded-2xl hover:-translate-y-1"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {items.length === 0} <h1>Cart is empty. Please add something!!</h1>
      <div className="w-6/12 align-middle">
        <ItemList key={items.title} itemData={items} />
      </div>
    </div>
  );
};

export default Cart;
