import './App.css';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Team from './pages/Team';
import Clients from './pages/Clients';
import Products from './pages/Products';
import Signout from './pages/Signout';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/team" element={<Team />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
