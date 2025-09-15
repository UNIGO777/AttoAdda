import { motion } from 'framer-motion';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import GarageServiceCard from './GarageServiceCard';

const GarageServicesGrid = ({ filteredServices }) => {
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

  if (filteredServices.length === 0) {
    return (
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <WrenchScrewdriverIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-600 mb-2">No services found</h3>
        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
      </motion.div>
    );
  }

  return (
    <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6" variants={itemVariants}>
      {filteredServices.map((service, index) => (
        <GarageServiceCard 
          key={service.id} 
          service={service} 
          index={index} 
        />
      ))}
    </motion.div>
  );
};

export default GarageServicesGrid;