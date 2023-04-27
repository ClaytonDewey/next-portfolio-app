import Image from 'next/image';
import React from 'react';
import profilePic from '../../assets/profile.jpeg';

type HeroAreaProps = {};

const HeroArea: React.FC<HeroAreaProps> = () => {
  return (
    <section>
      <Image src={profilePic} alt='Clayton Dewey' />
      <h3>Hi, I&apos;m Clayton!</h3>
      <p>Front End Developer</p>

      <div>
        <button>My Portfolio</button>
        <button>Hire Me</button>
      </div>
    </section>
  );
};
export default HeroArea;
