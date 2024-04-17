import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/AppRouter";
import AppContext from "./context/AppContext";
import { CharacterProvider } from "./context/CharacterContext";

function App() {
  const [singleCharacter, setSingleCharacter] = useState([]);

  // useEffect(() => {
  //   async function getSingleCharacter() {
  //     try {
  //       const response = await fetch(
  //         "https://data-genshin-impact.vercel.app/data.json"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Network response error");
  //       }
  //       const data = await response.json();
  //       setSingleCharacter(data.characters);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }

  //     console.log(singleCharacter);
  //   }
  //   getSingleCharacter();
  // }, []);

  return (
    <AppContext.Provider
      value={{
        singleCharacter,
        setSingleCharacter,
      }}
    >
      <CharacterProvider>
        <RouterProvider router={router} />
      </CharacterProvider>
    </AppContext.Provider>
  );
}

export default App;
