import { useEffect, useState } from "react";
import { Routes, Route, Link, useParams, Navigate } from "react-router-dom";

function About() {
  return <h1>About Page</h1>;
}

function Home() {
  return <h1>I am Home Page</h1>;
}

function Listing() {
  return <h1>Listing Page</h1>;
}

function PageNotFound() {
  return <h1>404 Page Not Found</h1>;
}

function Users(props) {
  const params = useParams();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`);
      const userData = await resp.json();
      console.log("userData:", userData);
      
      setUserData(userData);
    }
    // IIFE - Immediately Invoked Function Expression
    fetchData();
  }, []);
  console.log(props.isAdmin);
  console.log("Params:", params);
  return (
    <>
      {userData == null ? (
        <h3>Loading ...</h3>
      ) : (
        <>
          <h4>User Name: {userData.username}</h4>
          <h3>
            Name: {userData.name.firstname + " " + userData.name.lastname}
          </h3>
          <h4>Phone: {userData.phone}</h4>
        </>
      )}
    </>
  );
}

function Routing() {
  return (
    <>
      <h1>Routing Example</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/listing">Listing</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/abc" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>} />
        <Route path="users/:id" element={<Users isAdmin={true} />}></Route>
      </Routes>
    </>
  );
}

export default Routing;
