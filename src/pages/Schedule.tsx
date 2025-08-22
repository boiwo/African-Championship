import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Trophy } from 'lucide-react';

const Schedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('fixtures');

  const fixtures = [
    {
      id: 1,
      date: '2025-02-15',
      time: '20:00',
      homeTeam: 'Morocco',
      awayTeam: 'Nigeria',
      venue: 'Mohammed V Stadium, Casablanca',
      group: 'Group A',
      status: 'upcoming'
    },
    {
      id: 2,
      date: '2025-02-15',
      time: '17:00',
      homeTeam: 'Ghana',
      awayTeam: 'Senegal',
      venue: 'Prince Moulay Abdellah Stadium, Rabat',
      group: 'Group B',
      status: 'upcoming'
    },
    {
      id: 3,
      date: '2025-02-16',
      time: '20:00',
      homeTeam: 'Algeria',
      awayTeam: 'Tunisia',
      venue: 'Marrakech Stadium, Marrakech',
      group: 'Group C',
      status: 'upcoming'
    },
    {
      id: 4,
      date: '2025-02-16',
      time: '17:00',
      homeTeam: 'Egypt',
      awayTeam: 'Libya',
      venue: 'Agadir Stadium, Agadir',
      group: 'Group D',
      status: 'upcoming'
    }
  ];

  const results = [
    {
      id: 5,
      date: '2025-02-10',
      time: '20:00',
      homeTeam: 'Morocco',
      awayTeam: 'Mali',
      homeScore: 2,
      awayScore: 1,
      venue: 'Mohammed V Stadium, Casablanca',
      group: 'Group A',
      status: 'completed'
    },
    {
      id: 6,
      date: '2025-02-10',
      time: '17:00',
      homeTeam: 'Ghana',
      awayTeam: 'Burkina Faso',
      homeScore: 1,
      awayScore: 1,
      venue: 'Prince Moulay Abdellah Stadium, Rabat',
      group: 'Group B',
      status: 'completed'
    },
    {
      id: 7,
      date: '2025-02-11',
      time: '20:00',
      homeTeam: 'Algeria',
      awayTeam: 'Cameroon',
      homeScore: 3,
      awayScore: 0,
      venue: 'Marrakech Stadium, Marrakech',
      group: 'Group C',
      status: 'completed'
    }
  ];

  const groups = [
    {
      name: 'Group A',
      teams: [
        { name: 'Morocco', played: 1, won: 1, drawn: 0, lost: 0, gf: 2, ga: 1, points: 3 },
        { name: 'Nigeria', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 },
        { name: 'Mali', played: 1, won: 0, drawn: 0, lost: 1, gf: 1, ga: 2, points: 0 },
        { name: 'Sudan', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 }
      ]
    },
    {
      name: 'Group B',
      teams: [
        { name: 'Ghana', played: 1, won: 0, drawn: 1, lost: 0, gf: 1, ga: 1, points: 1 },
        { name: 'Burkina Faso', played: 1, won: 0, drawn: 1, lost: 0, gf: 1, ga: 1, points: 1 },
        { name: 'Senegal', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 },
        { name: 'Niger', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 }
      ]
    },
    {
      name: 'Group C',
      teams: [
        { name: 'Algeria', played: 1, won: 1, drawn: 0, lost: 0, gf: 3, ga: 0, points: 3 },
        { name: 'Tunisia', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 },
        { name: 'Cameroon', played: 1, won: 0, drawn: 0, lost: 1, gf: 0, ga: 3, points: 0 },
        { name: 'Madagascar', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 }
      ]
    },
    {
      name: 'Group D',
      teams: [
        { name: 'Egypt', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 },
        { name: 'Libya', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 },
        { name: 'Angola', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 },
        { name: 'Mauritania', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Schedule & Results</h1>
          <p className="text-xl text-green-100">Follow all CHAN 2025 matches and standings</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {[
            { key: 'fixtures', label: 'Upcoming Fixtures' },
            { key: 'results', label: 'Results' },
            { key: 'standings', label: 'Group Standings' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 font-semibold border-b-2 transition-colors duration-200 ${
                activeTab === tab.key
                  ? 'border-green-600 text-green-600'
                  : 'border-transparent text-gray-600 hover:text-green-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Fixtures Tab */}
        {activeTab === 'fixtures' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Matches</h2>
            {fixtures.map((match) => (
              <div key={match.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {match.group}
                      </span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-8 mb-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gray-900">{match.homeTeam}</div>
                      </div>
                      <div className="text-2xl font-bold text-gray-400">VS</div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-gray-900">{match.awayTeam}</div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{new Date(match.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{match.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{match.venue}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
                      Get Tickets
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results Tab */}
        {activeTab === 'results' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Results</h2>
            {results.map((match) => (
              <div key={match.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {match.group}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">Final</span>
                </div>
                <div className="flex items-center justify-center space-x-8 mb-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">{match.homeTeam}</div>
                    <div className="text-3xl font-bold text-green-600 mt-2">{match.homeScore}</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-400">-</div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">{match.awayTeam}</div>
                    <div className="text-3xl font-bold text-green-600 mt-2">{match.awayScore}</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(match.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{match.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Standings Tab */}
        {activeTab === 'standings' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Group Standings</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {groups.map((group) => (
                <div key={group.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-green-600 text-white px-6 py-4">
                    <h3 className="text-xl font-bold flex items-center">
                      <Trophy className="h-5 w-5 mr-2" />
                      {group.name}
                    </h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Team</th>
                          <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">P</th>
                          <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">W</th>
                          <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">D</th>
                          <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">L</th>
                          <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">GF</th>
                          <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">GA</th>
                          <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Pts</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {group.teams.map((team, index) => (
                          <tr key={team.name} className={index < 2 ? 'bg-green-50' : ''}>
                            <td className="px-4 py-3 font-semibold text-gray-900">{team.name}</td>
                            <td className="px-4 py-3 text-center text-gray-600">{team.played}</td>
                            <td className="px-4 py-3 text-center text-gray-600">{team.won}</td>
                            <td className="px-4 py-3 text-center text-gray-600">{team.drawn}</td>
                            <td className="px-4 py-3 text-center text-gray-600">{team.lost}</td>
                            <td className="px-4 py-3 text-center text-gray-600">{team.gf}</td>
                            <td className="px-4 py-3 text-center text-gray-600">{team.ga}</td>
                            <td className="px-4 py-3 text-center font-bold text-green-600">{team.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;