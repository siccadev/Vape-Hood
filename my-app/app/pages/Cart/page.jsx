"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./page.css";
import Link from "next/link";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [deletingItemId, setDeletingItemId] = useState(null);

  useEffect(() => {
    const storedCartItems = JSON.parse(window.localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleRemoveItem = (name) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== name);
    setCartItems(updatedCartItems);
    window.localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const handleUpdateQuantity = (name, delta) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.name === name) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: Math.max(1, newQuantity) };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    window.localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="main_body container mx-auto p-4 ">
      {cartItems.length === 0 ? (
        <div className="bg-white p-6">
          <h1 className="text-2xl font-bold mb-2">Panier</h1>
          <hr />
          <p className="mt-4 mb-4 font-semibold">
            Il n'y a plus d'articles dans votre panier
          </p>
          <hr />
          <div className="mt-4 p-4 bg-gray-100 rounded-lg flex justify-between items-center">
            <p className="text-lg font-bold">Total TTC</p>
            <p className="text-red-500 text-2xl font-bold">0,000 DT</p>
          </div>

          <div className="flex justify-between mt-4">
            <Link
              href="/"
              className="px-4 py-2 border border-gray-300 rounded-lg transition"
            >
              <span className="mr-2">{"<"}</span>Continuer Mes Achats
            </Link>

            <button className="commander_not_allowed px-4 py-2 border border-gray-300 rounded-lg transition">
              Commander <span className="ml-2">{">"}</span>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-white p-6">
            <h1 className="text-2xl font-bold mb-2">Panier</h1>
            <hr />
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="sm:flex justify-between items-center border-b py-4"
              >
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <div className="">
                    <h3 className="text-base font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  
                </div>



                <div className="flex justify-between sm:mt-4 mt-4">
                  <div>
                    <button
                      className="px-2 py-1 "
                      onClick={() => handleUpdateQuantity(item.name, -1)}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border rounded-md">
                      {item.quantity}
                    </span>
                    <button
                      className="px-2 py-1 "
                      onClick={() => handleUpdateQuantity(item.name, 1)}
                    >
                      +
                    </button>
                  </div>


                  <div className="flex">
                    <p className="font-semibold">{(item.price).toFixed(3)} DT</p>
                    <button
                      onClick={() => handleRemoveItem(item.name)}
                      className=""
                    >
                      🗑️
                    </button>
                  </div>


                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gray-100 rounded-lg flex justify-between items-center">
            <p className="text-lg font-bold">
              Total TTC{" "}
              <span className="text-red-500 text-2xl font-bold">
                {cartItems
                  .reduce((total, item) => total + item.price * item.quantity, 0)
                  .toFixed(3)}{" "}
                DT
              </span>
            </p>
          </div>

          <div className="flex justify-between mt-4">
            <Link
              href="/"
              className="px-4 py-2 border border-gray-300 rounded-lg transition"
            >
              <span className="mr-2">{"<"}</span>Continuer Mes Achats
            </Link>
            <Link
              href="/pages/Checkout" className="px-4 py-2 border border-gray-300rounded-lg hover:bg-gray-100 transition">
              Commander <span className="ml-2">{">"}</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;