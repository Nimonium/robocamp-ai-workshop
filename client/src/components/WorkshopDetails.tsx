import { workshopDetails } from '../data/content';

export default function WorkshopDetails() {
  return (
    <section className="bg-surface-container-low py-24 px-margin-mobile md:px-margin-desktop" id="workshops">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter">
          {workshopDetails.map((detail, index) => {
            const isPrimary = detail.color === 'primary';
            const bgClass = isPrimary ? 'bg-primary-container/20' : 'bg-secondary-container/20';
            const textClass = isPrimary ? 'text-primary' : 'text-secondary';
            
            return (
              <div key={index} className="bg-pure-white p-8 rounded-xl shadow-sm border border-outline-variant/20 flex flex-col items-center text-center gap-2 hover:scale-105 transition-transform">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${bgClass}`}>
                  <span className={`material-symbols-outlined text-3xl ${textClass}`}>{detail.icon}</span>
                </div>
                <p className="font-label-bold text-caption text-on-surface-variant uppercase tracking-widest">{detail.label}</p>
                <p className="font-display-lg text-headline-md text-primary">{detail.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
