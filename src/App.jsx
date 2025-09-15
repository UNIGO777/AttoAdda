import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
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
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/cars" element={<Layout><Cars /></Layout>} />
          <Route path="/car-models" element={<Layout><CarModels /></Layout>} />
          <Route path="/customers" element={<Layout><Customers /></Layout>} />
          <Route path="/garage" element={<Layout><Garage /></Layout>} />
          <Route path="/spare-parts" element={<Layout><SpareParts /></Layout>} />
          <Route path="/other-services" element={<Layout><OtherServices /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
