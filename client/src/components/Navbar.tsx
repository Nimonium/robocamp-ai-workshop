import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 w-full bg-pure-white dark:bg-surface-container-lowest shadow-[0_20px_40px_-15px_rgba(30,99,143,0.1)] transition-all">
      <div className="flex items-center">
        <span className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary dark:text-primary-fixed-dim tracking-tight">RoboCamp AI</span>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-gutter">
        <a className="font-label-bold text-label-bold text-primary dark:text-primary-fixed border-b-4 border-tertiary-container pb-1" href="#">Home</a>
        <a className="font-label-bold text-label-bold text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors hover:scale-105 duration-200" href="#workshops">Workshops</a>
        <a className="font-label-bold text-label-bold text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors hover:scale-105 duration-200" href="#blog">Blog</a>
        <a className="font-label-bold text-label-bold text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors hover:scale-105 duration-200" href="#faq">FAQ</a>
        <a className="font-label-bold text-label-bold text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors hover:scale-105 duration-200" href="#contact">Contact</a>
      </nav>

      <div className="flex items-center gap-base">
        <button className="px-8 py-3 bg-secondary text-on-secondary rounded-full font-label-bold text-label-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-secondary/20">Login</button>
        <button 
          className="md:hidden p-2 text-on-surface-variant"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-pure-white shadow-lg flex flex-col p-4 gap-4 md:hidden border-t border-outline-variant/20 z-40">
          <a className="font-label-bold text-label-bold text-primary" href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a className="font-label-bold text-label-bold text-on-surface-variant" href="#workshops" onClick={() => setIsOpen(false)}>Workshops</a>
          <a className="font-label-bold text-label-bold text-on-surface-variant" href="#blog" onClick={() => setIsOpen(false)}>Blog</a>
          <a className="font-label-bold text-label-bold text-on-surface-variant" href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
          <a className="font-label-bold text-label-bold text-on-surface-variant" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
