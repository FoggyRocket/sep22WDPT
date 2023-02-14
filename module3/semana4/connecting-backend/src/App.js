import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Navbar} from "./components";
import {ApartmentsPage,AddApartmentPage, DetailApartment} from "./pages"; 
 
function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<ApartmentsPage />} />
        <Route path="/apartments/new" element={<AddApartmentPage />} />
        <Route path="/apartment-detail/:idAparment" element={<DetailApartment/>}/>
      </Routes>
    </div>
  );
}
 
export default App;
