import { useState } from 'react';
import { submitEnquiry } from '../lib/api';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [errors, setErrors] = useState<{ name?: string, email?: string, phone?: string }>({});

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) newErrors.phone = 'Valid phone number is required (min 10 digits)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    if (!validate()) return;
    
    setLoading(true);
    const result = await submitEnquiry(formData);
    setLoading(false);

    if (result.success) {
      setMessage({ type: 'success', text: result.message || 'Successfully registered!' });
      setFormData({ name: '', email: '', phone: '' });
    } else {
      if (result.errors?.server) {
        setMessage({ type: 'error', text: result.errors.server });
      } else {
        setErrors(result.errors || {});
      }
    }
  };

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-background" id="registration">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-display-lg text-headline-md md:text-display-lg text-center text-ink-blue mb-16">Reserve Your Spot</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <img alt="Waving mascot robot" className="w-full max-w-md h-auto animate-float drop-shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSyIb3QjQUNTpQo_buiPONxPfVqPtFnk2ktkSW25-19kII2gC9l_N2jKuomgSWqVaqjEopSME83VR-hIU5O4Av-krKqo6bAY1f3fQ3drcOiaVoxmy1WtXWH7dEKqKQeRkeUBxPyRC-uNv7SnJHVR4tuKqOCy38_Zsod9n6B-OohMCbiO43ePQC1J6IF8xE3QkQL8DnXue5LEKGeP3vvEr1xkVQOdN87GPrGyVGUM6Vy7xsFuUuNz714XV7ZHItz-Ah88bq9Sh-LxDL" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-lg border border-outline-variant/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {message && (
                  <div className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-secondary-fixed text-secondary' : 'bg-error-container text-error'}`}>
                    {message.text}
                  </div>
                )}
                <div>
                  <label className="block font-label-bold text-label-bold text-on-surface mb-2" htmlFor="name">Parent's Name</label>
                  <input 
                    className={`w-full px-6 py-4 rounded-full border bg-surface-bright focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none ${errors.name ? 'border-error' : 'border-outline-variant'}`}
                    id="name" placeholder="John Doe" type="text"
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block font-label-bold text-label-bold text-on-surface mb-2" htmlFor="email">Email Address</label>
                  <input 
                    className={`w-full px-6 py-4 rounded-full border bg-surface-bright focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none ${errors.email ? 'border-error' : 'border-outline-variant'}`}
                    id="email" placeholder="john@example.com" type="email"
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block font-label-bold text-label-bold text-on-surface mb-2" htmlFor="phone">Phone Number</label>
                  <input 
                    className={`w-full px-6 py-4 rounded-full border bg-surface-bright focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none ${errors.phone ? 'border-error' : 'border-outline-variant'}`}
                    id="phone" placeholder="+91 98765 43210" type="tel"
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  {errors.phone && <p className="text-error text-sm mt-1">{errors.phone}</p>}
                </div>
                <button 
                  disabled={loading}
                  className="w-full btn-3d px-12 py-5 bg-primary-container text-on-primary-container border-primary rounded-full font-headline-md text-headline-md shadow-[0_15px_30px_-10px_rgba(245,154,25,0.4)] hover:scale-105 active:scale-95 transition-all mt-4 disabled:opacity-70 disabled:hover:scale-100 disabled:active:translate-y-0"
                  type="submit"
                >
                  {loading ? 'Submitting...' : 'Enroll Now'}
                </button>
                <p className="text-center font-caption text-caption text-on-surface-variant pt-2">
                  Secure your slot with a simple registration.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
