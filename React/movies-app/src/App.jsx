import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import WatchList from "./components/WatchList";
import Home from "./components/Home";
import {Provider} from "react-redux"
import { Routes, Route } from "react-router-dom";
import store from "./redux/store"
import User from "./components/User";
import UserRedux from "./components/UserRedux";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
    {/* <User/> */}
    <UserRedux/>
      {/* <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/watchlist" element={<WatchList />}></Route>
      </Routes> */}
      </Provider>
  );
}

export default App;
