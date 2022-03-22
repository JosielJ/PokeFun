import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import Home from "./pages/Home";
import Guess from "./pages/Guess";
import Random from "./pages/Random";
import Pokedex from './pages/Pokedex';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} > </Route>
      </Routes>
      <Routes>
        <Route path="/guess" element={<Guess />} > </Route>
      </Routes>
      <Routes>
        <Route path="/random" element={<Random />} > </Route>
      </Routes>
      <Routes>
        <Route path="/pokedex" element={<Pokedex />} > </Route>
      </Routes>
    </Router>
  );
};
