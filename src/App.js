import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [action, setAction] = useState("");
  const [counterInterval, setCounterInterval] = useState();

  useEffect(() => {
    if (action === "start") {
      setCounterInterval(
        setInterval(() => {
          setCounter((prevCounter) => prevCounter + 1);
        }, 1000)
      );
    }

    if (action === "pause") {
      clearInterval(counterInterval);
    }
  }, [action]);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setAction("start")}>Start</button>
      <button onClick={() => setAction("pause")}>Pause</button>
    </div>
  );
}
