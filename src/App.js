import './App.css';
import './css/NavMenu.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Pocetna from "./pages/Pocetna";
import Korpa from "./pages/Korpa";
import NotFound from "./pages/NotFound";
import NavMeni from "./components/NavMeni";


function pretraga(){

}

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavMeni pretraga={pretraga} />
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
