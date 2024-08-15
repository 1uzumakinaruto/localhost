import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignUpPage from "./pages/sign-up-page";
import Homepage from "./pages/homepage";
import PropertyDetails from "./pages/property-details";
import SignInPage from "./pages/sign-in-page";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/property-details":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    // <Routes>
    //   <Route path="/" element={<SignUpPage />} />
    //   <Route path="/homepage" element={<Homepage />} />
    //   <Route path="/property-details" element={<PropertyDetails />} />
    //   <Route path="/sign-in-page" element={<SignInPage />} />
    // </Routes>
    <Homepage/>
  );
}
export default App;
