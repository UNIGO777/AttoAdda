import { motion } from 'framer-motion';
import { TruckIcon } from '@heroicons/react/24/outline';

const CarsStats = ({ cars }) => {
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
    { label: 'Total Cars', value: cars.length, color: 'cars' },
    { label: 'Available', value: cars.filter(c => c.status === 'available').length, color: 'primary' },
    { label: 'In Maintenance', value: cars.filter(c => c.status === 'maintenance').length, color: 'spareparts' },
    { label: 'Sold', value: cars.filter(c => c.status === 'sold').length, color: 'garage' }
  ];

  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8" variants={itemVariants}>
      {stats.map((stat, index) => (
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
              <TruckIcon className={`w-6 h-6 text-${stat.color}`} />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CarsStats;