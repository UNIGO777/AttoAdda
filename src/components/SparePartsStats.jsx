import { motion } from 'framer-motion';
import { 
  CubeIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const SparePartsStats = ({ spareParts, getStockStatus }) => {
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

  const stats = [
    { 
      label: 'Total Parts', 
      value: spareParts.length, 
      color: 'spareparts', 
      icon: CubeIcon 
    },
    { 
      label: 'In Stock', 
      value: spareParts.filter(p => getStockStatus(p) === 'in_stock').length, 
      color: 'primary', 
      icon: CheckCircleIcon 
    },
    { 
      label: 'Low Stock', 
      value: spareParts.filter(p => getStockStatus(p) === 'low_stock').length, 
      color: 'garage', 
      icon: ExclamationTriangleIcon 
    },
    { 
      label: 'Out of Stock', 
      value: spareParts.filter(p => getStockStatus(p) === 'out_of_stock').length, 
      color: 'customers', 
      icon: ClockIcon 
    }
  ];

  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8" variants={itemVariants}>
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <motion.div
            key={stat.label}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl bg-${stat.color}/10`}>
                <IconComponent className={`w-6 h-6 text-${stat.color}`} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default SparePartsStats;