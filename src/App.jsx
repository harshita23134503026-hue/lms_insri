import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ROUTE_CONFIG, Unauthorized } from './config/routeConfig';
import DashboardLayout from './components/layout/DashboardLayout';
import ProtectedRoute from './components/layout/ProtectedRoute';
import SignUp from './pages/auth/SignUp'
import Login from './pages/auth/Login'

import Dashboard from "./pages/user/Dashboard";
import UserProfile from "./pages/user/profile";
import Wishlist from "./pages/user/wishlist";
import Books from "./pages/user/books";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Unauthorized page (no layout needed) */}
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>

          {/* All dashboard routes share the DashboardLayout */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<div className="p-6 bg-white rounded-3xl shadow-sm min-h-screen">About LMS: Library Management System v1.0.0</div>} />
            <Route path="/help" element={<div className="p-6 bg-white rounded-3xl shadow-sm min-h-screen">Help & Support: Contact support@college.edu</div>} />
            

            {ROUTE_CONFIG.map(({ path, component: Component, roles }) => (
              <Route
                key={path}
                path={path}
                element={
                  <ProtectedRoute allowedRoles={roles}>
                    <Component />
                  </ProtectedRoute>
                }
              />
            ))}
          </Route>
          {/* 404 fallback */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
