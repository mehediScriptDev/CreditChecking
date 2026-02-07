import { Outlet, Link, useNavigate, useLocation } from "react-router";
import { useState, useRef, useEffect } from "react";
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Calendar,
  Book,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Shield,
  ChevronDown,
  Home,
} from "lucide-react";
import { removeToken, removeUser, getUser } from "../utils/storage";

import { toast } from "react-toastify";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = getUser() || {
    firstName: "User",
    lastName: "",
    email: "user@example.com",
    role: "user",
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isAdmin = user.role === "admin";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    removeToken();
    removeUser();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  // Menu items based on user role
  const userMenuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <FileText size={20} />,
      label: "Report Validation",
      path: "/dashboard/credit-report-validation",
    },
    {
      icon: <BarChart3 size={20} />,
      label: "Score Validation",
      path: "/dashboard/credit-score-validation",
    },
    {
      icon: <Calendar size={20} />,
      label: "90-Day Monitoring",
      path: "/dashboard/credit-monitoring",
    },
    {
      icon: <Book size={20} />,
      label: "Resources",
      path: "/dashboard/resources",
    },
  ];

  const adminMenuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      icon: <Users size={20} />,
      label: "User Management",
      path: "/admin/users",
    },
    {
      icon: <FileText size={20} />,
      label: "Validations",
      path: "/admin/validations",
    },
    {
      icon: <BarChart3 size={20} />,
      label: "Analytics",
      path: "/admin/analytics",
    },
    {
      icon: <Settings size={20} />,
      label: "Settings",
      path: "/admin/settings",
    },
  ];

  const menuItems = isAdmin ? adminMenuItems : userMenuItems;
  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-gray-900 text-white fixed left-0 top-0 bottom-0">
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Logo */}
          <div className="px-6 py-4 border-b border-gray-800 shrink-0">
            <Link
              to={isAdmin ? "/admin/dashboard" : "/dashboard"}
              className="flex items-center justify-center"
            >
              <img src="/footerLogo.png" alt="Logo" className="h-14" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            <div className="mb-4">
              <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Main
              </p>
            </div>
            {menuItems.slice(0, 1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive(item.path)
                    ? "bg-linear-to-r from-primary-600 to-primary-500 text-white shadow-lg"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}

            {menuItems.length > 1 && (
              <>
                <div className="mb-4 mt-6">
                  <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    {isAdmin ? "Management" : "Services"}
                  </p>
                </div>
                {menuItems.slice(1).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive(item.path)
                        ? "bg-linear-to-r from-primary-600 to-primary-500 text-white shadow-lg"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </>
            )}

            <div className="mb-4 mt-6">
              <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Account
              </p>
            </div>
            <Link
              to={isAdmin ? "/admin/profile" : "/dashboard/profile"}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all"
            >
              <Users size={20} />
              <span className="font-medium">Profile</span>
            </Link>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-800 shrink-0">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all w-full"
            >
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-8" />
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-80 bg-gray-900 text-white z-50 shadow-2xl lg:hidden transition-all duration-300 ease-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Mobile Logo */}
          <div className="p-4 border-b border-gray-800 flex items-center justify-between shrink-0">
            <Link
              to={isAdmin ? "/admin/dashboard" : "/dashboard"}
              className="flex items-center gap-3"
            >
              <img src="/footerLogo.png" alt="Logo" className="h-8" />
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            <div className="mb-4">
              <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Main
              </p>
            </div>
            {menuItems.slice(0, 1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive(item.path)
                    ? "bg-linear-to-r from-primary-600 to-primary-500 text-white shadow-lg"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}

            {menuItems.length > 1 && (
              <>
                <div className="mb-4 mt-6">
                  <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    {isAdmin ? "Management" : "Services"}
                  </p>
                </div>
                {menuItems.slice(1).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive(item.path)
                        ? "bg-linear-to-r from-primary-600 to-primary-500 text-white shadow-lg"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </>
            )}

            <div className="mb-4 mt-6">
              <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Account
              </p>
            </div>
            <Link
              to={isAdmin ? "/admin/profile" : "/dashboard/profile"}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all"
            >
              <Users size={20} />
              <span className="font-medium">Profile</span>
            </Link>
          </nav>

          {/* Mobile Logout */}
          <div className="p-4 border-t border-gray-800 shrink-0">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all w-full"
            >
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-30 lg:block hidden">
          <div className="flex items-center justify-end">
            {/* User Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {/* <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                    isAdmin
                      ? 'bg-linear-to-br from-danger-500 to-danger-600'
                      : 'bg-linear-to-br from-primary-600 to-secondary-600'
                  }`}
                >
                  {user.firstName?.[0]}
                  {user.lastName?.[0]}
                </div> */}
                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {isAdmin ? "Admin" : user.role || "Driver"}
                  </p>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                  <Link
                    to="/"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <Home size={18} />
                    <span>Homepage</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50 pt-16 lg:pt-0">
          <div className="p-6 lg:p-8">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
