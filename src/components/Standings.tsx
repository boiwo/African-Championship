import React, { useState } from 'react';
import { Trophy, TrendingUp, TrendingDown, Minus, Medal } from 'lucide-react';

const Standings: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState('A');

  const groupStandings = {
    A: [
      { 
        pos: 1, 
        team: 'Morocco', 
        flag: '🇲🇦', 
        played: 3, 
        won: 2, 
        drawn: 1, 
        lost: 0, 
        goalsFor: 6, 
        goalsAgainst: 2, 
        goalDifference: 4, 
        points: 7,
        form: ['W', 'D', 'W']
      },
      { 
        pos: 2, 
        team: 'Algeria', 
        flag: '🇩🇿', 
        played: 3, 
        won: 2, 
        drawn: 0, 
        lost: 1, 
        goalsFor: 5, 
        goalsAgainst: 3, 
        goalDifference: 2, 
        points: 6,
        form: ['W', 'L', 'W']
      },
      { 
        pos: 3, 
        team: 'Ghana', 
        flag: '🇬🇭', 
        played: 3, 
        won: 1, 
        drawn: 1, 
        lost: 1, 
        goalsFor: 4, 
        goalsAgainst: 4, 
        goalDifference: 0, 
        points: 4,
        form: ['L', 'W', 'D']
      },
      { 
        pos: 4, 
        team: 'Sudan', 
        flag: '🇸🇩', 
        played: 3, 
        won: 0, 
        drawn: 0, 
        lost: 3, 
        goalsFor: 1, 
        goalsAgainst: 7, 
        goalDifference: -6, 
        points: 0,
        form: ['L', 'L', 'L']
      },
    ],
    B: [
      { 
        pos: 1, 
        team: 'DR Congo', 
        flag: '🇨🇩', 
        played: 3, 
        won: 3, 
        drawn: 0, 
        lost: 0, 
        goalsFor: 7, 
        goalsAgainst: 2, 
        goalDifference: 5, 
        points: 9,
        form: ['W', 'W', 'W']
      },
      { 
        pos: 2, 
        team: 'Senegal', 
        flag: '🇸🇳', 
        played: 3, 
        won: 1, 
        drawn: 2, 
        lost: 0, 
        goalsFor: 3, 
        goalsAgainst: 2, 
        goalDifference: 1, 
        points: 5,
        form: ['D', 'W', 'D']
      },
      { 
        pos: 3, 
        team: 'Kenya', 
        flag: '🇰🇪', 
        played: 3, 
        won: 1, 
        drawn: 0, 
        lost: 2, 
        goalsFor: 3, 
        goalsAgainst: 5, 
        goalDifference: -2, 
        points: 3,
        form: ['L', 'L', 'W']
      },
      { 
        pos: 4, 
        team: 'Niger', 
        flag: '🇳🇪', 
        played: 3, 
        won: 0, 
        drawn: 0, 
        lost: 3, 
        goalsFor: 2, 
        goalsAgainst: 6, 
        goalDifference: -4, 
        points: 0,
        form: ['L', 'L', 'L']
      },
    ],
    C: [
      { 
        pos: 1, 
        team: 'Nigeria', 
        flag: '🇳🇬', 
        played: 3, 
        won: 2, 
        drawn: 1, 
        lost: 0, 
        goalsFor: 5, 
        goalsAgainst: 1, 
        goalDifference: 4, 
        points: 7,
        form: ['W', 'D', 'W']
      },
      { 
        pos: 2, 
        team: 'Tunisia', 
        flag: '🇹🇳', 
        played: 3, 
        won: 1, 
        drawn: 2, 
        lost: 0, 
        goalsFor: 4, 
        goalsAgainst: 3, 
        goalDifference: 1, 
        points: 5,
        form: ['D', 'W', 'D']
      },
      { 
        pos: 3, 
        team: 'Tanzania', 
        flag: '🇹🇿', 
        played: 3, 
        won: 1, 
        drawn: 1, 
        lost: 1, 
        goalsFor: 2, 
        goalsAgainst: 3, 
        goalDifference: -1, 
        points: 4,
        form: ['D', 'L', 'W']
      },
      { 
        pos: 4, 
        team: 'Guinea', 
        flag: '🇬🇳', 
        played: 3, 
        won: 0, 
        drawn: 0, 
        lost: 3, 
        goalsFor: 2, 
        goalsAgainst: 6, 
        goalDifference: -4, 
        points: 0,
        form: ['L', 'L', 'L']
      },
    ],
    D: [
      { 
        pos: 1, 
        team: 'Mali', 
        flag: '🇲🇱', 
        played: 3, 
        won: 2, 
        drawn: 0, 
        lost: 1, 
        goalsFor: 4, 
        goalsAgainst: 3, 
        goalDifference: 1, 
        points: 6,
        form: ['W', 'L', 'W']
      },
      { 
        pos: 2, 
        team: 'Angola', 
        flag: '🇦🇴', 
        played: 3, 
        won: 1, 
        drawn: 2, 
        lost: 0, 
        goalsFor: 3, 
        goalsAgainst: 2, 
        goalDifference: 1, 
        points: 5,
        form: ['D', 'W', 'D']
      },
      { 
        pos: 3, 
        team: 'Zambia', 
        flag: '🇿🇲', 
        played: 3, 
        won: 1, 
        drawn: 1, 
        lost: 1, 
        goalsFor: 3, 
        goalsAgainst: 3, 
        goalDifference: 0, 
        points: 4,
        form: ['W', 'D', 'L']
      },
      { 
        pos: 4, 
        team: 'Uganda', 
        flag: '🇺🇬', 
        played: 3, 
        won: 0, 
        drawn: 1, 
        lost: 2, 
        goalsFor: 2, 
        goalsAgainst: 4, 
        goalDifference: -2, 
        points: 1,
        form: ['L', 'D', 'L']
      },
    ],
  };

  const groups = ['A', 'B', 'C', 'D'];

  const getPositionIcon = (pos: number) => {
    if (pos === 1) return <Medal className="h-4 w-4 text-yellow-500" />;
    if (pos === 2) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (pos >= 3) return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-gray-400" />;
  };

  const getFormIcon = (result: string) => {
    if (result === 'W') return 'bg-green-500';
    if (result === 'D') return 'bg-yellow-500';
    if (result === 'L') return 'bg-red-500';
    return 'bg-gray-500';
  };

  const getRowBackground = (pos: number) => {
    if (pos <= 2) return 'bg-green-50 border-l-4 border-green-500';
    return 'hover:bg-gray-50';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Group Standings</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Current standings and qualification status for all groups in the tournament
        </p>
      </div>

      {/* Qualification Info */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Qualification Rules</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
            <Medal className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
            <p className="font-semibold">Group Winners</p>
            <p className="text-green-100 text-sm">Advance to Quarter Finals</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-300" />
            <p className="font-semibold">Runners-up</p>
            <p className="text-green-100 text-sm">Advance to Quarter Finals</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
            <TrendingDown className="h-8 w-8 mx-auto mb-2 text-red-300" />
            <p className="font-semibold">3rd & 4th Place</p>
            <p className="text-green-100 text-sm">Eliminated</p>
          </div>
        </div>
      </div>

      {/* Group Selector */}
      <div className="flex justify-center">
        <div className="bg-white rounded-xl shadow-lg p-2 flex space-x-1">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setSelectedGroup(group)}
              className={`px-6 py-3 rounded-lg transition-all duration-200 font-semibold ${
                selectedGroup === group
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              Group {group}
            </button>
          ))}
        </div>
      </div>

      {/* Standings Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-green-600 text-white p-4">
          <h2 className="text-2xl font-bold text-center">Group {selectedGroup} Standings</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pos</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">MP</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">W</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">D</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">L</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">GF</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">GA</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">GD</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Pts</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Form</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {groupStandings[selectedGroup as keyof typeof groupStandings].map((team) => (
                <tr key={team.pos} className={`transition-colors duration-150 ${getRowBackground(team.pos)}`}>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {getPositionIcon(team.pos)}
                      <span className="text-sm font-semibold text-gray-900">{team.pos}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{team.flag}</span>
                      <span className="text-sm font-medium text-gray-900">{team.team}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-900">{team.played}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-900">{team.won}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-900">{team.drawn}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-900">{team.lost}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-900">{team.goalsFor}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-900">{team.goalsAgainst}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-center">
                    <span className={`text-sm font-medium ${
                      team.goalDifference > 0 ? 'text-green-600' : 
                      team.goalDifference < 0 ? 'text-red-600' : 'text-gray-900'
                    }`}>
                      {team.goalDifference > 0 ? '+' : ''}{team.goalDifference}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-center">
                    <span className="text-sm font-bold text-gray-900">{team.points}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-center">
                    <div className="flex space-x-1 justify-center">
                      {team.form.map((result, index) => (
                        <div
                          key={index}
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${getFormIcon(result)}`}
                        >
                          {result}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Scorers */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tournament Top Scorers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Soufiane Rahimi', team: 'Morocco', flag: '🇲🇦', goals: 5 },
            { name: 'Riyad Mahrez', team: 'Algeria', flag: '🇩🇿', goals: 4 },
            { name: 'Victor Osimhen', team: 'Nigeria', flag: '🇳🇬', goals: 4 },
            { name: 'Yoane Wissa', team: 'DR Congo', flag: '🇨🇩', goals: 3 },
            { name: 'Sadio Mané', team: 'Senegal', flag: '🇸🇳', goals: 3 },
            { name: 'Wahbi Khazri', team: 'Tunisia', flag: '🇹🇳', goals: 2 },
          ].map((scorer, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <span className="text-xl">{scorer.flag}</span>
                <div>
                  <p className="font-semibold text-gray-900">{scorer.name}</p>
                  <p className="text-sm text-gray-600">{scorer.team}</p>
                </div>
              </div>
              <div className="ml-auto flex items-center space-x-1">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="font-bold text-gray-900">{scorer.goals}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Standings;