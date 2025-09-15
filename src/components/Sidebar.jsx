import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  TruckIcon, 
  WrenchIcon, 
  CogIcon, 
  BuildingStorefrontIcon,
  UserGroupIcon,
  TagIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleMenuToggle = () => {
    if (isMobile) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { icon: HomeIcon, label: 'Dashboard', color: 'text-primary', bgColor: 'bg-primary/10', path: '/dashboard' },
    { icon: TruckIcon, label: 'Cars', color: 'text-cars', bgColor: 'bg-cars/10', path: '/cars' },
    { icon: TagIcon, label: 'Car Models', color: 'text-cars', bgColor: 'bg-cars/10', path: '/car-models' },
    { icon: UserGroupIcon, label: 'Customers', color: 'text-customers', bgColor: 'bg-customers/10', path: '/customers' },
    { icon: BuildingStorefrontIcon, label: 'Garage', color: 'text-garage', bgColor: 'bg-garage/10', path: '/garage' },
    { icon: WrenchIcon, label: 'Spare Parts', color: 'text-spareparts', bgColor: 'bg-spareparts/10', path: '/spare-parts' },
    { icon: CogIcon, label: 'Other Services', color: 'text-otherservice', bgColor: 'bg-otherservice/10', path: '/other-services' },
  ];

  const sidebarVariants = {
    open: {
      width: isMobile ? '280px' : '280px',
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    closed: {
      width: isMobile ? '280px' : '80px',
      x: isMobile ? '-100%' : 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const overlayVariants = {
    open: {
      opacity: 1,
      visibility: 'visible',
      transition: {
        duration: 0.3
      }
    },
    closed: {
      opacity: 0,
      visibility: 'hidden',
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        delay: 0.1
      }
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          variants={overlayVariants}
          animate={isMobileMenuOpen ? 'open' : 'closed'}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      <motion.div
        className={`bg-white shadow-xl h-screen z-50 ${
          isMobile ? 'fixed left-0 top-0' : 'relative'
        } ${isMobileMenuOpen || !isMobile ? 'block': 'hidden'}`}
        variants={sidebarVariants}
        animate={isMobile ? (isMobileMenuOpen ? 'open' : 'closed') : (isOpen ? 'open' : 'closed')}
        initial={isMobile ? 'closed' : 'open'}
      >
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3"
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen && <div className="w-10 h-10 bg-gradient-to-br from-primary to-spareparts rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>}
            {(isMobile ? isMobileMenuOpen : isOpen) && (
              <motion.div
                variants={itemVariants}
                animate="open"
                exit="closed"
              >
                <h1 className="text-xl font-bold text-gray-800">AutoAdda</h1>
                <p className="text-sm text-gray-500">Panel</p>
              </motion.div>
            )}
          </motion.div>
          
          <motion.button
            onClick={handleMenuToggle}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {(isMobile ? isMobileMenuOpen : isOpen) ? (
              <XMarkIcon className="w-5 h-5 text-gray-600" />
            ) : (
              <Bars3Icon className="w-5 h-5 text-gray-600" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.label} to={item.path} onClick={handleLinkClick}>
              <motion.div
                className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 group ${
                  isActive 
                    ? `${item.bgColor} shadow-sm border-2 border-opacity-30` 
                    : 'hover:bg-gray-50 hover:shadow-sm'
                }`}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon className={`w-6 h-6 transition-transform ${
                  isActive 
                    ? item.color 
                    : 'text-gray-500 group-hover:text-gray-700 group-hover:scale-110'
                }`} />
                {(isMobile ? isMobileMenuOpen : isOpen) && (
                  <motion.span
                    className={`font-medium transition-colors ${
                      isActive 
                        ? 'text-gray-900' 
                        : 'text-gray-700 group-hover:text-gray-900'
                    }`}
                    variants={itemVariants}
                    animate="open"
                    exit="closed"
                  >
                    {item.label}
                  </motion.span>
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      {(isMobile ? isMobileMenuOpen : isOpen) && (
        <motion.div
          className="absolute bottom-6 left-4 right-4"
          variants={itemVariants}
          animate="open"
          exit="closed"
        >
          <div className="bg-gradient-to-r from-primary/10 to-spareparts/10 p-4 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-gray-800 mb-1">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-3">Contact our support team</p>
            <motion.button
              className="w-full bg-primary text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Support
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.div>
    </>
  );
};

export default Sidebar;