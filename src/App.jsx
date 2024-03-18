import { useState } from "react";
import AppNavbar from "./components/AppNavbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppNavbar />
      <AppFooter />
    </>
  );
}

export default App;
