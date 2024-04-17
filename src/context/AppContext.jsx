import { createContext } from "react";

//* Il contesto contiene un oggetto

const AppContext = createContext({
  singleCharacter: "",
  setSingleCharacter: () => {},
});

export default AppContext;
