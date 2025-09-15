import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

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

const CarModelsSearchFilter = ({ 
  searchTerm, 
  setSearchTerm, 
  filterBrand, 
  setFilterBrand, 
  viewMode, 
  carData 
}) => {
  return (
    <motion.div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8" variants={itemVariants}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder={`Search ${viewMode === 'brands' ? 'brands by name' : 'models by name, brand, or vehicle type'}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cars/20 focus:border-cars transition-all"
          />
        </div>
        {viewMode === 'models' && (
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FunnelIcon className="w-5 h-5 text-gray-400" />
              <select
                value={filterBrand}
                onChange={(e) => setFilterBrand(e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cars/20 focus:border-cars transition-all"
              >
                <option value="all">All Brands</option>
                {carData.brands.map(brand => (
                  <option key={brand.id} value={brand.name}>{brand.name}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CarModelsSearchFilter;