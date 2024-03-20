// import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/AppRouter";
import AppContext from "./context/AppContext";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <AppContext.Provider
      value={
        {
          // loading, setLoading, error, setError
        }
      }
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
