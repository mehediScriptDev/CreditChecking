import { createBrowserRouter, Navigate } from 'react-router';
import RootLayout from '../layout/RootLayout';
import PublicLayout from '../layout/PublicLayout';
import DashboardLayout from '../layout/DashboardLayout';
import ProtectedRoute from '../Components/ProtectedRoute';

// Public Pages
import HomeView from '../pages/public/public_Home/HomeView';
import AboutView from '../pages/public/public_about/AboutView';
import ContactView from '../pages/public/public_contact/ContactView';
import NotFound from '../pages/error/NotFound';

// Auth Pages
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

// User Pages
import Dashboard from '../pages/user/Dashboard';

// Admin Pages
import AdminDashboard from '../pages/admin/AdminDashboard';

export const router = createBrowserRouter([
  // Public Routes with Navbar
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          {
            index: true,
            element: <HomeView />,
          },
          {
            path: 'about',
            element: <AboutView />,
          },
          {
            path: 'contact',
            element: <ContactView />,
          },
        ],
      },
      // Auth Routes (No Layout)
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },

  // User Dashboard Routes (No Navbar)
  {
    path: 'dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'credit-report-validation',
        element: <div>Credit Report Validation - Coming Soon</div>,
      },
      {
        path: 'credit-score-validation',
        element: <div>Credit Score Validation - Coming Soon</div>,
      },
      {
        path: 'results',
        element: <div>Results - Coming Soon</div>,
      },
      {
        path: 'credit-monitoring',
        element: <div>Credit Monitoring - Coming Soon</div>,
      },
      {
        path: 'resources',
        element: <div>Resources - Coming Soon</div>,
      },
    ],
  },

  // Admin Dashboard Routes (No Navbar)
  {
    path: 'admin',
    element: (
      <ProtectedRoute requireAdmin={true}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: 'dashboard',
        element: <AdminDashboard />,
      },
      {
        path: 'users',
        element: <div>User Management - Coming Soon</div>,
      },
      {
        path: 'validations',
        element: <div>Validations - Coming Soon</div>,
      },
      {
        path: 'analytics',
        element: <div>Analytics - Coming Soon</div>,
      },
      {
        path: 'settings',
        element: <div>Settings - Coming Soon</div>,
      },
    ],
  },

  // 404 Catch-all
  {
    path: '*',
    element: <NotFound />,
  },
]);
