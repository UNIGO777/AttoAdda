import { motion } from 'framer-motion';
import { PlusIcon, UserIcon } from '@heroicons/react/24/outline';

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

const CustomersHeader = ({ onAddClick }) => {
  return (
    <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center">
            <UserIcon className="w-6 h-6 sm:w-8 sm:h-8 text-customers mr-2 sm:mr-3" />
            Customer Management
          </h1>
          <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Manage your customer relationships and data</p>
        </div>
        <motion.button
          onClick={onAddClick}
          className="bg-customers text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-customers/90 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <PlusIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Add Customer</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CustomersHeader;