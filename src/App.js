
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CICD-Pipeline</h1>
      <h6>{process.env.REACT_APP_NAME}</h6>
    </div>
  );
}

export default App;
