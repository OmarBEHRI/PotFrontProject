import React from 'react';
import {
  User, Leaf, Gauge, Zap, Bot, Shield,
  Settings, Bell, Database, HelpCircle,
  Download, Share2, Terminal
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: 'profile', icon: User, label: 'Profile' },
  { id: 'plants', icon: Leaf, label: 'Plant Management' },
  { id: 'sensors', icon: Gauge, label: 'Sensors' },
  { id: 'automation', icon: Zap, label: 'Automation' },
  { id: 'ai', icon: Bot, label: 'AI & Chatbot' },
  { id: 'privacy', icon: Shield, label: 'Privacy' },
  { id: 'system', icon: Settings, label: 'System' },
  { id: 'notifications', icon: Bell, label: 'Notifications' },
  { id: 'backup', icon: Database, label: 'Backup' },
  { id: 'help', icon: HelpCircle, label: 'Help' },
  { id: 'updates', icon: Download, label: 'Updates' },
  { id: 'integrations', icon: Share2, label: 'Integrations' },
  { id: 'advanced', icon: Terminal, label: 'Advanced' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <aside className="h-screen w-64 galss_effect">
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-green-100">
          <img src="../../assets/images/logo.png" alt="Logo" className="h-8" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1.5">
          {menuItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => onSectionChange(id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3
                text-sm rounded-xl transition-all duration-200
                ${
                  activeSection === id
                    ? 'bg-green-100/80 text-green-700 shadow-sm'
                    : 'text-gray-400 hover:bg-green-50/80'
                }
              `}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-green-100">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-50/80 transition-colors">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <User className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-white">Mery mery</p>
              <p className="text-xs text-white">email@domain.com</p>
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;