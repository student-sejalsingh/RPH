import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  FileText, 
  Building2 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Pitch a Story',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'Pitch a Story',
        subject: '',
        message: ''
      });
    }, 800);
  };

  return (
    <div id="rph-contact-page" className="pt-24 pb-20 bg-[#0F0F0F] text-[#F5F1E8]">
      
      {/* Hero */}
      <section className="relative py-16 sm:py-24 border-b border-[#2B1D16] bg-gradient-to-b from-[#2B1D16]/50 via-[#0F0F0F] to-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2B1D16] border border-[#C8A95B]/40 text-xs font-mono text-[#C8A95B]">
            <Mail className="w-4 h-4" />
            <span>Connect & Collaborate</span>
          </div>

          <h1 className="font-['Cinzel'] text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F1E8] tracking-tight">
            Initiate Contact
          </h1>

          <p className="text-sm sm:text-base text-[#F5F1E8]/75 max-w-2xl font-sans leading-relaxed">
            Whether you are an investigative whistleblower with unreleased evidence, a filmmaker seeking co-production, or a partner sharing our cultural mission — we read every dispatch.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Studio Location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#C8A95B] font-bold">
                Studio Headquarters
              </span>
              <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#F5F1E8]">
                Rebel Production House Studio
              </h2>
              <p className="text-xs sm:text-sm text-[#F5F1E8]/75 leading-relaxed font-sans">
                Our main recording studios, color-grading suites, and broadcast control room are situated in the cultural heart of Patna.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-[#2B1D16]/40 border border-[#C8A95B]/30">
                <div className="w-10 h-10 rounded bg-[#0F0F0F] border border-[#C8A95B] flex items-center justify-center text-[#C8A95B] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[#F5F1E8] uppercase tracking-wider">
                    Physical Studio
                  </h4>
                  <p className="text-xs text-white/70">
                    Rebel Production House, 4th Floor, Heritage Media Plaza, Fraser Road, Patna, Bihar 800001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-[#2B1D16]/40 border border-[#C8A95B]/30">
                <div className="w-10 h-10 rounded bg-[#0F0F0F] border border-[#C8A95B] flex items-center justify-center text-[#C8A95B] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[#F5F1E8] uppercase tracking-wider">
                    Direct Desks
                  </h4>
                  <p className="text-xs text-[#C8A95B] font-mono">
                    pitch@rebelproductionhouse.com (Story Pitches)
                  </p>
                  <p className="text-xs text-white/70 font-mono">
                    press@rebelproductionhouse.com (Media & Rights)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-[#2B1D16]/40 border border-[#C8A95B]/30">
                <div className="w-10 h-10 rounded bg-[#0F0F0F] border border-[#C8A95B] flex items-center justify-center text-[#C8A95B] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[#F5F1E8] uppercase tracking-wider">
                    Studio Desk
                  </h4>
                  <p className="text-xs text-white/70 font-mono">
                    +91 (0612) 254-8902 / +91 98350 44211
                  </p>
                </div>
              </div>
            </div>

            {/* Whistleblower note */}
            <div className="p-5 rounded-lg bg-[#0F0F0F] border border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-[#C8A95B] uppercase tracking-widest block">
                Whistleblower Confidentiality
              </span>
              <p className="text-xs text-white/60 leading-relaxed">
                For sensitive public interest leaks, please mark subject as "ENCRYPTED PITCH" and include your preferred PGP fingerprint or Signal contact.
              </p>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 bg-[#2B1D16]/30 border border-[#C8A95B]/40 rounded-xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#C8A95B]/10 border-2 border-[#C8A95B] flex items-center justify-center text-[#C8A95B] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-['Cinzel'] text-2xl font-bold text-[#F5F1E8]">
                  Dispatch Received
                </h3>
                <p className="text-xs sm:text-sm text-[#F5F1E8]/75 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Rebel Production House. Our editorial board evaluates incoming story submissions and will respond within 48 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded bg-[#C8A95B] text-[#0F0F0F] text-xs font-bold uppercase tracking-wider hover:bg-[#DFC788] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-[#C8A95B] font-bold">
                    Official Inquiry Form
                  </span>
                  <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#F5F1E8]">
                    Send a Message to the House
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/80">Full Name *</label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g., Ananya Sengupta"
                      className="w-full bg-[#0F0F0F] border border-white/10 rounded px-3.5 py-2.5 text-xs text-[#F5F1E8] placeholder:text-white/30 focus:outline-none focus:border-[#C8A95B]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/80">Email Address *</label>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g., ananya@domain.com"
                      className="w-full bg-[#0F0F0F] border border-white/10 rounded px-3.5 py-2.5 text-xs text-[#F5F1E8] placeholder:text-white/30 focus:outline-none focus:border-[#C8A95B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/80">Phone / WhatsApp</label>
                    <input
                      id="contact-phone-input"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#0F0F0F] border border-white/10 rounded px-3.5 py-2.5 text-xs text-[#F5F1E8] placeholder:text-white/30 focus:outline-none focus:border-[#C8A95B]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/80">Inquiry Classification</label>
                    <select
                      id="contact-inquiry-type-select"
                      value={formState.inquiryType}
                      onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                      className="w-full bg-[#0F0F0F] border border-white/10 rounded px-3.5 py-2.5 text-xs text-[#F5F1E8] focus:outline-none focus:border-[#C8A95B]"
                    >
                      <option value="Pitch a Story">Pitch a Story / Report</option>
                      <option value="Film Co-Production">Film Co-Production / Submission</option>
                      <option value="Guest Appearance">Guest Nomination (Piyush Singh Podcast)</option>
                      <option value="Studio Booking">Studio Space / Podcast Booth Booking</option>
                      <option value="Brand Partnership">Brand Sponsorship & Mission Partner</option>
                      <option value="General Inquiry">General Press & Feedback</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-white/80">Subject Headline *</label>
                  <input
                    id="contact-subject-input"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Concise overview of your proposition..."
                    className="w-full bg-[#0F0F0F] border border-white/10 rounded px-3.5 py-2.5 text-xs text-[#F5F1E8] placeholder:text-white/30 focus:outline-none focus:border-[#C8A95B]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-white/80">Message / Story Synopsis *</label>
                  <textarea
                    id="contact-message-input"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Detail the narrative arc, location, primary sources, or collaboration scope..."
                    className="w-full bg-[#0F0F0F] border border-white/10 rounded px-3.5 py-2.5 text-xs text-[#F5F1E8] placeholder:text-white/30 focus:outline-none focus:border-[#C8A95B]"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#C8A95B] hover:bg-[#DFC788] text-[#0F0F0F] font-bold text-xs uppercase tracking-wider py-3.5 rounded shadow-xl transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Transmitting Dispatch...' : 'Submit Pitch / Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
