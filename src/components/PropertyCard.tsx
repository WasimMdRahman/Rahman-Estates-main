'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { Property } from '@/lib/types';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { Bath, Bed, MapPin, Maximize } from 'lucide-react';
import LikeButton from './LikeButton';
import Magnetic from './animation/Magnetic';
import { Button } from './ui/button';

const PropertyCard = ({ property }: { property: Property }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const image = placeholderImages.find(p => p.id === property.imageIds[0]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="relative w-full rounded-2xl bg-white/5 border border-white/10 shadow-2xl shadow-black/20"
    >
      <div style={{ transform: 'translateZ(20px)' }} className="p-4">
        <div className="relative h-[400px] rounded-lg overflow-hidden group">
          <motion.div
            className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glowX.get()} ${glowY.get()}, hsla(273, 62%, 46%, 0.3), transparent 50%)`,
            }}
          />
          {image && (
            <Image
              src={image.imageUrl}
              alt={property.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          )}
          <div className="absolute top-3 right-3 z-20">
            <LikeButton propertyId={property.id} propertyData={property} />
          </div>
        </div>

        <div className="pt-4">
          <div className="flex justify-between items-start">
            <h3 className="font-headline text-2xl font-bold text-foreground">
              {property.title}
            </h3>
            <p className="text-2xl font-bold text-primary">
              ${(property.price / 1_000_000).toFixed(1)}M
            </p>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
            <MapPin className="w-4 h-4" /> {property.location}
          </p>

          <div className="flex items-center justify-start gap-4 text-muted-foreground mt-4 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              <Bed className="w-5 h-5" />
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5" />
              <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize className="w-5 h-5" />
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>
          
          <div className="mt-6">
            <Magnetic>
              <Link href={`/property/${property.id}`} passHref>
                <Button className="w-full font-bold rounded-full" size="lg">
                  View Property
                </Button>
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
