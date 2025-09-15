import { motion } from 'framer-motion';
import { useState } from 'react';
import GarageHeader from '../components/GarageHeader';
import GarageStats from '../components/GarageStats';
import GarageSearchFilter from '../components/GarageSearchFilter';
import GarageServicesGrid from '../components/GarageServicesGrid';

const Garage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // Sample garage service data
  const [services] = useState([
    {
      id: 1,
      customerName: 'John Smith',
      carModel: 'Toyota Camry 2023',
      licensePlate: 'ABC-123',
      serviceType: 'Oil Change',
      description: 'Regular oil change and filter replacement',
      status: 'completed',
      priority: 'low',
      startDate: '2024-01-15',
      completedDate: '2024-01-15',
      estimatedCost: 80,
      actualCost: 75,
      technician: 'Mike Johnson',
      nextService: '2024-04-15'
    },
    {
      id: 2,
      customerName: 'Sarah Wilson',
      carModel: 'Honda Civic 2022',
      licensePlate: 'XYZ-789',
      serviceType: 'Brake Repair',
      description: 'Front brake pads replacement and rotor resurfacing',
      status: 'in_progress',
      priority: 'high',
      startDate: '2024-01-20',
      completedDate: null,
      estimatedCost: 450,
      actualCost: null,
      technician: 'David Brown',
      nextService: null
    },
    {
      id: 3,
      customerName: 'Michael Davis',
      carModel: 'BMW X5 2024',
      licensePlate: 'BMW-001',
      serviceType: 'Engine Diagnostic',
      description: 'Check engine light diagnostic and repair',
      status: 'scheduled',
      priority: 'medium',
      startDate: '2024-01-25',
      completedDate: null,
      estimatedCost: 200,
      actualCost: null,
      technician: 'Alex Thompson',
      nextService: null
    },
    {
      id: 4,
      customerName: 'Emily Johnson',
      carModel: 'Mercedes C-Class 2023',
      licensePlate: 'MER-456',
      serviceType: 'Tire Replacement',
      description: 'Replace all four tires with premium brand',
      status: 'pending',
      priority: 'medium',
      startDate: '2024-01-22',
      completedDate: null,
      estimatedCost: 800,
      actualCost: null,
      technician: 'Robert Lee',
      nextService: null
    }
  ]);



  const filteredServices = services.filter(service => {
    const matchesSearch = service.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.carModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.licensePlate.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.serviceType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || service.status === filterStatus;
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
      <GarageHeader onAddClick={() => setShowAddModal(true)} />
      <GarageStats services={services} />
      <GarageSearchFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      <GarageServicesGrid filteredServices={filteredServices} />
    </motion.div>
  );
};

export default Garage;