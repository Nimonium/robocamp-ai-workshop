import { useState } from 'react';
import { faqItems } from '../data/content';
import FAQItem from './FAQItem';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low" id="faq">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-display-lg text-headline-md text-center text-ink-blue mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
