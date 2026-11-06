import { useState } from "react";
import Result from "./Result";

function App() {
  const [obtained, setObtained] = useState(75);
  const [total, setTotal] = useState(100);

  const percentage =
    total > 0 ? (obtained / total) * 100 : 0;

  return (
    <div>
      <h1>Percentage Calculator</h1>

      <input
        type="number"
        value={obtained}
        onChange={(e) =>
          setObtained(Number(e.target.value))
        }
      />

      <input
        type="number"
        value={total}
        onChange={(e) =>
          setTotal(Number(e.target.value))
        }
      />

      <Result percentage={percentage} />
    </div>
  );
}

export default App;