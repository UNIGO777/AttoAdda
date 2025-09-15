import { motion } from 'framer-motion';
import { 
  WrenchScrewdriverIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  CalendarDaysIcon,
  UserIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

const GarageServiceCard = ({ service, index }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircleIcon className="w-5 h-5" />;
      case 'in_progress': return <ClockIcon className="w-5 h-5" />;
      case 'scheduled': return <CalendarDaysIcon className="w-5 h-5" />;
      case 'pending': return <ExclamationTriangleIcon className="w-5 h-5" />;
      default: return <ClockIcon className="w-5 h-5" />;
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Service Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-garage/10 rounded-xl flex items-center justify-center">
            <WrenchScrewdriverIcon className="w-6 h-6 text-garage" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{service.serviceType}</h3>
            <p className="text-sm text-gray-600">Service #{service.id}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(service.priority)}`}>
            {service.priority.toUpperCase()}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(service.status)}`}>
            {getStatusIcon(service.status)}
            <span>{service.status.replace('_', ' ').toUpperCase()}</span>
          </span>
        </div>
      </div>

      {/* Customer & Vehicle Info */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600 flex items-center">
              <UserIcon className="w-4 h-4 mr-2" />
              Customer
            </p>
            <p className="font-medium text-gray-800">{service.customerName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Vehicle</p>
            <p className="font-medium text-gray-800">{service.carModel}</p>
            <p className="text-sm text-gray-600">{service.licensePlate}</p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="space-y-3 mb-4">
        <div>
          <p className="text-sm text-gray-600">Description</p>
          <p className="text-gray-800">{service.description}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Technician</p>
            <p className="font-medium text-gray-800">{service.technician}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Start Date</p>
            <p className="font-medium text-gray-800">{new Date(service.startDate).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Estimated Cost</p>
            <p className="font-bold text-garage">${service.estimatedCost}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              {service.status === 'completed' ? 'Actual Cost' : 'Status'}
            </p>
            {service.status === 'completed' ? (
              <p className="font-bold text-green-600">${service.actualCost}</p>
            ) : (
              <p className="font-medium text-gray-800 capitalize">{service.status.replace('_', ' ')}</p>
            )}
          </div>
        </div>

        {service.nextService && (
          <div>
            <p className="text-sm text-gray-600">Next Service Due</p>
            <p className="font-medium text-primary">{new Date(service.nextService).toLocaleDateString()}</p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 pt-4 border-t border-gray-100">
        <motion.button
          className="flex-1 bg-garage/10 text-garage py-2 px-3 rounded-lg text-sm font-medium hover:bg-garage/20 transition-colors flex items-center justify-center space-x-1"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <EyeIcon className="w-4 h-4" />
          <span>View</span>
        </motion.button>
        <motion.button
          className="flex-1 bg-primary/10 text-primary py-2 px-3 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors flex items-center justify-center space-x-1"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <PencilIcon className="w-4 h-4" />
          <span>Edit</span>
        </motion.button>
        <motion.button
          className="bg-red-100 text-red-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <TrashIcon className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GarageServiceCard;