import React from 'react';

interface Props { id: number; value: number; active: boolean; owner: string; createdAt: number; }

export default function errorhandlerDetail({ id, value, active, owner, createdAt }: Props) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">error-handler Entry #{id}</h3>
        <span className={`px-2 py-1 rounded text-sm ${active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {active ? 'Active' : 'Inactive'}
        </span>
      </div>
      <dl className="grid grid-cols-2 gap-4">
        <div><dt className="text-gray-500">Value</dt><dd className="font-mono">{value}</dd></div>
        <div><dt className="text-gray-500">Owner</dt><dd className="font-mono truncate">{owner}</dd></div>
        <div><dt className="text-gray-500">Created</dt><dd>Block #{createdAt}</dd></div>
      </dl>
    </div>
  );
}
