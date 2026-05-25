import test from '../components/common/test'
import admin_dashboard from '../pages/admin/admin_dashboard'
import Books from '../pages/admin/Books'
import Members from '../pages/admin/Members'
import SuperDashboard from '../pages/superadmin/SuperDashboard'
import SuperOrganisations from '../pages/superadmin/SuperOrganisations'
import OrganisationDetails from '../pages/superadmin/OrganisationDetails'
// ── Shared pages (multiple roles) ──────────────────────────────────────────
const Dashboard = test
const Settings = test
const Unauthorized = test

// ── User pages ─────────────────────────────────────────────────────────────
const UserProfile = test
const UserOrders = test
const UserReports = test
const HelpCenter = test
// ── Admin pages ────────────────────────────────────────────────────────────
const AdminUsers = test
const AdminOrders = test
const AdminAnalytics = test
const AdminProducts = test
const AdminTickets = test
const AdminRoles = test

// ── SuperAdmin pages ───────────────────────────────────────────────────────
const SuperLogs = test
const SuperAdmins = test
const SuperPermissions = test
const SuperBilling = test
const SuperFlags = test

export const ROUTE_CONFIG = [
  // ── Shared ──────────────────────────────────────────────────────────────
  { path: '/dashboard', component: Dashboard, roles: ['user', 'admin', 'superadmin'], label: 'Dashboard' },
  { path: '/settings', component: Settings, roles: ['user', 'admin', 'superadmin'], label: 'Settings' },

  // ── User ────────────────────────────────────────────────────────────────
  { path: '/profile', component: UserProfile, roles: ['user'], label: 'My Profile' },
  { path: '/orders', component: UserOrders, roles: ['user'], label: 'My Orders' },
  { path: '/reports', component: UserReports, roles: ['user'], label: 'Reports' },
  { path: '/help', component: HelpCenter, roles: ['user'], label: 'Help Center' },

  // ── Admin ────────────────────────────────────────────────────────────────
  { path: '/admin/dashboard', component: admin_dashboard, roles: ['admin', 'superadmin'], label: 'Admin Dashboard' },
  { path: '/admin/books', component: Books, roles: ['admin', 'superadmin'], label: 'Books' },
  { path: '/admin/members', component: Members, roles: ['admin', 'superadmin'], label: 'Members' },
  { path: '/admin/orders', component: AdminOrders, roles: ['admin', 'superadmin'], label: 'Orders' },
  { path: '/admin/analytics', component: AdminAnalytics, roles: ['admin', 'superadmin'], label: 'Analytics' },
  { path: '/admin/products', component: AdminProducts, roles: ['admin', 'superadmin'], label: 'Products' },
  { path: '/admin/tickets', component: AdminTickets, roles: ['admin', 'superadmin'], label: 'Support Tickets' },
  { path: '/admin/roles', component: AdminRoles, roles: ['superadmin'], label: 'Roles' },

  // ── SuperAdmin ───────────────────────────────────────────────────────────

  { path: '/superadmin/dashboard', component: SuperDashboard, roles: ['superadmin'], label: 'Overview' },
  { path: '/super/organisations', component: SuperOrganisations, roles: ['superadmin'], label: 'Organisations' },
  { path: '/super/organisations/:id', component: OrganisationDetails, roles: ['superadmin'], label: 'Organisation Details' },
  { path: '/super/logs', component: SuperLogs, roles: ['superadmin'], label: 'System Logs' },
  { path: '/super/admins', component: SuperAdmins, roles: ['superadmin'], label: 'Admins' },
  { path: '/super/permissions', component: SuperPermissions, roles: ['superadmin'], label: 'Permissions' },
  { path: '/super/billing', component: SuperBilling, roles: ['superadmin'], label: 'Billing' },
  { path: '/super/flags', component: SuperFlags, roles: ['superadmin'], label: 'Feature Flags' },
]

export { Unauthorized }