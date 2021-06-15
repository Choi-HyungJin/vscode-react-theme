import React from "react";
import Component from "../components/component";
import "./styles/App.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Component count={count} />
      <p>count : {count}</p>
    </div>
  );
};

export default App;
