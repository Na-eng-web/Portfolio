import { Box, Button } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Box>count: {count}</Box>
      <Button onClick={() => setCount(count + 1)}>increment</Button>
    </Box>
  );
}

export default App;
