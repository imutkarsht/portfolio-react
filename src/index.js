import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './components/UI/ErrorPage';
import "./index.css";
import "./global.css";
import { ThemeProvider } from './context/ThemeContext';
import ShimmerHome from './shimmers/ShimmerHome';
import ShimmerEducation from './shimmers/ShimmerEducation';
import ShimmerSkills from './shimmers/ShimmerSkills'
import ProjectsShimmer from './shimmers/ProjectsShimmer';
import ContactShimmer from './shimmers/ContactShimmer' ;

const LazyHomeComponent = lazy(() => import('./Pages/Home'));
const LazyEducationComponent = lazy(() => import('./Pages/Education'));
const LazySkillsComponent = lazy(() => import('./Pages/Skills'));
const LazyProjectsComponent = lazy(() => import('./Pages/Projects'));
const LazyContactComponent = lazy(() => import('./Pages/Contact'));

// Migration Notice Component
const MigrationNotice = () => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = 'https://utkarsh-tiwari-dev.vercel.app/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        textAlign: 'center',
        maxWidth: '500px',
        margin: '20px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        animation: 'fadeInScale 0.5s ease-out'
      }}>
        <div style={{
          fontSize: '48px',
          marginBottom: '20px'
        }}>
          🚀
        </div>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '16px',
          color: '#333',
          fontWeight: '600'
        }}>
          We've Moved!
        </h2>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.6',
          color: '#666',
          marginBottom: '24px'
        }}>
          This site has been migrated to a new location with improved performance and features.
        </p>
        <p style={{
          fontSize: '14px',
          color: '#888',
          marginBottom: '20px'
        }}>
          Redirecting in <strong style={{ color: '#007bff', fontSize: '18px' }}>{countdown}</strong> seconds...
        </p>
        <a 
          href="https://utkarsh-tiwari-dev.vercel.app/"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Visit New Site Now
        </a>
      </div>
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

// Main App Component with Migration Notice
const AppWithMigration = () => {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      <MigrationNotice />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Suspense fallback={ <ShimmerHome /> }><LazyHomeComponent /> </Suspense> },
      { path: "/education", element: <Suspense fallback={ <ShimmerEducation /> }><LazyEducationComponent /> </Suspense> },
      { path: "/skills", element: <Suspense fallback={ <ShimmerSkills /> }><LazySkillsComponent /> </Suspense>  },
      { path: "/projects", element: <Suspense fallback={ <ProjectsShimmer /> }><LazyProjectsComponent /> </Suspense> },
      { path: "/contact", element: <Suspense fallback={ <ContactShimmer /> }><LazyContactComponent /> </Suspense>},
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWithMigration />
  </React.StrictMode>
);