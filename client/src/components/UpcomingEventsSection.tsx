import { useState } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  category: 'service' | 'fellowship' | 'youth' | 'workshop';
}

export default function UpcomingEventsSection() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: 'Sunday Service',
      date: '2026-04-27',
      time: '8:00 AM & 10:30 AM',
      location: 'Main Sanctuary',
      description: 'Weekly Sunday worship service with sermon and praise.',
      category: 'service',
    },
    {
      id: 2,
      title: 'Prayer Night',
      date: '2026-04-30',
      time: '6:30 PM',
      location: 'Prayer Room',
      description: 'Special prayer session for the community.',
      category: 'fellowship',
    },
    {
      id: 3,
      title: 'Youth Fellowship',
      date: '2026-05-03',
      time: '5:00 PM',
      location: 'Youth Center',
      description: 'Monthly gathering for young adults with games and discussion.',
      category: 'youth',
    },
    {
      id: 4,
      title: 'Bible Study Workshop',
      date: '2026-05-05',
      time: '7:00 PM',
      location: 'Conference Hall',
      description: 'Deep dive into scripture with interactive discussion.',
      category: 'workshop',
    },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Event | null>(null);

  const handleImageUpload = (eventId: number, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setEvents(events.map(ev =>
        ev.id === eventId
          ? { ...ev, image: e.target?.result as string }
          : ev
      ));
    };
    reader.readAsDataURL(file);
  };

  const startEdit = (event: Event) => {
    setEditingId(event.id);
    setEditForm({ ...event });
  };

  const saveEdit = () => {
    if (editForm) {
      setEvents(events.map(ev =>
        ev.id === editForm.id ? editForm : ev
      ));
      setEditingId(null);
      setEditForm(null);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm(null);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      service: 'bg-blue-600',
      fellowship: 'bg-purple-600',
      youth: 'bg-green-600',
      workshop: 'bg-orange-600',
      worship: 'bg-pink-600',
    };
    return colors[category] || 'bg-purple-600';
  };

  return (
    <section id="events" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 font-montserrat mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Stay updated with all the exciting events and activities happening at Altar Of Witness Chapel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <i className="fas fa-image text-4xl"></i>
                  </div>
                )}
                
                {/* Edit Mode - Image Upload */}
                {editingId === event.id && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload(event.id, file);
                        }}
                        className="hidden"
                      />
                      <div className="bg-white px-4 py-2 rounded-lg font-semibold text-purple-600 hover:bg-purple-50 transition">
                        <i className="fas fa-upload mr-2"></i>
                        Upload Image
                      </div>
                    </label>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`${getCategoryColor(event.category)} text-white px-3 py-1 rounded-full text-xs font-bold uppercase`}>
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {editingId === event.id && editForm ? (
                  // Edit Mode
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Event Title"
                    />
                    <input
                      type="date"
                      value={editForm.date}
                      onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="text"
                      value={editForm.time}
                      onChange={(e) => setEditForm({ ...editForm, time: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Time"
                    />
                    <input
                      type="text"
                      value={editForm.location}
                      onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Location"
                    />
                    <textarea
                      value={editForm.description}
                      onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Description"
                      rows={3}
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={saveEdit}
                        className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
                      >
                        <i className="fas fa-check mr-2"></i>
                        Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="flex-1 px-3 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition font-semibold"
                      >
                        <i className="fas fa-times mr-2"></i>
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  // Display Mode
                  <>
                    <h3 className="text-2xl font-bold text-purple-600 font-montserrat mb-3">
                      {event.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <p className="text-gray-700 text-sm flex items-center gap-2">
                        <i className="fas fa-calendar text-pink-600 w-5"></i>
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                      <p className="text-gray-700 text-sm flex items-center gap-2">
                        <i className="fas fa-clock text-pink-600 w-5"></i>
                        {event.time}
                      </p>
                      <p className="text-gray-700 text-sm flex items-center gap-2">
                        <i className="fas fa-map-marker-alt text-pink-600 w-5"></i>
                        {event.location}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <button
                      onClick={() => startEdit(event)}
                      className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold"
                    >
                      <i className="fas fa-edit mr-2"></i>
                      Edit Event
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add New Event Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <i className="fas fa-plus text-xl"></i>
            Add New Event
          </button>
        </div>
      </div>
    </section>
  );
}
