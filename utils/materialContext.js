import { useContext, createContext, useState, useEffect } from "react";

const MaterialContext = createContext();

function MaterialProvider({ children }) {
  const [activeMaterial, setActiveMaterial] = useState("natural-pine");
  const [wallpaperIndex, setWallPaperIndex] = useState(0);
  const materials = [
    "natural-pine",
    "PB001",
    "PB002",
    "PB003",
    "PB004",
    "PB005",
    "PB006",
    "PB007",
    "PB008",
    "PD001",
    "PD002",
    "PD003",
    "PD004",
    "PD005",
    "PD006",
    "PD007",
    "PD008",
    "PD009",
    "PD010",
    "PD011",
    "PD012",
    "PD013",
    "PD014",
    "LM003",
    "LM004",
    "LM005"
  ];

  const value = {
    activeMaterial,
    setActiveMaterial,
    materials,
    wallpaperIndex,
    setWallPaperIndex,
  };
  return (
    <MaterialContext.Provider value={value}>
      {children}
    </MaterialContext.Provider>
  );
}

export { MaterialContext, MaterialProvider };
