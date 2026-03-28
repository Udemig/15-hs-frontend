import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./pages/products";
import Home from "./pages/home";
import Detail from "./pages/detail";
import NotFound from "./pages/not-found";
import Novel from "./pages/novel";
import Story from "./pages/story";
import Layout from "./components/layout";
import Wrapper from "./components/wrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/ürünler", element: <Products /> },
      { path: "/ürünler/:id", element: <Detail /> },
      {
        path: "/kategori",
        element: <Layout />,
        children: [
          { path: "roman", element: <Novel /> },
          { path: "hikaye", element: <Story /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
