import { motion } from 'framer-motion';
import StatsCards from '../components/StatsCards';
import RecentActivities from '../components/RecentActivities';
import ChartSection from '../components/ChartSection';
import DashboardHeader from '../components/DashboardHeader';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon, 
  TruckIcon
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Cars',
      value: '1,234',
      change: '+12%',
      isPositive: true,
      icon: TruckIcon,
      color: 'cars',
      bgColor: 'bg-cars/10'
    },
    {
      title: 'Active Garages',
      value: '89',
      change: '+5%',
      isPositive: true,
      icon: UserGroupIcon,
      color: 'garage',
      bgColor: 'bg-garage/10'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+18%',
      isPositive: true,
      icon: CurrencyDollarIcon,
      color: 'primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Spare Parts',
      value: '567',
      change: '-3%',
      isPositive: false,
      icon: ChartBarIcon,
      color: 'spareparts',
      bgColor: 'bg-spareparts/10'
    }
  ];

  const recentActivities = [
    { id: 1, action: 'New car registered', time: '2 minutes ago', type: 'cars' },
    { id: 2, action: 'Garage service completed', time: '15 minutes ago', type: 'garage' },
    { id: 3, action: 'Spare part ordered', time: '1 hour ago', type: 'spareparts' },
    { id: 4, action: 'Payment received', time: '2 hours ago', type: 'primary' },
    { id: 5, action: 'New service request', time: '3 hours ago', type: 'otherservice' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

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
      className="p-4 sm:p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <DashboardHeader />

      {/* Main Content */}
      <main className="space-y-4 sm:space-y-6">
        {/* Stats Grid */}
        <StatsCards stats={stats} />

        {/* Charts and Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Chart Section */}
          <ChartSection />

          {/* Recent Activities */}
          <RecentActivities activities={recentActivities} />
        </div>
      </main>
    </motion.div>
  );
};

export default Dashboard;