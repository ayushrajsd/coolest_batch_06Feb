import { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Memo from "./components/ReactMemo";
import LargeArraySum from "./components/Usememo";
import ItemsList from "./components/List";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";

const HomePage = lazy(() => import("./components/Home"));
const ContactPage = lazy(() => import("./components/Contact"));
const AboutPage = lazy(() => import("./components/About"));

function App() {
  // const [Home, setHomePage] = useState(null);
  // const [About, setAboutPage] = useState(null);
  // const [Contact, setContactPage] = useState(null);

  // useEffect(() => {
  //   // preload the Home Page component
  //   import("./components/Home").then((module) =>
  //     setHomePage(() => module.default)
  //   );
  // }, []);

  // const loadHomePage = () => {
  //   import("./components/Home").then((module) =>
  //     setHomePage(() => module.default)
  //   );
  // };

  // const loadAboutPage = () => {
  //   import("./components/About").then((module) =>
  //     setAboutPage(() => module.default)
  //   );
  // };

  // const loadContactPage = () => {
  //   import("./components/Contact").then((module) =>
  //     setContactPage(() => module.default)
  //   );
  // };

  return (
    <>
      <Router>
        <div>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Suspense fallback={<div>Loading ....</div>}>
            <Routes>
              {/* <Route path="/" element={<HomePage />} /> */}
              {/* <Route path="/" element={<Memo />} /> */}
              {/* <Route path="/" element={<LargeArraySum />} /> */}
              <Route path="/" element={<ItemsList />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
