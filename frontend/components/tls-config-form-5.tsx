import React, { useState } from 'react';

export default function tlsconfigForm({ onSubmit }: { onSubmit: (val: number) => void }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(value);
    if (isNaN(num) || num <= 0) { setError('Value must be positive'); return; }
    setError('');
    onSubmit(num);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="block text-sm font-medium">New tls-config Value</label>
        <input type="number" value={value} onChange={e => setValue(e.target.value)}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm" placeholder="Enter value" />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Create Entry
      </button>
    </form>
  );
}
