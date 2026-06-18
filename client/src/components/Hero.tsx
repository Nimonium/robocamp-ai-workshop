export default function Hero() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center px-margin-mobile md:px-margin-desktop py-gutter max-w-container-max mx-auto overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center w-full">
        {/* Left: Content Column */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-gutter z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-container/30 text-on-secondary-container rounded-full border border-secondary-container/50">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>stars</span>
            <span className="font-label-bold text-label-bold">SUMMER 2026 NOW OPEN</span>
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-blue max-w-xl leading-tight">
            AI & Robotics <br />
            <span className="text-primary-container">Summer Workshop</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            An exciting 4-week online journey where kids aged 8–14 build, code, and bring robots to life!
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-gutter pt-base">
            <button 
              onClick={scrollToRegistration}
              className="btn-3d px-12 py-5 bg-primary-container text-on-primary-container border-primary rounded-xl font-headline-md text-headline-md shadow-[0_20px_40px_-15px_rgba(245,154,25,0.4)] hover:scale-105 active:scale-95 transition-all"
            >
              Enroll Now
            </button>
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex -space-x-3 mb-1">
                <div className="w-10 h-10 rounded-full border-2 border-pure-white bg-slate-200 overflow-hidden">
                  <img alt="Student 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYvodvFk31vblV11P50SNyVCRVoMz4gCWEs6SILqKBdNnosFRHbPP8TsrVqsJJOVwRUCI4ET9vzAvMNKxMRM5CRev7VaVtulXurmNI2elpwhgeQ40cFj7JKUqpUnZT6OAawUjjh3PUd8U3nKXUQbXCsaLVdE5yHDVe_kfREAmWGC2_e9AdFG5097FO5Rl0Zmee89FkdEo41bARfKpwnQhIQA7o9vmgb8NimU_sUdHg4ETo77OANubJDg-OESMr67406VLoRwJPYG0e" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-pure-white bg-slate-200 overflow-hidden">
                  <img alt="Student 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAjGpKRZVvBvSikzbqLbUuYQ2djzUNRjjlc_PXKqIroFxmCu1wRixTnMNEQi2JpGDaelGSg8jBUtNpXYZZbxc6w8sfr5Xmet3pitswvFpmqMB074st-oYiunOfgc_wev91Onz1S8mLKJKuSPBib4w5qjIY46cv_b62Fce_oRUgM1ufnNs_fG2uobmsOmGPH5VrTjCmWhh8MuN0MQm5FED84iyqx5NYqGemMUOkY9ky3GB1S_cAtg5eyvm3eBF31fyd-vCrB2kDlwss" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-pure-white bg-slate-200 overflow-hidden">
                  <img alt="Student 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC9PJU5edDzEN0CT0maL3ALsZ55vQyCepjHA03B9vD13Lcz31Xjs6vYFdxr_i-GREkLL6V3JcYWjLA_uc7iVevY3wWrtMBIcIgbuy9ryDHdoIOA4_VjUX11bZ6BflKqVjPcmA0NijOmpFQQWGHqVW2wieN7dZX42ZbSCIoEcqF6lOjnPG5B5vxbgdNAGTtOEKhdCL63NZ4Y9TwgKAdINgXEtEf-l5ZSAluDwSJaPFTksmeDLxjY-A_2ba_YYEb_gElDHlBngIT3Pd_" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-pure-white bg-secondary flex items-center justify-center text-on-secondary text-[12px] font-bold">
                  500+
                </div>
              </div>
              <span className="font-caption text-caption text-on-surface-variant italic">Join 500+ young engineers</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-base pt-gutter w-full lg:w-auto">
            <div className="flex items-center gap-base p-4 bg-pure-white rounded-lg border border-outline-variant/30 shadow-sm">
              <div className="bg-tertiary-fixed w-10 h-10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-on-tertiary-fixed">smart_toy</span>
              </div>
              <div className="text-left">
                <p className="font-label-bold text-label-bold text-on-surface">Build Bots</p>
                <p className="text-[12px] text-on-surface-variant">Real hardware kits</p>
              </div>
            </div>
            <div className="flex items-center gap-base p-4 bg-pure-white rounded-lg border border-outline-variant/30 shadow-sm">
              <div className="bg-secondary-fixed w-10 h-10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-fixed">code</span>
              </div>
              <div className="text-left">
                <p className="font-label-bold text-label-bold text-on-surface">Learn AI</p>
                <p className="text-[12px] text-on-surface-variant">Python &amp; Scratch</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right: Illustration Column */}
        <div className="order-1 lg:order-2 flex justify-center items-center relative animate-float">
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="w-[80%] h-[80%] bg-secondary-container/20 rounded-full blur-3xl"></div>
            <div className="absolute top-10 right-10 w-24 h-24 bg-tertiary-container/30 rounded-xl rotate-12 blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary-container/20 rounded-full blur-2xl"></div>
          </div>
          <div className="relative z-10 w-full max-w-2xl rounded-xl overflow-hidden p-gutter">
            <img alt="AI and Robotics Workshop Illustration" className="w-full h-auto object-contain drop-shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD52Txc19yTFLBSMTXcNVsirv3fvBJluYzicT6HirBJ0ZGRFii-Za3OE7fRx7VOqAcPDbfUIOmdMvTRQ1fXD0aoUJL4vuI-evUst_YVSzxYmIWQYeoS1qhAjn-_yw7yr-UNtiRLP9oCsoeBU6loNJmdtb6b0QTvCcAQY5hYKyYa-h8r9_DjZXQ4vhWMCevNFKGFeEY1njV5dVHEXR6KUIs3tZRv_lHfY_8r65p9bOTukejky64ID347LlDD89EcUXebD66SmoaUp4Um" />
          </div>
          <div className="absolute top-1/4 -right-4 lg:-right-8 bg-pure-white p-4 rounded-lg shadow-xl border border-outline-variant/20 z-20 flex items-center gap-3 animate-bounce">
            <div className="bg-error-container p-2 rounded-full">
              <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: '"FILL" 1' }}>timer</span>
            </div>
            <div className="text-left">
              <p className="font-label-bold text-label-bold text-on-surface">Limited Slots!</p>
              <p className="text-[10px] text-error font-bold uppercase tracking-widest">Only 12 left</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
