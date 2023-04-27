import React from 'react';
import { navbar } from '../content/navbar';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <h1>Clayton Dewey</h1>
      <div className='navigation'>
        {navbar.map((item, index) => {
          return <p key={index}>{item.title}</p>;
        })}
      </div>
    </header>
  );
};
export default Header;
