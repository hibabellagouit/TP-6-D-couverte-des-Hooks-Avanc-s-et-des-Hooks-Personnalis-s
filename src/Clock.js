import { useState, useEffect } from "react";

function Clock() {
  const [heure, setHeure] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setHeure(new Date()), 1000);
    return () => clearInterval(timer); // nettoyage
  }, []);

  return (
    <p>
      🕒 Il est {heure.toLocaleTimeString()} le {heure.toLocaleDateString()}.
    </p>
  );
}

export default Clock;
