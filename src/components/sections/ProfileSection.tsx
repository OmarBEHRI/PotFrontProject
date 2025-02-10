import React from 'react';
import { User, Mail, Smartphone } from 'lucide-react';

const ProfileSection = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200/80 pb-6">
        <h2 className="text-3xl font-semibold text-white">Profile Settings</h2>
        <p className="mt-2 text-sm text-white">
          Manage your personal information and preferences
        </p>
      </div>

      <div className="space-y-8">
        {/* Profile Photo */}
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center shadow-inner">
            <User className="w-12 h-12 text-green-600" />
          </div>
          <div className="space-y-2">
            <button className="px-5 py-2.5 bg-white border-2 border-green-600 text-green-700 rounded-xl text-sm font-medium hover:bg-green-50 transition-colors">
              Change Photo
            </button>
            <p className="text-xs text-white">
              JPG, GIF or PNG. Max size of 800K
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-8">
          <div className="grid grid-cols-1 gap-8">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Full Name
              </label>
              <div className="relative rounded-xl">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Name Surname"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <div className="relative rounded-xl">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  className="block w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="email@domain.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Phone Number
              </label>
              <div className="relative rounded-xl">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Smartphone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  className="block w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-white">
                Notification Preferences
              </label>
              <div className="space-y-4 bg-gray-50/50 p-4 rounded-xl">
                {['Email notifications', 'SMS alerts', 'Push notifications'].map((pref) => (
                  <label key={pref} className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-5 w-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500 focus:ring-offset-0"
                    />
                    <span className="ml-3 text-sm text-white">{pref}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              className="px-6 py-2.5 border-2 border-gray-300 rounded-xl text-sm font-medium text-white hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-green-600 text-white rounded-xl text-sm font-medium hover:bg-green-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSection;