
// import './App.css';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import Codeforinterview from './components/Codeforinterview';
import EditUser from './components/EditUser';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Codeforinterview/>}/>
      <Route path='/all' element={<AllUser/>}/>
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
