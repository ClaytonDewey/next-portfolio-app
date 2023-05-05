import React from 'react';
import '../app/sass/main.scss';
import errorImg from '../app/assets/nothing_to_see.gif';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/app/(site)/components/Nav';

type Custom404Props = {};

const Custom404: React.FC<Custom404Props> = () => {
  return (
    <>
      <Nav />
      <div className='error text-center'>
        <h1>404 Page Not Found</h1>
        <div>
          <p>The page you were looking for doesn&apos;t exist.</p>
          <p>You may have mistyped the address or the page may have moved.</p>
          <Image src={errorImg} alt='Nothing to see here.' className='mt-2' />
          <p className='mt-2'>
            <Link href='/' className='btn btn__primary'>
              Return to Homepage
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Custom404;

/* 
  Resources:
  https://greensock.com/react/
  https://codepen.io/collection/ANaWkM/7a84da7eadcea7b5a4ed8f8430c597fd
  https://github.com/imakewebthings/waypoints
  https://jacekjeznach.com/
  https://javascript.plainenglish.io/7-amazing-things-pure-css-can-do-for-you-b57f5b85cacd
  https://javascript.plainenglish.io/7-practical-css-tips-c6e4d77f4c40
  https://medium.com/stackanatomy/modern-css-selectors-4d6197e05f0f
  https://medium.com/@mateofainalonso/get-hired-with-these-7-projects-cf97c623ae93
  https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937
  https://javascript.plainenglish.io/8-cool-useful-javascript-coding-techniques-that-you-should-use-750835caaf01
  https://javascript.plainenglish.io/solid-portfolio-website-for-developers-29a86aaefbe4
*/
