import React from 'react';
import ProfileSection from './sections/ProfileSection';
import PlantSection from './sections/PlantSection';
import SensorSection from './sections/SensorSection';
import AutomationSection from './sections/AutomationSection';
import AISection from './sections/AISection';

interface SettingsContentProps {
  activeSection: string;
}

const SettingsContent: React.FC<SettingsContentProps> = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection />;
      case 'plants':
        return <PlantSection />;
      case 'sensors':
        return <SensorSection />;
      case 'automation':
        return <AutomationSection />;
      case 'ai':
        return <AISection />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-medium">
              Select a section from the sidebar
            </h2>
            <p className="mt-2">
              Choose a category to view and manage your settings
            </p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="rounded-2xl p-8 transition-all duration-500 galss_effect">
        {renderContent()}
      </div>
    </div>
  );
};

export default SettingsContent;