import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Blog from "../../components/Blog/Blog";
import Booking from "../../components/Booking/Booking";
import Contact from "../../components/Contact/Contact";
import Destination from "../../components/Destination/Destination";
import Home from "../../components/Home/Home";
import Main from "../../layout/Main/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/destination",
        element: <Destination></Destination>,
        loader: () => {
          return fetch("http://localhost:5000/places");
        },
      },
      {
        path: "/destination/:id",
        element: <Booking></Booking>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/places/${params.id}`);
        },
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default routes;
