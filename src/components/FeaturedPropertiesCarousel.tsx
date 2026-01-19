'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/lib/data";
import { placeholderImages } from "@/lib/placeholder-images.json";
import { Bath, Bed, Maximize } from "lucide-react";
import Magnetic from "@/components/animation/Magnetic";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { cn, formatNumber, formatCurrency } from '@/lib/utils';

const FeaturedPropertiesCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-7xl mx-auto"
    >
      <CarouselContent className="-ml-8">
        {properties.slice(0, 15).map((property, index) => {
          const image = placeholderImages.find(p => p.id === property.imageIds[0]);
          const pricePerSqft = property.price / property.sqft;

          return (
            <CarouselItem key={property.id} className="basis-[650px] pl-8">
              <div
                className={cn(
                  "p-1 transition-all duration-500 ease-out",
                  current === index ? "scale-100" : "scale-90 opacity-70"
                )}
                onClick={() => api?.scrollTo(index)}
              >
                <div className="bg-card border border-white/10 rounded-2xl shadow-2xl shadow-black/20 overflow-hidden group cursor-pointer w-[600px] mx-auto">
                  <div className="relative h-[400px] w-full overflow-hidden">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={property.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-headline text-xl font-bold text-foreground">{property.title}</h3>
                      <p className="text-xs text-muted-foreground">{property.location}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs border-y border-white/10 py-2">
                      <div className="flex flex-col items-center gap-1">
                        <Bed className="w-4 h-4 text-primary" />
                        <span className="font-bold">{property.beds} <span className="font-normal text-muted-foreground text-xs">Beds</span></span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Bath className="w-4 h-4 text-primary" />
                        <span className="font-bold">{property.baths} <span className="font-normal text-muted-foreground text-xs">Baths</span></span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Maximize className="w-4 h-4 text-primary" />
                        <span className="font-bold">{isMounted ? formatNumber(property.sqft) : property.sqft} <span className="font-normal text-muted-foreground text-xs">sqft</span></span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-muted-foreground">Price/sqft</span>
                        <span className="font-bold text-foreground">${isMounted ? pricePerSqft.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : pricePerSqft.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-baseline text-xl">
                        <span className="text-muted-foreground text-sm">Total Price</span>
                        <span className="font-bold text-primary font-headline">${isMounted ? formatNumber(property.price) : property.price}</span>
                      </div>
                    </div>

                    <Magnetic>
                      <Link href={`/property/${property.id}`} passHref>
                        <Button className="w-full font-bold rounded-full" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </Magnetic>
                  </div>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 -left-0 md:-left-8 z-10 h-10 w-10" />
      <CarouselNext className="absolute top-1/2 -translate-y-1/2 -right-0 md:-right-8 z-10 h-10 w-10" />
    </Carousel>
  );
};

export default FeaturedPropertiesCarousel;
