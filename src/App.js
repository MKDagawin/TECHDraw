import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/Frame";
import GalleryViewMore from "./pages/GalleryViewMore";
import HomePage1 from "./pages/HomePage1";
import HomePage3 from "./pages/HomePage3";
import HomePage2 from "./pages/HomePage2";

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
      case "/gallery-view-more":
        title = "";
        metaDescription = "";
        break;
      case "/home-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/home-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/home-page-2":
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
    <Routes>
      <Route path="/" element={<Frame />} />
      <Route path="/gallery-view-more" element={<GalleryViewMore />} />
      <Route path="/home-page-1" element={<HomePage1 />} />
      <Route path="/home-page-3" element={<HomePage3 />} />
      <Route path="/home-page-2" element={<HomePage2 />} />
    </Routes>
  );
}
export default App;
