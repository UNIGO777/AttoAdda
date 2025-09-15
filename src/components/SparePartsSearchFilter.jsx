import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

const SparePartsSearchFilter = ({ 
  searchTerm, 
  setSearchTerm, 
  filterCategory, 
  setFilterCategory, 
  filterStock, 
  setFilterStock 
}) => {
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
    <motion.div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8" variants={itemVariants}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search parts by name, part number, or brand..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-spareparts/20 focus:border-spareparts transition-all"
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FunnelIcon className="w-5 h-5 text-gray-400" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-spareparts/20 focus:border-spareparts transition-all"
            >
              <option value="all">All Categories</option>
              <option value="brakes">Brakes</option>
              <option value="engine">Engine</option>
              <option value="lighting">Lighting</option>
              <option value="fluids">Fluids</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={filterStock}
              onChange={(e) => setFilterStock(e.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-spareparts/20 focus:border-spareparts transition-all"
            >
              <option value="all">All Stock Levels</option>
              <option value="in_stock">In Stock</option>
              <option value="low_stock">Low Stock</option>
              <option value="out_of_stock">Out of Stock</option>
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SparePartsSearchFilter;