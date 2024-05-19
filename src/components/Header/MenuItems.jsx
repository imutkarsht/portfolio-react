import { Link } from "react-router-dom";

const MenuItems = ({ onClick, currentPath }) => {
    const getMenuItemClass = (path) => {
      const baseClass = "nav-item after:bg-accent-1 dark:after:bg-accent-2 dark:text-white transition-all duration-200 ease-in-out py-1 rounded-sm px-3";
      const activeClass = "bg-accent-1 dark:bg-accent-2 text-gray-950 dark:text-gray-950"; 
      return currentPath === path ? `${baseClass} ${activeClass}` : baseClass;
    };
  
    return (
      <>
        <Link to="/" onClick={onClick}>
          <li className={getMenuItemClass('/')}>Home</li>
        </Link>
        <Link to="/education" onClick={onClick}>
          <li className={getMenuItemClass('/education')}>Education</li>
        </Link>
        <Link to="/skills" onClick={onClick}>
          <li className={getMenuItemClass('/skills')}>Skills</li>
        </Link>
        <Link to="/projects" onClick={onClick}>
          <li className={getMenuItemClass('/projects')}>Projects</li>
        </Link>
        <Link to="/contact" onClick={onClick}>
          <li className={getMenuItemClass('/contact')}>Contact</li>
        </Link>
      </>
    );
  };

  export default MenuItems