export default function YouthChurchSection() {
  const departments = [
    {
      icon: 'fa-music',
      name: 'Worship & Arts',
      leader: 'Joshua',
      description: 'Leading worship through music, dance, and creative expressions.',
    },
    {
      icon: 'fa-bullhorn',
      name: 'Evangelism',
      leader: ' Ruth ',
      description: 'Reaching out and sharing the Gospel with passion and purpose.',
    },
    {
      icon: 'fa-laptop',
      name: 'Media & Tech',
      leader: 'Mensah',
      description: 'Managing digital platforms and technical production excellence.',
    },
    {
      icon: 'fa-theater-masks',
      name: 'Drama & Dance',
      leader: 'Lydia ',
      description: 'Expressing faith through dramatic performances and dance ministry.',
    },
    {
      icon: 'fa-handshake',
      name: 'Ushering',
      leader: 'Samuel',
      description: 'Welcoming and serving with excellence and warm hospitality.',
    },
  ];

  return (
    <section id="youth" className="py-20 md:py-32 bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 font-montserrat mb-4">
            Youth Church
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Empowering the next generation to live boldly for Christ and impact their world.
          </p>
        </div>

        {/* Youth Leader Card */}
        <div className="mb-16" data-aos="fade-up">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-person text-purple-600 text-4xl"></i>
            </div>
            <h3 className="text-3xl font-bold font-montserrat mb-2">Youth Leader</h3>
            <p className="text-pink-100 text-lg mb-4">Ptr. Ken</p>
            <p className="text-pink-100 max-w-2xl mx-auto">
              Leading our youth with vision, passion, and unwavering faith in God's purpose for their lives.
            </p>
          </div>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-3xl font-bold text-purple-600 font-montserrat text-center mb-12">
            Youth Departments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center border-t-4 border-gradient-to-r from-purple-600 to-pink-600"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${dept.icon} text-white text-lg`}></i>
                </div>
                <h4 className="text-lg font-bold text-purple-600 font-montserrat mb-2">
                  {dept.name}
                </h4>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  {dept.description}
                </p>
                <p className="text-xs text-gray-600 font-semibold">
                  <span className="text-pink-600">Leader:</span> {dept.leader}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
