import { motion } from 'framer-motion';
import { ChartBarIcon } from '@heroicons/react/24/outline';

const ChartSection = () => {
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
      className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      variants={itemVariants}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Revenue Overview</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-primary text-white rounded-lg">7D</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">30D</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">90D</button>
        </div>
      </div>
      
      {/* Placeholder Chart */}
      <div className="h-64 bg-gradient-to-br from-primary/5 to-spareparts/5 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <ChartBarIcon className="w-16 h-16 text-primary/30 mx-auto mb-4" />
          <p className="text-gray-500">Chart visualization would go here</p>
          <p className="text-sm text-gray-400 mt-1">Integration with chart library needed</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChartSection;