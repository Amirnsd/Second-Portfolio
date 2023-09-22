import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './route/Home';
import Skills from './route/Skills';
import About from './route/About';
import Contact from './route/Contact';

function App() {
  return (
    <div className="App">

     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />

     </Routes>
    </div>
  );
}

export default App;
