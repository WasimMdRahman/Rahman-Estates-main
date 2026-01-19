'use client';

import { useSearchParams } from 'next/navigation';
import { properties } from '@/lib/data';
import type { Property } from '@/lib/types';
import PropertyCard from '@/components/PropertyCard';
import Reveal from '@/components/animation/Reveal';
import { useMemo } from 'react';

export default function ListingsPage() {
  const searchParams = useSearchParams();
  
  const query = searchParams.get('q')?.toLowerCase() || '';
  const beds = searchParams.get('beds');
  const baths = searchParams.get('baths');
  const type = searchParams.get('type');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      const locationMatch = property.location.toLowerCase().includes(query) || property.title.toLowerCase().includes(query) || property.description.toLowerCase().includes(query);
      
      const bedsMatch = beds ? property.beds >= parseInt(beds) : true;
      const bathsMatch = baths ? property.baths >= parseInt(baths) : true;

      const typeMatch = type ? property.description.toLowerCase().includes(type.toLowerCase()) || property.title.toLowerCase().includes(type.toLowerCase()) : true;

      const priceMatch = 
        (!minPrice || property.price >= parseInt(minPrice)) &&
        (!maxPrice || property.price <= parseInt(maxPrice));

      return locationMatch && bedsMatch && bathsMatch && typeMatch && priceMatch;
    }).slice(0, 15);
  }, [query, beds, baths, type, minPrice, maxPrice]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-2">
            {query ? `Search Results` : 'All Listings'}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-muted-foreground mb-12">
            {filteredProperties.length > 0
              ? `Showing ${filteredProperties.length} matching properties.`
              : 'No properties found matching your criteria.'}
          </p>
        </Reveal>
        
        {filteredProperties.length > 0 ? (
          <div className="flex flex-col items-center gap-12">
            {filteredProperties.map((property: Property) => (
              <div key={property.id} className="w-full max-w-[800px]">
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">Try adjusting your search filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
