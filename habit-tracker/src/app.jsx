import React from "react";
import "./app.css";

function App() {
  const name = "jun";
  return (
    <>
      <h1>Hello :)</h1>
      {name && <h1>Oh!! Hello! {name} </h1>}
      {["📔", "📦"].map((item) => (
        <h1>{item}</h1>
      ))}
    </>
  );
}

export default App;
