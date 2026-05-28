import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, UserCircle, ShoppingBag, BarChart2, HelpCircle,
  Settings, Users, TrendingUp, Package, Ticket, Shield, Building2,
  ScrollText, UserCog, KeyRound, CreditCard, Flag, Lock, Smartphone,
  Bell, Building, LifeBuoy,
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useRole } from '../../hook/useRole'
import { NAV_CONFIG, SIDEBAR_CONFIG } from '../../config/navConfig'
import LendReturnModal from '../admin/LendReturnModal'

const ICON_MAP = {
  LayoutDashboard, UserCircle, ShoppingBag, BarChart2, HelpCircle,
  Settings, Users, TrendingUp, Package, Ticket, Shield, Building2,
  ScrollText, UserCog, KeyRound, CreditCard, Flag, Smartphone,
  Bell, Building, LifeBuoy,
}

const ACCENT = {
  user: 'text-green-700 bg-green-50',
  admin: 'text-blue-700 bg-blue-50',
  superadmin: 'text-orange-700 bg-orange-50',
}
const ACCENT_BAR = {
  user: 'bg-green-500',
  admin: 'bg-blue-500',
  superadmin: 'bg-orange-500',
}

export default function Sidebar({ open, onClose }) {
  const [isTextExpanded, setIsTextExpanded] = useState(true)
  const { currentUser } = useAuth()
  const [isLendModalOpen, setIsLendModalOpen] = useState(false)
  const { role } = useRole()
  const navItems = NAV_CONFIG[role] ?? []

  const groups = navItems.reduce((acc, item) => {
    if (!acc[item.group]) acc[item.group] = []
    acc[item.group].push(item)
    return acc
  }, {})

  const activeClass = ACCENT[role] ?? ACCENT.user
  const barClass = ACCENT_BAR[role] ?? ACCENT_BAR.user

  const config = SIDEBAR_CONFIG[role] ?? SIDEBAR_CONFIG.user
  const hasFloatingLayout = config?.layout?.variant === 'floating'

  if (hasFloatingLayout) {
    const logo = config.logo
    const actionButton = config.actionButton
    const layout = config.layout

    const LogoIcon = ICON_MAP[logo?.icon] ?? Package
    const ActionIcon = ICON_MAP[actionButton?.icon] ?? Smartphone

    // If Admin or SuperAdmin role, render the gorgeous two-pane dashboard sidebar
    if (role === 'admin' || role === 'superadmin') {
      return (
        <>
          {open && (
            <div className="fixed inset-0 bg-black/40 z-20 lg:hidden backdrop-blur-sm" onClick={onClose} />
          )}

          <div className={`
            fixed top-0 left-0 z-30 my-4 ml-4 h-[calc(100vh-2rem)] flex gap-3 transition-transform duration-300 ease-out
            lg:static lg:translate-x-0 lg:z-auto lg:h-[calc(100vh-2rem)] lg:my-4 lg:ml-4 lg:mr-0 shrink-0
            ${open ? 'translate-x-0' : '-translate-x-[calc(100%+6rem)] lg:translate-x-0'}
          `}>
            {/* 1. LEFT PANEL: Icon Dock */}
            <div className="w-[72px] bg-[#FAF7ED] border border-amber-100/40 shadow-sm rounded-[32px] flex flex-col items-center py-6 gap-8 shrink-0">
              {/* Hamburger Menu Toggle */}
              <button 
                onClick={() => setIsTextExpanded(prev => !prev)}
                className="p-3 text-slate-700 hover:bg-[#FEF3C7] active:scale-95 rounded-2xl transition-all duration-200 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                  <line x1="4" x2="20" y1="12" y2="12"/>
                  <line x1="4" x2="20" y1="6" y2="6"/>
                  <line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
              </button>

              {/* Vertical Nav Icons */}
              <div className="flex-1 flex flex-col gap-4 w-full items-center px-2">
                {navItems.map((item) => {
                  const Icon = ICON_MAP[item.icon] ?? LayoutDashboard
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `relative p-3 rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-center
                         ${isActive 
                           ? 'bg-[#FDE047] text-slate-800 shadow-sm scale-110 font-bold' 
                           : 'text-slate-400 hover:text-slate-700 hover:bg-white/80'
                         }`
                      }
                    >
                      <Icon size={20} strokeWidth={2.2} />
                    </NavLink>
                  )
                })}
              </div>
            </div>

            {/* 2. RIGHT PANEL: Text Menu Pane */}
            <aside className={`
              bg-white border border-gray-200/80 shadow-sm rounded-[32px] flex flex-col transition-all duration-300 ease-in-out overflow-hidden
              ${isTextExpanded ? 'w-56 opacity-100' : 'w-0 opacity-0 border-none ml-[-12px]'}
            `}>
              {/* Logo Section */}
              {logo && (
                <div className="pt-8 pb-5 px-6 flex items-center gap-3 shrink-0">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${logo.iconBg || 'bg-pink-50 border border-pink-100/50'}`}>
                    <LogoIcon className={`w-5 h-5 ${logo.iconColor || 'text-pink-500 fill-pink-500/20'}`} strokeWidth={2.5} />
                  </div>
                  <span className="font-extrabold text-slate-800 text-xl tracking-tight">{logo.text}</span>
                </div>
              )}

              {/* Action Button */}
              {actionButton && (
                <div className="px-5 pb-5 shrink-0">
                  <button 
                    onClick={() => setIsLendModalOpen(true)}
                    className={`w-full py-3 ${actionButton.bgColor || 'bg-[#FDE047]'} ${actionButton.hoverColor || 'hover:bg-[#FACC15]'} active:scale-[0.98] rounded-full font-extrabold text-[11px] tracking-wider ${actionButton.textColor || 'text-slate-800'} flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer`}
                  >
                    <ActionIcon size={14} className={`${actionButton.iconColor || 'text-orange-600'} shrink-0`} strokeWidth={2.5} />
                    {actionButton.label}
                  </button>
                </div>
              )}

              {/* Sidebar Menu Navigation Links */}
              <nav className="flex-1 overflow-y-auto px-0 py-2">
                {Object.entries(groups).map(([groupName, items], gi) => (
                  <div key={groupName}>
                    {gi > 0 && <hr className="border-gray-100 my-4 mx-6" />}
                    <div className="space-y-1">
                      {items.map((item) => {
                        return (
                          <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={onClose}
                            className={({ isActive }) =>
                              `relative flex items-center justify-between px-6 py-3.5 text-sm transition-all duration-150
                               ${isActive 
                                 ? `${layout.activeBackground || 'bg-[#FEF3C7]/40'} text-slate-900 font-bold` 
                                 : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-medium'
                               }`
                            }
                          >
                            {({ isActive }) => (
                              <>
                                <span className="truncate">{item.label}</span>
                                {isActive && (
                                  <span className={`absolute right-0 top-0 bottom-0 ${layout.activeIndicator || 'w-[4px] bg-[#FF7A00] rounded-l-full'}`} />
                                )}
                              </>
                            )}
                          </NavLink>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </nav>
            </aside>
          </div>
          <LendReturnModal open={isLendModalOpen} onClose={() => setIsLendModalOpen(false)} />
        </>
      )
    }

    // Default Floating Layout (e.g. SuperAdmin) - with correct offscreen translation math to fix the responsive sliver bug
    return (
      <>
        {open && (
          <div className="fixed inset-0 bg-black/30 z-20 lg:hidden animate-fade-in" onClick={onClose} />
        )}

        <aside className={`
          fixed top-0 left-0 ${layout.rounded || 'rounded-[36px]'} ${layout.margins || 'my-4 ml-4'} ${layout.width || 'w-60'} bg-white border border-gray-200/80
          shadow-sm flex flex-col z-30 transition-all duration-200
          lg:static lg:translate-x-0 lg:z-auto lg:h-[calc(100vh-2rem)] lg:my-4 lg:ml-4 lg:mr-0 shrink-0
          ${open ? 'translate-x-0' : '-translate-x-[calc(100%+6rem)] lg:translate-x-0'}
        `}>
          {/* Top Logo Section */}
          {logo && (
            <div className="pt-8 pb-5 px-6 flex items-center gap-3 shrink-0">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${logo.iconBg || 'bg-pink-50 border border-pink-100/50'}`}>
                <LogoIcon className={`w-5 h-5 ${logo.iconColor || 'text-pink-500 fill-pink-500/20'}`} strokeWidth={2.5} />
              </div>
              <span className="font-extrabold text-slate-800 text-xl tracking-tight">{logo.text}</span>
            </div>
          )}

          {/* Action Button */}
          {actionButton && (
            <div className="px-5 pb-5 shrink-0">
              <button 
                onClick={() => setIsLendModalOpen(true)}
                className={`w-full py-3 ${actionButton.bgColor || 'bg-[#FDE047]'} ${actionButton.hoverColor || 'hover:bg-[#FACC15]'} active:scale-[0.98] rounded-full font-extrabold text-[11px] tracking-wider ${actionButton.textColor || 'text-slate-800'} flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer`}
              >
                <ActionIcon size={14} className={`${actionButton.iconColor || 'text-orange-600'} shrink-0`} strokeWidth={2.5} />
                {actionButton.label}
              </button>
            </div>
          )}

          {/* Sidebar Menu Navigation */}
          <nav className="flex-1 overflow-y-auto px-0 py-2">
            {Object.entries(groups).map(([groupName, items], gi) => (
              <div key={groupName}>
                {gi > 0 && <hr className="border-gray-100 my-4 mx-6" />}
                <div className="space-y-1">
                  {items.map((item) => {
                    const Icon = ICON_MAP[item.icon] ?? LayoutDashboard
                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `relative flex items-center justify-between px-6 py-3 text-sm transition-all duration-150
                           ${isActive 
                             ? `${layout.activeBackground || 'bg-[#FEF3C7]/40'} text-slate-900 font-bold` 
                             : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-medium'
                           }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <div className="flex items-center gap-3 truncate">
                              {!layout.noMenuIcons && (
                                <Icon size={16} className={`shrink-0 ${isActive ? 'text-orange-500' : 'text-slate-400 group-hover:text-slate-600'}`} />
                              )}
                              <span className="truncate">{item.label}</span>
                            </div>
                            {isActive && (
                              <span className={`absolute right-0 top-0 bottom-0 ${layout.activeIndicator || 'w-[4px] bg-[#FF7A00] rounded-l-full'}`} />
                            )}
                          </>
                        )}
                      </NavLink>
                    )
                  })}
                </div>
              </div>
            ))}
          </nav>
        </aside>
        <LendReturnModal open={isLendModalOpen} onClose={() => setIsLendModalOpen(false)} />
      </>
    )
  }


  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/30 z-20 lg:hidden" onClick={onClose} />
      )}

      <aside className={`
        fixed top-0 left-0 h-full w-56 bg-white border-r border-gray-100
        flex flex-col z-30 transition-transform duration-200
        lg:static lg:translate-x-0 lg:z-auto
        ${open ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-14 flex items-center gap-2 px-4 border-b border-gray-100 shrink-0 lg:hidden">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
            <span className="text-white text-xs font-semibold">D</span>
          </div>
          <span className="font-semibold text-gray-800 text-sm">DashApp</span>
        </div>

        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {Object.entries(groups).map(([groupName, items], gi) => (
            <div key={groupName} className={gi > 0 ? 'mt-4' : ''}>
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-3 mb-1">
                {groupName}
              </p>
              {items.map((item) => {
                const Icon = ICON_MAP[item.icon] ?? LayoutDashboard
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `relative flex items-center gap-2.5 px-3 py-2 rounded-lg mb-0.5 text-sm transition-colors duration-150
                       ${isActive ? `${activeClass} font-medium` : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r-full ${barClass}`} />
                        )}
                        <Icon size={15} className="shrink-0" />
                        <span className="flex-1 truncate">{item.label}</span>
                        {item.locked && <Lock size={11} className="text-gray-400 shrink-0" />}
                      </>
                    )}
                  </NavLink>
                )
              })}
            </div>
          ))}
        </nav>

        {currentUser && (
          <div className="px-3 py-3 border-t border-gray-100 shrink-0">
            <div className="flex items-center gap-2 px-1">
              <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-600 shrink-0">
                {currentUser.avatar}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-800 truncate">{currentUser.name}</p>
                <p className="text-[10px] text-gray-400 truncate">{currentUser.email}</p>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}
