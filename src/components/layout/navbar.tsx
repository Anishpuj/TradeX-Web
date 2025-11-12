import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-transparent z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-black">TradeX<span className="text-green-500">.</span></div>
        <div className="hidden md:flex space-x-6">
          <Link href="#features" className="text-black hover:text-black transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-black hover:text-black transition-colors">Algorithm</Link>
          <Link href="#pricing" className="text-black hover:text-black transition-colors">Brand Kit</Link>
          <Link href="#contact" className="text-black hover:text-black transition-colors">Pitch Deck</Link>
          <Link href="#contact" className="text-black hover:text-black transition-colors">Join Us</Link>
          <Link href="#contact" className="text-black hover:text-black transition-colors">Contact Us</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="text-black border-black hover:bg-black/10">Sign In</Button>
        </div>
      </div>
    </nav>
  );
}
