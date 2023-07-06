import './App.css';
import Headers from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Nav from './Components/Nav/Nav';


function App() {
  return (
    <div className="App">
      <Headers/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App;
