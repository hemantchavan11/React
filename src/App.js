import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Carousel from "./Components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Carousel />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
