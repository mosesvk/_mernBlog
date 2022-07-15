import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className='border-solid border-black border-b-4 text-center fixed top-0 w-full bg-white'>
    <ul className='list-none	m-0 px-8 py-4'>
      <li className='inline-block px-4'>
        <Link className='decoration-0	text-black font-bold px-8 py-4' to='/'>
          Home
        </Link>
      </li>
      <li className='inline-block px-4'>
        <Link
          className='decoration-0	text-black font-bold px-8 py-4'
          to='/about'
        >
          About
        </Link>
      </li>
      <li className='inline-block px-4'>
        <Link
          className='decoration-0	text-black font-bold px-8 py-4'
          to='/articles-list'
        >
          Articles
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
