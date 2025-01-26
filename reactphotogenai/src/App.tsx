import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import Architecture from './architecture'
import BgRemovalApp from './backgroundremoval/app/bgRemovalApp'
import Background from './backgroundremoval/index'
import Login from './auth/Login'
import Register from './auth/Register'

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
}

function App() {
  const [auth, setAuth] = useState<AuthContextType>({
    isAuthenticated: false,
    user: null
  });

  // Protected Route Component
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!auth.isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Background />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/register" element={<Register setAuth={setAuth} />} />

        {/* Protected Routes */}
        <Route path="/app" element={
          <ProtectedRoute>
            <BgRemovalApp />
          </ProtectedRoute>
        } />
        <Route path="/architecture" element={
          <ProtectedRoute>
            <Architecture />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App
