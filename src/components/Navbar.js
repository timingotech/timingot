import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <nav className='pl-[150px] mt-4 flex pb-4 shadow-md'>
        <h1 className='text-2xl font-bold text-gray-700'>Timingo<span>Tech<span>.</span></span></h1>
        <button className='block ml-auto sm:hidden' onClick={toggleMenu}>
          {showMenu ? (
            <span className='text-gray-700 '>Close</span>
          ) : (
            <span className='text-gray-700'>Menu</span>
          )}
        </button>
        <ul className={`sm:flex mt-4 sm:mt-0 sm:ml-48 text-gray-700 ${showMenu ? 'block' : 'hidden'}`}>
          <li className='block sm:inline-block'>
            <Link to='/' className='mr-4' onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className='block sm:inline-block'>
            <Link to='/about' className='mr-4' onClick={closeMenu}>
              About us
            </Link>
          </li>
          <li className='block sm:inline-block'>
            <Link to='/services' className='mr-4' onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li className='block sm:inline-block'>
            <Link to='/contact' className='mr-4' onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li className='block sm:inline-block md:ml-64'>
            <Link to='/support' className='text-gradient' onClick={closeMenu}>
              Support
            </Link>
          </li>
        </ul>
      </nav>
      {/* Rest of your content */}
    </div>
  );
};

export default Navbar;
