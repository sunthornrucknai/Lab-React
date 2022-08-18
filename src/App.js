import './App.css';
import WordCard from './WordCard';

const character = "Hello";
function App() {
  return (
    <div>
      <WordCard value={character}/>
    </div>
  );
}

export default App;
