import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Footer } from './components/Footer';
import { PassGen } from './components/PassGen';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <PassGen />
      <Footer />
    </div>
  );
}

export default App;
