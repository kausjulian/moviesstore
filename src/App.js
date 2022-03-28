import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Slider from './Components/Slider';
import Landpage from './Components/Landpage/Landpage';


function App() {
  return (
    <div className="App">
      
      <Header/>
      <Slider/>
      <Landpage/>
    </div>
  );
}

export default App;
