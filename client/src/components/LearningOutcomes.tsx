import { learningOutcomes } from '../data/content';

export default function LearningOutcomes() {
  return (
    <section id="blog" className="py-24 px-margin-mobile md:px-margin-desktop bg-background">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-display-lg text-headline-md text-center text-ink-blue mb-12">What Your Child Will Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {learningOutcomes.map((outcome, index) => {
            let bgClass = '';
            let textClass = '';
            
            if (outcome.color === 'primary') {
              bgClass = 'bg-primary-container/10';
              textClass = 'text-primary';
            } else if (outcome.color === 'secondary') {
              bgClass = 'bg-secondary-container/20';
              textClass = 'text-secondary';
            } else {
              bgClass = 'bg-tertiary-fixed/30';
              textClass = 'text-tertiary';
            }
            
            return (
              <div 
                key={index} 
                className={`flex items-center gap-4 p-6 bg-pure-white rounded-xl shadow-sm border border-outline-variant/20 hover:shadow-md transition-all ${
                  outcome.span ? 'md:col-span-2 lg:max-w-md lg:mx-auto w-full' : ''
                }`}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${bgClass}`}>
                  <span className={`material-symbols-outlined ${textClass}`}>{outcome.icon}</span>
                </div>
                <p className="font-body-md text-on-surface">{outcome.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
