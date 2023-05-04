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
