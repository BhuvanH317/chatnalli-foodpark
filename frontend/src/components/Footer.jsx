import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">Chatnalli FoodPark</span>
            </div>
            <p className="text-primary-200 mb-6">
              Your trusted source for authentic and delicious traditional snacks. 
              Made with love and the finest ingredients.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>your_info_email@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>your enquiry phone number</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links aligned right */}
          <div className="col-span-1 md:col-span-1 md:text-right">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-700 mt-12 pt-6 text-center">
          <p className="text-primary-200">
            © 2025 Chatnalli FoodPark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
