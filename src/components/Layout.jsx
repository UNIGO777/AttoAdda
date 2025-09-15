import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      
      <div className="flex-1 flex flex-col overflow-hidden w-full min-w-0">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-spareparts rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <h1 className="text-lg font-bold text-gray-800">AutoAdda Panel</h1>
          </div>
          
          <motion.button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bars3Icon className="w-6 h-6 text-gray-600" />
          </motion.button>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-auto w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;