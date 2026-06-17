import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ROUTE_CONFIG, Unauthorized } from './config/routeConfig'
import DashboardLayout from './components/layout/DashboardLayout'
import ProtectedRoute from './components/layout/ProtectedRoute'
import SignUp from './pages/auth/SignUp'
import Login from './pages/auth/Login'
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
  )
}
