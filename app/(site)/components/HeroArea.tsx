import Image from 'next/image';
import React from 'react';
import profilePic from '../../assets/profile.jpeg';
import Nav from './Nav';
import { FaJediOrder } from 'react-icons/fa';

type HeroAreaProps = {};

const HeroArea: React.FC<HeroAreaProps> = () => {
  return (
    <div id='home'>
      <Nav />
      <div className='header__index'>
        <div className='header__wrapper'>
          <div className='page-header'>
            <Image
              src={profilePic}
              alt='Clayton Dewey'
              className='header__image-profile'
            />
            <h1>Hi, I&apos;m Clayton!</h1>
            <p className='subhead'>Front End Developer</p>
            <div className='button-box'>
              <button className='btn btn__primary'>My Portfolio</button>
              <button className='btn btn__primary'>Hire Me</button>
            </div>
            <p className='text-center'>
              <FaJediOrder className='fa-jedi-order ' />
            </p>
          </div>
          <a href='#about' className='scroll-down'>
            <div className='visually-hidden'>About Me</div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default HeroArea;
