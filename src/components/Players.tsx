import React, { useState } from 'react';
import { User, Trophy, Target, Star, Award, Users, Filter, Search } from 'lucide-react';

const Players: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('top-scorers');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'top-scorers', label: 'Top Scorers', icon: Target },
    { id: 'best-players', label: 'Star Players', icon: Star },
    { id: 'young-talents', label: 'Young Talents', icon: Award },
    { id: 'goalkeepers', label: 'Goalkeepers', icon: User },
  ];

  const players = {
    'top-scorers': [
      {
        id: 1,
        name: 'Soufiane Rahimi',
        team: 'Morocco',
        flag: '🇲🇦',
        position: 'Forward',
        age: 28,
        goals: 5,
        assists: 2,
        matches: 3,
        club: 'Raja Casablanca'
      },
      {
        id: 2,
        name: 'Riyad Mahrez',
        team: 'Algeria',
        flag: '🇩🇿',
        position: 'Winger',
        age: 33,
        goals: 4,
        assists: 3,
        matches: 3,
        club: 'Al-Ahli Saudi FC'
      },
      {
        id: 3,
        name: 'Victor Osimhen',
        team: 'Nigeria',
        flag: '🇳🇬',
        position: 'Forward',
        age: 25,
        goals: 4,
        assists: 1,
        matches: 3,
        club: 'Galatasaray'
      },
      {
        id: 4,
        name: 'Yoane Wissa',
        team: 'DR Congo',
        flag: '🇨🇩',
        position: 'Forward',
        age: 27,
        goals: 3,
        assists: 2,
        matches: 3,
        club: 'Brentford'
      },
      {
        id: 5,
        name: 'Sadio Mané',
        team: 'Senegal',
        flag: '🇸🇳',
        position: 'Winger',
        age: 32,
        goals: 3,
        assists: 1,
        matches: 3,
        club: 'Al Nassr'
      },
      {
        id: 6,
        name: 'Wahbi Khazri',
        team: 'Tunisia',
        flag: '🇹🇳',
        position: 'Midfielder',
        age: 33,
        goals: 2,
        assists: 4,
        matches: 3,
        club: 'Montpellier'
      },
    ],
    'best-players': [
      {
        id: 7,
        name: 'Achraf Hakimi',
        team: 'Morocco',
        flag: '🇲🇦',
        position: 'Right-back',
        age: 25,
        goals: 1,
        assists: 3,
        matches: 3,
        club: 'PSG',
        rating: 8.7
      },
      {
        id: 8,
        name: 'Riyad Mahrez',
        team: 'Algeria',
        flag: '🇩🇿',
        position: 'Winger',
        age: 33,
        goals: 4,
        assists: 3,
        matches: 3,
        club: 'Al-Ahli Saudi FC',
        rating: 8.5
      },
      {
        id: 9,
        name: 'Kalidou Koulibaly',
        team: 'Senegal',
        flag: '🇸🇳',
        position: 'Centre-back',
        age: 33,
        goals: 0,
        assists: 0,
        matches: 3,
        club: 'Al-Hilal',
        rating: 8.3
      },
      {
        id: 10,
        name: 'Victor Osimhen',
        team: 'Nigeria',
        flag: '🇳🇬',
        position: 'Forward',
        age: 25,
        goals: 4,
        assists: 1,
        matches: 3,
        club: 'Galatasaray',
        rating: 8.9
      },
    ],
    'young-talents': [
      {
        id: 11,
        name: 'Bilal El Khannouss',
        team: 'Morocco',
        flag: '🇲🇦',
        position: 'Midfielder',
        age: 20,
        goals: 1,
        assists: 2,
        matches: 3,
        club: 'Leicester City'
      },
      {
        id: 12,
        name: 'Ernest Nuamah',
        team: 'Ghana',
        flag: '🇬🇭',
        position: 'Winger',
        age: 21,
        goals: 2,
        assists: 1,
        matches: 3,
        club: 'Lyon'
      },
      {
        id: 13,
        name: 'Amadou Onana',
        team: 'Senegal',
        flag: '🇸🇳',
        position: 'Midfielder',
        age: 23,
        goals: 1,
        assists: 0,
        matches: 3,
        club: 'Aston Villa'
      },
      {
        id: 14,
        name: 'Gift Orban',
        team: 'Nigeria',
        flag: '🇳🇬',
        position: 'Forward',
        age: 22,
        goals: 2,
        assists: 0,
        matches: 2,
        club: 'Lyon'
      },
    ],
    'goalkeepers': [
      {
        id: 15,
        name: 'Yassine Bounou',
        team: 'Morocco',
        flag: '🇲🇦',
        position: 'Goalkeeper',
        age: 33,
        saves: 12,
        cleanSheets: 2,
        matches: 3,
        club: 'Al-Hilal'
      },
      {
        id: 16,
        name: 'Alexandre Oukidja',
        team: 'Algeria',
        flag: '🇩🇿',
        position: 'Goalkeeper',
        age: 35,
        saves: 10,
        cleanSheets: 1,
        matches: 3,
        club: 'FC Metz'
      },
      {
        id: 17,
        name: 'Édouard Mendy',
        team: 'Senegal',
        flag: '🇸🇳',
        position: 'Goalkeeper',
        age: 32,
        saves: 8,
        cleanSheets: 2,
        matches: 3,
        club: 'Al-Ahli Saudi FC'
      },
      {
        id: 18,
        name: 'Francis Uzoho',
        team: 'Nigeria',
        flag: '🇳🇬',
        position: 'Goalkeeper',
        age: 25,
        saves: 11,
        cleanSheets: 1,
        matches: 3,
        club: 'Omonia'
      },
    ],
  };

  const filteredPlayers = players[selectedCategory as keyof typeof players].filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.team.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Player Profiles</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Showcase of the finest talents competing in the African Nations Championship
        </p>
      </div>

      {/* Player Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl text-center">
          <Users className="h-12 w-12 mx-auto mb-2" />
          <p className="text-3xl font-bold">414</p>
          <p className="text-green-100">Total Players</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
          <Target className="h-12 w-12 mx-auto mb-2" />
          <p className="text-3xl font-bold">89</p>
          <p className="text-blue-100">Goals Scored</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 rounded-xl text-center">
          <Star className="h-12 w-12 mx-auto mb-2" />
          <p className="text-3xl font-bold">52</p>
          <p className="text-yellow-100">Assists</p>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-xl text-center">
          <Award className="h-12 w-12 mx-auto mb-2" />
          <p className="text-3xl font-bold">18</p>
          <p className="text-red-100">Clean Sheets</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search players or teams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{category.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlayers.map((player, index) => (
          <div
            key={player.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-6">
              {/* Player Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {player.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{player.name}</h3>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <span className="text-2xl">{player.flag}</span>
                    <span className="text-sm">{player.team}</span>
                  </div>
                </div>
                {index < 3 && (
                  <div className="text-yellow-500">
                    <Trophy className="h-6 w-6" />
                  </div>
                )}
              </div>

              {/* Player Details */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Position:</span>
                  <span className="font-medium text-gray-900">{player.position}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Age:</span>
                  <span className="font-medium text-gray-900">{player.age}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Club:</span>
                  <span className="font-medium text-gray-900 text-sm">{player.club}</span>
                </div>

                {/* Stats based on category */}
                <div className="pt-3 border-t">
                  {selectedCategory === 'top-scorers' && (
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">{player.goals}</p>
                        <p className="text-xs text-gray-500">Goals</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">{player.assists}</p>
                        <p className="text-xs text-gray-500">Assists</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-600">{player.matches}</p>
                        <p className="text-xs text-gray-500">Matches</p>
                      </div>
                    </div>
                  )}

                  {selectedCategory === 'best-players' && (
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-yellow-600">{(player as any).rating}</p>
                        <p className="text-xs text-gray-500">Rating</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">{player.goals}</p>
                        <p className="text-xs text-gray-500">Goals</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">{player.assists}</p>
                        <p className="text-xs text-gray-500">Assists</p>
                      </div>
                    </div>
                  )}

                  {selectedCategory === 'young-talents' && (
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">{player.goals}</p>
                        <p className="text-xs text-gray-500">Goals</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">{player.assists}</p>
                        <p className="text-xs text-gray-500">Assists</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-600">{player.matches}</p>
                        <p className="text-xs text-gray-500">Matches</p>
                      </div>
                    </div>
                  )}

                  {selectedCategory === 'goalkeepers' && (
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">{(player as any).saves}</p>
                        <p className="text-xs text-gray-500">Saves</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">{(player as any).cleanSheets}</p>
                        <p className="text-xs text-gray-500">Clean Sheets</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-600">{player.matches}</p>
                        <p className="text-xs text-gray-500">Matches</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tournament Awards */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Tournament Awards</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
            <Trophy className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-xl font-bold mb-2">Golden Boot</h3>
            <p className="text-green-100 mb-2">Top Scorer</p>
            <p className="font-semibold">Soufiane Rahimi</p>
            <p className="text-green-200 text-sm">5 Goals</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
            <Star className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-xl font-bold mb-2">Player of Tournament</h3>
            <p className="text-green-100 mb-2">MVP</p>
            <p className="font-semibold">Victor Osimhen</p>
            <p className="text-green-200 text-sm">Nigeria</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
            <Award className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-xl font-bold mb-2">Golden Glove</h3>
            <p className="text-green-100 mb-2">Best Goalkeeper</p>
            <p className="font-semibold">Yassine Bounou</p>
            <p className="text-green-200 text-sm">2 Clean Sheets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;