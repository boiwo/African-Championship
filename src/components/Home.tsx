import React from 'react';
import { Trophy, Calendar, MapPin, Users, Award, Target, Play, ArrowRight, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section - CAF Style */}
      <section className="relative bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Trophy className="h-12 w-12 text-yellow-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              CHAN 2025
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-light">
              African Nations Championship
            </p>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              The premier tournament for domestic-based players across Africa
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Kenya • Tanzania • Uganda</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">1-19 February 2025</span>
              </div>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Watch Tournament Highlights
              <Play className="inline-block ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats - CAF Style */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-700" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">18</div>
              <div className="text-gray-600 font-medium">Nations</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">32</div>
              <div className="text-gray-600 font-medium">Matches</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">19</div>
              <div className="text-gray-600 font-medium">Days</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">$4.5M</div>
              <div className="text-gray-600 font-medium">Prize Money</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <button className="flex items-center space-x-2 text-green-700 hover:text-green-800 font-medium">
              <span>View All News</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Morocco Advances to Quarter-Finals",
                excerpt: "The Atlas Lions secured their spot with a commanding performance...",
                date: "2 hours ago",
                image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Record Attendance at Kasarani Stadium",
                excerpt: "Fans pack the stadium as tournament fever grips East Africa...",
                date: "5 hours ago",
                image: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Young Stars Shine in Group Stage",
                excerpt: "Emerging talents making their mark on the continental stage...",
                date: "1 day ago",
                image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            ].map((article, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }}></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <button className="text-green-700 hover:text-green-800 font-medium">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Format */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tournament Format</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The African Nations Championship features 18 teams competing in a group stage followed by knockout rounds
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stage: "Group Stage", teams: "18 teams in 4 groups", matches: "24 matches", duration: "Feb 1-8" },
              { stage: "Quarter Finals", teams: "8 teams", matches: "4 matches", duration: "Feb 12" },
              { stage: "Semi Finals", teams: "4 teams", matches: "2 matches", duration: "Feb 16" },
              { stage: "Final", teams: "2 teams", matches: "1 match", duration: "Feb 19" }
            ].map((phase, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:border-green-300 transition-colors duration-300">
                <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.stage}</h3>
                <p className="text-gray-600 mb-1">{phase.teams}</p>
                <p className="text-gray-600 mb-1">{phase.matches}</p>
                <p className="text-green-700 font-medium">{phase.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host Countries */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Host Countries</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Three East African nations unite to host the continent's premier domestic football championship
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                country: "Kenya",
                flag: "🇰🇪",
                city: "Nairobi",
                stadium: "Kasarani Stadium",
                capacity: "60,000"
              },
              {
                country: "Tanzania",
                flag: "🇹🇿",
                city: "Dar es Salaam",
                stadium: "Benjamin Mkapa Stadium",
                capacity: "60,000"
              },
              {
                country: "Uganda",
                flag: "🇺🇬",
                city: "Kampala",
                stadium: "Mandela National Stadium",
                capacity: "45,000"
              }
            ].map((host, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-opacity-20 transition-all duration-300">
                <div className="text-6xl mb-4">{host.flag}</div>
                <h3 className="text-2xl font-bold mb-2">{host.country}</h3>
                <p className="text-lg opacity-90 mb-1">{host.city}</p>
                <p className="opacity-75 mb-1">{host.stadium}</p>
                <p className="text-yellow-400 font-medium">Capacity: {host.capacity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About CHAN */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About African CHAN</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The African Nations Championship (CHAN) is a biennial football tournament organized by CAF 
                for the national teams of Africa, exclusively featuring players who compete in their own domestic leagues.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Unlike the Africa Cup of Nations, CHAN celebrates local talent and provides a platform for 
                players based in African leagues to showcase their skills on the continental stage.
              </p>
              <div className="space-y-4">
                {[
                  "Domestic players only - promoting local talent",
                  "18 participating nations across Africa",
                  "Platform for continental football development",
                  "Opportunity for international recognition"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/209948/pexels-photo-209948.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="African football"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <Star className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;