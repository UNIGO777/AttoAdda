import { motion } from 'framer-motion';

const RecentActivities = ({ activities }) => {
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
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      variants={itemVariants}
      whileHover={{ scale: 1.01 }}
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Recent Activities</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 5 }}
          >
            <div className={`w-2 h-2 rounded-full bg-${activity.type}`} />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{activity.action}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.button
        className="w-full mt-4 py-2 text-sm text-primary hover:bg-primary/5 rounded-lg transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        View All Activities
      </motion.button>
    </motion.div>
  );
};

export default RecentActivities;