import React, { useState } from 'react';

const DashboardComponent = () => {
  const [url, setUrl] = useState('');
  const [urls, setUrls] = useState([
    {
      id: 1,
      original: 'https://www.google.com',
      short: 'https://short.ly/abc123',
      clicks: 42,
    },
    {
      id: 2,
      original: 'https://github.com',
      short: 'https://short.ly/gh456',
      clicks: 13,
    },
  ]);

  const handleShorten = () => {
    // Replace this with actual backend call
    const newUrl = {
      id: urls.length + 1,
      original: url,
      short: `https://short.ly/${Math.random().toString(36).substring(7)}`,
      clicks: 0,
    };
    setUrls([newUrl, ...urls]);
    setUrl('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">URL Shortener Dashboard</h1>

        {/* Input Box */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter original URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition"
            onClick={handleShorten}
          >
            Shorten URL
          </button>
        </div>

        {/* URL Table */}
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 text-left text-sm font-semibold text-gray-600">
              <tr>
                <th className="px-6 py-4">Original URL</th>
                <th className="px-6 py-4">Shortened URL</th>
                <th className="px-6 py-4">Clicks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {urls.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-blue-700 break-words max-w-xs">
                    <a href={item.original} target="_blank" rel="noopener noreferrer">
                      {item.original}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-green-600">
                    <a href={item.short} target="_blank" rel="noopener noreferrer">
                      {item.short}
                    </a>
                  </td>
                  <td className="px-6 py-4">{item.clicks}</td>
                </tr>
              ))}
              {urls.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center px-6 py-4 text-gray-400">
                    No URLs shortened yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
