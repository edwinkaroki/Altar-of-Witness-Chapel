export default function ServiceTimesSection() {
  const services = [
    {
      icon: 'fa-sun',
      name: 'Sunday Service',
      time: '8:00 AM & 10:30 AM',
      location: 'Main Auditorium',
    },
    {
      icon: 'fa-book',
      name: 'Midweek Service',
      time: 'Wednesday 6:30 PM',
      location: 'Chapel Hall',
    },
    {
      icon: 'fa-hands-praying',
      name: 'Prayer Night',
      time: 'Friday 7:00 PM',
      location: 'Prayer Room',
    },
    {
      icon: 'fa-users',
      name: 'Youth Service',
      time: 'Saturday 5:00 PM',
      location: 'Youth Center',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 font-montserrat mb-4">
            Service Times
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join us for inspiring worship, powerful messages, and meaningful fellowship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`fas ${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-purple-600 font-montserrat mb-2">
                {service.name}
              </h3>
              <p className="text-gray-700 font-semibold mb-2">{service.time}</p>
              <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
                <i className="fas fa-map-marker-alt text-pink-600"></i>
                {service.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
