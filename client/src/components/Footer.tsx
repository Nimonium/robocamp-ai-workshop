export default function Footer() {
  return (
    <>
      {/* Wave Divider */}
      <div className="relative w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-16 md:h-24 fill-surface-container" data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,91.26,117.98,88.59,176,85.07,242.3,81,311.16,70.52,321.39,56.44Z"></path>
        </svg>
      </div>
      <footer className="bg-surface-container dark:bg-inverse-surface py-12 px-margin-mobile md:px-margin-desktop w-full rounded-t-xl" id="contact">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-gutter text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-base">
              <span className="font-display-lg text-headline-md text-primary">RoboCamp AI</span>
              <p className="font-body-md text-body-md text-secondary dark:text-secondary-fixed max-w-xs">
                © 2024 RoboCamp AI Summer Workshop. Building the future, one robot at a time!
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-gutter">
              <a className="text-on-surface-variant hover:text-primary transition-all font-label-bold text-label-bold" href="#">Home</a>
              <a className="text-on-surface-variant hover:text-primary transition-all font-label-bold text-label-bold" href="#workshops">Workshops</a>
              <a className="text-on-surface-variant hover:text-primary transition-all font-label-bold text-label-bold" href="#faq">FAQ</a>
              <a className="text-on-surface-variant hover:text-primary transition-all font-label-bold text-label-bold" href="#contact">Contact</a>
            </div>
            <div className="flex flex-col items-center md:items-end gap-base">
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-pure-white border border-outline-variant flex items-center justify-center hover:bg-primary-container/20 transition-all" href="#" aria-label="Share">
                  <span className="material-symbols-outlined text-primary text-xl">share</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-pure-white border border-outline-variant flex items-center justify-center hover:bg-primary-container/20 transition-all" href="#" aria-label="Instagram">
                  <span className="material-symbols-outlined text-primary text-xl">camera</span>
                </a>
              </div>
              <div className="flex gap-4 mt-2">
                <a className="text-[12px] text-on-surface-variant hover:text-primary underline transition-all" href="#">Privacy Policy</a>
                <a className="text-[12px] text-on-surface-variant hover:text-primary underline transition-all" href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
