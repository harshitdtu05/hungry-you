import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { useState, useEffect } from "react";
import UserContext from "./Utilities/UserContext";
import { Provider } from "react-redux";
import appStore from "./Utilities/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const Footer = (
  <div className="m-2.5 p-2.5 border-t-2">
    <h6>
      By continuing past this page, you agree to our Terms of Service, Cookie
      Policy, Privacy Policy and Content Policies. All trademarks are properties
      of their respective owners 2026 © KhaoPiyo™ Ltd. All rights reserved.
    </h6>
  </div>
);

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // authenticate
  useEffect(() => {
    // api call
    const data = {
      name: "Harshit",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ name: userName }}>
        <div className="app">
          <Header />
          <Outlet />
          {Footer}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resID",
        element: <RestaurantMenu />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
