import { useState } from 'react';

export default function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const quickReplies = [
    {
      id: 'service-times',
      label: 'Service Times',
      icon: 'fa-clock',
      response: 'Sunday: 8:00 AM & 10:30 AM | Wednesday: 6:30 PM | Friday: 7:00 PM | Saturday: 5:00 PM',
    },
    {
      id: 'upcoming-events',
      label: 'Upcoming Events',
      icon: 'fa-calendar-check',
      response: '📅 Upcoming Events:\n\n1. Sunday Service - April 27 | 8:00 AM & 10:30 AM\n2. Prayer Night - April 30 | 6:30 PM\n3. Youth Fellowship - May 3 | 5:00 PM\n4. Bible Study Workshop - May 5 | 7:00 PM\n\nVisit the Events section for more details and images!',
    },
    {
      id: 'location',
      label: 'Location',
      icon: 'fa-map-marker-alt',
      response: '123 Faith Avenue, Accra, Ghana. P.O. Box 1234',
    },
    {
      id: 'contact',
      label: 'Contact Us',
      icon: 'fa-phone',
      response: 'Phone: +233 50 123 4567 | Email: info@aowchapel.com',
    },
    {
      id: 'donate',
      label: 'Donate',
      icon: 'fa-heart',
      response: 'You can give through mobile money (MTN/Vodafone), bank transfer, or in person during services.',
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setSelectedOption(null);
        }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Open chat assistant"
      >
        {isOpen ? (
          <i className="fas fa-times text-2xl"></i>
        ) : (
          <i className="fas fa-comments text-2xl"></i>
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <i className="fas fa-cross text-purple-600"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold font-montserrat">AOW Chapel Assistant</h3>
              </div>
            </div>
            <p className="text-pink-100 text-sm">
              Hello! Welcome to Altar Of Witness Chapel. How can I help you today?
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            {selectedOption ? (
              // Response View
              <div>
                <button
                  onClick={() => setSelectedOption(null)}
                  className="mb-4 text-purple-600 hover:text-pink-600 transition-colors text-sm font-semibold flex items-center gap-2"
                >
                  <i className="fas fa-arrow-left"></i>
                  Back to Menu
                </button>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-800 leading-relaxed">
                    {quickReplies.find(r => r.id === selectedOption)?.response}
                  </p>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  Is there anything else I can help you with?
                </p>
              </div>
            ) : (
              // Menu View
              <div className="space-y-3">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.id}
                    onClick={() => setSelectedOption(reply.id)}
                    className="w-full p-4 bg-gradient-to-r from-blue-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border-2 border-purple-200 hover:border-purple-400 rounded-lg transition-all duration-300 text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <i className={`fas ${reply.icon} text-white`}></i>
                      </div>
                      <span className="font-semibold text-purple-600 group-hover:text-pink-600 transition-colors">
                        {reply.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <p className="text-xs text-gray-600 text-center">
              For more information, visit our website or contact us directly.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
