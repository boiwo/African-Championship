import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const News: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Morocco Announces Squad for CHAN 2025",
      excerpt: "The Atlas Lions have named a strong 23-man squad featuring several promising local talents for the upcoming championship.",
      author: "CAF Media Team",
      date: "2025-01-15",
      category: "Team News",
      image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "CHAN 2025 Venues Ready for Action",
      excerpt: "All stadiums have passed final inspections and are ready to host the continent's premier local player tournament.",
      author: "Stadium Committee",
      date: "2025-01-14",
      category: "Infrastructure",
      image: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Nigeria's Home Eagles Arrive in Morocco",
      excerpt: "The Nigerian squad has arrived in Morocco ahead of their opening group stage match, expressing confidence.",
      author: "Team Reporter",
      date: "2025-01-13",
      category: "Team News",
      image: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Record Ticket Sales for CHAN 2025",
      excerpt: "Ticket sales have exceeded expectations with over 80% of available seats already sold across all venues.",
      author: "Commercial Team",
      date: "2025-01-12",
      category: "Commercial",
      image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "CAF President Welcomes Teams to Morocco",
      excerpt: "The CAF President officially welcomed all participating teams and emphasized the tournament's importance for African football development.",
      author: "CAF Communications",
      date: "2025-01-11",
      category: "Official",
      image: "https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Local Heroes Ready to Shine",
      excerpt: "Players from domestic leagues across Africa are set to showcase their talents on the continental stage.",
      author: "Feature Writer",
      date: "2025-01-10",
      category: "Features",
      image: "https://images.pexels.com/photos/163307/sport-tug-of-war-team-effort-163307.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const categories = ["All", "Team News", "Infrastructure", "Commercial", "Official", "Features"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h1>
          <p className="text-xl text-green-100">Stay updated with the latest from CHAN 2025</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-white border border-gray-300 hover:bg-green-50 hover:border-green-500 transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {newsArticles.filter(article => article.featured).map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    FEATURED
                  </span>
                  <span className="ml-2 text-sm text-gray-500">{article.category}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h2>
                <p className="text-gray-600 mb-6">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{article.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <button className="flex items-center text-green-600 hover:text-green-700 font-semibold">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.filter(article => !article.featured).map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-3">{article.author}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <button className="mt-4 flex items-center text-green-600 hover:text-green-700 font-semibold">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;