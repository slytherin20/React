import { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
  useNavigate,
} from "react-router-dom";
//import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import RouteError from "./RouteError";
import RestaurantDetails from "./RestaurantDetails";
import LoginForm from "./LoginForm";
import AboutClass from "./AboutClass";
import ProfileClass from "./ProfileClass";
import SettingsClass from "./SettingsClass";
import useOnline from "./utils/useOnline";
import OfflinePage from "./OfflinePage";
import { UserContext, theme } from "./utils/UserContext";
import SignUp from "./SignUp";

function AppLayout() {
  const [searchVal, setSearchVal] = useState("");
  const [val, setVal] = useState("hello");
  const navigate = useNavigate();
  const location = useLocation();
  const isOnline = useOnline();

  function searchValHandler(val) {
    setSearchVal(val);
    if (location != "/") navigate("/");
  }

  return (
    <>
      <UserContext.Provider
        value={{
          user: val,
          email: "test@test.com",
        }}
      >
        <theme.Provider value="dark">
          <Header searchResults={searchValHandler} />
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          {isOnline ? <Outlet context={searchVal} /> : <OfflinePage />}
          <Footer />
        </theme.Provider>
      </UserContext.Provider>
    </>
  );
}
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
        path: "about",
        element: <AboutClass />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
          {
            path: "settings",
            element: <SettingsClass />,
          },
        ],
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "restaurants/:id",
        element: <RestaurantDetails />,
        errorElement: <RouteError />,
      },
    ],
    errorElement: <RouteError />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
