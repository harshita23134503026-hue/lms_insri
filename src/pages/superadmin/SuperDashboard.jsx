import React from 'react';
import StatCard from '../../components/dashboard/StatCard';
import { Building2, Users, BookOpen, TrendingUp, AlertCircle } from 'lucide-react';
import { 
  QuickActions, 
  AlertsPanel, 
  TopRequestedCategories, 
  TaskStatus, 
  RecentActivity 
} from '../../components/superadmin/SuperadminWidgets';
import BranchPerformanceChart from '../../components/superadmin/BranchPerformanceChart';
import TopLibrariesTable from '../../components/superadmin/TopLibrariesTable';
import SubscriptionStatus from '../../components/superadmin/SubscriptionStatus';

const SuperDashboard = () => {
  return (
    <div className="px-0 py-4 sm:p-6 md:p-8 space-y-6 w-full max-w-[1600px] mx-auto font-sans min-h-screen">
      
      {/* Top Background Gradient Container - purely visual matching the design */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-gray-100/50 to-transparent -z-10 opacity-60"></div>
      
      {/* Top Stats Row */}
      <div className="bg-white/80 backdrop-blur-md rounded-[32px] p-6 shadow-sm border border-white">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <StatCard 
            title="Libraries" 
            value="24" 
            icon={Building2} 
            bgColor="#EAF2FF" 
            iconBgColor="#4386F5" 
          />
          <StatCard 
            title="Users" 
            value="18,420" 
            icon={Users} 
            bgColor="#FFF0E0" 
            iconBgColor="#F59E0B" 
          />
          <StatCard 
            title="Books" 
            value="210,560" 
            icon={BookOpen} 
            bgColor="#F0E6FF" 
            iconBgColor="#8B5CF6" 
          />
          <StatCard 
            title="Revenue" 
            value="₹2.4L" 
            icon={TrendingUp} 
            bgColor="#E6F4EA" 
            iconBgColor="#10B981" 
          />
          <StatCard 
            title="Alerts" 
            value="4" 
            icon={AlertCircle} 
            bgColor="#FFE2E5" 
            iconBgColor="#F64E60" 
          />
        </div>
      </div>

      {/* Quick Actions Row */}
      <div className="w-full">
        <QuickActions />
      </div>

      {/* Main Content Two Columns */}
      <div className="flex flex-col xl:flex-row gap-6 mt-6">
        
        {/* Left Column (Main Data) */}
        <div className="flex-1 space-y-6 min-w-[60%]">
          <BranchPerformanceChart />
          <TopLibrariesTable />
          <SubscriptionStatus />
        </div>

        {/* Right Column (Widgets) */}
        <div className="w-full xl:w-[35%] space-y-6">
          <AlertsPanel />
          <TopRequestedCategories />
          <TaskStatus />
          <RecentActivity />
        </div>

      </div>

    </div>
  );
};

export default SuperDashboard;
