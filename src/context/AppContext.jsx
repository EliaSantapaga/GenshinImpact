import { createContext } from "react";

//* Il contesto contiene un oggetto

const AppContext = createContext({
  loading: true,
  setLoading: () => {},
  error: "",
  setError: () => {},
});

export default AppContext;
