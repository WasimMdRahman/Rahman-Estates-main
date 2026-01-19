'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Magnetic from "./animation/Magnetic";

const FilterBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [beds, setBeds] = useState('');
  const [baths, setBaths] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (beds) params.set('beds', beds.replace('+', ''));
    if (baths) params.set('baths', baths.replace('+', ''));
    if (propertyType) params.set('type', propertyType);
    if (priceRange) {
        const [min, max] = priceRange.split('-');
        if (min) params.set('minPrice', min);
        if (max && max !== "100000000") params.set('maxPrice', max);
    }
    
    router.push(`/listings?${params.toString()}`);
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="relative z-20 -mt-16 mb-20"
      suppressHydrationWarning
    >
      <form 
        onSubmit={handleSearch}
        className="p-6 bg-background/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/30"
      >
        <div className="flex gap-4 items-center">
          <Input
            type="text"
            placeholder="Search by location, address, agent..."
            className="h-14 text-base bg-background/50 border-white/10 focus-visible:ring-primary flex-grow"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Magnetic>
            <Button type="submit" size="lg" className="h-14 text-lg font-bold rounded-md flex items-center gap-2 px-8">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </Button>
          </Magnetic>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div>
            <Select onValueChange={setBeds} value={beds}>
              <SelectTrigger className="h-14 text-base bg-background/50 border-white/10">
                <SelectValue placeholder="Beds" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="6">6+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select onValueChange={setBaths} value={baths}>
              <SelectTrigger className="h-14 text-base bg-background/50 border-white/10">
                <SelectValue placeholder="Baths" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select onValueChange={setPropertyType} value={propertyType}>
              <SelectTrigger className="h-14 text-base bg-background/50 border-white/10">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="mansion">Mansion</SelectItem>
                <SelectItem value="loft">Loft</SelectItem>
                <SelectItem value="retreat">Retreat</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="eco-home">Eco Home</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select onValueChange={setPriceRange} value={priceRange}>
              <SelectTrigger className="h-14 text-base bg-background/50 border-white/10">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-2000000">Up to $2M</SelectItem>
                <SelectItem value="2000000-4000000">$2M - $4M</SelectItem>
                <SelectItem value="4000000-6000000">$4M - $6M</SelectItem>
                <SelectItem value="6000000-8000000">$6M - $8M</SelectItem>
                <SelectItem value="8000000-100000000">$8M+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default FilterBar;
