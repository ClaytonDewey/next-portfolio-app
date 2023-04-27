'use client';
import React, { useState, useEffect } from 'react';
import { navbar } from '../content/navbar';
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
          {navbar.map((item, index) => {
            return (
              <li key={index}>
                <Link href={`#${item.title.toLowerCase()}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default Nav;
