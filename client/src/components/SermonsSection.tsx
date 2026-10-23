import { useState } from 'react';

export default function SermonsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPreacher, setFilterPreacher] = useState('all');

  const sermons = [
    {
      id: 1,
      title: 'The Power of Faith',
      preacher: 'Ptr. David Mensah',
      date: '2026-04-19',
      scripture: 'Hebrews 11:1',
      topic: 'Faith',
      link: 'https://youtube.com/watch?v=example1',
    },
    {
      id: 2,
      title: 'Living in Victory',
      preacher: 'Ptr. Grace Osei',
      date: '2026-04-12',
      scripture: '1 John 5:4',
      topic: 'Victory',
      link: 'https://youtube.com/watch?v=example2',
    },
    {
      id: 3,
      title: 'The Love of Christ',
      preacher: 'Ptr. David Mensah',
      date: '2026-04-05',
      scripture: 'John 3:16',
      topic: 'Love',
      link: 'https://youtube.com/watch?v=example3',
    },
    {
      id: 4,
      title: 'Transformation Through Prayer',
      preacher: 'Ptr. Grace Osei',
      date: '2026-03-29',
      scripture: 'Philippians 4:6',
      topic: 'Prayer',
      link: 'https://youtube.com/watch?v=example4',
    },
    {
      id: 5,
      title: 'God\'s Faithfulness',
      preacher: 'Ptr. David Mensah',
      date: '2026-03-22',
      scripture: 'Lamentations 3:22-23',
      topic: 'Faith',
      link: 'https://youtube.com/watch?v=example5',
    },
  ];

  const preachers = ['all', ...Array.from(new Set(sermons.map(s => s.preacher)))];

  const filteredSermons = sermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.topic.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPreacher = filterPreacher === 'all' || sermon.preacher === filterPreacher;
    return matchesSearch && matchesPreacher;
  });

  return (
    <section id="sermons" className="py-20 md:py-32 bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 font-montserrat mb-4">
            Sermon Library
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Watch and listen to inspiring sermons that will transform your faith journey.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-4" data-aos="fade-up">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search sermons by title or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-purple-300 focus:border-purple-600 focus:outline-none transition-colors"
              />
            </div>
            <select
              value={filterPreacher}
              onChange={(e) => setFilterPreacher(e.target.value)}
              className="px-4 py-3 rounded-lg border-2 border-purple-300 focus:border-purple-600 focus:outline-none transition-colors"
            >
              <option value="all">All Preachers</option>
              {preachers.filter((_, i) => i > 0).map(preacher => (
                <option key={preacher} value={preacher}>
                  {preacher}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSermons.length > 0 ? (
            filteredSermons.map((sermon, index) => (
              <div
                key={sermon.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Thumbnail */}
                <div className="w-full h-40 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <i className="fas fa-play-circle text-white text-5xl opacity-80"></i>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-bold rounded-full">
                      {sermon.topic}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-600 font-montserrat mb-2 line-clamp-2">
                    {sermon.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <i className="fas fa-microphone text-pink-600 mr-2"></i>
                    {sermon.preacher}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    <i className="fas fa-calendar text-pink-600 mr-2"></i>
                    {new Date(sermon.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                  <p className="text-xs text-gray-600 mb-4 pb-4 border-b border-gray-200">
                    <i className="fas fa-book text-pink-600 mr-2"></i>
                    {sermon.scripture}
                  </p>
                  <a
                    href={sermon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-play"></i>
                    Watch / Listen
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
              <p className="text-gray-600 text-lg">No sermons found. Try a different search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
