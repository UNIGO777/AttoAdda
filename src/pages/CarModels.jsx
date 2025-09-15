import { motion } from 'framer-motion';
import { useState } from 'react';
import { TruckIcon } from '@heroicons/react/24/outline';
import CarModelsHeader from '../components/CarModelsHeader';
import CarModelsStats from '../components/CarModelsStats';
import CarModelsSearchFilter from '../components/CarModelsSearchFilter';
import CarModelsBrandsView from '../components/CarModelsBrandsView';
import CarModelsModelsView from '../components/CarModelsModelsView';

const CarModels = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBrand, setFilterBrand] = useState('all');
  const [filterYear, setFilterYear] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [expandedBrands, setExpandedBrands] = useState(new Set());
  const [viewMode, setViewMode] = useState('brands'); // 'brands' or 'models'

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sample car brands and models data
  const [carData] = useState({
    brands: [
      { id: "1ccf15b3-0e8e-4fd8-8be4-e9dad86722b0", name: "Haval" },
      { id: "1d77c3c2-fdb2-411f-92ad-22848a577199", name: "INEOS Grenadier" },
      { id: "1e18fffd-e50c-4af0-a345-910028f4d655", name: "Fiat" },
      { id: "1eda92ab-3f2a-4b9f-a214-27c091cc402f", name: "Bentley" },
      { id: "1f13994e-480a-4220-9512-7edba244fc99", name: "Alfa Romeo" },
      { id: "21616203-0172-4ca9-98d3-b463b2245615", name: "Citroen" },
      { id: "23954595-5c16-4eb6-88e4-f9d4b591a5be", name: "Hongqi" },
      { id: "266ab988-1638-4398-9922-5d970b02eaeb", name: "BAIC" },
      { id: "2d69827b-ddbe-406f-b54e-0e150f8ac62e", name: "Morris Garages" },
      { id: "e18645c6-c498-41ab-a864-5bd596c1e4bd", name: "Toyota" },
      { id: "96a10c84-c3be-491a-9b9f-4bebe272fc8a", name: "Nissan" },
      { id: "f0a42e92-99bf-4bd2-81a2-61bcf753855d", name: "Ferrari" },
      { id: "5b3e18e2-bcdc-4f62-9c10-5e64de29bd6d", name: "Changan" },
      { id: "0a6cc7dd-6773-4740-98e1-67005ab8f8a2", name: "Volvo" },
      { id: "82a4705b-6aa2-4c5a-8eea-b2dfd4628a84", name: "GMC" }
    ],
    models: [
      {
        id: "01a580aa-8aeb-4d0e-a36d-0f791f5a4b8b",
        name: "812 Superfast",
        fullName: "812 Superfast Automatic 6496 cc",
        vehicleTypeId: "2603f382-6f17-42ae-affe-37a89011dcf6",
        vehicleType: "Coupe",
        makeId: "f0a42e92-99bf-4bd2-81a2-61bcf753855d",
        makerName: "Ferrari"
      },
      {
        id: "01a75ace-4332-4cfb-be60-1b31234e43d0",
        name: "UNI-K",
        fullName: "UNI-K Automatic 1999 cc",
        vehicleTypeId: "4d7da7d7-a32c-467d-b5be-1d2240233cfc",
        vehicleType: "SUV",
        makeId: "5b3e18e2-bcdc-4f62-9c10-5e64de29bd6d",
        makerName: "Changan"
      },
      {
        id: "02f2a86d-5f8f-4c76-9f61-6e98e17bcb04",
        name: "HS-3",
        fullName: "HS-3 Automatic 1998 cc",
        vehicleTypeId: "4d7da7d7-a32c-467d-b5be-1d2240233cfc",
        vehicleType: "SUV",
        makeId: "23954595-5c16-4eb6-88e4-f9d4b591a5be",
        makerName: "Hongqi"
      },
      {
        id: "0341a335-7620-4c88-9afd-cb05db1a40d6",
        name: "Granvia",
        fullName: "Granvia Automatic, 3498 cc",
        vehicleTypeId: "2ac6a02a-6809-455c-92a2-e63338d4edb6",
        vehicleType: "Minivan",
        makeId: "e18645c6-c498-41ab-a864-5bd596c1e4bd",
        makerName: "Toyota"
      },
      {
        id: "03d96e8e-5052-4422-a336-45dc951cf267",
        name: "XC60",
        fullName: "XC60 Automatic",
        vehicleTypeId: "4d7da7d7-a32c-467d-b5be-1d2240233cfc",
        vehicleType: "SUV",
        makeId: "0a6cc7dd-6773-4740-98e1-67005ab8f8a2",
        makerName: "Volvo"
      },
      {
        id: "05ca64f5-1db2-47c4-bbdd-f870b0e09930",
        name: "Yukon XL",
        fullName: "Yukon Denali Automatic 5328cc",
        vehicleTypeId: "4d7da7d7-a32c-467d-b5be-1d2240233cfc",
        vehicleType: "SUV",
        makeId: "82a4705b-6aa2-4c5a-8eea-b2dfd4628a84",
        makerName: "GMC"
      },
      {
        id: "06e07322-03a5-4768-a519-a246758be52e",
        name: "Maxima",
        fullName: "Maxima Automatic",
        vehicleTypeId: "4f78a5a6-0de8-4e83-ac52-404ecb239df1",
        vehicleType: "Sedan",
        makeId: "96a10c84-c3be-491a-9b9f-4bebe272fc8a",
        makerName: "Nissan"
      }
    ]
  });

  const getModelsForBrand = (brandId) => {
    return carData.models.filter(model => model.makeId === brandId);
  };

  const filteredBrands = carData.brands.filter(brand => {
    return brand.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const filteredModels = carData.models.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      model.makerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      model.vehicleType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = filterBrand === 'all' || model.makerName === filterBrand;
    return matchesSearch && matchesBrand;
  });

  // Pagination logic
  const currentData = viewMode === 'brands' ? filteredBrands : filteredModels;
  const totalPages = Math.ceil(currentData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = currentData.slice(startIndex, endIndex);

  // Reset to first page when switching view modes or filters change
  const resetPagination = () => {
    setCurrentPage(1);
  };

  // Reset pagination when search term, filter, or view mode changes
  useState(() => {
    resetPagination();
  }, [searchTerm, filterBrand, viewMode]);

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
      className="p-4 sm:p-6 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        <CarModelsHeader
          viewMode={viewMode}
          setViewMode={setViewMode}
          onAddClick={() => setShowAddModal(true)}
        />

        <CarModelsStats carData={carData} />

        <CarModelsSearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterBrand={filterBrand}
          setFilterBrand={setFilterBrand}
          viewMode={viewMode}
          carData={carData}
        />

        {/* Content based on view mode */}
        {viewMode === 'brands' ? (
          <CarModelsBrandsView
            filteredBrands={paginatedData}
            expandedBrands={expandedBrands}
            toggleBrandExpansion={() => {}}
            getModelsForBrand={getModelsForBrand}
          />
        ) : (
          <CarModelsModelsView filteredModels={paginatedData} />
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            className="flex justify-center items-center space-x-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`px-3 py-2 rounded-lg ${
                    currentPage === pageNumber
                      ? 'bg-primary text-white'
                      : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </motion.div>
        )}

        {/* Empty State */}
        {currentData.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <TruckIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">No {viewMode} found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
    </motion.div>
  );
};

export default CarModels;