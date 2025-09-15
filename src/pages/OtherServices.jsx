import { motion } from 'framer-motion';
import { useState } from 'react';
import OtherServicesHeader from '../components/OtherServicesHeader';
import OtherServicesStats from '../components/OtherServicesStats';
import OtherServicesSearchFilter from '../components/OtherServicesSearchFilter';
import OtherServicesGrid from '../components/OtherServicesGrid';

const OtherServices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // Sample other services data
  const [services] = useState([
    {
      id: 1,
      name: 'Auto Insurance Premium',
      category: 'insurance',
      description: 'Comprehensive auto insurance coverage with roadside assistance',
      provider: 'SafeGuard Insurance',
      customerName: 'John Smith',
      vehicleModel: 'Toyota Camry 2023',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      monthlyPremium: 125.00,
      totalValue: 1500.00,
      status: 'active',
      renewalDate: '2024-12-31',
      coverage: ['Collision', 'Comprehensive', 'Liability', 'Roadside']
    },
    {
      id: 2,
      name: 'Vehicle Financing',
      category: 'financing',
      description: '60-month auto loan with competitive interest rates',
      provider: 'AutoCredit Bank',
      customerName: 'Sarah Johnson',
      vehicleModel: 'Honda Civic 2024',
      startDate: '2024-01-15',
      endDate: '2029-01-15',
      monthlyPayment: 485.00,
      totalValue: 29100.00,
      status: 'active',
      interestRate: 4.5,
      remainingBalance: 28500.00
    },
    {
      id: 3,
      name: 'Extended Warranty',
      category: 'warranty',
      description: '5-year extended warranty covering major components',
      provider: 'MaxProtect Warranties',
      customerName: 'Michael Brown',
      vehicleModel: 'BMW X5 2024',
      startDate: '2024-01-10',
      endDate: '2029-01-10',
      monthlyPremium: 89.99,
      totalValue: 5399.40,
      status: 'active',
      coverage: ['Engine', 'Transmission', 'Electrical', 'Air Conditioning']
    },
    {
      id: 4,
      name: 'Roadside Assistance',
      category: 'assistance',
      description: '24/7 roadside assistance and emergency services',
      provider: 'QuickHelp Roadside',
      customerName: 'Emily Davis',
      vehicleModel: 'Mercedes C-Class 2023',
      startDate: '2024-01-05',
      endDate: '2025-01-05',
      monthlyPremium: 19.99,
      totalValue: 239.88,
      status: 'active',
      services: ['Towing', 'Jump Start', 'Flat Tire', 'Lockout Service']
    },
    {
      id: 5,
      name: 'Vehicle Inspection',
      category: 'inspection',
      description: 'Annual state vehicle safety and emissions inspection',
      provider: 'CertifiedCheck Inspections',
      customerName: 'Robert Wilson',
      vehicleModel: 'Ford F-150 2022',
      startDate: '2024-01-20',
      endDate: '2025-01-20',
      oneTimeFee: 75.00,
      totalValue: 75.00,
      status: 'completed',
      inspectionType: 'Safety & Emissions',
      certificateNumber: 'INS-2024-001'
    },
    {
      id: 6,
      name: 'Gap Insurance',
      category: 'insurance',
      description: 'Gap insurance coverage for loan protection',
      provider: 'GapGuard Insurance',
      customerName: 'Lisa Anderson',
      vehicleModel: 'Audi Q7 2024',
      startDate: '2024-02-01',
      endDate: '2027-02-01',
      monthlyPremium: 45.00,
      totalValue: 1620.00,
      status: 'pending',
      coverage: ['Loan Balance Protection', 'Lease Protection']
    }
  ]);



  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.vehicleModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || service.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || service.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
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
      <OtherServicesHeader onAddClick={() => setShowAddModal(true)} />
      
      <OtherServicesStats services={services} />
      
      <OtherServicesSearchFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      
      <OtherServicesGrid filteredServices={filteredServices} />
    </motion.div>
  );
};

export default OtherServices;