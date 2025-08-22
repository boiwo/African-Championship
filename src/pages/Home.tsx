import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, Ticket } from 'lucide-react';

const Home: React.FC = () => {
  const featuredEvents = [
    {
      id: '1',
      title: 'Zambia vs Tunisia',
      date: '2025-08-23',
      time: '7:00 PM',
      venue: 'Moi sport camp kasarani',
      price: 'kshs 500',
      image: 'https://media.gettyimages.com/id/984495822/photo/topshot-argentinas-forward-lionel-messi-celebrates-his-goal-during-the-russia-2018-world-cup.jpg?s=612x612&w=0&k=20&c=4XdhIJ1P5FOLI6qa84gWu9CeXTi74ruR2hOZfvKcCEM='
    },
    {
      id: '2',
      title: 'Morocco vs Nigeria',
      date: '2025-08-15',
      time: '3:00 PM',
      venue: 'Talanta stadium,Nairobi',
      price: 'kshs 300',
      image: 'https://media.gettyimages.com/id/1239505818/photo/egypts-forward-mohamed-salah-vies-for-the-ball-against-senegals-forward-sadio-mane-during-the.jpg?s=612x612&w=0&k=20&c=6YSR_Odf1GJGH_XZ5ei_wt_7Za8cd0Ufha7r9vokkAA='
    },
    {
      id: '3',
      title: 'Ghana vs Senegal',
      date: '2025-03-01',
      time: '7:30 PM',
      venue: 'Nyayo studium,Nairobi',
      price: 'kshs 250',
      image: 'https://media.gettyimages.com/id/1676588488/photo/solna-sweden-players-officials-and-fans-hold-a-minutes-silence-for-the-earthquakes-in-morocco.jpg?s=612x612&w=0&k=20&c=ez5Q5bT3CoM0fYXloDRtVZHQz2BJVgqlItKdeihvDoQ='
    },
     {
      id: '1',
      title: 'kenya vs Algeria',
      date: '2025-08-15',
      time: '3:00 PM',
      venue: 'moi sport camp kasarani, Nairobi',
      price: 'kshs 500',
      image: 'https://media.gettyimages.com/id/1245141648/photo/topshot-belgiums-midfielder-kevin-de-bruyne-runs-with-the-ball-past-moroccos-forward-youssef.jpg?s=612x612&w=0&k=20&c=Fpb3SXs0mhlZf1IL0Zr-RLRXdOsyqcOU-JCn0Ewjfw8='
    },
    {
      id: '2',
      title: 'Malawi vs Nigeria',
      date: '2025-02-22',
      time: '6:30 PM',
      venue: 'Benjamin mkapa studium, Dar es salaam',
      price: 'kshs 300',
      image: 'https://media.gettyimages.com/id/984647954/photo/topshot-argentinas-midfielder-cristian-pavon-is-marked-by-nigerias-defender-kenneth-omeruo.jpg?s=612x612&w=0&k=20&c=o7_nqVdJN2IiJFNrjxOD_dUQvDqdnwmqAKrPEUwW6MY='
    },
    {
      id: '3',
      title: 'kenya vs Senegal',
      date: '2025-03-01',
      time: '7:30 PM',
      venue: 'nyayo stadium, Nairobi',
      price: 'kshs 350',
      image: 'https://media.gettyimages.com/id/984480704/photo/topshot-argentinas-forward-lionel-messi-celebrates-after-opening-the-scoring-during-the-russia.jpg?s=612x612&w=0&k=20&c=c-S4_eVDr0Gs7sXndSWL5VDJi_yl1MMTWPphX0WEeBc='
    },
     {
      id: '1',
      title: 'DRC vs kenya',
      date: '2025-02-15',
      time: '7:00 PM',
      venue: 'Moi sport camp kasarani ,Nairobi',
      price: 'kshs 500',
      image: 'https://media.gettyimages.com/id/984419472/photo/senegals-players-take-part-in-a-training-session-on-june-26-2018-in-kaluga-ahead-of-the-russia.jpg?s=612x612&w=0&k=20&c=0DZWNaZ1T3OXEzOwGkI2l_gp0CPE2Z_w2c08tCt_qVE='
    },
    {
      id: '2',
      title: 'Zambia vs Nigeria',
      date: '2025-02-22',
      time: '6:30 PM',
      venue: 'Mohammed V Stadium, Casablanca',
      price: 'kshs 200',
      image: 'https://media.gettyimages.com/id/983614142/photo/topshot-egypts-goalkeeper-essam-el-hadary-is-congratulated-by-his-teammates-after-saving-a.jpg?s=612x612&w=0&k=20&c=1t7iekWbNX0Vr93vGUTXXA0gWeBVoXKg0yiEuMIkDTs='
    },
    {
      id: '3',
      title: 'malawi vs Senegal',
      date: '2025-03-01',
      time: '7:30 PM',
      venue: 'Prince Moulay Abdellah Stadium, Rabat',
      price: 'kshs 450',
      image: 'https://media.gettyimages.com/id/981993658/photo/tunisias-midfielder-ellyes-skhiri-reacts-to-belgiums-fifth-goal-during-the-russia-2018-world.jpg?s=612x612&w=0&k=20&c=UAjsgibQYtAFvtGw1jwL29oepG5UHm0XA0MLzDaDjFo='
    },
     {
      id: '1',
      title: 'Kenya vs madagascar',
      date: '2025-08-15',
      time: '7:00 PM',
      venue: 'Mohammed V Stadium, Casablanca',
      price: 'kshs 500',
      image: 'https://media.gettyimages.com/id/979378710/photo/portugals-forward-goncalo-guedes-challenges-moroccos-midfielder-karim-el-ahmadi-during-the.jpg?s=612x612&w=0&k=20&c=Vzz6X-c6A6KnrzjJU96ZUcOiumDyI8NLrKTmCP5KdMQ='
    },
    {
      id: '2',
      title: 'Morocco vs Nigeria',
      date: '2025-02-22',
      time: '6:30 PM',
      venue: 'Mohammed V Stadium, Casablanca',
      price: 'kshs 300',
      image: 'https://media.gettyimages.com/id/978842424/photo/topshot-egypts-forward-mohamed-salah-reacts-at-the-end-of-the-russia-2018-world-cup-group-a.jpg?s=612x612&w=0&k=20&c=YgVxsu9QXY-0kdhItkWn5uChMMvl3ZBdqSq-eHYSjVY='
    },
    {
      id: '3',
      title: 'Ghana vs Senegal',
      date: '2025-03-01',
      time: '7:30 PM',
      venue: 'Prince Moulay Abdellah Stadium, Rabat',
      price: 'kshs 250',
      image: 'https://media.gettyimages.com/id/978029304/photo/volgograd-russia-england-players-show-appreciation-to-the-fans-following-their-victory-in-the.jpg?s=612x612&w=0&k=20&c=G9oV_Cx57jdOcRaDcGs87GZxYw_047LkF2hRULlzmHA='
    }

  ];

  const stats = [
    { icon: Calendar, label: 'Tournament Matches', value: '32' },
    { icon: Users, label: 'Teams Participating', value: '16' },
    { icon: Trophy, label: 'Host Cities', value: '4' },
    { icon: Ticket, label: 'Tickets Available', value: '500K+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              CHAN 2025 KENYA
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience the excitement of the CAF African Nations Championship 2025 in KENYA. 
              Secure your tickets now for Africa's premier local player tournament.
            </p>
            <Link
              to="/tickets"
              className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
            >
              Get Your Tickets
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Events */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Events</h2>
            <p className="text-xl text-gray-600">Don't miss these exciting CHAN 2025 matches</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{event.price}</span>
                    <Link
                      to="/tickets"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                    >
                      Get Tickets
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for the Action?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of fans and secure your seats today
          </p>
          <Link
            to="/tickets"
            className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            View All Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
