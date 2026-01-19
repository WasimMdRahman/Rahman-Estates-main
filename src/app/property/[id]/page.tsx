'use client';

import { properties } from "@/lib/data";
import { placeholderImages } from "@/lib/placeholder-images.json";
import type { Property } from "@/lib/types";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Bath, Bed, Building, CheckCircle, MapPin, Maximize } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import Magnetic from "@/components/animation/Magnetic";
import { Button } from "@/components/ui/button";

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const property: Property | undefined = properties.find(p => p.id === params.id);

  if (!property) {
    notFound();
  }

  const mainImage = placeholderImages.find(p => p.id === property.imageIds[0]);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.location)}`;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
            <Magnetic>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => router.back()}
                    className="rounded-full h-12 w-12 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10"
                    aria-label="Go back"
                >
                    <ArrowLeft className="h-6 w-6" />
                </Button>
            </Magnetic>
        </div>
        <Reveal>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-2">{property.title}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex items-center gap-2 text-lg text-muted-foreground mb-8">
            <MapPin className="w-5 h-5" />
            <span>{property.location}</span>
          </div>
        </Reveal>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-black/30 border border-white/10">
          {mainImage && (
            <Image
              src={mainImage.imageUrl}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <Reveal>
              <h2 className="font-headline text-3xl font-bold mb-4">Property Details</h2>
              <p className="text-muted-foreground leading-relaxed">{property.description}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h3 className="font-headline text-2xl font-bold mb-6">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <div className="sticky top-28 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Reveal>
                <p className="font-headline text-4xl font-bold text-primary mb-6">
                  ${property.price.toLocaleString()}
                </p>
              </Reveal>

              <div className="space-y-4 text-lg">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground"><Bed className="w-5 h-5" /> Beds</span>
                  <span className="font-bold">{property.beds}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground"><Bath className="w-5 h-5" /> Baths</span>
                  <span className="font-bold">{property.baths}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground"><Maximize className="w-5 h-5" /> Sqft</span>
                  <span className="font-bold">{property.sqft.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground"><Building className="w-5 h-5" /> Type</span>
                  <span className="font-bold">Villa</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <Magnetic>
                    <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                        <Button variant="outline" size="lg" className="w-full text-lg h-14 rounded-full font-bold">
                            Show on Map
                        </Button>
                    </a>
                </Magnetic>
                <Magnetic>
                  <Button size="lg" className="w-full text-lg h-14 rounded-full font-bold">
                    Schedule a Viewing
                  </Button>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
