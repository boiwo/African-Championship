import React from 'react';
import { Calendar, Clock, User, TrendingUp, MessageCircle, Share2 } from 'lucide-react';

const News: React.FC = () => {
  const news = [
    {
      id: 1,
      title: 'Morocco Secures Top Spot in Group A with Dominant Performance',
      excerpt: 'The Atlas Lions showcased their championship credentials with a convincing victory that sealed their place in the knockout stages.',
      content: 'Morocco delivered a masterclass performance in their final group stage match, demonstrating why they are considered favorites for the tournament. The team\'s tactical discipline and clinical finishing proved too much for their opponents.',
      author: 'Ahmed Hassan',
      date: '2025-02-08',
      time: '2 hours ago',
      category: 'Match Report',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'DR Congo\'s Perfect Run Continues in Group B',
      excerpt: 'The Leopards maintain their 100% record with another impressive display, showing they mean business in this tournament.',
      content: 'DR Congo has been the standout team in Group B, combining defensive solidity with attacking flair. Their perfect record speaks volumes about their preparation and determination.',
      author: 'Marie Lukeba',
      date: '2025-02-07',
      time: '1 day ago',
      category: 'Team News',
      image: 'https://images.pexels.com/photos/209948/pexels-photo-209948.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 3,
      title: 'Record-Breaking Attendance at Kasarani Stadium',
      excerpt: 'Fans flock to witness the beautiful game as tournament attendance figures soar beyond expectations.',
      content: 'The passionate support from fans across East Africa has been phenomenal. Stadium atmospheres have been electric, creating an incredible backdrop for the matches.',
      author: 'Joseph Kiprotich',
      date: '2025-02-06',
      time: '2 days ago',
      category: 'Tournament News',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 4,
      title: 'Young Stars Shine Bright in CHAN 2024',
      excerpt: 'Emerging talents are making their mark on the continental stage, showcasing the bright future of African football.',
      content: 'Several young players have announced themselves on the big stage, with scouts from major clubs taking notice of their performances.',
      author: 'Grace Ochieng',
      date: '2025-02-05',
      time: '3 days ago',
      category: 'Player Focus',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 5,
      title: 'Host Nations Making the Most of Home Advantage',
      excerpt: 'Kenya, Tanzania, and Uganda are all showing strong performances, buoyed by incredible home support.',
      content: 'The co-hosting arrangement has worked brilliantly, with all three nations benefiting from passionate home crowds and familiar conditions.',
      author: 'Samuel Mwangi',
      date: '2025-02-04',
      time: '4 days ago',
      category: 'Host Nations',
      image: 'https://images.pexels.com/photos/1884576/pexels-photo-1884576.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 6,
      title: 'Tactical Evolution: How Teams are Adapting',
      excerpt: 'Coaches are showcasing tactical innovation as the tournament progresses, making for fascinating viewing.',
      content: 'The level of tactical sophistication has impressed observers, with teams showing flexibility and intelligence in their approaches to different opponents.',
      author: 'Dr. Emmanuel Baidoo',
      date: '2025-02-03',
      time: '5 days ago',
      category: 'Analysis',
      image: 'https://images.pexels.com/photos/262506/pexels-photo-262506.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const categories = ['All', 'Match Report', 'Team News', 'Tournament News', 'Player Focus', 'Analysis'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay up to date with all the latest developments from the African Nations Championship
        </p>
      </div>

      {/* Breaking News Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-3">
          <TrendingUp className="h-6 w-6 text-red-200" />
          <span className="font-bold text-lg">Breaking News</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">Quarter-Final Matchups Confirmed!</h2>
        <p className="text-red-100">
          With the group stage concluded, the knockout rounds promise thrilling encounters as 
          the continent's best battle for supremacy.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-green-50 hover:text-green-600 hover:border-green-300 transition-all duration-200"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured News */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Stories</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {news.filter(article => article.featured).map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }}>
                <div className="h-full bg-black bg-opacity-40 flex items-end">
                  <div className="p-4">
                    <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.time}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                    Read More →
                  </button>
                  <div className="flex items-center space-x-3">
                    <button className="text-gray-500 hover:text-green-600 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                    </button>
                    <button className="text-gray-500 hover:text-green-600 transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Other News */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">More Stories</h2>
        <div className="space-y-6">
          {news.filter(article => !article.featured).map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex gap-6">
                <div className="hidden md:block">
                  <div 
                    className="w-32 h-24 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${article.image})` }}
                  ></div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{article.time}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-green-600 cursor-pointer transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="text-gray-500 hover:text-green-600 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                      </button>
                      <button className="text-gray-500 hover:text-green-600 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-green-100 mb-6">
            Get the latest CHAN news and match updates delivered straight to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;