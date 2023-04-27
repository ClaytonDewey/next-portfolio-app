import Image from 'next/image';
import React from 'react';
import profilePic from '../../assets/profile.jpeg';
import Nav from './Nav';

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

            <div>
              <button>My Portfolio</button>
              <button>Hire Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroArea;
