import React, { useState } from 'react';
import { Menu, X, Trophy, Calendar, Users, Award, Newspaper, Home, ChevronDown } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'teams', label: 'Teams', icon: Users },
    { id: 'fixtures', label: 'Fixtures & Results', icon: Calendar },
    { id: 'standings', label: 'Standings', icon: Trophy },
    { id: 'players', label: 'Players', icon: Award },
    { id: 'news', label: 'News', icon: Newspaper },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center space-x-6">
              <span>CAF Official Website</span>
              <span>|</span>
              <span>African Football</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>EN</span>
              <span>|</span>
              <span>FR</span>
              <span>|</span>
              <span>AR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* CAF Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 via-yellow-500 to-red-600 rounded-full flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">CAF</h1>
                  <p className="text-sm text-gray-600 -mt-1">Confédération Africaine de Football</p>
                </div>
              </div>
              <div className="hidden lg:block h-12 w-px bg-gray-300 mx-4"></div>
              <div className="hidden lg:block">
                <h2 className="text-lg font-bold text-green-700">CHAN 2025</h2>
                <p className="text-sm text-gray-600">African Nations Championship</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${
                      activeTab === item.id
                        ? 'bg-green-700 text-white shadow-md'
                        : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeTab === item.id
                          ? 'bg-green-700 text-white'
                          : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Tournament Banner */}
      <div className="bg-gradient-to-r from-green-700 via-yellow-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center space-x-6 text-sm font-medium">
            <span>🏆 CHAN 2025 - Kenya, Tanzania & Uganda</span>
            <span>|</span>
            <span>📅 February 1-19, 2025</span>
            <span>|</span>
            <span>🌍 18 Nations Competing</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;