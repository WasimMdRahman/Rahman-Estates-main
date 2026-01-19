
'use client';

import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import type { Property } from '@/lib/types';
import PropertyCard from '@/components/PropertyCard';
import Reveal from '@/components/animation/Reveal';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function AccountPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/signin');
    }
  }, [user, isUserLoading, router]);

  const likedPropertiesRef = useMemoFirebase(() => {
    if (!user) return null;
    return collection(firestore, `users/${user.uid}/likedProperties`);
  }, [firestore, user]);

  const { data: likedProperties, isLoading: likedPropertiesLoading } = useCollection<Property>(likedPropertiesRef);

  if (isUserLoading || !user) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
           <Reveal>
             <h1 className="font-headline text-4xl md:text-6xl font-bold mb-8">My Liked Properties</h1>
           </Reveal>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Skeleton className="h-[550px] w-full rounded-2xl" />
              <Skeleton className="h-[550px] w-full rounded-2xl" />
              <Skeleton className="h-[550px] w-full rounded-2xl" />
           </div>
        </div>
      </div>
    );
  }


  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-8">My Liked Properties</h1>
        </Reveal>

        {(likedPropertiesLoading) && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Skeleton className="h-[550px] w-full rounded-2xl" />
              <Skeleton className="h-[550px] w-full rounded-2xl" />
              <Skeleton className="h-[550px] w-full rounded-2xl" />
            </div>
        )}

        {(!likedPropertiesLoading && likedProperties && likedProperties.length > 0) ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {likedProperties.map((property: Property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          !likedPropertiesLoading && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">You haven&apos;t liked any properties yet.</p>
              <p className="text-muted-foreground mt-2">Start browsing and click the heart icon to save your favorites.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
