import { useState } from 'react';

export default function FootballTeamSection() {
  const [matches] = useState([
    {
      id: 1,
      opponent: 'Grace Community FC',
      date: '2026-05-15',
      time: '3:00 PM',
      venue: 'Central Sports Ground',
      status: 'upcoming',
    },
    {
      id: 2,
      opponent: 'Faith United',
      date: '2026-05-22',
      time: '4:00 PM',
      venue: 'Riverside Stadium',
      status: 'upcoming',
    },
    {
      id: 3,
      opponent: 'Victory FC',
      date: '2026-05-08',
      time: '2:30 PM',
      venue: 'City Sports Complex',
      status: 'completed',
      result: '2-1',
    },
    {
      id: 4,
      opponent: 'Hope Athletic',
      date: '2026-05-01',
      time: '5:00 PM',
      venue: 'North Field',
      status: 'completed',
      result: '3-0',
    },
  ]);

  const upcomingMatches = matches.filter(m => m.status === 'upcoming');
  const completedMatches = matches.filter(m => m.status === 'completed');

  return (
    <section id="football" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 font-montserrat mb-4">
            AOW Chapel FC
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our church football team bringing excellence, teamwork, and community spirit to the pitch.
          </p>
        </div>

        {/* Team Badge */}
        <div className="flex justify-center mb-16" data-aos="fade-up">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl">
            <div className="text-center text-white">
              <i className="fas fa-futbol text-4xl mb-2"></i>
              <p className="text-sm font-bold">AOW FC</p>
            </div>
          </div>
        </div>

        {/* Upcoming Matches */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-purple-600 font-montserrat mb-8 text-center">
            <i className="fas fa-calendar-check text-pink-600 mr-2"></i>
            Upcoming Matches
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingMatches.map((match, index) => (
              <div
                key={match.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-600"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      <i className="fas fa-calendar text-pink-600 mr-2"></i>
                      {new Date(match.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                    <p className="text-sm text-gray-600">
                      <i className="fas fa-clock text-pink-600 mr-2"></i>
                      {match.time}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-yellow-400 text-gray-800 text-xs font-bold rounded-full">
                    UPCOMING
                  </span>
                </div>
                <h4 className="text-xl font-bold text-purple-600 font-montserrat mb-2">
                  AOW Chapel FC vs {match.opponent}
                </h4>
                <p className="text-gray-700 text-sm flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-pink-600"></i>
                  {match.venue}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Results */}
        <div data-aos="fade-up">
          <h3 className="text-3xl font-bold text-purple-600 font-montserrat mb-8 text-center">
            <i className="fas fa-trophy text-pink-600 mr-2"></i>
            Recent Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedMatches.map((match, index) => (
              <div
                key={match.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-green-500"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center flex-1">
                    <p className="text-sm text-gray-600 mb-1">AOW Chapel FC</p>
                    <p className="text-3xl font-bold text-purple-600 font-montserrat">
                      {match.result?.split('-')[0]}
                    </p>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-xs text-gray-600 uppercase font-bold">vs</p>
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-sm text-gray-600 mb-1">{match.opponent}</p>
                    <p className="text-3xl font-bold text-pink-600 font-montserrat">
                      {match.result?.split('-')[1]}
                    </p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs text-gray-600">
                    <i className="fas fa-calendar text-pink-600 mr-2"></i>
                    {new Date(match.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-xs text-gray-600">
                    <i className="fas fa-map-marker-alt text-pink-600 mr-2"></i>
                    {match.venue}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Follow Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <a
            href="https://wa.me/233501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
            Follow the Team on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
