import React, { useState } from 'react';
import { Users, MapPin, Trophy, Star, Filter, Search } from 'lucide-react';

const Teams: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const teams = [
    // Group A
    { id: 1, name: 'Morocco', flag: '🇲🇦', group: 'A', ranking: 1, titles: 2, coach: 'Houcine Ammouta', city: 'Rabat' },
    { id: 2, name: 'Algeria', flag: '🇩🇿', group: 'A', ranking: 2, titles: 1, coach: 'Madjid Bougherra', city: 'Algiers' },
    { id: 3, name: 'Ghana', flag: '🇬🇭', group: 'A', ranking: 3, titles: 0, coach: 'Annor Walker', city: 'Accra' },
    { id: 4, name: 'Sudan', flag: '🇸🇩', group: 'A', ranking: 15, titles: 0, coach: 'Kwesi Appiah', city: 'Khartoum' },
    
    // Group B
    { id: 5, name: 'DR Congo', flag: '🇨🇩', group: 'B', ranking: 4, titles: 1, coach: 'Sebastien Desabre', city: 'Kinshasa' },
    { id: 6, name: 'Senegal', flag: '🇸🇳', group: 'B', ranking: 5, titles: 0, coach: 'Pape Bouna Thiaw', city: 'Dakar' },
    { id: 7, name: 'Kenya', flag: '🇰🇪', group: 'B', ranking: 12, titles: 0, coach: 'Engin Firat', city: 'Nairobi' },
    { id: 8, name: 'Niger', flag: '🇳🇪', group: 'B', ranking: 18, titles: 0, coach: 'Jean-Michel Cavalli', city: 'Niamey' },
    
    // Group C
    { id: 9, name: 'Nigeria', flag: '🇳🇬', group: 'C', ranking: 6, titles: 0, coach: 'Daniel Ogunmodede', city: 'Abuja' },
    { id: 10, name: 'Tunisia', flag: '🇹🇳', group: 'C', ranking: 7, titles: 0, coach: 'Mondher Kebaier', city: 'Tunis' },
    { id: 11, name: 'Tanzania', flag: '🇹🇿', group: 'C', ranking: 13, titles: 0, coach: 'Hemed Morocco', city: 'Dodoma' },
    { id: 12, name: 'Guinea', flag: '🇬🇳', group: 'C', ranking: 16, titles: 0, coach: 'Charles Paquille', city: 'Conakry' },
    
    // Group D
    { id: 13, name: 'Mali', flag: '🇲🇱', group: 'D', ranking: 8, titles: 0, coach: 'Tom Saintfiet', city: 'Bamako' },
    { id: 14, name: 'Angola', flag: '🇦🇴', group: 'D', ranking: 9, titles: 0, coach: 'Pedro Goncalves', city: 'Luanda' },
    { id: 15, name: 'Zambia', flag: '🇿🇲', group: 'D', ranking: 10, titles: 0, coach: 'Avram Grant', city: 'Lusaka' },
    { id: 16, name: 'Uganda', flag: '🇺🇬', group: 'D', ranking: 11, titles: 0, coach: 'Paul Put', city: 'Kampala' },
    
    // Additional teams
    { id: 17, name: 'Central African Republic', flag: '🇨🇫', group: 'E', ranking: 14, titles: 0, coach: 'Raoul Savoy', city: 'Bangui' },
    { id: 18, name: 'Madagascar', flag: '🇲🇬', group: 'E', ranking: 17, titles: 0, coach: 'Romuald Rakotondrabe', city: 'Antananarivo' },
  ];

  const groups = ['all', 'A', 'B', 'C', 'D'];

  const filteredTeams = teams.filter(team => {
    const matchesGroup = selectedGroup === 'all' || team.group === selectedGroup;
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGroup && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header Section - CAF Style */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white rounded-lg p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Participating Teams</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            18 African nations competing with their best domestic-based players
          </p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-green-600">
          <Users className="h-12 w-12 text-green-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900">18</div>
          <div className="text-gray-600">Nations</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-yellow-500">
          <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900">4</div>
          <div className="text-gray-600">Previous Winners</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-red-500">
          <Star className="h-12 w-12 text-red-500 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900">414</div>
          <div className="text-gray-600">Total Players</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-blue-500">
          <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900">3</div>
          <div className="text-gray-600">Host Countries</div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search teams..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="flex gap-2">
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedGroup === group
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                {group === 'all' ? 'All Teams' : `Group ${group}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeams.map((team) => (
          <div
            key={team.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
          >
            {/* Team Header */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 text-center">
              <div className="text-6xl mb-3">{team.flag}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{team.name}</h3>
              <div className="flex items-center justify-center space-x-2">
                <span className="bg-green-700 text-white px-2 py-1 rounded text-sm font-medium">
                  Group {team.group}
                </span>
                <span className="text-gray-600 text-sm">#{team.ranking}</span>
              </div>
            </div>

            {/* Team Details */}
            <div className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Capital:</span>
                  <span className="font-medium text-gray-900">{team.city}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">CHAN Titles:</span>
                  <div className="flex items-center space-x-1">
                    <Trophy className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium text-gray-900">{team.titles}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">CAF Ranking:</span>
                  <span className="font-medium text-gray-900">#{team.ranking}</span>
                </div>
                <div className="pt-3 border-t">
                  <div className="text-sm text-gray-600 mb-1">Head Coach</div>
                  <div className="font-medium text-gray-900">{team.coach}</div>
                </div>
              </div>
            </div>

            {/* Team Actions */}
            <div className="bg-gray-50 px-6 py-4">
              <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                View Team Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Champions Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">CHAN Champions History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { year: '2022', champion: 'Senegal', flag: '🇸🇳', host: 'Algeria', score: '2-0' },
            { year: '2020', champion: 'Morocco', flag: '🇲🇦', host: 'Cameroon', score: '2-0' },
            { year: '2018', champion: 'Morocco', flag: '🇲🇦', host: 'Morocco', score: '4-0' },
            { year: '2016', champion: 'DR Congo', flag: '🇨🇩', host: 'Rwanda', score: '1-0' },
          ].map((edition, index) => (
            <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors duration-300">
              <div className="text-4xl mb-3">{edition.flag}</div>
              <div className="font-bold text-lg text-gray-900">{edition.champion}</div>
              <div className="text-green-700 font-medium text-lg mb-1">{edition.year}</div>
              <div className="text-gray-600 text-sm mb-1">Host: {edition.host}</div>
              <div className="text-gray-500 text-sm">Final: {edition.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;