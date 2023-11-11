import Client from '@/components/Client';
import Skeleton from '@/components/Skeleton';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24 text-lg font-semibold">
      <Suspense fallback={<Skeleton />}>
        <Client text="Head Client" delay={3000} />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Client text="Head Client" delay={2000} />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Client text="Head Client" delay={1000} />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Client text="Head Client" delay={500} />
      </Suspense>
    </main>
  );
}
