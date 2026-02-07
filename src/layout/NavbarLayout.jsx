import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "../Components/ui/Button";
import { getUser } from "../utils/storage";

const NavbarLayout = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const user = getUser();
  const isLoggedIn = !!user;

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  // Dynamic styles based on page and scroll position
  const navBgClass = isHomePage
    ? scrolled
      ? "bg-transparent backdrop-blur-md shadow-lg "
      : "bg-[#10182b]"
    : "bg-[#10182b] shadow-xs ";

  const textColorClass = isHomePage ? "text-white" : "text-gray-600";

  const textActiveClass = isHomePage
    ? "text-primary-400 font-semibold"
    : "text-primary font-semibold";

  const textHoverClass = isHomePage
    ? "hover:text-primary-400"
    : "hover:text-primary";

  const mobileMenuBgClass = isHomePage
    ? "bg-slate-900/95 backdrop-blur-md border-t border-white/10"
    : "bg-white border-t border-gray-100";

  const mobileTextActiveClass = isHomePage
    ? "text-primary-400 bg-white/10 font-semibold"
    : "text-primary bg-primary/10 font-semibold";

  const mobileTextClass = isHomePage
    ? "text-gray-300 hover:bg-white/10 hover:text-white"
    : "text-gray-600 hover:bg-gray-50 hover:text-primary";

  const hamburgerClass = isHomePage ? "text-white -mr-2" : "text-gray-700 -mr-2";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="-ml-6 flex items-center hover:opacity-80 transition-all duration-300"
          >
            <img src="/footerLogo.png" alt="Logo" className="h-16" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              to="/"
              className={`text-base font-medium transition-all duration-300 relative py-2 ${
                isActive("/")
                  ? textActiveClass
                  : `${textColorClass} ${textHoverClass}`
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-400 rounded-full"></span>
              )}
            </Link>
            {isLoggedIn && (
              <Link
                to={user?.role === "admin" ? "/admin/dashboard" : "/dashboard"}
                className={`text-base font-medium transition-all duration-300 relative py-2 ${
                  isActive("/dashboard") || isActive("/admin/dashboard")
                    ? textActiveClass
                    : `${textColorClass} ${textHoverClass}`
                }`}
              >
                Dashboard
                {(isActive("/dashboard") || isActive("/admin/dashboard")) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-400 rounded-full"></span>
                )}
              </Link>
            )}
            <Link
              to="/resources"
              className={`text-base font-medium transition-all duration-300 relative py-2 ${
                isActive("/resources")
                  ? textActiveClass
                  : `${textColorClass} ${textHoverClass}`
              }`}
            >
              Resources
              {isActive("/resources") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-400 rounded-full"></span>
              )}
            </Link>
            <Link
              to="/about"
              className={`text-base font-medium transition-all duration-300 relative py-2 ${
                isActive("/about")
                  ? textActiveClass
                  : `${textColorClass} ${textHoverClass}`
              }`}
            >
              About
              {isActive("/about") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-400 rounded-full"></span>
              )}
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className=" hidden lg:flex items-center gap-4">
            {isLoggedIn ? (
              <Link
                to={user?.role === "admin" ? "/admin/dashboard" : "/dashboard"}
              >
                <Button
                  variant="primary"
                  size="md"
                  className="bg-primary-500! hover:bg-primary-600! shadow-sm hover:shadow-md transition-all duration-300 font-medium px-6"
                >
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="outline"
                    size="md"
                    className={`${isHomePage ? "text-white! border-white/30! hover:border-white! hover:bg-white/10!" : "text-gray-700 border-gray-300 hover:border-primary hover:text-primary hover:bg-primary/5"} transition-all duration-300 font-medium px-6`}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    variant="primary"
                    size="md"
                    className="bg-primary-500! hover:bg-primary-600! shadow-sm hover:shadow-md transition-all duration-300 font-medium px-6"
                  >
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${isHomePage ? "hover:bg-white/10" : "hover:bg-gray-100"} transition-colors`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={hamburgerClass} size={24} />
            ) : (
              <Menu className={hamburgerClass} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden py-4 ${mobileMenuBgClass} animate-fadeIn`}>
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-4 rounded-lg transition-all ${
                  isActive("/") ? mobileTextActiveClass : mobileTextClass
                }`}
              >
                Home
              </Link>
              {isLoggedIn && (
                <Link
                  to={
                    user?.role === "admin" ? "/admin/dashboard" : "/dashboard"
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-4 rounded-lg transition-all ${
                    isActive("/dashboard") || isActive("/admin/dashboard")
                      ? mobileTextActiveClass
                      : mobileTextClass
                  }`}
                >
                  Dashboard
                </Link>
              )}
              <Link
                to="/resources"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-4 rounded-lg transition-all ${
                  isActive("/resources")
                    ? mobileTextActiveClass
                    : mobileTextClass
                }`}
              >
                Resources
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-4 rounded-lg transition-all ${
                  isActive("/about") ? mobileTextActiveClass : mobileTextClass
                }`}
              >
                About
              </Link>
              <div className="pt-4 flex flex-col space-y-3">
                {isLoggedIn ? (
                  <Link
                    to={
                      user?.role === "admin" ? "/admin/dashboard" : "/dashboard"
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant="primary"
                      className="w-full bg-primary-500! hover:bg-primary-600! shadow-sm transition-all font-medium"
                    >
                      Go to Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button
                        variant="outline"
                        className={`w-full ${isHomePage ? "text-white! border-white/30! hover:border-white! hover:bg-white/10!" : "text-gray-700 border-gray-300 hover:border-primary hover:text-primary hover:bg-primary/5"} transition-all font-medium`}
                      >
                        Login
                      </Button>
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button
                        variant="primary"
                        className="w-full bg-primary-500! hover:bg-primary-600! shadow-sm transition-all font-medium"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavbarLayout;
