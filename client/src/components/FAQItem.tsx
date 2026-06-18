import { useRef } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`faq-item bg-pure-white rounded-lg shadow-sm border border-outline-variant/20 overflow-hidden transition-all duration-300 ${isOpen ? 'is-open' : ''}`}>
      <button 
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group" 
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-headline-md text-body-lg text-ink-blue group-hover:text-primary transition-colors">{question}</span>
        <span className="material-symbols-outlined toggle-icon text-primary transition-transform">
          {isOpen ? 'remove' : 'add'}
        </span>
      </button>
      <div 
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight || 500}px` : '0px' }}
      >
        <div ref={contentRef} className="p-6 pt-0 font-body-md text-on-surface-variant border-t border-outline-variant/10">
          {answer}
        </div>
      </div>
    </div>
  );
}
