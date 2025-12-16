import { useState } from "react";
import Display from "./Display";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={() => setCount(count - 1)}>Giảm</button>

      <Display count={count} />
    </div>
  );
};

export default App;
