import React from 'react';

interface Stats { totalEntries: number; activeEntries: number; totalValue: number; }

export default function failoverStats({ totalEntries, activeEntries, totalValue }: Stats) {
  const activeRate = totalEntries > 0 ? ((activeEntries / totalEntries) * 100).toFixed(1) : '0';
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-blue-50 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-blue-600">{totalEntries}</div>
        <div className="text-sm text-gray-600">Total Entries</div>
      </div>
      <div className="bg-green-50 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-green-600">{activeRate}%</div>
        <div className="text-sm text-gray-600">Active Rate</div>
      </div>
      <div className="bg-purple-50 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-purple-600">{totalValue.toLocaleString()}</div>
        <div className="text-sm text-gray-600">Total Value</div>
      </div>
    </div>
  );
}
