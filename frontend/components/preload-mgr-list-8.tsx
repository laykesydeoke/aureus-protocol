import React, { useState, useEffect } from 'react';

interface preloadmgrEntry { id: number; value: number; active: boolean; owner: string; }

export default function preloadmgrList() {
  const [entries, setEntries] = useState<preloadmgrEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { setLoading(false); }, []);

  if (loading) return <div className="animate-pulse">Loading preload-mgr entries...</div>;

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">preload-mgr Registry</h2>
      {entries.length === 0 ? (
        <p className="text-gray-500">No entries found</p>
      ) : (
        entries.map(e => (
          <div key={e.id} className={`p-3 rounded border ${e.active ? 'border-green-500' : 'border-gray-300'}`}>
            <span className="font-mono">#{e.id}</span> - Value: {e.value}
          </div>
        ))
      )}
    </div>
  );
}
