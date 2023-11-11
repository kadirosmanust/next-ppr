import React from 'react';

type SkeletonProps = {};

const Skeleton = ({}: SkeletonProps): JSX.Element => {
  return (
    <div className="flex h-6 items-center justify-center rounded-lg bg-white px-3 text-stone-900">
      Loading...
    </div>
  );
};

export default Skeleton;
