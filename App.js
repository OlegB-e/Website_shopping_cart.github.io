import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button } from './components/Button';
import './styles/tailwind.css';

function App() {
  const [cart, setCart] = useState([]);

  const menu = [
    { name: "Buzza", ingredients: ["dough", "meat", "onions"] },
    { name: "Pies", ingredients: ["dough", "meat", "onions", "potato"] },
    { name: "Pizza", ingredients: ["dough", "pepperoni", "tomatoes", "cheese"] },
    { name: "Salad", ingredients: ["tomatoes", "cucumbers"] },
  ];

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div className="App bg-gray-100 min-h-screen">
      <header className="bg-black-600 text-white py-4 px-6">
        <h1 className="text-2xl font-bold mb-4">Корзина:</h1>
        <ul className="bg-white text-gray-800 p-4 rounded shadow-md mb-4">
          {cart.length > 0 ? (
            cart.map((cartItem, index) => (
              <li key={index} className="flex justify-between items-center py-2">
                <span>{cartItem.name}</span>
                <span className="text-gray-500">{cartItem.quantity} шт.</span>
              </li>
            ))
          ) : (
            <li className="text-gray-500">Корзина пуста</li>
          )}
        </ul>

        <h1 className="text-2xl font-bold mt-8 mb-4">Меню:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {menu.map((menuItem, index) => (
            <div
              key={index}
              className="bg-black p-4 rounded shadow-md hover:shadow-lg transition"
            >
              <div className="text-lg font-bold mb-2">{menuItem.name}</div>
              <Button
                color="green"
                onClick={() => addToCart(menuItem)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Купить
              </Button>
              <ul className="list-disc pl-5 mt-2 text-gray-600">
                {menuItem.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
