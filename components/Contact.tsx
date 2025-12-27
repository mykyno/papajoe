import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    childName: '',
    age: '',
    parentEmail: '',
    program: 'Kids (3-7 Jahre)',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ childName: '', age: '', parentEmail: '', program: 'Kids (3-7 Jahre)', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
           <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Starten</h2>
           <h3 className="text-4xl font-heading font-black text-secondary">Buchen Sie ein Probetraining</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl bg-white">
          
          {/* Left Side: Map & Info */}
          <div className="bg-secondary text-white relative flex flex-col" data-aos="fade-right">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
             
             <div className="h-64 lg:h-1/2 w-full relative grayscale hover:grayscale-0 transition-all duration-500">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.829037812953!2d8.3093072!3d47.0581457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ffb9a67232231%3A0xc3662d049615024e!2sLucerne!5e0!3m2!1sen!2sch!4v1709900000000!5m2!1sen!2sch" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-white text-secondary px-4 py-2 rounded-lg shadow-lg text-sm font-bold flex items-center">
                 <MapPin size={16} className="mr-2 text-primary" /> 6 Standorte in Luzern
              </div>
             </div>

             <div className="p-10 lg:p-14 flex-grow flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Kontaktinformationen</h3>
                <div className="space-y-6">
                   <div className="flex items-start">
                      <div className="bg-white/10 p-3 rounded-xl mr-4 text-primary">
                         <Mail size={24} />
                      </div>
                      <div>
                         <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                         <p className="font-bold">info@uncles-academy.ch</p>
                      </div>
                   </div>
                   <div className="flex items-start">
                      <div className="bg-white/10 p-3 rounded-xl mr-4 text-primary">
                         <Phone size={24} />
                      </div>
                      <div>
                         <p className="text-xs text-gray-400 uppercase tracking-wider">Telefon</p>
                         <p className="font-bold">+41 41 123 45 67</p>
                      </div>
                   </div>
                   <div className="flex items-start">
                      <div className="bg-white/10 p-3 rounded-xl mr-4 text-primary">
                         <Clock size={24} />
                      </div>
                      <div>
                         <p className="text-xs text-gray-400 uppercase tracking-wider">Bürozeiten</p>
                         <p className="font-bold">Mo-Fr: 09:00 - 17:00</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-10 lg:p-14 bg-white relative" data-aos="fade-left">
            {formStatus === 'success' ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                 <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle size={48} className="text-green-600" />
                 </div>
                 <h3 className="text-3xl font-bold text-secondary mb-2">Anfrage gesendet!</h3>
                 <p className="text-gray-500">Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 24 Stunden.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-secondary mb-8">Anmeldeformular</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input 
                        type="text" 
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        required 
                        placeholder=" "
                        className="floating-input w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all peer" 
                      />
                      <label className="absolute left-4 top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary bg-transparent pointer-events-none">
                        Name des Kindes
                      </label>
                    </div>
                    <div className="relative">
                      <input 
                        type="number" 
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required 
                        placeholder=" "
                        className="floating-input w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all peer" 
                      />
                      <label className="absolute left-4 top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary bg-transparent pointer-events-none">
                        Alter
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input 
                      type="email" 
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleChange}
                      required 
                      placeholder=" "
                      className="floating-input w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all peer" 
                    />
                    <label className="absolute left-4 top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary bg-transparent pointer-events-none">
                      Email der Eltern
                    </label>
                  </div>

                  <div className="relative">
                    <select 
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option>Kids (3-7 Jahre)</option>
                      <option>Development (8-12 Jahre)</option>
                      <option>Competitive (13+ Jahre)</option>
                    </select>
                    <div className="absolute right-4 top-3.5 pointer-events-none text-gray-500 text-xs uppercase font-bold">Programm</div>
                  </div>

                  <div className="relative">
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3} 
                      placeholder=" "
                      className="floating-input w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all peer resize-none"
                    ></textarea>
                    <label className="absolute left-4 top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary bg-transparent pointer-events-none">
                      Nachricht (Optional)
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 rounded-xl font-bold text-white bg-primary hover:bg-orange-600 transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-500/30 flex items-center justify-center overflow-hidden relative group"
                  >
                    <span className="relative z-10 flex items-center">
                       {formStatus === 'submitting' ? 'Sende...' : 'KOSTENLOS ANFRAGEN'}
                       {!formStatus && <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />}
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
