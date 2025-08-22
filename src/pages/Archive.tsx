import React, { useState } from 'react';
import { Trophy,  MapPin, Users, Star, Filter } from 'lucide-react';


const Archive: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tournaments = [
    {
      year: 2022,
      host: 'Algeria',
      winner: 'Morocco',
      runnerUp: 'Mali',
      venue: 'Stade du 5 Juillet 1962, Algiers',
      finalScore: '2-0',
      topScorer: 'Soufiane Rahimi (Morocco)',
      goals: 6,
      participants: 16,
      image: 'https://media.gettyimages.com/id/451011102/photo/topshot-bosnia-hercegovinas-goalkeeper-asmir-begovic-makes-a-save-during-the-group-f-football.jpg?s=612x612&w=0&k=20&c=07rEYhlSsJrbER2IOztHNenERfeS4gjFkELJXthTqLY='
    },
    {
      year: 2020,
      host: 'Cameroon',
      winner: 'Morocco',
      runnerUp: 'Mali',
      venue: 'Stade Ahmadou Ahidjo, Yaoundé',
      finalScore: '2-0',
      topScorer: 'Ayoub El Kaabi (Morocco)',
      goals: 5,
      participants: 16,
      image: 'https://media.gettyimages.com/id/2154622890/photo/l-r-frances-forward-bradley-barcola-frances-midfielder-warren-zaire-emery-frances-forward.jpg?s=612x612&w=0&k=20&c=9PgauD_M-ILGWmjcLY3DIf5pH4UcSR78soT8eIBWSGI='
    },
    {
      year: 2018,
      host: 'Morocco',
      winner: 'Morocco',
      runnerUp: 'Nigeria',
      venue: 'Stade Mohammed V, Casablanca',
      finalScore: '4-0',
      topScorer: 'Ayoub El Kaabi (Morocco)',
      goals: 9,
      participants: 16,
      image: 'https://media.gettyimages.com/id/1432891852/photo/goa-india-uno-shiragaki-of-japan-celebrates-scoring-her-teams-first-goal-during-the-group-d.jpg?s=612x612&w=0&k=20&c=Wc5IUN0wGfuJ3IC8DAHcv93qwNwTXItVfdrC67DX1Uo='
    },
    {
      year: 2016,
      host: 'Rwanda',
      winner: 'DR Congo',
      runnerUp: 'Mali',
      venue: 'Stade Amahoro, Kigali',
      finalScore: '3-0',
      topScorer: 'Jonathan Bolingi (DR Congo)',
      goals: 4,
      participants: 16,
      image: 'https://media.gettyimages.com/id/1245418528/photo/topshot-moroccos-players-bow-as-they-celebrate-after-winning-the-qatar-2022-world-cup-round.jpg?s=612x612&w=0&k=20&c=M786MUKJ7sCv1tvNoiHznR80RGMswiEeq5tR0GXALvY='
    },
    {
      year: 2014,
      host: 'South Africa',
      winner: 'Libya',
      runnerUp: 'Ghana',
      venue: 'Cape Town Stadium, Cape Town',
      finalScore: '4-3 (pen)',
      topScorer: 'Ahmed Akaichi (Tunisia)',
      goals: 4,
      participants: 16,
      image: 'https://media.gettyimages.com/id/1245274043/photo/topshot-canadas-forward-junior-hoilett-takes-a-corner-kick-during-the-qatar-2022-world-cup.jpg?s=612x612&w=0&k=20&c=nh9V0nnM5VUjzuKYTZH2-W5eZF6_dEz-hatUK-Bixzw='
    },
    {
      year: 2011,
      host: 'Sudan',
      winner: 'Tunisia',
      runnerUp: 'Angola',
      venue: 'Blue and White Nile Stadium, Khartoum',
      finalScore: '3-0',
      topScorer: 'Youssef Msakni (Tunisia)',
      goals: 4,
      participants: 16,
      image: 'https://media.gettyimages.com/id/1245268255/photo/canada-team-players-pose-for-pictures-ahead-of-the-start-of-the-qatar-2022-world-cup-group-f.jpg?s=612x612&w=0&k=20&c=5ivhwb9gEMdTbadg8r8lz8tuibekx4UcZEHHXZls8HY='
    },
    {
      year: 2009,
      host: 'Ivory Coast',
      winner: 'Libya',
      runnerUp: 'Ghana',
      venue: 'Stade Félix Houphouët-Boigny, Abidjan',
      finalScore: '1-0',
      topScorer: 'Dominique da Sylva (Benin)',
      goals: 3,
      participants: 16,
      image: 'https://media.gettyimages.com/id/1032072192/photo/japans-midfielder-yasuhito-endo-celebrates-with-japans-striker-yasuhito-okubo-and-japans.jpg?s=612x612&w=0&k=20&c=GbHYCV5UXbX4i7X40OVn_TeVZ2WM8xB8lV6z2uzY2AI='
    }
  ];

  const records = [
    {
      category: 'Most Titles',
      record: 'Morocco - 3 titles (2018, 2020, 2022)',
      icon: Trophy
    },
    {
      category: 'Most Goals in Tournament',
      record: 'Ayoub El Kaabi (Morocco) - 9 goals (2018)',
      icon: Star
    },
    {
      category: 'Most Appearances',
      record: 'Ghana - 7 tournaments',
      icon: Users
    },
    {
      category: 'Biggest Final Victory',
      record: 'Morocco 4-0 Nigeria (2018)',
      icon: Trophy
    }
  ];

  const years = ['all', ...tournaments.map(t => t.year.toString())];
  // const categories = ['all', 'winners', 'finals', 'records'];

  const filteredTournaments = tournaments.filter(tournament => {
    if (selectedYear !== 'all' && tournament.year.toString() !== selectedYear) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tournament Archive</h1>
          <p className="text-xl text-yellow-100">Explore the rich history of CHAN tournaments</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-gray-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Filter Results</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option value="all">All Years</option>
                {years.slice(1).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option value="all">All Categories</option>
                <option value="winners">Winners</option>
                <option value="finals">Finals</option>
                <option value="records">Records</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tournament History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tournament History</h2>
          <div className="space-y-8">
            {filteredTournaments.map((tournament) => (
              <div key={tournament.year} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={tournament.image}
                      alt={`CHAN ${tournament.year}`}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                        CHAN {tournament.year}
                      </span>
                      <span className="ml-3 text-gray-600">Hosted by {tournament.host}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Final Result</h3>
                        <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg">
                          <div className="text-center">
                            <div className="font-bold text-gray-900">{tournament.winner}</div>
                            <div className="text-sm text-gray-600">Winner</div>
                          </div>
                          <div className="text-2xl font-bold text-green-600">{tournament.finalScore}</div>
                          <div className="text-center">
                            <div className="font-bold text-gray-900">{tournament.runnerUp}</div>
                            <div className="text-sm text-gray-600">Runner-up</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Tournament Details</h3>
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="text-sm">{tournament.venue}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Users className="h-4 w-4 mr-2" />
                            <span className="text-sm">{tournament.participants} teams participated</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Star className="h-4 w-4 mr-2" />
                            <span className="text-sm">Top Scorer: {tournament.topScorer} ({tournament.goals} goals)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tournament Records */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tournament Records</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {records.map((record, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <record.icon className="h-8 w-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{record.category}</h3>
                </div>
                <p className="text-gray-600">{record.record}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Overview */}
        <section>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">CHAN Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">8</div>
                <div className="text-gray-600">Tournaments Held</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">6</div>
                <div className="text-gray-600">Different Winners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">128</div>
                <div className="text-gray-600">Total Matches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">54</div>
                <div className="text-gray-600">Nations Participated</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Archive;