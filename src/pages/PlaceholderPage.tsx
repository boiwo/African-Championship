import React from 'react';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
        <p className="text-xl text-gray-600 mb-8">{description}</p>
        <div className="bg-white rounded-lg shadow-lg p-12">
          <div className="text-6xl text-gray-300 mb-4">🚧</div>
          <p className="text-gray-500">This page is under construction. Please check back later!</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;