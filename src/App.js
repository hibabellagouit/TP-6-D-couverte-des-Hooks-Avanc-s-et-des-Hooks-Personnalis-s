import "./App.css";
import Compteur from "./Compteur";
import FocusInput from "./FocusInput";
import CompteurRendu from "./CompteurRendu";
import ListeArticles from "./ListeArticles";
import Timer from "./Timer";
import FormulaireMemoire from "./FormulaireMemoire";
import Clock from "./Clock";

function App() {
  return (
    <div>
      <h1>TP Hooks Avancés – React</h1>

      {/* --- Horloge en temps réel --- */}
      <h2>🕒 Date et heure actuelles</h2>
      <Clock />

      {/* --- useReducer --- */}
      <h2>🔢 Compteur avec useReducer</h2>
      <Compteur />

      {/* --- useRef (focus input) --- */}
      <h2>🎯 Mettre le focus sur un input (useRef)</h2>
      <FocusInput />

      {/* --- useRef pour compter les rendus --- */}
      <h2>🔄 Compteur de rendus (useRef + useEffect)</h2>
      <CompteurRendu />

      {/* --- useFetch personnalisé --- */}
      <h2>📰 Liste d’articles (useFetch personnalisé)</h2>
      <ListeArticles />

      {/* --- Timer avec nettoyage d’effet --- */}
      <h2>⏱️ Timer avec nettoyage d’effet</h2>
      <Timer />

      {/* --- useLocalStorage personnalisé --- */}
      <h2>💾 Formulaire avec persistance locale (useLocalStorage)</h2>
      <FormulaireMemoire />
    </div>
  );
}

export default App;
