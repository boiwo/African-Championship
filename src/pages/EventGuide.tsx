import React from 'react';
import { MapPin, Clock, Car, Utensils, Bed, Shield, Ticket,  Users } from 'lucide-react';

const EventGuide: React.FC = () => {
  const venues = [
    {
      name: 'Talanta stadium',
      city: 'Casablanca',
      capacity: '63,000',
      address: 'Bd de la Corniche, Casablanca',
      description: 'Kenya largest stadium and the main venue for CHAN 2025.',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Nyayo stadium',
      city: 'Rabat',
      capacity: '60,000',
      address: 'Hay Riad, Rabat',
      description: 'The capital\'s premier football venue with modern facilities.',
      image: 'https://media.gettyimages.com/id/77492787/photo/saint-denis-france-a-general-panoramic-view-of-the-line-ups-prior-to-the-2007-rugby-world-cup.jpg?s=612x612&w=0&k=20&c=BqAm9qe12a8Zultz83y2G_3MQJGSjl7Aqk8HbPzxgpY='
    },
    {
      name: 'Moi sports camp kasarani, Nairobi',
      city: 'Marrakech',
      capacity: '60,000',
      address: 'Route de l\'Ourika, Marrakech',
      description: 'A stunning venue in the heart of the Red City.',
      image: 'https://media.gettyimages.com/id/1825450996/photo/this-photograph-taken-in-ebimpe-northern-abidjan-on-december-5-2023-shows-a-general-view-of.jpg?s=612x612&w=0&k=20&c=FhjtLhM5tFbN9tQo7HCrH_giP9YMXX-hQMQ9CqLN4_s='
    },
    {
      name: 'Benjamin mkapa stadium',
      city: 'Agadir',
      capacity: '62,000',
      address: 'Nouveau Talborjt, Agadir',
      description: 'Modern coastal venue with excellent amenities.',
      image: 'https://media.gettyimages.com/id/1233415055/photo/the-pitch-remains-empty-after-denmarks-midfielder-christian-eriksen-collapsed-on-the-pitch.jpg?s=612x612&w=0&k=20&c=zgMucUP9htXNseb41p2CiXA77N1Rn2DuXv3JOfKE1_A='
    }
  ];

  const travelInfo = [
    {
      icon: Car,
      title: 'Transportation',
      items: [
        'Free shuttle buses between venues and city centers',
        'Metro and tram connections in Casablanca and Rabat',
        'Official tournament taxi services available',
        'Car rental services at all airports'
      ]
    },
    {
      icon: Bed,
      title: 'Accommodation',
      items: [
        'Official tournament hotels with special rates',
        'Fan villages in each host city',
        'Budget-friendly hostels and guesthouses',
        'Luxury resorts and traditional riads'
      ]
    },
    {
      icon: Utensils,
      title: 'Dining',
      items: [
        'Stadium food courts with local and international cuisine',
        'Traditional Moroccan restaurants nearby',
        'Street food markets and food trucks',
        'Halal and vegetarian options widely available'
      ]
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      items: [
        '24/7 tournament security at all venues',
        'Medical facilities and first aid stations',
        'Emergency contact numbers provided',
        'Tourist police assistance available'
      ]
    }
  ];

  const ticketInfo = [
    {
      category: 'General Admission',
      price: 'From $15',
      description: 'Standard seating with great stadium atmosphere',
      includes: ['Stadium entry', 'Seat reservation', 'Tournament program']
    },
    {
      category: 'Premium Seating',
      price: 'From $45',
      description: 'Enhanced viewing experience with better amenities',
      includes: ['Premium seats', 'Complimentary refreshments', 'Fast-track entry', 'Souvenir']
    },
    {
      category: 'VIP Experience',
      price: 'From $120',
      description: 'Ultimate tournament experience with exclusive access',
      includes: ['VIP lounge access', 'Premium dining', 'Meet & greet opportunities', 'Exclusive merchandise']
    }
  ];

  const matchSchedule = [
    {
      date: 'February 1, 2025',
      time: '18:00',
      teams: 'Morocco vs Nigeria',
      venue: 'Mohammed V Stadium'
    },
    {
      date: 'February 3, 2025',
      time: '21:00',
      teams: 'Senegal vs Egypt',
      venue: 'Prince Moulay Abdellah Stadium'
    },
    {
      date: 'February 5, 2025',
      time: '19:30',
      teams: 'Algeria vs Ghana',
      venue: 'Marrakech Stadium'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Guide</h1>
          <p className="text-xl text-green-100">Everything you need to know for CHAN 2025</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Venues Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tournament Venues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {venues.map((venue, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{venue.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{venue.city}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Capacity: {venue.capacity}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{venue.description}</p>
                  <p className="text-sm text-gray-500">{venue.address}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Travel Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {travelInfo.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <section.icon className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Ticket Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ticket Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ticketInfo.map((ticket, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-600">
                <div className="flex items-center mb-4">
                  <Ticket className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">{ticket.category}</h3>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-3">{ticket.price}</div>
                <p className="text-gray-600 mb-4">{ticket.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Includes:</h4>
                  <ul className="space-y-1">
                    {ticket.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Match Schedule Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Match Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matchSchedule.map((match, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center text-green-600 mb-2">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-semibold">{match.date} at {match.time}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{match.teams}</h3>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{match.venue}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventGuide;
