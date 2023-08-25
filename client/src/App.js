import BluePrint from "./blueprint";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import axios from "axios";
import "./App.css";

axios.defaults.baseURL = process.env.REACT_APP_API;
axios.defaults.withCredentials = true;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BluePrint />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
