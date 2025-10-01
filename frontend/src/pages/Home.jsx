import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
              Authentic
              <span className="text-primary-500 block">Traditional Snacks</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover the rich flavors of traditional Indian snacks. Made with love, 
              served with pride. Experience the taste of authentic Nippat, Maldhi, and Churmuri.
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Traditional Indian Snacks"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-800 mb-4">
              Why Choose Chatnalli FoodPark?
            </h2>
            <p className="text-xl text-gray-600">
              Quality, taste, and tradition in every bite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Made with the finest ingredients and traditional recipes passed down through generations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Safe & Hygienic</h3>
              <p className="text-gray-600">
                Prepared in clean, hygienic conditions with strict quality control measures.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and secure delivery to your doorstep with cash on delivery option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary-800 mb-6">
                About Chatnalli FoodPark
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link 
                to="/products" 
                className="btn-primary"
              >
                Explore Products
              </Link>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Traditional cooking"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Taste Tradition?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of satisfied customers who have made Chatnalli FoodPark 
            their trusted choice for authentic snacks.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center bg-white text-primary-500 hover:bg-primary-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Shopping
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;