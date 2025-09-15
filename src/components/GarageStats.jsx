import { motion } from 'framer-motion';
import { 
  WrenchScrewdriverIcon,
  ClockIcon,
  CheckCircleIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';

const GarageStats = ({ services }) => {
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
      color: 'garage', 
      icon: WrenchScrewdriverIcon 
    },
    { 
      label: 'In Progress', 
      value: services.filter(s => s.status === 'in_progress').length, 
      color: 'primary', 
      icon: ClockIcon 
    },
    { 
      label: 'Completed Today', 
      value: services.filter(s => s.status === 'completed' && s.completedDate === '2024-01-15').length, 
      color: 'customers', 
      icon: CheckCircleIcon 
    },
    { 
      label: 'Scheduled', 
      value: services.filter(s => s.status === 'scheduled').length, 
      color: 'spareparts', 
      icon: CalendarDaysIcon 
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

export default GarageStats;