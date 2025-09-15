import { motion } from 'framer-motion';
import { EyeIcon, PencilIcon, TrashIcon, TruckIcon } from '@heroicons/react/24/outline';

const CarsGrid = ({ cars }) => {
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'sold': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (cars.length === 0) {
    return (
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <TruckIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-600 mb-2">No cars found</h3>
        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
      </motion.div>
    );
  }

  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={itemVariants}>
      {cars.map((car, index) => (
        <motion.div
          key={car.id}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
          whileHover={{ y: -5, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Car Image */}
          <div className="h-48 bg-gradient-to-br from-cars/10 to-cars/5 flex items-center justify-center">
            <TruckIcon className="w-16 h-16 text-cars/30" />
          </div>

          {/* Car Details */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {car.brand} {car.model}
              </h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(car.status)}`}>
                {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Year:</span>
                <span className="font-medium">{car.year}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Color:</span>
                <span className="font-medium">{car.color}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">License:</span>
                <span className="font-medium">{car.licensePlate}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Mileage:</span>
                <span className="font-medium">{car.mileage.toLocaleString()} km</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Price:</span>
                <span className="font-bold text-cars">${car.price.toLocaleString()}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <motion.button
                className="flex-1 bg-cars/10 text-cars py-2 px-3 rounded-lg text-sm font-medium hover:bg-cars/20 transition-colors flex items-center justify-center space-x-1"
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
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CarsGrid;