# CrapUI

CrapUI is a refined React starter built for developers who want speed, clarity, and a production-ready foundation without the usual setup fatigue. It combines modern tooling, clean defaults, and an intuitive structure so you can focus on building — not configuring.

If you value **simplicity**, **performance**, and **developer experience**, this starter gives you everything you need from day one.

---

## ✨ What You Get Out of the Box

**Core Frameworks**

- **React 19** — fast, stable, and future-proof
- **React Router** — modern routing, preconfigured
- **Vite** — ultra-fast dev server & optimized builds

**Styling**

- **Tailwind CSS** — fully set up and ready
- Clean utility-first workflow

**Enhancements**

- **Lenis Smooth Scrolling** — premium-grade scroll experience
- **Motion-ready animations** — built for fluid interactions
- **Lucide + React Icons** — scalable icon systems

**Architecture & Utilities**

- Pre-built **Context API** structure
- Organized folder system
- ESLint for consistency

A starter that feels minimal — but works like a full professional setup.

---

## ⚙️ Tech Stack Overview

**Runtime**

- React: 19.2.0
- React DOM: 19.2.0

**Build Tools**

- Vite: 7.2.4
- @vitejs/plugin-react: 5.1.1

**Styling**

- Tailwind CSS: 4.1.18
- @tailwindcss/vite: 4.1.18

**Routing & Navigation**

- react-router: 7.13.0

**HTTP Client**

- axios: 1.13.4

**Smooth Scrolling & Animation**

- lenis: 1.3.17
- motion: 12.29.2

**Icons**

- react-icons: 5.5.0
- lucide-react: 0.562.0
- lucide: 0.562.0

**Linting**

- ESLint: 9.39.1
- @eslint/js: 9.39.1
- eslint-plugin-react-hooks: 7.0.1
- eslint-plugin-react-refresh: 0.4.24

---

## 🎯 Key Features & Implementation Details

### 1. **Authentication System**

- Context-based auth with `AuthProvider` and `AuthContext`
- Token management via localStorage
- Auto-inject Bearer token in Axios requests
- Ready to integrate with any backend auth API
- **Status**: Available but commented out in `main.jsx`

### 2. **API Integration Layer**

- Pre-configured Axios instance with interceptors
- Centralized error handling for 401, 403, 404 responses
- Clean HTTP method wrappers (GET, POST, PUT, DELETE)
- Signal support for request cancellation
- Endpoint constants for organized route management

### 3. **Smooth Scrolling Experience**

- Lenis integration via `SmoothScroll` component
- Customizable lerp, duration, and multiplier settings
- Wrapped around main content in `RootLayout`
- Native feel on touch devices

### 4. **Validation & Error Handling**

- Form validators: email, password, phone, username
- Centralized API error handling with network detection
- User-friendly error messages

### 5. **Layout System**

- `RootLayout` with Header/Main/Footer structure
- Nested routing support via `<Outlet />`
- Smooth scroll wrapper integrated
- Extensible for protected route layouts

### 6. **Developer Experience**

- ESLint 9 flat config with React hooks rules
- Vite HMR for instant feedback
- Organized folder structure by feature
- Type-safe utility functions

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Start development

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## 🔌 Quick Usage Examples

### Making API Calls

```javascript
import { GET, POST } from './services/httpMethods';
import { apiExecutor } from './services/apiExecutor';

// Simple GET request
const fetchUsers = async () => {
  try {
    const response = await GET('/api/users');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// POST with error handling
const createUser = async (userData) => {
  const apiCall = (signal) => POST('/api/users', userData, signal);
  return await apiExecutor(apiCall, (error) => error, null);
};
```

### Using Authentication

```javascript
// Uncomment AuthProvider in main.jsx first
import { useAuth } from './context/AuthContext';

function LoginComponent() {
  const { login, user, loading } = useAuth();

  const handleLogin = async () => {
    await login('email@example.com', 'password');
  };

  if (loading) return <div>Loading...</div>;
  return <div>{user ? `Welcome ${user.name}` : 'Please login'}</div>;
}
```

### Form Validation

```javascript
import { isValidEmail, isValidPassword } from './utils/validators';

const validateForm = (email, password) => {
  if (!isValidEmail(email)) {
    return 'Invalid email format';
  }
  if (!isValidPassword(password)) {
    return 'Password must be at least 8 characters';
  }
  return null;
};
```

### Storage Helpers

```javascript
import { setToken, getToken, setUser, getUser } from './utils/storage';

// Save auth data
setToken('your-jwt-token');
setUser({ id: 1, name: 'John Doe' });

// Retrieve auth data
const token = getToken();
const user = getUser();
```

---

## 📁 Project Structure

```
├── public/                      → Static assets
├── src/
│   ├── App.jsx                 → Main app component
│   ├── main.jsx                → App entry point with RouterProvider
│   ├── index.css / App.css     → Global styles
│   │
│   ├── router/
│   │   └── routes.jsx          → Browser router configuration
│   │
│   ├── layout/
│   │   ├── RootLayout.jsx      → Main layout wrapper (Header/Main/Footer)
│   │   ├── NavbarLayout.jsx    → Header/navigation component
│   │   └── FooterLayout.jsx    → Footer component
│   │
│   ├── pages/
│   │   ├── public/             → Public pages (Home, About, Contact)
│   │   └── error/              → Error pages (NotFound)
│   │
│   ├── Components/
│   │   └── utility/
│   │       ├── SmoothScroll.jsx → Lenis smooth scrolling wrapper
│   │       └── ScrollToTop.jsx  → Scroll restoration utility
│   │
│   ├── context/
│   │   ├── AuthContext.js      → Auth context definition
│   │   └── AuthProvider.jsx    → Auth state management provider
│   │
│   ├── services/
│   │   ├── axiosInstance.js    → Configured Axios with interceptors
│   │   ├── httpMethods.js      → HTTP method wrappers (GET, POST, PUT, DELETE)
│   │   ├── apiExecutor.js      → Centralized error handling for API calls
│   │   └── httpEndpoint.js     → API endpoint constants
│   │
│   ├── utils/
│   │   ├── storage.js          → LocalStorage helpers (token, user)
│   │   ├── cookies.js          → Cookie management utilities
│   │   ├── validators.js       → Form validation functions
│   │   ├── errorHandler.js     → API error handling utility
│   │   └── Helper.js           → General helper functions
│   │
│   └── Demo/
│       └── Demo.jsx            → Demo/landing page component
│
├── index.html                  → HTML entry point
├── vite.config.js              → Vite + React + Tailwind config
├── eslint.config.js            → ESLint flat config
└── package.json                → Dependencies and scripts
```

### 🗂️ Architecture Breakdown

**Service Layer** (`src/services/`)

- **Axios Instance** with request/response interceptors
- Automatic Bearer token injection from localStorage
- Centralized base URL configuration
- Clean HTTP method abstractions
- Unified error handling via `apiExecutor`

**Authentication System** (`src/context/`)

- Ready-to-use `AuthProvider` with login/logout
- Auth state management via Context API
- Token & user persistence in localStorage
- Currently commented out in `main.jsx` - uncomment to activate

**Routing Architecture** (`src/router/`)

- Browser router with `RootLayout` wrapper
- Nested route support via `<Outlet />`
- Smooth scroll wrapper integrated into layout
- Extensible for protected routes

**Utility Layer** (`src/utils/`)

- **Storage**: Token & user management helpers
- **Cookies**: Set, get, remove, check operations
- **Validators**: Email, password, phone, username validation
- **Error Handler**: Standardized API error messaging

---

## 💡 Why CrapUI?

- **Zero setup overhead**
- **Modern defaults that scale**
- **Instant design-ready environment**
- **Smooth scrolling that feels premium**
- **Icons and animations built-in**
- **Production-friendly architecture**

It’s engineered for creators who want to ship fast — without sacrificing quality.

---

## 🤝 Contributing

Contributions are appreciated. Please open an issue before starting major changes to stay aligned with the project direction.

Small, focused PRs help maintain quality and momentum.

---

**Built with care, crafted for speed — CrapUI**
A starter that respects your time.

---
#   l m s m i t h 6 6 1  
 