import { createContext, useContext, useEffect, useState } from "react";

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characterData, setCharacterData] = useState([]);
  const [monstadt, setMonstadt] = useState([]);
  const [liyue, setLiyue] = useState([]);
  const [inazuma, setInazuma] = useState([]);
  const [sumeru, setSumeru] = useState([]);
  const [fontaine, setFontaine] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://data-genshin-impact.vercel.app/data.json"
        );
        if (!response.ok) {
          throw new Error("Network response error");
        }
        const data = await response.json();
        setCharacterData(data.characters);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }

      console.log(characterData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const monstadtChar = characterData.filter(
      (char) => char.location === "Monstadt"
    );
    const liyueChar = characterData.filter((char) => char.location === "Liyue");
    const inazumaChar = characterData.filter(
      (char) => char.location === "Inazuma"
    );
    const sumeruChar = characterData.filter(
      (char) => char.location === "Sumeru"
    );
    const fontaineChar = characterData.filter(
      (char) => char.location === "Fontaine"
    );

    setMonstadt(monstadtChar);
    setLiyue(liyueChar);
    setInazuma(inazumaChar);
    setSumeru(sumeruChar);
    setFontaine(fontaineChar);
  }, [CharacterData]);

  return (
    <CharacterContext.Provider
      value={{
        characterData,
        setCharacterData,
        monstadt,
        liyue,
        inazuma,
        sumeru,
        fontaine,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => useContext(CharacterContext);
