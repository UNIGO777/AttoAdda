import { motion } from 'framer-motion';
import { CubeIcon } from '@heroicons/react/24/outline';
import SparePartsCard from './SparePartsCard';

const SparePartsGrid = ({ filteredParts, getStockStatus }) => {
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

  if (filteredParts.length === 0) {
    return (
      <motion.div 
        className="text-center py-12"
        variants={itemVariants}
      >
        <CubeIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg">No spare parts found</p>
        <p className="text-gray-400 text-sm">Try adjusting your search or filters</p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={itemVariants}
    >
      {filteredParts.map((part, index) => (
        <SparePartsCard 
          key={part.id} 
          part={part} 
          index={index} 
          getStockStatus={getStockStatus}
        />
      ))}
    </motion.div>
  );
};

export default SparePartsGrid;