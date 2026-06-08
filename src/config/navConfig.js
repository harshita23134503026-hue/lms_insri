export const NAV_CONFIG = {
  user: [
    { group: 'Main', label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
    { group: 'Main', label: 'My Profile', path: '/profile', icon: 'UserCircle' },
    { group: 'Main', label: 'My Orders', path: '/orders', icon: 'ShoppingBag' },
    { group: 'Main', label: 'Reports', path: '/reports', icon: 'BarChart2' },
    { group: 'Support', label: 'Help Center', path: '/help', icon: 'HelpCircle' },
    { group: 'Support', label: 'Settings', path: '/settings', icon: 'Settings' },
  ],

  admin: [
    { group: 'Main', label: 'Overview', path: '/admin/dashboard', icon: 'LayoutDashboard' },
    { group: 'Main', label: 'Books', path: '/admin/books', icon: 'Package' },
    { group: 'Main', label: 'Members', path: '/admin/members', icon: 'Users' },
    { group: 'System', label: 'Settings', path: '/settings', icon: 'Settings' },
    { group: 'System', label: 'About', path: '/about', icon: 'HelpCircle' },
    { group: 'System', label: 'Help & support', path: '/help', icon: 'LifeBuoy' },
  ],

  superadmin: [
    { group: 'Main', label: 'Dashboard', path: '/superadmin/dashboard', icon: 'LayoutDashboard' },
    { group: 'Main', label: 'Organisations', path: '/super/organisations', icon: 'Building2' },
    { group: 'Main', label: 'Organisation Details', path: '/super/organisations/org-1', icon: 'Building' },
  ],
}

export const SIDEBAR_CONFIG = {
  admin: {
    logo: {
      text: 'LMS',
      icon: 'Package',
      iconBg: 'bg-pink-50 border border-pink-100/50',
      iconColor: 'text-pink-500 fill-pink-500/20',
    },
    actionButton: {
      label: 'LEND / RETURN',
      icon: 'Smartphone',
      iconColor: 'text-orange-600',
      bgColor: 'bg-[#FDE047]',
      hoverColor: 'hover:bg-[#FACC15]',
      textColor: 'text-slate-800',
    },
    layout: {
      variant: 'floating',
      rounded: 'rounded-[36px]',
      margins: 'my-4 ml-4 mr-0',
      width: 'w-60',
      noMenuIcons: true,
      activeBackground: 'bg-[#FEF3C7]/40',
      activeIndicator: 'w-[4px] bg-[#FF7A00] rounded-l-full',
    }
  },
  user: {
    layout: {
      variant: 'default',
      width: 'w-56',
    }
  },
  superadmin: {
    logo: {
      text: 'LMS',
      icon: 'Package',
      iconBg: 'bg-pink-50 border border-pink-100/50',
      iconColor: 'text-pink-500 fill-pink-500/20',
    },
    layout: {
      variant: 'floating',
      rounded: 'rounded-[36px]',
      margins: 'my-4 ml-4 mr-0',
      width: 'w-60',
      noMenuIcons: true,
      activeBackground: 'bg-[#FEF3C7]/40',
      activeIndicator: 'w-[4px] bg-[#FF7A00] rounded-l-full',
    }
  }
}

