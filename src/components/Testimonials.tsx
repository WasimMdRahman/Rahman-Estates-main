'use client';

import * as React from 'react';
import Image from "next/image";
import { testimonials } from "@/lib/data";
import { placeholderImages } from "@/lib/placeholder-images.json";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "./animation/Reveal";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from '@/lib/utils';

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-20" id="testimonials">
      <div className="text-center mb-12">
        <Reveal>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">What Our Clients Say</h2>
        </Reveal>
        <Reveal>
          <p className="text-muted-foreground mt-2">Discover the experiences of those who found their aether with us.</p>
        </Reveal>
      </div>

      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-4 items-stretch">
          {testimonials.map((testimonial, index) => {
            const image = placeholderImages.find(p => p.id === testimonial.imageId);
            return (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                 <div
                  className={cn(
                    "p-1 transition-all duration-500 ease-out h-full",
                    current === index ? "scale-100" : "scale-90 opacity-70"
                  )}
                  onClick={() => api?.scrollTo(index)}
                >
                  <Card className="bg-card/80 border-white/10 backdrop-blur-sm h-full flex flex-col cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full mb-4 border-2 border-primary/50"
                        />
                      )}
                      <p className="text-lg font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground mb-4">{testimonial.location}</p>
                      <div className="flex gap-1 text-primary mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5" fill="currentColor" />)}
                      </div>
                      <blockquote className="text-foreground/80 italic flex-grow flex items-center justify-center">
                        <div>&ldquo;{testimonial.quote}&rdquo;</div>
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10 h-10 w-10" />
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10 h-10 w-10" />
      </Carousel>
    </section>
  );
};

export default Testimonials;
