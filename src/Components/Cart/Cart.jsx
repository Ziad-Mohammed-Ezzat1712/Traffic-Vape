import React from 'react';
import { useCart } from '../../Context/CartContext1';
import { Link } from 'react-router-dom';
export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">
      <h2 className="text-3xl font-bold mb-6 text-[#FD0000] text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1a1a1a] p-4 rounded-lg flex items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white text-xl"
                  >
                    −
                  </button>
                  <span className="text-lg font-medium px-2">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white text-xl"
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-400 mt-2">
                  EGP {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 hover:bg-red-800 px-3 py-1 rounded text-white"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="block mx-auto mt-6 bg-[#FD0000] hover:bg-red-700 px-6 py-2 rounded text-white font-bold"
          >
            Clear Cart
          </button>
        </div>
        
      )}
      <Link
  to="/checkout"
  className="block mx-auto mt-4 bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white font-bold text-center w-fit"
>
  Proceed to Checkout
</Link>
    </div>
  );
}
