import Image from "next/image";
import Link from "next/link";
import { placeholderImages } from "@/lib/placeholder-images.json";
import FilterBar from "@/components/FilterBar";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/animation/Reveal";
import { ArrowRight } from "lucide-react";
import Magnetic from "@/components/animation/Magnetic";
import { Button } from "@/components/ui/button";
import FeaturedPropertiesCarousel from "@/components/FeaturedPropertiesCarousel";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === 'hero-1');

  return (
    <div className="container mx-auto px-4">
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center py-20">
        <div className="absolute inset-0">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover opacity-10"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <Reveal>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/70" style={{ paddingBottom: '0.2em' }}>
              Your Legacy Awaits
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
              Experience the pinnacle of luxury living. Rahman Estates curates the world&apos;s most extraordinary properties, just for you.
            </p>
          </Reveal>
          <Magnetic>
            <Button size="lg" className="rounded-full font-bold text-lg px-8 py-6 group" suppressHydrationWarning>
              Explore Listings
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Magnetic>
        </div>
      </section>

      <FilterBar />

      <section className="py-20 text-center">
        <div className="max-w-5xl mx-auto">
            <Reveal>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">A Heritage of Trust</h2>
            </Reveal>
            <Reveal delay={0.1}>
                <p className="text-3xl text-muted-foreground mb-8 leading-relaxed">
                    For over half a century, the name Rahman has been synonymous with more than just property; it represents a heritage of trust, a commitment to unparalleled excellence, and the art of curating the world’s most exceptional living experiences. We are not merely brokers of homes; we are custodians of legacy.
                </p>
            </Reveal>
            <Reveal delay={0.2}>
                <Magnetic>
                    <Link href="/about" passHref>
                        <Button variant="outline" className="rounded-full font-bold text-lg px-8 py-6 group">
                            Discover Our Story
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </Magnetic>
            </Reveal>
        </div>
      </section>

      <section className="py-20" id="listings">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="font-headline text-4xl md:text-5xl font-bold" style={{ paddingTop: '0.2em', paddingBottom: '0.2em' }}>Our Top Properties</h2>
          </Reveal>
          <Reveal>
            <p className="text-muted-foreground mt-2">Handpicked selection of premier properties.</p>
          </Reveal>
        </div>

        <FeaturedPropertiesCarousel />
      </section>

      <Testimonials />

      <section className="py-20" id="contact">
        <div className="text-center mb-12">
            <Reveal>
                <h2 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h2>
            </Reveal>
            <Reveal>
                <p className="text-muted-foreground mt-2">Have a question or a property in mind? We&apos;d love to hear from you.</p>
            </Reveal>
        </div>
        <div className="max-w-3xl mx-auto">
            <div className="bg-card/80 border-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl shadow-black/20">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="John Doe" className="bg-background/50 h-12" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="john.doe@example.com" className="bg-background/50 h-12"/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="Inquiry about property..." className="bg-background/50 h-12"/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="I'm interested in learning more about..." className="min-h-[150px] bg-background/50" />
                    </div>
                    <div className="text-center pt-4">
                        <Magnetic>
                            <Button type="submit" size="lg" className="font-bold rounded-full px-10 h-14 text-base">Send Message</Button>
                        </Magnetic>
                    </div>
                </form>
            </div>
        </div>
      </section>
    </div>
  );
}
