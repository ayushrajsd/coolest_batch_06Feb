import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import DisplayData from "./components/DisplayData";
import ConditionalRender from "./components/ConditionRender";
import Button from "./components/Form";

function App() {
  // console.log(name, name1, name2);
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Guava"];
  const person = {
    name: "John Doe",
    age: 25,
  }
  return (
      <>
      <Button />
      <ConditionalRender isLoggedIn={false} username={person.name}/>
      <MyComponent fruits={fruits} message="Hello, I am a Component"/>
      <MyComponent message="Hello, I am another Component"/>
      <MyComponent message="Hey there, Component here !"/>
      <DisplayData fruits={fruits} person={person}/>
      </>

  );
}

export default App;
