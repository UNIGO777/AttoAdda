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

const CustomersSearchFilter = ({ 
  searchTerm, 
  setSearchTerm, 
  filterType, 
  setFilterType 
}) => {
  return (
    <motion.div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8" variants={itemVariants}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search customers by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-customers/20 focus:border-customers transition-all"
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FunnelIcon className="w-5 h-5 text-gray-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-customers/20 focus:border-customers transition-all"
            >
              <option value="all">All Types</option>
              <option value="vip">VIP</option>
              <option value="premium">Premium</option>
              <option value="regular">Regular</option>
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomersSearchFilter;