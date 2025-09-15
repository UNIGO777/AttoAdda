import { motion } from 'framer-motion';
import { useState } from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
import Sidebar from '../components/Sidebar';
import CustomersHeader from '../components/CustomersHeader';
import CustomersStats from '../components/CustomersStats';
import CustomersSearchFilter from '../components/CustomersSearchFilter';
import CustomersTable from '../components/CustomersTable';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // Sample customer data
  const [customers] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      address: '123 Main St, New York, NY',
      type: 'premium',
      totalPurchases: 3,
      totalSpent: 125000,
      lastPurchase: '2024-01-15',
      joinDate: '2023-06-10',
      status: 'active'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+1 (555) 987-6543',
      address: '456 Oak Ave, Los Angeles, CA',
      type: 'regular',
      totalPurchases: 1,
      totalSpent: 28000,
      lastPurchase: '2024-02-20',
      joinDate: '2024-01-05',
      status: 'active'
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'mike.brown@email.com',
      phone: '+1 (555) 456-7890',
      address: '789 Pine St, Chicago, IL',
      type: 'vip',
      totalPurchases: 5,
      totalSpent: 275000,
      lastPurchase: '2024-01-30',
      joinDate: '2022-03-15',
      status: 'active'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      phone: '+1 (555) 321-0987',
      address: '321 Elm St, Miami, FL',
      type: 'regular',
      totalPurchases: 2,
      totalSpent: 65000,
      lastPurchase: '2023-12-10',
      joinDate: '2023-08-20',
      status: 'inactive'
    }
  ]);

  const getTypeColor = (type) => {
    switch (type) {
      case 'vip': return 'bg-purple-100 text-purple-800';
      case 'premium': return 'bg-primary/10 text-primary';
      case 'regular': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.phone.includes(searchTerm);
    const matchesFilter = filterType === 'all' || customer.type === filterType;
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
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <motion.div 
        className="flex-1 overflow-auto p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <CustomersHeader onAddClick={() => setShowAddModal(true)} />
        
        <CustomersStats customers={customers} />
        
        <CustomersSearchFilter 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterType={filterType}
          setFilterType={setFilterType}
        />

        <CustomersTable 
          filteredCustomers={filteredCustomers}
          getTypeColor={getTypeColor}
          getStatusColor={getStatusColor}
        />

        {/* Empty State */}
        {filteredCustomers.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <UserIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">No customers found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Customers;