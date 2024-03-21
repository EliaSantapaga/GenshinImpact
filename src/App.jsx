import { RouterProvider } from "react-router-dom";
import router from "./router/AppRouter";
import AppContext from "./context/AppContext";

function App() {

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
