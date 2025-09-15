import { motion } from 'framer-motion';
import { 
  EyeIcon,
  PencilIcon,
  TrashIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CubeIcon
} from '@heroicons/react/24/outline';

const SparePartsCard = ({ part, index, getStockStatus }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'in_stock': return 'bg-green-100 text-green-800';
      case 'low_stock': return 'bg-yellow-100 text-yellow-800';
      case 'out_of_stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'in_stock': return <CheckCircleIcon className="w-4 h-4" />;
      case 'low_stock': return <ExclamationTriangleIcon className="w-4 h-4" />;
      case 'out_of_stock': return <ClockIcon className="w-4 h-4" />;
      default: return <CubeIcon className="w-4 h-4" />;
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'brakes': return '🛑';
      case 'engine': return '⚙️';
      case 'lighting': return '💡';
      case 'fluids': return '🛢️';
      default: return '🔧';
    }
  };

  const stockStatus = getStockStatus(part);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Part Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-spareparts/10 rounded-xl flex items-center justify-center text-2xl">
            {getCategoryIcon(part.category)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{part.name}</h3>
            <p className="text-sm text-gray-600">{part.partNumber}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(stockStatus)}`}>
          {getStatusIcon(stockStatus)}
          <span>{stockStatus.replace('_', ' ').toUpperCase()}</span>
        </span>
      </div>

      {/* Part Details */}
      <div className="space-y-3 mb-4">
        <div>
          <p className="text-sm text-gray-600">Brand</p>
          <p className="font-medium text-gray-800">{part.brand}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-600">Description</p>
          <p className="text-gray-800 text-sm">{part.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Stock Quantity</p>
            <p className="font-bold text-lg">
              <span className={stockStatus === 'out_of_stock' ? 'text-red-600' : stockStatus === 'low_stock' ? 'text-yellow-600' : 'text-green-600'}>
                {part.stockQuantity}
              </span>
              <span className="text-gray-400 text-sm"> / {part.maxStockLevel}</span>
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Location</p>
            <p className="font-medium text-gray-800">{part.location}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Unit Price</p>
            <p className="font-bold text-spareparts">${part.unitPrice}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Supplier</p>
            <p className="font-medium text-gray-800 text-sm">{part.supplier}</p>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600">Last Restocked</p>
          <p className="font-medium text-gray-800">{new Date(part.lastRestocked).toLocaleDateString()}</p>
        </div>

        {/* Stock Level Indicator */}
        <div>
          <p className="text-sm text-gray-600 mb-2">Stock Level</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all ${
                stockStatus === 'out_of_stock' ? 'bg-red-500' :
                stockStatus === 'low_stock' ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${Math.min((part.stockQuantity / part.maxStockLevel) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 pt-4 border-t border-gray-100">
        <motion.button
          className="flex-1 bg-spareparts/10 text-spareparts py-2 px-3 rounded-lg text-sm font-medium hover:bg-spareparts/20 transition-colors flex items-center justify-center space-x-1"
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

export default SparePartsCard;