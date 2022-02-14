import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import TitrePrincipal from './TitrePrincipal';
import Accueil from './Accueil';
import ListeProjets from './ListeProjets';

function App() {
  return (
    <div className="App">
      <Accueil />
      <Entete />
      <TitrePrincipal />
      <ListeProjets />
      <PiedPage />
    </div>
  );
}

export default App;
