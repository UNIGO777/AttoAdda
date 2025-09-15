import { motion } from 'framer-motion';
import { PlusIcon, TruckIcon } from '@heroicons/react/24/outline';

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

const CarModelsHeader = ({ viewMode, setViewMode, onAddClick }) => {
  return (
    <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center">
            <TruckIcon className="w-8 h-8 text-cars mr-3" />
            Car Brands & Models
          </h1>
          <p className="text-gray-600 mt-2">Manage car brands and their model lineup</p>
        </div>
        <div className="flex items-center justify-between space-x-4">
          {/* View Mode Toggle */}
          <div className="bg-white rounded-xl p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setViewMode('brands')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'brands' ? 'bg-cars text-white' : 'text-gray-600 hover:text-cars'
              }`}
            >
              Brands
            </button>
            <button
              onClick={() => setViewMode('models')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'models' ? 'bg-cars text-white' : 'text-gray-600 hover:text-cars'
              }`}
            >
              Models
            </button>
          </div>
          <motion.button
          onClick={onAddClick}
          className="bg-cars text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-cars/90 transition-colors shadow-lg text-sm sm:text-base w-1/2 sm:w-auto"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
            <PlusIcon className="w-5 h-5" />
            <span>Add {viewMode === 'brands' ? 'Brand' : 'Model'}</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CarModelsHeader;