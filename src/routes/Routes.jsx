import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../components/ProductCards";
import ProductDetail from "../pages/ProductDetail";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../Category.json"),
        children: [
          {
            path: "/",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../product.json"),
          },
          {
            path: "/category/:category",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../product.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("../product.json"),
      },
      {
        path: "/product-detail/:id",
        element: <ProductDetail></ProductDetail>,
        loader: () => fetch("../product.json"),
      },
    ],
  },
]);
export default routes;
