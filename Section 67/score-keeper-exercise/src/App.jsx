import './App.css'
import ScoreKeeper from './ScoreKeepper'

function App() {

  return (
    <div>
      <ScoreKeeper numPlayers={4} target={4} />
    </div>
  );
}

export default App
