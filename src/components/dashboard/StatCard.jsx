import React from 'react';
import { ChevronRight } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, bgColor, iconBgColor, iconColor }) => {
  return (
    <div className={`p-5 rounded-[24px] flex items-center justify-between shadow-sm cursor-pointer hover:shadow-md transition-shadow`} style={{ backgroundColor: bgColor }}>
      <div className="flex items-center gap-4">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
          style={{ backgroundColor: iconBgColor, color: iconColor || 'white' }}
        >
          <Icon size={24} strokeWidth={2.5} />
        </div>
        <div>
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-0.5">{title}</p>
          <h3 className="text-xl font-black text-gray-900">{value}</h3>
        </div>
      </div>
      <div className="text-gray-400">
        <ChevronRight size={20} strokeWidth={2.5} />
      </div>
    </div>
  );
};

export default StatCard;
