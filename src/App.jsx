import './App.css';
import { useState } from 'react'; // Adaucam functia pt state


function App() {
  // un state nou pentru contor
  const [contor, setContor] = useState(0); // initial = 0

  function cresteValoarea(){
    setContor(contor+1);
  }
  function scadeValoarea(){
    setContor(contor-1);
  }

  return (
    <div>
      {/* Afisam valoarea contor in pagina */}
      <h1>{contor}</h1>
      <button onClick={cresteValoarea}>Creste</button>
      <button onClick={scadeValoarea}> Scade</button>
    </div>
  );
}

export default App;
