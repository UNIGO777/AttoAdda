import { motion } from 'framer-motion';

const DashboardHeader = ({ user = { name: 'John Doe', role: 'Administrator', initials: 'JD' } }) => {
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
    <motion.header 
      className="bg-white mb-5 shadow-sm border-b border-gray-200 p-6"
      variants={itemVariants}
    >
      <div className="flex items-center justify-between">
        <div >
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1 w-[50vw]">Welcome back! Here's what's happening today.</p>
        </div>
        <motion.div 
          className="flex items-center space-x-4"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-right">
            <p className="text-sm font-medium text-gray-800">{user.name}</p>
            <p className="text-xs text-gray-500">{user.role}</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-spareparts rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">{user.initials}</span>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default DashboardHeader;