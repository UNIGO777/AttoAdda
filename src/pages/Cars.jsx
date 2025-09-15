import { motion } from 'framer-motion';
import { useState } from 'react';
import CarsHeader from '../components/CarsHeader';
import CarsStats from '../components/CarsStats';
import CarsSearchFilter from '../components/CarsSearchFilter';
import CarsGrid from '../components/CarsGrid';

const Cars = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // Sample car data
  const [cars] = useState([
    {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      year: 2023,
      color: 'Silver',
      licensePlate: 'ABC-123',
      status: 'available',
      mileage: 15000,
      price: 25000,
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
      year: 2022,
      color: 'Blue',
      licensePlate: 'XYZ-789',
      status: 'maintenance',
      mileage: 22000,
      price: 22000,
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      brand: 'BMW',
      model: 'X5',
      year: 2024,
      color: 'Black',
      licensePlate: 'BMW-001',
      status: 'sold',
      mileage: 5000,
      price: 55000,
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      brand: 'Mercedes',
      model: 'C-Class',
      year: 2023,
      color: 'White',
      licensePlate: 'MER-456',
      status: 'available',
      mileage: 8000,
      price: 45000,
      image: '/api/placeholder/300/200'
    }
  ]);



  const filteredCars = cars.filter(car => {
    const matchesSearch = car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.licensePlate.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || car.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div 
      className="p-4 sm:p-6 space-y-4 sm:space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <CarsHeader onAddClick={() => setShowAddModal(true)} />
      <CarsStats cars={cars} />
      <CarsSearchFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      <CarsGrid cars={filteredCars} />
    </motion.div>
  );
};

export default Cars;