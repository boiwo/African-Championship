import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter } from 'lucide-react';

const Fixtures: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState('group');

  const fixtures = [
    {
      id: 1,
      stage: 'group',
      group: 'A',
      date: '2025-02-01',
      time: '15:00',
      homeTeam: { name: 'Morocco', flag: '🇲🇦' },
      awayTeam: { name: 'Ghana', flag: '🇬🇭' },
      venue: 'Kasarani Stadium, Nairobi',
      status: 'upcoming'
    },
    {
      id: 2,
      stage: 'group',
      group: 'A',
      date: '2025-02-01',
      time: '18:00',
      homeTeam: { name: 'Algeria', flag: '🇩🇿' },
      awayTeam: { name: 'Sudan', flag: '🇸🇩' },
      venue: 'Kasarani Stadium, Nairobi',
      status: 'upcoming'
    },
    {
      id: 3,
      stage: 'group',
      group: 'B',
      date: '2025-02-02',
      time: '15:00',
      homeTeam: { name: 'DR Congo', flag: '🇨🇩' },
      awayTeam: { name: 'Kenya', flag: '🇰🇪' },
      venue: 'Benjamin Mkapa Stadium, Dar es Salaam',
      status: 'upcoming'
    },
    {
      id: 4,
      stage: 'group',
      group: 'B',
      date: '2025-02-02',
      time: '18:00',
      homeTeam: { name: 'Senegal', flag: '🇸🇳' },
      awayTeam: { name: 'Niger', flag: '🇳🇪' },
      venue: 'Benjamin Mkapa Stadium, Dar es Salaam',
      status: 'upcoming'
    },
    {
      id: 5,
      stage: 'group',
      group: 'C',
      date: '2025-02-03',
      time: '15:00',
      homeTeam: { name: 'Nigeria', flag: '🇳🇬' },
      awayTeam: { name: 'Tanzania', flag: '🇹🇿' },
      venue: 'Mandela National Stadium, Kampala',
      status: 'upcoming'
    },
    {
      id: 6,
      stage: 'group',
      group: 'C',
      date: '2025-02-03',
      time: '18:00',
      homeTeam: { name: 'Tunisia', flag: '🇹🇳' },
      awayTeam: { name: 'Guinea', flag: '🇬🇳' },
      venue: 'Mandela National Stadium, Kampala',
      status: 'upcoming'
    },
    {
      id: 7,
      stage: 'group',
      group: 'D',
      date: '2025-02-04',
      time: '15:00',
      homeTeam: { name: 'Mali', flag: '🇲🇱' },
      awayTeam: { name: 'Zambia', flag: '🇿🇲' },
      venue: 'Kasarani Stadium, Nairobi',
      status: 'upcoming'
    },
    {
      id: 8,
      stage: 'group',
      group: 'D',
      date: '2025-02-04',
      time: '18:00',
      homeTeam: { name: 'Angola', flag: '🇦🇴' },
      awayTeam: { name: 'Uganda', flag: '🇺🇬' },
      venue: 'Kasarani Stadium, Nairobi',
      status: 'upcoming'
    },
    {
      id: 9,
      stage: 'quarterfinal',
      date: '2025-02-12',
      time: '15:00',
      homeTeam: { name: 'TBD', flag: '🏆' },
      awayTeam: { name: 'TBD', flag: '🏆' },
      venue: 'Kasarani Stadium, Nairobi',
      status: 'upcoming'
    },
    {
      id: 10,
      stage: 'quarterfinal',
      date: '2025-02-12',
      time: '18:00',
      homeTeam: { name: 'TBD', flag: '🏆' },
      awayTeam: { name: 'TBD', flag: '🏆' },
      venue: 'Benjamin Mkapa Stadium, Dar es Salaam',
      status: 'upcoming'
    },
    {
      id: 11,
      stage: 'semifinal',
      date: '2025-02-16',
      time: '15:00',
      homeTeam: { name: 'TBD', flag: '🏆' },
      awayTeam: { name: 'TBD', flag: '🏆' },
      venue: 'Kasarani Stadium, Nairobi',
      status: 'upcoming'
    },
    {
      id: 12,
      stage: 'final',
      date: '2025-02-19',
      time: '18:00',
      homeTeam: { name: 'TBD', flag: '🏆' },
      awayTeam: { name: 'TBD', flag: '🏆' },
      venue: 'Kasarani Stadium, Nairobi',
      status: 'upcoming'
    }
  ];

  const stages = [
    { id: 'group', label: 'Group Stage', count: fixtures.filter(f => f.stage === 'group').length },
    { id: 'quarterfinal', label: 'Quarter Finals', count: fixtures.filter(f => f.stage === 'quarterfinal').length },
    { id: 'semifinal', label: 'Semi Finals', count: fixtures.filter(f => f.stage === 'semifinal').length },
    { id: 'final', label: 'Final', count: fixtures.filter(f => f.stage === 'final').length },
  ];

  const filteredFixtures = fixtures.filter(fixture => fixture.stage === selectedStage);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Match Fixtures</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Complete schedule of matches from group stage to the grand finale
        </p>
      </div>

      {/* Stage Filter */}
      <div className="flex justify-center">
        <div className="bg-white rounded-xl shadow-lg p-2 flex space-x-1">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedStage === stage.id
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              <Filter className="h-4 w-4" />
              <span className="font-medium">{stage.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                selectedStage === stage.id ? 'bg-white text-green-600' : 'bg-gray-200 text-gray-600'
              }`}>
                {stage.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Tournament Progress */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Tournament Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { stage: 'Group Stage', dates: 'Feb 1-8', matches: '24 matches' },
            { stage: 'Quarter Finals', dates: 'Feb 12', matches: '4 matches' },
            { stage: 'Semi Finals', dates: 'Feb 16', matches: '2 matches' },
            { stage: 'Final', dates: 'Feb 19', matches: '1 match' },
          ].map((phase, index) => (
            <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
              <h3 className="font-bold mb-2">{phase.stage}</h3>
              <p className="text-green-100 text-sm mb-1">{phase.dates}</p>
              <p className="text-green-100 text-xs">{phase.matches}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fixtures List */}
      <div className="space-y-6">
        {filteredFixtures.map((fixture) => (
          <div key={fixture.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                {/* Match Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <span className="text-gray-900 font-medium">{formatDate(fixture.date)}</span>
                    <Clock className="h-4 w-4 text-gray-500 ml-4" />
                    <span className="text-gray-600">{fixture.time}</span>
                    {fixture.group && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Group {fixture.group}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{fixture.venue}</span>
                  </div>
                </div>

                {/* Teams */}
                <div className="flex items-center space-x-6 lg:flex-1 justify-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{fixture.homeTeam.flag}</span>
                    <span className="font-semibold text-gray-900">{fixture.homeTeam.name}</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-400">VS</div>
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-gray-900">{fixture.awayTeam.name}</span>
                    <span className="text-3xl">{fixture.awayTeam.flag}</span>
                  </div>
                </div>

                {/* Status */}
                <div className="flex justify-center lg:justify-end">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {fixture.status === 'upcoming' ? 'Upcoming' : fixture.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Venues Info */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tournament Venues</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Kasarani Stadium',
              city: 'Nairobi, Kenya',
              capacity: '60,000',
              matches: '12 matches'
            },
            {
              name: 'Benjamin Mkapa Stadium',
              city: 'Dar es Salaam, Tanzania',
              capacity: '60,000',
              matches: '10 matches'
            },
            {
              name: 'Mandela National Stadium',
              city: 'Kampala, Uganda',
              capacity: '45,000',
              matches: '10 matches'
            }
          ].map((venue, index) => (
            <div key={index} className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">{venue.name}</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{venue.city}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Capacity: {venue.capacity}</span>
                </div>
                <p className="text-green-600 font-medium">{venue.matches}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fixtures;