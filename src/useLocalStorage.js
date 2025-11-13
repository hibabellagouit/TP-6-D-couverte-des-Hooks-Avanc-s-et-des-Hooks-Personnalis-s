import { useState, useEffect } from "react";

function useLocalStorage(key, valeurInitiale) {
  // Charger la valeur depuis localStorage au démarrage
  const [valeur, setValeur] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : valeurInitiale;
  });

  // Sauvegarder la valeur à chaque changement
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(valeur));
  }, [key, valeur]);

  return [valeur, setValeur];
}

export default useLocalStorage;
