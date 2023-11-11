/* eslint-disable react/no-unescaped-entities */
import React, { Suspense } from 'react';
import Client from './Client';
import Skeleton from './Skeleton';

const Header = (): JSX.Element => {
  return (
    <header className="flex w-full items-center justify-between rounded-lg bg-stone-600 p-4">
      <div>This is test logo and it's server side rendered</div>
      <div>
        <Suspense fallback={<Skeleton />}>
          <Client text="Head Client" delay={3000} />
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
