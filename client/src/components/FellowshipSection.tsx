export default function FellowshipSection() {
  const fellowships = [
    {
      icon: 'fa-person',
      name: "Men's Fellowship",
      description: 'A brotherhood united in faith, growth, and service to the community.',
      leader: ' Emmanuel',
      whatsapp: '+254501234567',
    },
    {
      icon: 'fa-person-dress',
      name: "Women's Fellowship",
      description: 'Empowering women through spiritual growth, mentorship, and mutual support.',
      leader: 'Grace',
      whatsapp: '+254502234567',
    },
    {
      icon: 'fa-people-group',
      name: 'Youth Fellowship',
      description: 'Dynamic young believers making an impact for Christ in their generation.',
      leader: 'Daniel',
      whatsapp: '+254503234567',
    },
    {
      icon: 'fa-heart',
      name: 'Singles & Young Adults',
      description: 'A supportive community for singles navigating life with faith and purpose.',
      leader: ' Abena',
      whatsapp: '+254504234567',
    },
    {
      icon: 'fa-ring',
      name: 'Married Couples Fellowship',
      description: 'Strengthening marriages and building strong families rooted in Christ.',
      leader: 'Ptr. & Mrs. Faith',
      whatsapp: '+254505234567',
    },
  ];

  return (
    <section id="fellowship" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 font-montserrat mb-4">
            Fellowship Groups
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Connect with our vibrant fellowship groups and grow spiritually with like-minded believers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fellowships.map((group, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-purple-100"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <i className={`fas ${group.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-purple-600 font-montserrat mb-2">
                {group.name}
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {group.description}
              </p>
              <div className="border-t border-purple-200 pt-4 mb-4">
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold text-purple-600">Leader:</span> {group.leader}
                </p>
              </div>
              <a
                href={`https://wa.me/${group.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 w-full justify-center"
              >
                <i className="fab fa-whatsapp"></i>
                Join on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
