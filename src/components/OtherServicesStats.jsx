import { motion } from 'framer-motion';
import { 
  StarIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  DocumentTextIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const OtherServicesStats = ({ services }) => {
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
      label: 'Total Services', 
      value: services.length, 
      color: 'primary', 
      icon: StarIcon 
    },
    { 
      label: 'Insurance', 
      value: services.filter(s => s.category === 'insurance').length, 
      color: 'customers', 
      icon: ShieldCheckIcon 
    },
    { 
      label: 'Financing', 
      value: services.filter(s => s.category === 'financing').length, 
      color: 'garage', 
      icon: CreditCardIcon 
    },
    { 
      label: 'Warranties', 
      value: services.filter(s => s.category === 'warranty').length, 
      color: 'spareparts', 
      icon: DocumentTextIcon 
    },
    { 
      label: 'Active Services', 
      value: services.filter(s => s.status === 'active').length, 
      color: 'cars', 
      icon: CheckCircleIcon 
    }
  ];

  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8" variants={itemVariants}>
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

export default OtherServicesStats;