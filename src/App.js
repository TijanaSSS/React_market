import './App.css';
import './css/NavMenu.css'
import './css/Pocetna.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Pocetna from "./pages/Pocetna";
import Korpa from "./pages/Korpa";
import NotFound from "./pages/NotFound";
import NavMeni from "./components/NavMeni";
import {useState} from "react";



function App() {

  const [brojProizvodaKorpa, setBrojProizvodaKorpa] = useState(0);

  const [proizvodi, setProizvodi] = useState([
    {
      id: 1,
      naziv: 'Hleb',
      opis: 'hleb',
      cena: 50,
      kolicina: 1,
      jedinicaMere: 'kol',
      img:'img/hleb.jpg',
      kolicinaUkorpi:0
    },{
      id: 2,
      naziv: 'Paradajz',
      opis: 'paradajz',
      cena: 130,
      kolicina: 1,
      jedinicaMere: 'kg',
      img:'img/paradajz.jpg',
      kolicinaUkorpi:0
    },{
      id: 3,
      naziv: 'Moja kravica',
      opis: 'Kravlje mleko',
      cena: 110,
      kolicina: 1,
      jedinicaMere: 'l',
      img:'img/mleko.jpg',
      kolicinaUkorpi:0
    },{
      id: 4,
      naziv: 'Rosa',
      opis: 'Negazirana voda',
      cena: 60,
      kolicina: 1,
      jedinicaMere: 'l',
      img:'img/rosa.jpg',
      kolicinaUkorpi:0
    },{
      id: 5,
      naziv: 'Jabuka',
      opis: 'Jabuka voce',
      cena: 100,
      kolicina: 1,
      jedinicaMere: 'kg',
      img:'img/jabuka.jpg',
      kolicinaUkorpi:0
    },
  ])

  const [proizvodiView, setProizvodiView] = useState(proizvodi)

  function dodajUKorpu(){

  }
  function izbaciIzKorpe(){

  }

  function pretraga() {

  }

  return (
    <div className="App">

      <BrowserRouter>
        <NavMeni pretraga={pretraga} brojProizvoda={brojProizvodaKorpa} />
        <Routes>

          <Route path='/' element={<Pocetna proizvodi={proizvodiView}/>}/>
          <Route path='/korpa' element={<Korpa />}/>
          <Route path='/*' element={<NotFound />}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
