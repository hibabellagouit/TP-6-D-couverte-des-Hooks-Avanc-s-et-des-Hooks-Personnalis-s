import useLocalStorage from "./useLocalStorage";

function FormulaireMemoire() {
  const [nom, setNom] = useLocalStorage("nomUtilisateur", "");

  return (
    <div>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Entrez votre nom"
      />
      <p>Bonjour, {nom || "..."}</p>
    </div>
  );
}

export default FormulaireMemoire;
