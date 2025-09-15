import { motion } from 'framer-motion';
import { PlusIcon, StarIcon } from '@heroicons/react/24/outline';

const OtherServicesHeader = ({ onAddClick }) => {
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
    <motion.div className="mb-8" variants={itemVariants}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <StarIcon className="w-8 h-8 text-primary mr-3" />
            Other Services
          </h1>
          <p className="text-gray-600 mt-2">Manage additional services and customer benefits</p>
        </div>
        <motion.button
          onClick={onAddClick}
          className="bg-primary text-white px-6 py-3 rounded-xl font-medium flex items-center space-x-2 hover:bg-primary/90 transition-colors shadow-lg"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <PlusIcon className="w-5 h-5" />
          <span>Add Service</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default OtherServicesHeader;