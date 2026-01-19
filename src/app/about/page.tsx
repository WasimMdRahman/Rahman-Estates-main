import Reveal from '@/components/animation/Reveal';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Rahman Estates',
    description: 'Discover the legacy and philosophy of Rahman Estates, a leader in luxury real estate.',
};

const AboutPage = () => {
    const aboutImage = placeholderImages.find(p => p.id === 'hero-1');

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <h1 className="font-headline text-5xl md:text-7xl font-bold mb-8 text-center">The Legacy of Rahman Estates</h1>
                </Reveal>

                {aboutImage && (
                    <Reveal delay={0.1}>
                        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-black/30 border border-white/10">
                            <Image
                                src={aboutImage.imageUrl}
                                alt="Modern architecture representing Rahman Estates"
                                fill
                                className="object-cover"
                            />
                             <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent" />
                        </div>
                    </Reveal>
                )}

                <div className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground space-y-8" style={{
                  // @ts-ignore
                  '--tw-prose-body': 'hsl(var(--muted-foreground))',
                  '--tw-prose-headings': 'hsl(var(--foreground))',
                  '--tw-prose-lead': 'hsl(var(--foreground))',
                  '--tw-prose-bold': 'hsl(var(--foreground))',
                  '--tw-prose-counters': 'hsl(var(--muted-foreground))',
                  '--tw-prose-bullets': 'hsl(var(--border))',
                  '--tw-prose-hr': 'hsl(var(--border))',
                  '--tw-prose-quotes': 'hsl(var(--foreground))',
                  '--tw-prose-quote-borders': 'hsl(var(--border))',
                  '--tw-prose-captions': 'hsl(var(--muted-foreground))',
                  '--tw-prose-code': 'hsl(var(--foreground))',
                  '--tw-prose-pre-code': 'hsl(var(--foreground))',
                  '--tw-prose-pre-bg': 'hsl(var(--muted))',
                  '--tw-prose-th-borders': 'hsl(var(--border))',
                  '--tw-prose-td-borders': 'hsl(var(--border))',
                }}>
                    <Reveal delay={0.2}>
                        <p className="text-2xl !text-foreground !mb-12 text-center leading-relaxed">
                            For over half a century, the name Rahman has been synonymous with more than just property; it represents a heritage of trust, a commitment to unparalleled excellence, and the art of curating the world’s most exceptional living experiences. We are not merely brokers of homes; we are custodians of legacy.
                        </p>
                    </Reveal>

                    <Reveal>
                        <h2 className="font-headline text-4xl text-primary !mt-24 !mb-6">Our Guiding Philosophy</h2>
                        <p>At the core of Rahman Estates lies a simple yet profound philosophy: to approach real estate not as a transaction, but as a calling. We believe that a home is the most significant acquisition one can make—a sanctuary for family, a canvas for a life well-lived, and a cornerstone for a lasting legacy. This belief dictates our every action. Our approach is built upon three pillars: unwavering integrity, absolute discretion, and a relentless pursuit of perfection. We understand the magnitude of the trust our clients place in us, and we honor that trust by operating with a level of transparency and ethical rigor that is rare in our industry. We handle every interaction with the utmost confidentiality, recognizing the importance of privacy for our discerning clientele. And in our quest for perfection, we leave no stone unturned, ensuring that every property we represent and every service we provide meets a standard of quality that is simply without compromise.</p>
                    </Reveal>

                    <Reveal>
                         <p>This philosophy extends beyond our client relationships to the very properties we choose to represent. We see each home as a work of art, a unique expression of its environment, its architecture, and the vision of its creator. We are drawn to properties that tell a story, that possess a soul. Whether it is a sprawling oceanfront estate that commands the horizon, a penthouse that touches the sky, or a historic mansion steeped in tradition, we seek out residences that are not just luxurious, but are also deeply and authentically inspiring. Our curated portfolio is a testament to this discerning eye, a collection of homes that are as unique and extraordinary as the individuals who inhabit them. We are not interested in the merely expensive; we are captivated by the truly exceptional. This distinction is what defines the Rahman Estates portfolio and sets us apart in a world of endless listings. We understand that luxury is not just about price, but about the intangible qualities that elevate a property from a structure to a home, from a possession to a legacy.</p>
                    </Reveal>

                    <Reveal>
                        <h2 className="font-headline text-4xl text-primary !mt-24 !mb-6">A Legacy Forged in Vision</h2>
                        <p>The story of Rahman Estates begins not in a boardroom, but with the vision of one man, Mr. Elias Rahman. In the mid-20th century, Mr. Rahman, a connoisseur of art, architecture, and craftsmanship, recognized a gap in the real estate market. He saw that the world's most affluent individuals were served by brokers who understood value but often missed the nuances of true luxury—the emotional resonance, the architectural significance, and the enduring legacy of a truly great home. With a modest office but an immense passion, he founded Rahman & Sons with a mission to serve a clientele that shared his appreciation for the exceptional. His first major success was the discreet sale of a historic Georgetown townhouse to a foreign diplomat, a transaction handled with such finesse and integrity that it cemented his reputation as a trusted advisor to the global elite. Word of his unique approach spread through quiet conversations in the world’s most exclusive circles.</p>
                        <p>The early years were defined by this commitment to personalized service. Mr. Rahman did not advertise; his business grew organically, built on the strength of his relationships and the unimpeachable quality of his work. He travelled the world, not just to find properties, but to understand cultures, to appreciate different styles of architecture, and to build a global network of contacts. He believed that to truly serve an international clientele, one must have a global perspective. From the sun-drenched coasts of the Mediterranean to the bustling metropolises of Asia, he forged connections that would become the bedrock of the firm's future success. His son, David Rahman, joined the firm in the 1980s, bringing with him a modern perspective and a keen understanding of a new generation of wealth. David recognized the power of technology to enhance, but not replace, the personal touch that defined the company. He oversaw the expansion into key markets like Los Angeles and Miami, anticipating the shifting centers of luxury and influence.</p>
                        <p>Under David’s leadership, the firm, now rebranded as Rahman Estates, embraced innovation while holding fast to its founding principles. He introduced sophisticated market analysis and data-driven insights, providing clients with a powerful advantage in their real estate decisions. Yet, he ensured that every client still received the same bespoke, one-on-one attention that his father had pioneered. The firm grew, but it never became a corporation in the soulless sense of the word. It remained a family-led enterprise, a boutique firm by design, where every agent was handpicked and personally mentored to embody the Rahman ethos. This careful cultivation of talent ensured that as the company expanded its reach, it never diluted its essence. The transition to the third generation, with Elias’s granddaughter, Anjali Rahman, taking the helm as CEO, marked the beginning of a new chapter. Anjali, with her background in technology and finance, has propelled Rahman Estates into the digital age, providing an even more personalized and efficient client experience, all while honoring the timeless values of her grandfather.</p>
                    </Reveal>

                    <Reveal>
                        <h2 className="font-headline text-4xl text-primary !mt-24 !mb-6">The Art of Curation</h2>
                        <p>What makes a property a Rahman Estates property? The answer lies in a meticulous and deeply considered curation process that goes far beyond checklists and market values. Our acquisitions team, a group of seasoned experts with decades of experience, evaluates thousands of properties each year. Only a minute fraction, less than one percent, are deemed worthy of inclusion in our portfolio. This is not elitism; it is a profound respect for the concept of "home" and a commitment to offering our clients nothing but the absolute best. Our criteria are as multifaceted as the properties themselves. We begin with the fundamentals: location, quality of construction, and architectural integrity. A premier location is non-negotiable, whether it be a penthouse with panoramic views of Central Park, a beachfront compound in Malibu, or a tranquil estate in the Hollywood Hills. We scrutinize the build quality with an expert eye, looking for superior craftsmanship, the finest materials, and an attention to detail that speaks of a no-compromise approach to construction.</p>
                        <p>But our evaluation does not stop there. We seek properties with a distinct and compelling character—what we call the "soul" of a home. This could be the rich history of a landmarked townhouse, the innovative design of an architectural marvel, or the serene harmony of a home perfectly integrated with its natural surroundings. We consider the flow of the space, the quality of the light, and the overall feeling one gets when walking through the rooms. Does the home inspire? Does it offer a sense of peace and sanctuary? Does it have the potential to be the backdrop for a lifetime of cherished memories? These are the questions we ask. Furthermore, we consider the lifestyle a property enables. An urban penthouse must offer not just luxury, but also convenience and access to the cultural heart of the city. A coastal retreat must provide not just ocean views, but a genuine connection to the sea. A country estate must offer not just land, but true privacy and a sense of escape. It is this holistic understanding of luxury living that guides our selection process, ensuring that every property in the Rahman Estates portfolio is more than just a collection of rooms; it is a gateway to an extraordinary life.</p>
                    </Reveal>
                    
                    <Reveal>
                        <h2 className="font-headline text-4xl text-primary !mt-24 !mb-6">Bespoke Service, Global Reach</h2>
                        <p>Rahman Estates was founded on the principle of providing a service as exceptional as the properties we represent. Our commitment to a bespoke client experience is absolute. From the first consultation to the final closing and beyond, we provide a seamless, white-glove service tailored to the unique needs and desires of each individual. We begin by listening. We take the time to understand your aspirations, your lifestyle, and your vision for the future. We believe that finding the perfect home is a journey of discovery, and we act as your trusted guides every step of the way. Our team provides in-depth market analysis and strategic advice, empowering you to make informed decisions with confidence. Leveraging our extensive global network, we can provide access to off-market properties and exclusive opportunities that are simply unavailable to the general public. </p>
                        <p>Our reach is truly global. With flagship offices in the world's most desirable luxury hubs—including New York, Los Angeles, Miami, San Francisco, and Chicago—and an extensive network of partners across Europe and Asia, we offer our clients a world of possibilities. Whether you are seeking a chic pied-à-terre in Paris, a modern villa on the shores of Lake Como, or a private island in the Caribbean, our international team has the expertise and connections to make it happen. We understand the complexities of international transactions and provide comprehensive support to ensure a smooth and successful process, from navigating local regulations to coordinating with legal and financial experts across borders. For sellers, our global marketing platform ensures that your property is showcased to a qualified audience of high-net-worth individuals around the world. We utilize a sophisticated blend of digital marketing, targeted public relations, and private network outreach to connect your home with the right buyer, no matter where they are located. At Rahman Estates, the world is not just our market; it is our community. We are dedicated to building lasting relationships with our clients, serving as their lifelong advisors in all matters of luxury real estate, wherever their journey may take them.</p>
                    </Reveal>

                    <Reveal>
                        <h2 className="font-headline text-4xl text-primary !mt-24 !mb-6">The Future of Legacy</h2>
                        <p>As we look to the future, Rahman Estates remains firmly committed to the values that have defined our past. We will continue to honor the legacy of Elias Rahman by placing integrity, discretion, and excellence at the forefront of everything we do. At the same time, we embrace the spirit of innovation that has allowed us to evolve and thrive for three generations. We are pioneering the use of data science to provide our clients with unprecedented market insights. Our proprietary analysis tools identify trends and opportunities, giving our clients a distinct competitive edge. Our immersive virtual tours and digital staging technologies allow buyers to experience properties from anywhere in the world with stunning realism. We believe that technology should be a tool to enhance, not replace, the human element of our business. It allows our agents to be more efficient, more informed, and more responsive, freeing them to focus on what they do best: building relationships and providing expert guidance.</p>
                        <p>Our vision for the future is to continue to redefine the luxury real estate experience. We are expanding our services to include comprehensive lifestyle management, from property management and interior design consultations to art advisory and relocation services. We aim to be a single, trusted resource for all our clients' needs related to luxury living. Ultimately, our mission remains unchanged: to help our clients find not just a house, but a home that reflects their achievements and aspirations. A home that will be the foundation of their own legacy. We are honored to be a part of that journey. The foundation of your legacy is not just a tagline; it is our solemn promise. Welcome to Rahman Estates.</p>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
