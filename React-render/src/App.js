import './App.css';
import ParentFive from './components/incorrect optimization/ParentFive';

function App() {
  console.log("app re-render");
  return (
    <div className="App">
      <ParentFive />
    </div>
  );
}

export default App;
