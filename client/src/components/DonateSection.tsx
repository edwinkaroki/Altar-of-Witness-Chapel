export default function DonateSection() {
  const donationOptions = [
    {
      icon: 'fa-hands-praying',
      title: 'Tithe',
      description: 'Support the ongoing ministry and operations of our church.',
      color: 'from-purple-600 to-purple-700',
    },
    {
      icon: 'fa-gift',
      title: 'Offering',
      description: 'Contribute to special projects and community outreach programs.',
      color: 'from-pink-600 to-pink-700',
    },
    {
      icon: 'fa-building',
      title: 'Building Fund',
      description: 'Help us expand our facilities to reach more people for Christ.',
      color: 'from-indigo-600 to-purple-600',
    },
  ];

  return (
    <section id="donate" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 font-montserrat mb-4">
            Support Our Ministry
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Your generous giving enables us to spread the Gospel and impact lives in our community.
          </p>
          <p className="text-xl text-purple-600 font-semibold italic">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
          </p>
          <p className="text-gray-600 text-sm mt-2">— 2 Corinthians 9:7</p>
        </div>

        {/* Donation Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {donationOptions.map((option, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${option.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full`}>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 group-hover:bg-opacity-30 transition-all">
                  <i className={`fas ${option.icon} text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold font-montserrat mb-3">
                  {option.title}
                </h3>
                <p className="text-white text-opacity-90 mb-6 leading-relaxed">
                  {option.description}
                </p>
                <button className="w-full px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Give Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl p-12 text-center" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-purple-600 font-montserrat mb-8">
            Payment Methods
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <i className="fas fa-mobile-alt text-4xl text-pink-600 mb-4"></i>
              <h4 className="text-xl font-bold text-purple-600 font-montserrat mb-2">
                Mobile Money
              </h4>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Mpesa:</span> 123
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">pay:</span> 123
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <i className="fas fa-bank text-4xl text-purple-600 mb-4"></i>
              <h4 className="text-xl font-bold text-purple-600 font-montserrat mb-2">
                Bank Transfer
              </h4>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Account Name:</span>
              </p>
              <p className="text-gray-700 mb-4">Altar Of Witness Chapel</p>
              <p className="text-gray-700">
                <span className="font-semibold">Account No:</span> 1234567890
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <i className="fas fa-church text-4xl text-pink-600 mb-4"></i>
              <h4 className="text-xl font-bold text-purple-600 font-montserrat mb-2">
                In Person
              </h4>
              <p className="text-gray-700 mb-4">
                Visit our church during service times and speak with an usher.
              </p>
              <p className="text-sm text-gray-600">
                All donations are tax-deductible and greatly appreciated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
