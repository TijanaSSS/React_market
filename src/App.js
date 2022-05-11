import './App.css';
import './css/NavMenu.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Pocetna from "./pages/Pocetna";
import Korpa from "./pages/Korpa";
import NotFound from "./pages/NotFound";
import NavMeni from "./components/NavMeni";
import {useState} from "react";



function App() {

  const [brojProizvodaKorpa, setBrojProizvodaKorpa] = useState(0);

  function pretraga() {

  }

  return (
    <div className="App">

      <BrowserRouter>
        <NavMeni pretraga={pretraga} brojProizvoda={brojProizvodaKorpa} />
        <Routes>

          <Route path='/' element={<Pocetna />}/>
          <Route path='/korpa' element={<Korpa />}/>
          <Route path='/*' element={<NotFound />}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
