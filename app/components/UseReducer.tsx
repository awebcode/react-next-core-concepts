"use client";
// import React, { useReducer } from "react";

// // Define types for state and action
// type State = {
//   count: number;
// };

// type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

// // Reducer function
// const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// // Component using useReducer
// const Counter = () => {
//   const initialState: State = { count: 0 };
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button className="btn" onClick={() => dispatch({ type: "INCREMENT" })}>
//         Increment
//       </button>
//       <button className="btn" onClick={() => dispatch({ type: "DECREMENT" })}>
//         Decrement
//       </button>
//     </div>
//   );
// };

// export default Counter;
import React, { useReducer } from "react";

// Define types for state and actions
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type State = {
  cart: CartItem[];
  totalPrice: number;
};

type Action =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } };

// Reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return {
          ...state,
          cart: updatedCart,
          totalPrice: state.totalPrice + action.payload.price * action.payload.quantity,
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalPrice: state.totalPrice + action.payload.price * action.payload.quantity,
      };

    case "REMOVE_ITEM":
      const removedItem = state.cart.find((item) => item.id === action.payload);
      if (removedItem) {
        console.log("removed item", removedItem);
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
          totalPrice: state.totalPrice - removedItem.price * removedItem.quantity,
        };
      }
      return state;

    case "UPDATE_QUANTITY":
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      const updatedItem = updatedCart.find((item) => item.id === action.payload.id);
      if (updatedItem) {
        return {
          ...state,
          cart: updatedCart,
          totalPrice:
            state.totalPrice +
            (action.payload.quantity - updatedItem.quantity) * updatedItem.price,
        };
      }
      return state;

    default:
      return state;
  }
};

// Component using useReducer
const Counter = () => {
  const initialState: State = {
    cart: [],
    totalPrice: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCart = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };
  const data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            <span>
              {item.name} - Quantity: {item.quantity}
            </span>
            <button className="btn-remove" onClick={() => removeItemFromCart(item.id)}>
              Remove
            </button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            />
          </li>
        ))}
      </ul>
      <button
        className="btn"
        onClick={() =>
          addItemToCart({ id: 1, name: "Product 1", price: 10, quantity: 1 })
        }
      >
        Add Product 1
      </button>
      <button
        className="btn"
        onClick={() =>
          addItemToCart({ id: 2, name: "Product 2", price: 15, quantity: 1 })
        }
      >
        Add Product 2
      </button>
      <p>Total Price: ${state.totalPrice}</p>

      <div className="flex">
        {data.map((x) => {
          return (
            <>
              {" "}
              {console.log(x)}
              <h1>{x}</h1>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Counter;
