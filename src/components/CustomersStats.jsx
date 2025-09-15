import { motion } from 'framer-motion';
import { UserIcon } from '@heroicons/react/24/outline';

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

const CustomersStats = ({ customers }) => {
  const stats = [
    { 
      label: 'Total Customers', 
      value: customers.length, 
      color: 'customers' 
    },
    { 
      label: 'Active Customers', 
      value: customers.filter(c => c.status === 'active').length, 
      color: 'primary' 
    },
    { 
      label: 'VIP Customers', 
      value: customers.filter(c => c.type === 'vip').length, 
      color: 'garage' 
    },
    { 
      label: 'Total Revenue', 
      value: `$${customers.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}`, 
      color: 'spareparts' 
    }
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
              <UserIcon className={`w-6 h-6 text-${stat.color}`} />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CustomersStats;