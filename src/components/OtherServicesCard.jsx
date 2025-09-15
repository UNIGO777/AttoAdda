import { motion } from 'framer-motion';
import { 
  EyeIcon,
  PencilIcon,
  TrashIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  DocumentTextIcon,
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const OtherServicesCard = ({ service, index }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'expired': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <CheckCircleIcon className="w-4 h-4" />;
      case 'pending': return <ClockIcon className="w-4 h-4" />;
      case 'completed': return <CheckCircleIcon className="w-4 h-4" />;
      case 'expired': return <ExclamationTriangleIcon className="w-4 h-4" />;
      default: return <ClockIcon className="w-4 h-4" />;
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'insurance': return <ShieldCheckIcon className="w-6 h-6" />;
      case 'financing': return <CreditCardIcon className="w-6 h-6" />;
      case 'warranty': return <DocumentTextIcon className="w-6 h-6" />;
      case 'assistance': return <PhoneIcon className="w-6 h-6" />;
      case 'inspection': return <CheckCircleIcon className="w-6 h-6" />;
      default: return <DocumentTextIcon className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'insurance': return 'text-blue-600';
      case 'financing': return 'text-green-600';
      case 'warranty': return 'text-purple-600';
      case 'assistance': return 'text-orange-600';
      case 'inspection': return 'text-indigo-600';
      default: return 'text-gray-600';
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
          <div className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center ${getCategoryColor(service.category)}`}>
            {getCategoryIcon(service.category)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
            <p className="text-sm text-gray-600 capitalize">{service.category}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(service.status)}`}>
          {getStatusIcon(service.status)}
          <span>{service.status.toUpperCase()}</span>
        </span>
      </div>

      {/* Customer & Vehicle Info */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600 flex items-center">
              <UserGroupIcon className="w-4 h-4 mr-2" />
              Customer
            </p>
            <p className="font-medium text-gray-800">{service.customerName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Vehicle</p>
            <p className="font-medium text-gray-800">{service.vehicleModel}</p>
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
            <p className="text-sm text-gray-600">Provider</p>
            <p className="font-medium text-gray-800">{service.provider}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Start Date</p>
            <p className="font-medium text-gray-800">{new Date(service.startDate).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">
              {service.monthlyPremium ? 'Monthly Payment' : service.monthlyPayment ? 'Monthly Payment' : 'Total Cost'}
            </p>
            <p className="font-bold text-primary">
              ${service.monthlyPremium || service.monthlyPayment || service.oneTimeFee}
              {(service.monthlyPremium || service.monthlyPayment) && <span className="text-sm font-normal">/month</span>}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Value</p>
            <p className="font-bold text-gray-800">${service.totalValue.toLocaleString()}</p>
          </div>
        </div>

        {service.endDate && (
          <div>
            <p className="text-sm text-gray-600">End Date</p>
            <p className="font-medium text-gray-800">{new Date(service.endDate).toLocaleDateString()}</p>
          </div>
        )}

        {service.coverage && (
          <div>
            <p className="text-sm text-gray-600 mb-2">Coverage</p>
            <div className="flex flex-wrap gap-1">
              {service.coverage.map((item, idx) => (
                <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {service.services && (
          <div>
            <p className="text-sm text-gray-600 mb-2">Services Included</p>
            <div className="flex flex-wrap gap-1">
              {service.services.map((item, idx) => (
                <span key={idx} className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {service.interestRate && (
          <div>
            <p className="text-sm text-gray-600">Interest Rate</p>
            <p className="font-medium text-gray-800">{service.interestRate}% APR</p>
          </div>
        )}

        {service.certificateNumber && (
          <div>
            <p className="text-sm text-gray-600">Certificate Number</p>
            <p className="font-medium text-gray-800">{service.certificateNumber}</p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 pt-4 border-t border-gray-100">
        <motion.button
          className="flex-1 bg-primary/10 text-primary py-2 px-3 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors flex items-center justify-center space-x-1"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <EyeIcon className="w-4 h-4" />
          <span>View</span>
        </motion.button>
        <motion.button
          className="flex-1 bg-garage/10 text-garage py-2 px-3 rounded-lg text-sm font-medium hover:bg-garage/20 transition-colors flex items-center justify-center space-x-1"
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

export default OtherServicesCard;