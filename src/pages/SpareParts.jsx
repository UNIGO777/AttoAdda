import { motion } from 'framer-motion';
import { useState } from 'react';
import SparePartsHeader from '../components/SparePartsHeader';
import SparePartsStats from '../components/SparePartsStats';
import SparePartsSearchFilter from '../components/SparePartsSearchFilter';
import SparePartsGrid from '../components/SparePartsGrid';

const SpareParts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStock, setFilterStock] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // Sample spare parts data
  const [spareParts] = useState([
    {
      id: 1,
      name: 'Brake Pads - Front',
      partNumber: 'BP-F-001',
      category: 'brakes',
      brand: 'Bosch',
      description: 'Premium ceramic brake pads for front wheels',
      stockQuantity: 25,
      minStockLevel: 10,
      maxStockLevel: 50,
      unitPrice: 89.99,
      supplierPrice: 65.00,
      supplier: 'Auto Parts Direct',
      location: 'A-1-05',
      status: 'in_stock',
      lastRestocked: '2024-01-10',
      compatibleModels: ['Toyota Camry', 'Honda Accord', 'Nissan Altima']
    },
    {
      id: 2,
      name: 'Engine Oil Filter',
      partNumber: 'OF-E-002',
      category: 'engine',
      brand: 'Mann-Filter',
      description: 'High-quality oil filter for various engine types',
      stockQuantity: 5,
      minStockLevel: 15,
      maxStockLevel: 100,
      unitPrice: 24.99,
      supplierPrice: 18.50,
      supplier: 'Filter Solutions Inc',
      location: 'B-2-12',
      status: 'low_stock',
      lastRestocked: '2024-01-05',
      compatibleModels: ['BMW 3 Series', 'Mercedes C-Class', 'Audi A4']
    },
    {
      id: 3,
      name: 'Headlight Assembly - LED',
      partNumber: 'HL-LED-003',
      category: 'lighting',
      brand: 'Philips',
      description: 'LED headlight assembly with adaptive lighting',
      stockQuantity: 0,
      minStockLevel: 5,
      maxStockLevel: 20,
      unitPrice: 299.99,
      supplierPrice: 220.00,
      supplier: 'Lighting Pro',
      location: 'C-3-08',
      status: 'out_of_stock',
      lastRestocked: '2023-12-20',
      compatibleModels: ['BMW X5', 'Mercedes GLE', 'Audi Q7']
    },
    {
      id: 4,
      name: 'Air Filter',
      partNumber: 'AF-STD-004',
      category: 'engine',
      brand: 'K&N',
      description: 'High-flow air filter for improved performance',
      stockQuantity: 45,
      minStockLevel: 20,
      maxStockLevel: 80,
      unitPrice: 49.99,
      supplierPrice: 35.00,
      supplier: 'Performance Parts Co',
      location: 'B-1-15',
      status: 'in_stock',
      lastRestocked: '2024-01-12',
      compatibleModels: ['Ford F-150', 'Chevrolet Silverado', 'Ram 1500']
    },
    {
      id: 5,
      name: 'Transmission Fluid',
      partNumber: 'TF-ATF-005',
      category: 'fluids',
      brand: 'Castrol',
      description: 'Automatic transmission fluid - 1 quart',
      stockQuantity: 12,
      minStockLevel: 25,
      maxStockLevel: 100,
      unitPrice: 19.99,
      supplierPrice: 14.50,
      supplier: 'Fluid Dynamics LLC',
      location: 'D-1-03',
      status: 'low_stock',
      lastRestocked: '2024-01-08',
      compatibleModels: ['Honda Civic', 'Toyota Corolla', 'Nissan Sentra']
    },
    {
      id: 6,
      name: 'Spark Plugs Set',
      partNumber: 'SP-SET-006',
      category: 'engine',
      brand: 'NGK',
      description: 'Iridium spark plugs set of 4',
      stockQuantity: 30,
      minStockLevel: 15,
      maxStockLevel: 60,
      unitPrice: 79.99,
      supplierPrice: 58.00,
      supplier: 'Ignition Specialists',
      location: 'B-2-20',
      status: 'in_stock',
      lastRestocked: '2024-01-14',
      compatibleModels: ['Subaru Outback', 'Mazda CX-5', 'Hyundai Tucson']
    }
  ]);

  const getStockStatus = (part) => {
    if (part.stockQuantity === 0) return 'out_of_stock';
    if (part.stockQuantity <= part.minStockLevel) return 'low_stock';
    return 'in_stock';
  };

  const filteredParts = spareParts.filter(part => {
    const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         part.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         part.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || part.category === filterCategory;
    const partStatus = getStockStatus(part);
    const matchesStock = filterStock === 'all' || partStatus === filterStock;
    return matchesSearch && matchesCategory && matchesStock;
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
      <SparePartsHeader onAddClick={() => setShowAddModal(true)} />
        
      <SparePartsStats spareParts={spareParts} getStockStatus={getStockStatus} />
        
      <SparePartsSearchFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        filterStock={filterStock}
        setFilterStock={setFilterStock}
      />
        
      <SparePartsGrid filteredParts={filteredParts} getStockStatus={getStockStatus} />
    </motion.div>
  );
};

export default SpareParts;