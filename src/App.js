import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
      <Navbar title="TextUpdate"/>
      <div className="container my-3">
        <Textform heading="Enter The text to analyze"/>
      </div>
      
    </>
  );
}

export default App;
