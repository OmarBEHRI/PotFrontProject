import React from 'react';
import { Gauge, Thermometer, Droplet, Sun } from 'lucide-react';

const SensorSection = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200/80 pb-6">
        <h2 className="text-3xl font-semibold text-gray-900">Sensor Configuration</h2>
        <p className="mt-2 text-sm text-gray-600">
          Manage your sensors and set up alerts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sensor Status */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Active Sensors</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Temperature', icon: Thermometer, value: '23°C', status: 'normal' },
              { name: 'Humidity', icon: Droplet, value: '65%', status: 'high' },
              { name: 'Soil Moisture', icon: Gauge, value: '45%', status: 'normal' },
              { name: 'Light Level', icon: Sun, value: '800 lux', status: 'low' },
            ].map((sensor) => (
              <div key={sensor.name} className="p-4 bg-white/50 rounded-xl border-2 border-gray-100">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <sensor.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{sensor.name}</h4>
                    <p className="text-xs text-gray-500">{sensor.value}</p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    sensor.status === 'normal' ? 'bg-green-100 text-green-800' :
                    sensor.status === 'high' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {sensor.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alert Thresholds */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Alert Thresholds</h3>
          <div className="space-y-6">
            {[
              { name: 'Temperature Range', min: '18', max: '28', unit: '°C' },
              { name: 'Humidity Range', min: '40', max: '70', unit: '%' },
              { name: 'Soil Moisture', min: '30', max: '70', unit: '%' },
              { name: 'Light Level', min: '500', max: '2000', unit: 'lux' },
            ].map((threshold) => (
              <div key={threshold.name} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {threshold.name}
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <input
                      type="number"
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder={`Min (${threshold.unit})`}
                      defaultValue={threshold.min}
                    />
                  </div>
                  <span className="text-gray-500">to</span>
                  <div className="flex-1">
                    <input
                      type="number"
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder={`Max (${threshold.unit})`}
                      defaultValue={threshold.max}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button className="w-full px-4 py-3 bg-green-600 text-white rounded-xl text-sm font-medium hover:bg-green-700 transition-colors">
              Save Thresholds
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorSection;