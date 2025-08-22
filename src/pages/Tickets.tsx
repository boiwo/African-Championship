import React, { useState } from 'react';
import { Calendar, MapPin, Users, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  image: string;
  ticketTypes: {
    id: string;
    name: string;
    price: number;
    description: string;
    available: number;
  }[];
}

const Tickets: React.FC = () => {
  const { addItem } = useCart();
  const [selectedQuantities, setSelectedQuantities] = useState<{ [key: string]: number }>({});

  const events: Event[] = [
    {
      id: '1',
      title: 'CHAN 2025 Final',
      date: '2025-02-15',
      time: '7:00 PM',
      venue: 'Mohammed V Stadium, Casablanca',
      description: 'The ultimate showdown to crown the CHAN 2025 champions.',
      image: 'https://media.gettyimages.com/id/93349249/photo/johannesburg-south-africa-may-02-a-general-view-of-the-stadium-and-fans-during-the-absa.jpg?s=612x612&w=0&k=20&c=uFzlmtI6HPKf2KQLivZCZ9ivlHl3qJGTFUlEeUqLTKY=',
      ticketTypes: [
        {
          id: 'final-regular',
          name: 'Regular Seating',
          price: 65,
          description: 'Standard seats with great view of the final',
          available: 500
        },
        {
          id: 'final-premium',
          name: 'Premium Seating',
          price: 120,
          description: 'Enhanced seating with complimentary refreshments for the final',
          available: 150
        },
        {
          id: 'final-vip',
          name: 'VIP Experience',
          price: 250,
          description: 'Ultimate VIP experience for the championship final',
          available: 50
        }
  
 
      ]
    }
  ];

  const updateQuantity = (ticketId: string, change: number) => {
    setSelectedQuantities(prev => ({
      ...prev,
      [ticketId]: Math.max(0, (prev[ticketId] || 0) + change)
    }));
  };

  const handleAddToCart = (event: Event, ticketType: any) => {
    const quantity = selectedQuantities[ticketType.id] || 0;
    if (quantity > 0) {
      for (let i = 0; i < quantity; i++) {
        addItem({
          id: `${ticketType.id}-${Date.now()}-${i}`,
          eventId: event.id,
          eventName: event.title,
          ticketType: ticketType.name,
          price: ticketType.price,
          eventDate: `${event.date} ${event.time}`
        });
      }
      setSelectedQuantities(prev => ({
        ...prev,
        [ticketType.id]: 0
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CHAN 2025 Tickets</h1>
          <p className="text-xl text-gray-600">Secure your seats for Africa's premier local player tournament</p>
        </div>

        <div className="space-y-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                {/* Event Image */}
                <div className="md:w-1/3">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>

                {/* Event Info */}
                <div className="md:w-2/3 p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{event.title}</h2>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span>{event.date} at {event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                  </div>

                  {/* Ticket Types */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Tickets</h3>
                    {event.ticketTypes.map((ticket) => (
                      <div key={ticket.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div className="flex-1 mb-4 lg:mb-0">
                            <h4 className="text-lg font-semibold text-gray-900">{ticket.name}</h4>
                            <p className="text-gray-600 text-sm mb-2">{ticket.description}</p>
                            <div className="flex items-center gap-4">
                              <span className="text-2xl font-bold text-blue-600">${ticket.price}</span>
                              <div className="flex items-center text-gray-500">
                                <Users className="h-4 w-4 mr-1" />
                                <span className="text-sm">{ticket.available} available</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            {/* Quantity Selector */}
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() => updateQuantity(ticket.id, -1)}
                                className="p-2 hover:bg-gray-100 transition-colors duration-200"
                                disabled={!selectedQuantities[ticket.id]}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
                                {selectedQuantities[ticket.id] || 0}
                              </span>
                              <button
                                onClick={() => updateQuantity(ticket.id, 1)}
                                className="p-2 hover:bg-gray-100 transition-colors duration-200"
                                disabled={selectedQuantities[ticket.id] >= ticket.available}
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>

                            {/* Add to Cart Button */}
                            <button
                              onClick={() => handleAddToCart(event, ticket)}
                              disabled={!selectedQuantities[ticket.id]}
                              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                                selectedQuantities[ticket.id]
                                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                              }`}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tickets;


