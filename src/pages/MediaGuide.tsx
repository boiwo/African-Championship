import React from 'react';
import { Camera, Mic, FileText, Download, Users, Clock, MapPin, Phone } from 'lucide-react';

const MediaGuide: React.FC = () => {
  const mediaServices = [
    {
      icon: Camera,
      title: 'Photography Services',
      description: 'Professional photography support and media access',
      details: [
        'Dedicated photographer zones at all venues',
        'High-resolution official tournament photos',
        'Real-time photo distribution system',
        'Special access for accredited photographers'
      ]
    },
    {
      icon: Mic,
      title: 'Broadcast & Audio',
      description: 'Complete broadcast facilities and audio support',
      details: [
        'Live broadcast feeds available',
        'Multi-language commentary positions',
        'Professional audio equipment rental',
        'Satellite uplink facilities'
      ]
    },
    {
      icon: FileText,
      title: 'Press Services',
      description: 'Comprehensive press and media support',
      details: [
        'Daily press conferences',
        'Player and coach interview opportunities',
        'Press release distribution',
        'Dedicated press working areas'
      ]
    },
    {
      icon: Users,
      title: 'Accreditation',
      description: 'Media accreditation and access management',
      details: [
        'Online accreditation system',
        'Different access levels available',
        'Photo ID and security clearance',
        'Special event access privileges'
      ]
    }
  ];

  const pressConferences = [
    {
      date: '2025-02-14',
      time: '14:00',
      event: 'Tournament Opening Press Conference',
      location: 'Mohammed V Stadium Media Center',
      attendees: 'CAF President, Tournament Director, Host Nation Coach'
    },
    {
      date: '2025-02-15',
      time: '11:00',
      event: 'Morocco vs Nigeria Pre-Match',
      location: 'Mohammed V Stadium',
      attendees: 'Both team coaches and captains'
    },
    {
      date: '2025-02-15',
      time: '22:30',
      event: 'Morocco vs Nigeria Post-Match',
      location: 'Mohammed V Stadium',
      attendees: 'Coaches, Man of the Match, selected players'
    },
    {
      date: '2025-02-16',
      time: '10:30',
      event: 'Daily Tournament Update',
      location: 'Tournament Media Center',
      attendees: 'Tournament Director, CAF Officials'
    }
  ];

  const mediaContacts = [
    {
      role: 'Media Director',
      name: 'Ahmed Benali',
      email: 'media.director@chan2025.com',
      phone: '+212 5XX-XXX-001'

    },
    {
      role: 'Press Officer',
      name: 'Fatima El Mansouri',
      email: 'press@chan2025.com',
      phone: '+212 5XX-XXX-002'
    },
    {
      role: 'Broadcast Coordinator',
      name: 'Omar Zidane',
      email: 'broadcast@chan2025.com',
      phone: '+212 5XX-XXX-003'
    },
    {
      role: 'Photography Coordinator',
      name: 'Laila Amrani',
      email: 'photo@chan2025.com',
      phone: '+212 5XX-XXX-004'
    }
  ];

  const downloadableResources = [
    {
      title: 'Media Accreditation Form',
      description: 'Complete this form to apply for media accreditation',
      fileType: 'PDF',
      size: '2.3 MB'
    },
    {
      title: 'Tournament Fact Sheet',
      description: 'Key facts, figures, and statistics about CHAN 2025',
      fileType: 'PDF',
      size: '1.8 MB'
    },
    {
      title: 'Team Media Guides',
      description: 'Comprehensive information about all participating teams',
      fileType: 'ZIP',
      size: '15.2 MB'
    },
    {
      title: 'Venue Information Pack',
      description: 'Detailed information about all tournament venues',
      fileType: 'PDF',
      size: '4.1 MB'
    },
    {
      title: 'Official Tournament Logo Pack',
      description: 'High-resolution logos and brand guidelines',
      fileType: 'ZIP',
      size: '8.7 MB'
    },
    {
      title: 'Match Schedule & Results Template',
      description: 'Editable templates for match reporting',
      fileType: 'DOCX',
      size: '0.5 MB'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Media Guide</h1>
          <p className="text-xl text-blue-100">Comprehensive media resources and support for CHAN 2025</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Media Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Media Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Press Conference Schedule */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Press Conference Schedule</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date & Time</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Event</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Location</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Attendees</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pressConferences.map((conference, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-400 mr-2" />
                          <div>
                            <div className="font-semibold text-gray-900">
                              {new Date(conference.date).toLocaleDateString()}
                            </div>
                            <div className="text-sm text-gray-600">{conference.time}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">{conference.event}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          {conference.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{conference.attendees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Downloadable Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Downloadable Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadableResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <FileText className="h-6 w-6 text-purple-600 mr-2" />
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                    {resource.fileType}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{resource.size}</span>
                  <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Media Contacts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Media Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.role}</h3>
                <p className="text-xl font-semibold text-blue-600 mb-3">{contact.name}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{contact.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>{contact.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Media Guidelines */}
        <section>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-yellow-900 mb-4">Media Guidelines & Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">Accreditation Requirements</h3>
                <ul className="space-y-1 text-yellow-800 text-sm">
                  <li>• Valid press credentials from recognized media organization</li>
                  <li>• Completed accreditation form with supporting documents</li>
                  <li>• Professional photo ID and security clearance</li>
                  <li>• Compliance with CAF media regulations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">Photography & Video Rules</h3>
                <ul className="space-y-1 text-yellow-800 text-sm">
                  <li>• No flash photography during matches</li>
                  <li>• Designated areas for photographers only</li>
                  <li>• Video recording subject to broadcast rights</li>
                  <li>• Commercial use requires additional permissions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MediaGuide;