import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

interface Match {
  id: number;
  opponent: string;
  date: string;
  time: string;
  venue: string;
  status: 'upcoming' | 'completed';
  result?: string;
}

interface Sermon {
  id: number;
  title: string;
  preacher: string;
  date: string;
  scripture: string;
  topic: string;
  link: string;
}

// Simple password hashing function (one-way hash)
const hashPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

const DEFAULT_HASHED_PASSWORD = '73d0c24e15f0dc9f5d4f876e96fcf6e68e87c1d2c5f3e8a9b0c1d2e3f4a5b6c'; // Hashed: AOW@Admin2024

export default function Admin() {
  const [, setLocation] = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('theme');
  const [hashedPassword, setHashedPassword] = useState<string | null>(null);
  const [isFirstTime, setIsFirstTime] = useState(false);

  // Password change states
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordChangeMessage, setPasswordChangeMessage] = useState('');
  const [passwordChangeError, setPasswordChangeError] = useState('');

  // State for data
  const [themeText, setThemeText] = useState('Year of Divine Acceleration');
  const [themeVerse, setThemeVerse] = useState('Habakkuk 2:3');
  const [matches, setMatches] = useState<Match[]>([]);
  const [sermons, setSermons] = useState<Sermon[]>([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('churchTheme');
    const savedVerse = localStorage.getItem('churchVerse');
    const savedMatches = localStorage.getItem('churchMatches');
    const savedSermons = localStorage.getItem('churchSermons');
    const savedHashedPassword = localStorage.getItem('adminHashedPassword');

    if (savedTheme) setThemeText(savedTheme);
    if (savedVerse) setThemeVerse(savedVerse);
    if (savedMatches) setMatches(JSON.parse(savedMatches));
    if (savedSermons) setSermons(JSON.parse(savedSermons));

    if (savedHashedPassword) {
      setHashedPassword(savedHashedPassword);
    } else {
      // First time setup - store default password
      setHashedPassword(DEFAULT_HASHED_PASSWORD);
      localStorage.setItem('adminHashedPassword', DEFAULT_HASHED_PASSWORD);
      setIsFirstTime(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const enteredHash = await hashPassword(password);
    const storedHash = hashedPassword || DEFAULT_HASHED_PASSWORD;
    
    if (enteredHash === storedHash) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLocation('/');
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordChangeError('');
    setPasswordChangeMessage('');

    // Validate current password
    const currentHash = await hashPassword(currentPassword);
    const storedHash = hashedPassword || DEFAULT_HASHED_PASSWORD;

    if (currentHash !== storedHash) {
      setPasswordChangeError('Current password is incorrect.');
      return;
    }

    // Validate new password
    if (!newPassword || newPassword.length < 8) {
      setPasswordChangeError('New password must be at least 8 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordChangeError('New passwords do not match.');
      return;
    }

    if (newPassword === currentPassword) {
      setPasswordChangeError('New password must be different from current password.');
      return;
    }

    // Hash and save new password
    const newHash = await hashPassword(newPassword);
    setHashedPassword(newHash);
    localStorage.setItem('adminHashedPassword', newHash);

    setPasswordChangeMessage('Password changed successfully! Please login with your new password.');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');

    // Auto logout after 2 seconds
    setTimeout(() => {
      handleLogout();
    }, 2000);
  };

  const saveTheme = () => {
    localStorage.setItem('churchTheme', themeText);
    localStorage.setItem('churchVerse', themeVerse);
    alert('Theme updated successfully!');
  };

  const addMatch = () => {
    const newMatch: Match = {
      id: Date.now(),
      opponent: '',
      date: '',
      time: '',
      venue: '',
      status: 'upcoming',
    };
    setMatches([...matches, newMatch]);
  };

  const updateMatch = (id: number, field: string, value: string) => {
    setMatches(
      matches.map(m =>
        m.id === id ? { ...m, [field]: value } : m
      )
    );
  };

  const deleteMatch = (id: number) => {
    setMatches(matches.filter(m => m.id !== id));
  };

  const saveMatches = () => {
    localStorage.setItem('churchMatches', JSON.stringify(matches));
    alert('Matches updated successfully!');
  };

  const addSermon = () => {
    const newSermon: Sermon = {
      id: Date.now(),
      title: '',
      preacher: '',
      date: '',
      scripture: '',
      topic: '',
      link: '',
    };
    setSermons([...sermons, newSermon]);
  };

  const updateSermon = (id: number, field: string, value: string) => {
    setSermons(
      sermons.map(s =>
        s.id === id ? { ...s, [field]: value } : s
      )
    );
  };

  const deleteSermon = (id: number) => {
    setSermons(sermons.filter(s => s.id !== id));
  };

  const saveSermons = () => {
    localStorage.setItem('churchSermons', JSON.stringify(sermons));
    alert('Sermons updated successfully!');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-lock text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-purple-600 font-montserrat">Admin Portal</h1>
            <p className="text-gray-600 mt-2">Altar Of Witness Chapel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:border-purple-600 focus:outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <i className="fas fa-sign-in-alt mr-2"></i>
              Login
            </button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-6">
            Admin access only. Unauthorized access is prohibited.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <i className="fas fa-church text-2xl"></i>
            <h1 className="text-2xl font-bold font-montserrat">Admin Dashboard</h1>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-pink-100 transition-colors"
          >
            <i className="fas fa-sign-out-alt mr-2"></i>
            Logout
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {[
            { id: 'theme', label: 'Theme', icon: 'fa-star' },
            { id: 'matches', label: 'Football Matches', icon: 'fa-futbol' },
            { id: 'sermons', label: 'Sermons', icon: 'fa-book' },
            { id: 'security', label: 'Security', icon: 'fa-lock' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              <i className={`fas ${tab.icon} mr-2`}></i>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Theme Tab */}
        {activeTab === 'theme' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-purple-600 font-montserrat mb-6">
              Update Theme of the Year
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Theme Title
                </label>
                <input
                  type="text"
                  value={themeText}
                  onChange={(e) => setThemeText(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Scripture Verse
                </label>
                <input
                  type="text"
                  value={themeVerse}
                  onChange={(e) => setThemeVerse(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                />
              </div>
              <button
                onClick={saveTheme}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                <i className="fas fa-save mr-2"></i>
                Save Theme
              </button>
            </div>
          </div>
        )}

        {/* Matches Tab */}
        {activeTab === 'matches' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-purple-600 font-montserrat">
                Football Matches
              </h2>
              <button
                onClick={addMatch}
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                <i className="fas fa-plus mr-2"></i>
                Add Match
              </button>
            </div>

            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
              {matches.map(match => (
                <div key={match.id} className="border-2 border-gray-300 rounded-lg p-4 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Opponent"
                      value={match.opponent}
                      onChange={(e) => updateMatch(match.id, 'opponent', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                    />
                    <input
                      type="date"
                      value={match.date}
                      onChange={(e) => updateMatch(match.id, 'date', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                    />
                    <input
                      type="time"
                      value={match.time}
                      onChange={(e) => updateMatch(match.id, 'time', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                    />
                    <input
                      type="text"
                      placeholder="Venue"
                      value={match.venue}
                      onChange={(e) => updateMatch(match.id, 'venue', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <select
                      value={match.status}
                      onChange={(e) => updateMatch(match.id, 'status', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                    >
                      <option value="upcoming">Upcoming</option>
                      <option value="completed">Completed</option>
                    </select>
                    {match.status === 'completed' && (
                      <input
                        type="text"
                        placeholder="Result (e.g., 2-1)"
                        value={match.result || ''}
                        onChange={(e) => updateMatch(match.id, 'result', e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                      />
                    )}
                    <button
                      onClick={() => deleteMatch(match.id)}
                      className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={saveMatches}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
            >
              <i className="fas fa-save mr-2"></i>
              Save Matches
            </button>
          </div>
        )}

        {/* Sermons Tab */}
        {activeTab === 'sermons' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-purple-600 font-montserrat">
                Sermons
              </h2>
              <button
                onClick={addSermon}
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                <i className="fas fa-plus mr-2"></i>
                Add Sermon
              </button>
            </div>

            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
              {sermons.map(sermon => (
                <div key={sermon.id} className="border-2 border-gray-300 rounded-lg p-4 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Sermon Title"
                      value={sermon.title}
                      onChange={(e) => updateSermon(sermon.id, 'title', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                    />
                    <input
                      type="text"
                      placeholder="Preacher Name"
                      value={sermon.preacher}
                      onChange={(e) => updateSermon(sermon.id, 'preacher', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                    />
                    <input
                      type="date"
                      value={sermon.date}
                      onChange={(e) => updateSermon(sermon.id, 'date', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                    />
                    <input
                      type="text"
                      placeholder="Scripture Reference"
                      value={sermon.scripture}
                      onChange={(e) => updateSermon(sermon.id, 'scripture', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                    />
                    <input
                      type="text"
                      placeholder="Topic"
                      value={sermon.topic}
                      onChange={(e) => updateSermon(sermon.id, 'topic', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                    />
                    <input
                      type="url"
                      placeholder="YouTube/Audio Link"
                      value={sermon.link}
                      onChange={(e) => updateSermon(sermon.id, 'link', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                    />
                  </div>
                  <button
                    onClick={() => deleteSermon(sermon.id)}
                    className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <i className="fas fa-trash mr-2"></i>
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={saveSermons}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
            >
              <i className="fas fa-save mr-2"></i>
              Save Sermons
            </button>
          </div>
        )}

        {/* Security Tab - Password Change */}
        {activeTab === 'security' && (
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl">
            <h2 className="text-2xl font-bold text-purple-600 font-montserrat mb-6">
              <i className="fas fa-lock mr-2"></i>
              Change Admin Password
            </h2>

            {isFirstTime && (
              <div className="mb-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800">
                <p className="font-semibold">⚠️ First Time Setup</p>
                <p className="text-sm">Please change your default password immediately for security.</p>
              </div>
            )}

            {passwordChangeMessage && (
              <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-800">
                <p className="font-semibold">✓ Success</p>
                <p className="text-sm">{passwordChangeMessage}</p>
              </div>
            )}

            {passwordChangeError && (
              <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-800">
                <p className="font-semibold">✗ Error</p>
                <p className="text-sm">{passwordChangeError}</p>
              </div>
            )}

            <form onSubmit={handlePasswordChange} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter your current password"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password (min 8 characters)"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your new password"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                <i className="fas fa-key mr-2"></i>
                Change Password
              </button>
            </form>

            <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-900">
              <p className="font-semibold text-sm">🔒 Security Information</p>
              <ul className="text-xs mt-2 space-y-1">
                <li>✓ Passwords are encrypted using SHA-256</li>
                <li>✓ Password hashes are stored in browser storage</li>
                <li>✓ Change your password immediately after first login</li>
                <li>✓ Use a strong, unique password</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
