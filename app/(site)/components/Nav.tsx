'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollNav(window.scrollY > 50);
    });
  }, []);

  return (
    <>
      <nav
        className={`nav__primary ${isNavOpen ? 'open' : ''} ${
          scrollNav ? 'bg-dark' : ''
        }`}>
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className='nav__toggler'>
          <span className='icon__bar top__bar'></span>
          <span className='icon__bar top__bar'></span>
          <span className='icon__bar top__bar'></span>
          <span className='visually-hidden'>Toggle navigation</span>
        </button>

        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/#about'>About</Link>
          </li>
          <li>
            <Link href='/#projects'>Projects</Link>
          </li>
          <li>
            <Link href='/#contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
