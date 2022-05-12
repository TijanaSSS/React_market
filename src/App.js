import './App.css';
import './css/NavMenu.css'
import './css/Pocetna.css'
import './css/KorpaStrana.css'
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
            jedinicaMere: 'kom',
            img: 'img/hleb.jpg',
            kolicinaUkorpi: 0
        }, {
            id: 2,
            naziv: 'Paradajz',
            opis: 'paradajz',
            cena: 130,
            kolicina: 1,
            jedinicaMere: 'kg',
            img: 'img/paradajz.jpg',
            kolicinaUkorpi: 0
        }, {
            id: 3,
            naziv: 'Moja kravica',
            opis: 'Kravlje mleko',
            cena: 110,
            kolicina: 1,
            jedinicaMere: 'l',
            img: 'img/mleko.jpg',
            kolicinaUkorpi: 0
        }, {
            id: 4,
            naziv: 'Rosa',
            opis: 'Negazirana voda',
            cena: 60,
            kolicina: 1,
            jedinicaMere: 'l',
            img: 'img/rosa.jpg',
            kolicinaUkorpi: 0
        }, {
            id: 5,
            naziv: 'Jabuka',
            opis: 'Jabuka voce',
            cena: 100,
            kolicina: 1,
            jedinicaMere: 'kg',
            img: 'img/jabuka.jpg',
            kolicinaUkorpi: 0
        },
    ])

    const [proizvodiView, setProizvodiView] = useState(proizvodi)

    const [korpa, setKorpa] = useState([])


    function dodajUKorpu(id) {

        proizvodi.forEach((proizvod) => {
            if (proizvod.id === id) {
                proizvod.kolicinaUkorpi++;
            }
        })

        setKorpa(proizvodi.filter((proizvod) => (proizvod.kolicinaUkorpi > 0)));

        setBrojProizvodaKorpa(brojProizvodaKorpa + 1);


    }

    function izbaciIzKorpe(id) {

        proizvodi.forEach((proizvod) => {
            if (proizvod.id === id && proizvod.kolicinaUkorpi > 0) {
                proizvod.kolicinaUkorpi--;
            }
        })

        setKorpa(proizvodi.filter((proizvod) => (proizvod.kolicinaUkorpi > 0)));


        if (brojProizvodaKorpa > 0) {
            setBrojProizvodaKorpa(brojProizvodaKorpa - 1);
        }

    }

    function pretraga(e) {
        e.preventDefault()
        let pomocni = [];
        proizvodi.forEach((proizvod) => {
            if (proizvod.naziv.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
                pomocni.push(proizvod)
            }
        })
        setProizvodiView(pomocni);
    }

    return (
        <div className="App">

            <BrowserRouter>
                <NavMeni pretraga={pretraga} brojProizvoda={brojProizvodaKorpa}/>
                <Routes>

                    <Route path='/' element={<Pocetna proizvodi={proizvodiView} dodajUKorpu={dodajUKorpu} izbaciIzKorpe={izbaciIzKorpe}/>}/>
                    <Route path='/korpa' element={<Korpa proizvodiUKorpi={korpa} izbaciIzKorpe={izbaciIzKorpe}/>}/>
                    <Route path='/*' element={<NotFound/>}/>

                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
