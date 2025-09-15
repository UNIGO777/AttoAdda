import { motion } from 'framer-motion';
import { 
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

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

const CustomersTable = ({ filteredCustomers, getTypeColor, getStatusColor }) => {
  return (
    <motion.div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" variants={itemVariants}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Customer</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Contact</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Type</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Purchases</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Total Spent</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredCustomers.map((customer, index) => (
              <motion.tr
                key={customer.id}
                className="hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-customers/10 rounded-full flex items-center justify-center">
                      <UserIcon className="w-5 h-5 text-customers" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{customer.name}</p>
                      <p className="text-sm text-gray-600 flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        Joined {new Date(customer.joinDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-800 flex items-center">
                      <EnvelopeIcon className="w-4 h-4 mr-2 text-gray-400" />
                      {customer.email}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <PhoneIcon className="w-4 h-4 mr-2 text-gray-400" />
                      {customer.phone}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-2 text-gray-400" />
                      {customer.address}
                    </p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(customer.type)}`}>
                    {customer.type.toUpperCase()}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div>
                    <p className="font-semibold text-gray-800">{customer.totalPurchases}</p>
                    <p className="text-sm text-gray-600">Last: {new Date(customer.lastPurchase).toLocaleDateString()}</p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-bold text-customers">${customer.totalSpent.toLocaleString()}</p>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                    {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-2">
                    <motion.button
                      className="p-2 text-customers hover:bg-customers/10 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <EyeIcon className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <PencilIcon className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <TrashIcon className="w-4 h-4" />
                    </motion.button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default CustomersTable;