import React from 'react';
import { Bot, Brain, MessageSquare, AlertTriangle } from 'lucide-react';

const AISection = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200/80 pb-6">
        <h2 className="text-3xl font-semibold text-gray-900">AI & Chatbot Settings</h2>
        <p className="mt-2 text-sm text-gray-600">
          Configure AI features and chatbot behavior
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* AI Features */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">AI Features</h3>
          <div className="space-y-4">
            {[
              { name: 'Plant Disease Detection', icon: Brain, enabled: true },
              { name: 'Growth Analysis', icon: Bot, enabled: true },
              { name: 'Care Recommendations', icon: MessageSquare, enabled: false },
              { name: 'Early Warning System', icon: AlertTriangle, enabled: true },
            ].map((feature) => (
              <div key={feature.name} className="p-4 bg-white/50 rounded-xl border-2 border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{feature.name}</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={feature.enabled} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chatbot Configuration */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">Chatbot Configuration</h3>
          <div className="space-y-6">
            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Language
              </label>
              <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>

            {/* Personality */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chatbot Personality
              </label>
              <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option value="friendly">Friendly & Casual</option>
                <option value="professional">Professional & Formal</option>
                <option value="educational">Educational & Informative</option>
              </select>
            </div>

            {/* Response Style */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Response Preferences
              </label>
              <div className="space-y-3">
                {[
                  'Include plant care tips',
                  'Send proactive alerts',
                  'Use emoji in responses',
                  'Include scientific names',
                ].map((pref) => (
                  <label key={pref} className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-5 w-5 text-purple-600 border-2 border-gray-300 rounded focus:ring-purple-500 focus:ring-offset-0"
                    />
                    <span className="ml-3 text-sm text-gray-700">{pref}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full px-4 py-3 bg-purple-600 text-white rounded-xl text-sm font-medium hover:bg-purple-700 transition-colors">
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISection;