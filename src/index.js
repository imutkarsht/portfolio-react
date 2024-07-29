import React, { lazy, Suspense } from 'react';
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
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);