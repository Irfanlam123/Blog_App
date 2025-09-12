
import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/Home";
import Blog from "./src/pages/Blog";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import Layout from "./src/components/Layout";
import BlogDetails  from "./src/pages/Blog/BlogDetails";
import AuthUser from "./src/pages/Auth/Login";
import AuthSignup from "./src/pages/Auth/signup";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Navbar + Outlet
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blog /> },
      { path:"/blog/:id", element:<BlogDetails />},
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <AuthUser /> },
      { path: "/sign-up", element: <AuthSignup /> },

     
    ],
  },
]);

export default Router;
