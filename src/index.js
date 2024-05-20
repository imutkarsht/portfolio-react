import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout';
import Body from './components/home/Body';
import Education from './components/Education-page/Education';
import Skills from './components/Skill-page/Skills';
import Projects from './components/Project-page/Projects';
import Contact from './components/Contact';
import ErrorPage from './components/UI/ErrorPage';
import "./index.css";
import "./global.css";
import { ThemeProvider } from './ThemeContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Body /> },
      { path: "/education", element: <Education /> },
      { path: "/skills", element: <Skills /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
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