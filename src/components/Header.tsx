"use client";

import Link from "next/link";
import Reveal from "./animation/Reveal";
import { motion } from "framer-motion";
import { useUser, useAuth } from "@/firebase/provider";
import { signOut } from "firebase/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Skeleton } from "./ui/skeleton";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";

const AuthNav = () => {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  if (isUserLoading) {
    return <Skeleton className="h-10 w-24" />;
  }

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.photoURL ?? ""} alt={user.displayName ?? ""} />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.displayName || "User"}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => router.push('/account')}>
            My Liked Properties
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <ul className="flex items-center space-x-4">
      <li>
        <Link href="/signin" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Sign In</Link>
      </li>
      <li>
        <Link href="/signup" className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors">Sign Up</Link>
      </li>
    </ul>
  );
};


const Header = () => {
  return (
    <motion.header
      className="sticky top-0 z-40 w-full bg-background/30 backdrop-blur-lg border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="font-headline text-2xl font-bold tracking-wider">
            <Reveal>
              RAHMAN ESTATES
            </Reveal>
          </Link>
          <nav className="flex items-center space-x-8">
            <ul className="hidden md:flex items-center space-x-8">
              <li>
                <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#listings" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Listings</Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              </li>
            </ul>
            <AuthNav />
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
