import React from 'react';
import { Zap, Clock, Cloud, Power } from 'lucide-react';

const AutomationSection = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200/80 pb-6">
        <h2 className="text-3xl font-semibold text-gray-900">Automation Settings</h2>
        <p className="mt-2 text-sm text-gray-600">
          Configure automated tasks and schedules
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Automated Tasks */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">Automated Tasks</h3>
          <div className="space-y-4">
            {[
              { name: 'Smart Watering', icon: Cloud, enabled: true },
              { name: 'Light Control', icon: Power, enabled: false },
              { name: 'Climate Control', icon: Zap, enabled: true },
            ].map((task) => (
              <div key={task.name} className="p-4 bg-white/50 rounded-xl border-2 border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                      <task.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{task.name}</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={task.enabled} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedules */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">Schedules</h3>
          <div className="space-y-4">
            {[
              { name: 'Morning Routine', time: '07:00', days: ['Mon', 'Wed', 'Fri'] },
              { name: 'Evening Check', time: '18:00', days: ['Daily'] },
              { name: 'Weekly Maintenance', time: '10:00', days: ['Sun'] },
            ].map((schedule) => (
              <div key={schedule.name} className="p-4 bg-white/50 rounded-xl border-2 border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{schedule.name}</h4>
                      <p className="text-xs text-gray-500">
                        {schedule.time} • {schedule.days.join(', ')}
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Edit</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            <button className="w-full px-4 py-3 bg-green-50 text-green-700 rounded-xl text-sm font-medium hover:bg-green-100 transition-colors">
              Add New Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationSection;