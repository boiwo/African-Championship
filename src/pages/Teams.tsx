import React, { useState } from 'react';
import { Users, MapPin, Trophy, Star } from 'lucide-react';

const Teams: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState('all');

  const teams = [
    {
      id: 1,
      name: 'Morocco',
      group: 'A',
      flag: '🇲🇦',
      coach: 'Houcine Ammouta',
      captain: 'Ayoub El Kaabi',
      titles: 2,
      description: 'The Atlas Lions are the defending champions and tournament hosts.',
      keyPlayers: ['Ayoub El Kaabi', 'Soufiane Rahimi', 'Achraf Dari'],
      image: 'https://media.gettyimages.com/id/2149439044/photo/anderlechts-belgium-defender-jan-vertonghen-club-brugges-ghanaian-midfielder-abu-francis-and.jpg?s=612x612&w=0&k=20&c=8SOpXEOO-yy7B3_OsseJEfEHhAfM2szfN2ptAjTe8QM='
    },
    {
      id: 2,
      name: 'Nigeria',
      group: 'A',
      flag: '🇳🇬',
      coach: 'Augustine Eguavoen',
      captain: 'Remo Stars FC Captain',
      titles: 0,
      description: 'The Home Eagles are making their return to CHAN with high ambitions.',
      keyPlayers: ['Godwin Saviour', 'Ibrahim Mustapha', 'Amas Obasogie'],
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      name: 'Ghana',
      group: 'B',
      flag: '🇬🇭',
      coach: 'Mas-Ud Didi Dramani',
      captain: 'Daniel Afriyie Barnieh',
      titles: 0,
      description: 'The Black Galaxies are determined to claim their first CHAN title.',
      keyPlayers: ['Daniel Afriyie Barnieh', 'Augustine Okrah', 'Frederick Asante'],
      image: 'https://media.gettyimages.com/id/1759301205/photo/hussein-el-shahat-al-ahly-player-in-the-mamelodi-sundowns-football-caf-champions-league-semi.jpg?s=612x612&w=0&k=20&c=hXeTQqyXCFWsIygginpenCn5u0eceR8W_2_6oFvs_6s='
    },
    {
      id: 4,
      name: 'Senegal',
      group: 'B',
      flag: '🇸🇳',
      coach: 'Pape Thiaw',
      captain: 'Pape Amadou Diallo',
      titles: 0,
      description: 'The Lions of Teranga bring their strong domestic league experience.',
      keyPlayers: ['Pape Amadou Diallo', 'Mamadou Lamine Danfa', 'Cheikh Sabaly'],
      image: 'https://media.gettyimages.com/id/1233672740/photo/ahlys-defender-ali-maaloul-celebrates-with-his-teammates-after-scoring-from-a-penalty-kick.jpg?s=612x612&w=0&k=20&c=x7n2o3cIExwLX0d7_loSsQSJH_q21QHfUwEtcY_2Yx4='
    },
    {
      id: 5,
      name: 'Algeria',
      group: 'C',
      flag: '🇩🇿',
      coach: 'Madjid Bougherra',
      captain: 'Aimen Mahious',
      titles: 1,
      description: 'The Desert Foxes won the title in 2011 and seek another triumph.',
      keyPlayers: ['Aimen Mahious', 'Aymen Boutoutaou', 'Akram Djahnit'],
      image: 'https://media.gettyimages.com/id/1258619342/photo/ahlys-players-celebrate-with-the-trophy-after-winning-the-caf-champions-league-final-football.jpg?s=612x612&w=0&k=20&c=-Z11GiI3SVt-psUJ0PXKUYo2tdsm3ShhUXVI9nqAlRc='
    },
    {
      id: 6,
      name: 'Tunisia',
      group: 'C',
      flag: '🇹🇳',
      coach: 'Faouzi Benzarti',
      captain: 'Wajdi Kechrida',
      titles: 1,
      description: 'The Carthage Eagles won in 2011 and remain a formidable force.',
      keyPlayers: ['Wajdi Kechrida', 'Raed Bouchniba', 'Mohamed Amine Tougai'],
      image: 'https://media.gettyimages.com/id/1244757446/photo/rabat-morocco-players-of-mamelodi-sundowns-line-up-for-the-caf-womens-champions-league-final.jpg?s=612x612&w=0&k=20&c=LqNYdm0D_tFEOLUQ47VBn-vvka9wIkid-_ArtQlz7f8='
    },
    {
      id: 7,
      name: 'Egypt',
      group: 'D',
      flag: '🇪🇬',
      coach: 'Rogério Micale',
      captain: 'Mohamed Farouk',
      titles: 0,
      description: 'The Pharaohs are looking to add CHAN success to their rich football history.',
      keyPlayers: ['Mohamed Farouk', 'Karim Fouad', 'Omar Kamal'],
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      name: 'Libya',
      group: 'D',
      flag: '🇱🇾',
      coach: 'Nasser Al-Hadiri',
      captain: 'Ahmed Krawa',
      titles: 1,
      description: 'The Mediterranean Knights won the inaugural tournament in 2009.',
      keyPlayers: ['Ahmed Krawa', 'Muaid Ellafi', 'Omar Al-Khoja'],
      image: 'https://media.gettyimages.com/id/1240166106/photo/players-of-es-setif-celebrate-their-victory-after-the-caf-champions-league-quarter-finals.jpg?s=612x612&w=0&k=20&c=8nNnsQbBRbLuCNsm84t0mPJX-U_KfKdtBs1-SY_g444='
    }
  ];

  const groups = ['all', 'A', 'B', 'C', 'D'];

  const filteredTeams = selectedGroup === 'all' 
    ? teams 
    : teams.filter(team => team.group === selectedGroup);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Teams</h1>
          <p className="text-xl text-red-100">Meet the 16 nations competing in CHAN 2025</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Group Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setSelectedGroup(group)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
                selectedGroup === group
                  ? 'bg-green-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-green-50 hover:border-green-500'
              }`}
            >
              {group === 'all' ? 'All Teams' : `Group ${group}`}
            </button>
          ))}
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTeams.map((team) => (
            <div key={team.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
                  <span className="text-2xl">{team.flag}</span>
                </div>
                <div className="absolute top-4 right-4 bg-green-600 text-white rounded-full px-2 py-1 text-sm font-semibold">
                  Group {team.group}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{team.name}</h3>
                  {team.titles > 0 && (
                    <div className="flex items-center text-yellow-500">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span className="text-sm font-semibold">{team.titles}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{team.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-600">Coach: {team.coach}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-600">Captain: {team.captain}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Players:</h4>
                  <div className="flex flex-wrap gap-1">
                    {team.keyPlayers.map((player, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {player}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
                  View Team Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tournament Stats */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tournament Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">16</div>
              <div className="text-gray-600">Participating Teams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">4</div>
              <div className="text-gray-600">Groups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">32</div>
              <div className="text-gray-600">Total Matches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">4</div>
              <div className="text-gray-600">Host Cities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;