import React from 'react';
import { Leaf, Calendar, Droplet } from 'lucide-react';

const PlantSection = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200/80 pb-6">
        <h2 className="text-3xl font-semibold text-gray-900">Plant Management</h2>
        <p className="mt-2 text-sm text-gray-600">
          Manage your plants and their care schedules
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Plant List */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">My Plants</h3>
          <div className="space-y-4">
            {['Monstera Deliciosa', 'Snake Plant', 'Peace Lily'].map((plant) => (
              <div key={plant} className="p-4 bg-white/50 rounded-xl border-2 border-gray-100 hover:border-green-200 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">{plant}</h4>
                    <p className="text-xs text-gray-500">Added 2 months ago</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Edit</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full px-4 py-3 bg-green-50 text-green-700 rounded-xl text-sm font-medium hover:bg-green-100 transition-colors">
            Add New Plant
          </button>
        </div>

        {/* Care Schedule */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Care Schedule</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white/50 rounded-xl border-2 border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Droplet className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Water Monstera</h4>
                  <p className="text-xs text-gray-500">Every Monday and Thursday</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white/50 rounded-xl border-2 border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-50 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Fertilize Peace Lily</h4>
                  <p className="text-xs text-gray-500">First Sunday of every month</p>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full px-4 py-3 bg-green-50 text-green-700 rounded-xl text-sm font-medium hover:bg-green-100 transition-colors">
            Add Care Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantSection;