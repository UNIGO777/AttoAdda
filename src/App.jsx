import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Cars from './pages/Cars';
import CarModels from './pages/CarModels';
import Customers from './pages/Customers';
import Garage from './pages/Garage';
import SpareParts from './pages/SpareParts';
import OtherServices from './pages/OtherServices';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/car-models" element={<CarModels />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/garage" element={<Garage />} />
          <Route path="/spare-parts" element={<SpareParts />} />
          <Route path="/other-services" element={<OtherServices />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
