import React, { useState, useEffect } from 'react';

interface eagerfetchEntry { id: number; value: number; active: boolean; owner: string; }

export default function eagerfetchList() {
  const [entries, setEntries] = useState<eagerfetchEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { setLoading(false); }, []);

  if (loading) return <div className="animate-pulse">Loading eager-fetch entries...</div>;

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">eager-fetch Registry</h2>
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
