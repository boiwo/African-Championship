import React from 'react';
import { Play, Clock, Eye } from 'lucide-react';

const Videos: React.FC = () => {
  const featuredVideo = {
    id: 1,
    title: "CHAN 2025 Official Tournament Preview",
    description: "Get ready for the most exciting CHAN tournament yet! Watch highlights, team profiles, and exclusive interviews.",
    thumbnail: "https://media.gettyimages.com/id/1317753834/video/tanzanias-champions-simba-sports-club-has-drawn-south-africas-giants-kaizer-chiefs-in-the.jpg?s=640x640&k=20&c=LJT8Smm6Y14ASX5OB4oRIW6ppgISre5SX0LRhaWlzew=",
    duration: "15:32",
    views: "125K",
    category: "Tournament Preview"
  };

  const videoCategories = [
    {
      title: "Match Highlights",
      videos: [
        {
          id: 2,
          title: "Morocco vs Nigeria - Group A Highlights",
          thumbnail: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=400",
          duration: "8:45",
          views: "89K"
        },
        {
          id: 3,
          title: "Ghana vs Senegal - Thrilling 2-2 Draw",
          thumbnail: "https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&w=400",
          duration: "10:12",
          views: "67K"
        },
        {
          id: 4,
          title: "Algeria vs Tunisia - Derby Maghreb",
          thumbnail: "https://images.pexels.com/photos/163307/sport-tug-of-war-team-effort-163307.jpeg?auto=compress&cs=tinysrgb&w=400",
          duration: "9:28",
          views: "78K"
        }
      ]
    },
    {
      title: "Player Interviews",
      videos: [
        {
          id: 5,
          title: "Exclusive: Morocco Captain Pre-Match Interview",
          thumbnail: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400",
          duration: "5:15",
          views: "45K"
        },
        {
          id: 6,
          title: "Nigeria's Star Striker on CHAN Dreams",
          thumbnail: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400",
          duration: "6:33",
          views: "38K"
        },
        {
          id: 7,
          title: "Ghana Coach Tactical Analysis",
          thumbnail: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=400",
          duration: "7:21",
          views: "29K"
        }
      ]
    },
    {
      title: "Behind the Scenes",
      videos: [
        {
          id: 8,
          title: "Training Camp: Morocco Preparation",
          thumbnail: "https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&w=400",
          duration: "12:45",
          views: "52K"
        },
        {
          id: 9,
          title: "Stadium Tour: Casablanca Venue Ready",
          thumbnail: "https://images.pexels.com/photos/163307/sport-tug-of-war-team-effort-163307.jpeg?auto=compress&cs=tinysrgb&w=400",
          duration: "8:17",
          views: "34K"
        },
        {
          id: 10,
          title: "Fan Zone: Supporters Arrive in Morocco",
          thumbnail: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400",
          duration: "6:54",
          views: "41K"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Videos</h1>
          <p className="text-xl text-red-100">Watch highlights, interviews, and exclusive CHAN 2025 content</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Video */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Video</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-6 transition-colors duration-300">
                  <Play className="h-12 w-12 ml-1" />
                </button>
              </div>
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                {featuredVideo.duration}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {featuredVideo.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{featuredVideo.title}</h3>
              <p className="text-gray-600 mb-4">{featuredVideo.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Eye className="h-4 w-4 mr-1" />
                <span className="mr-4">{featuredVideo.views} views</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{featuredVideo.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Categories */}
        {videoCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.videos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 transition-colors duration-300">
                        <Play className="h-8 w-8 ml-1" />
                      </button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{video.views} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Load More Button */}
        <div className="text-center">
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300">
            Load More Videos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Videos;