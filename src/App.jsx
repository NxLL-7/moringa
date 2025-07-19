import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About_Us/About";
import Order from "./components/Order_Now/Order";
import Contact from "./components/Contact_Us/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/order",
      element: (
        <>
          <Navbar />
          <Order />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
