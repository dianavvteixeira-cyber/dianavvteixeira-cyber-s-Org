/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Search, User, ArrowRight, MapPin, Globe, Film, Camera, Flower2, ArrowUpRight, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { supabase } from './lib/supabase';

interface Designer {
  id: string;
  name: string;
  description: string;
  image_url: string;
}

interface Event {
  id: string;
  title: string;
  location: string;
  event_date: string;
  status: string;
}

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6ThIxU4YKl5EgITkrc_yxpau-NM4jzwjCZbwT9UPm918NiImTu_bJdfdbIod1aD4NZb0lCtNznJ3BFH6d6ZJLCGdgH96Uo91ZTDsyMHwk9QS4w27ZMbOPhlJMabpRrxUCVVBHoeTwn4J-Hzv7s1x-XMcjTrFVR-V7-CtSQIIq2njYQiRrlYbRIAHJi4HS5cMFCq0GBHicCEMEWaztCQKlPQIjboEf4h75gRY1vipPsR0IVl9JNLGE9KqYNeJD3sQlSbvDiX_skiZu",
  aethelgard: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8i4IXmx2xa73sDwB2JeZH-IXgtqaD9XgdQB7TbvhgfY95QogXP7US_zllKazSYCLA2K7psMAsUknequH4dvzs2LIVKNB_UFUlKtYm2LT02n4GAgkCWnBKLUymUNT8pRldhKfQChju_vq8QPhzIdUxcueBpQrlhoXv1SQhYpULeARV7m-gUDBXU6DFT-h6VABC6XBgDcqp7Q-tvBOj4nknSQ7vP9qkwKBiVqHHJ2Z4YzIK7F-OQzCn8k84LUKIbRmDDBU8jYa4kDuE",
  neoNomad: "https://lh3.googleusercontent.com/aida-public/AB6AXuAucCPakcH0tD8QnyHT1VlN0au3GVCZOFV7R5dTrKKPbCN1sbPzArmFS67tXHDFBupWI_ZCdAryJnUcmMz0aTpI8jS3WIwvaQbxllfaaxiiWJeWkux1zBgD4VbSe9QoW0LKbM8q8oYi_SYaESuMIiPZDbqiRafEmqfLmenu9ukLTynOZ_4QhAt68h4Lr_k3fJ-dVGtPErwZENlFFNegmTZX0PBXmuo7FCvgzlYAHRB3iFjMLH7Ss9pf-qrb5bwLWlz0frXPw3gKy3HP",
  lumina: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7u8TX2KFvhfEKiNi1e8foicZTyBUYm0Jubvuf6e8RIoVx0QMwZChU11ON1TH-1kKZbl0wvl14tXJoe7-io_Oz61NOLMMGFIM590PhHJ6qyH5Vbmn5hApjBLm7UgEc73bv59DhOu3bsHHDCHKVZ64-G89QfxuSKDUXxl1AzPDBMh7G8v-Tp0ZZuuSr077LWHgpW8ScpOxrmuT8bzD70k6NFySEu36bdGYwYc6oZjO30VOlloBAhArxWl1k0JhYdN2-1xm901mS_axq"
};

const Navbar = () => (
  <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background-dark/80 backdrop-blur-md border-b border-slate-800">
    <div className="flex items-center gap-2">
      <Flower2 className="text-primary w-8 h-8" />
      <span className="text-xl font-black tracking-tighter uppercase">FW 2026</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
      <a href="#schedule" className="hover:text-primary transition-colors">Schedule</a>
      <a href="#designers" className="hover:text-primary transition-colors">Designers</a>
      <a href="#collections" className="hover:text-primary transition-colors">Collections</a>
    </div>
    <div className="flex items-center gap-4">
      <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
        <Search className="w-5 h-5" />
      </button>
      <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
        <User className="w-5 h-5" />
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/60 to-transparent z-10"></div>
      <img 
        src={IMAGES.hero} 
        alt="Fashion Runway" 
        className="w-full h-full object-cover object-center"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="container mx-auto px-6 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase rounded mb-6">Global Launch</span>
        <h1 className="text-6xl md:text-9xl font-black leading-none tracking-tighter mb-8 uppercase italic font-serif">
          The Future <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A028]">of Style:</span> <br />
          2026 Runways
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed font-light">
          Experience the pinnacle of avant-garde fashion and exclusive runway reveals from the world's most innovative houses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-widest transition-all shadow-lg shadow-primary/20">
            Register for Access
          </button>
          <button className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-widest transition-all">
            View Lookbook
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const DesignerCard: React.FC<{ name: string, description: string, image: string }> = ({ name, description, image }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative overflow-hidden rounded-xl bg-slate-900/50 border border-slate-800"
  >
    <div className="aspect-[4/5] overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-8">
      <h4 className="text-2xl font-bold mb-2 font-serif">{name}</h4>
      <p className="text-slate-400 leading-relaxed mb-6 font-light">
        {description}
      </p>
      <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest cursor-pointer hover:gap-3 transition-all">
        Explore Collection <ArrowUpRight className="w-4 h-4" />
      </div>
    </div>
  </motion.div>
);

const Designers = () => {
  const [designers, setDesigners] = useState<Designer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDesigners() {
      try {
        const { data, error } = await supabase
          .from('designers')
          .select('*')
          .order('name');
        
        if (error) throw error;
        if (data) setDesigners(data);
      } catch (err) {
        console.error('Error fetching designers:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchDesigners();
  }, []);

  return (
    <section className="py-24 bg-background-dark" id="designers">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">The Creators</h2>
            <h3 className="text-5xl font-bold tracking-tight font-serif">Featured Designers</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designers.map((designer) => (
              <DesignerCard 
                key={designer.id}
                name={designer.name} 
                description={designer.description}
                image={designer.image_url}
              />
            ))}
            {designers.length === 0 && (
              <div className="col-span-full text-center py-10 text-slate-500">
                No designers found. Please check your Supabase connection.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

const ScheduleItem: React.FC<{ date: string, month: string, title: string, location: string, status: string }> = ({ date, month, title, location, status }) => (
  <div className="group flex flex-col md:flex-row items-center justify-between p-8 rounded-xl bg-background-dark border border-slate-800 hover:border-primary transition-colors">
    <div className="flex items-center gap-8 mb-4 md:mb-0">
      <div className="text-center">
        <span className="block text-3xl font-black text-primary">{date}</span>
        <span className="text-xs uppercase tracking-widest text-slate-500">{month}</span>
      </div>
      <div>
        <h5 className="text-2xl font-bold font-serif">{title}</h5>
        <p className="text-slate-400 flex items-center gap-1 text-sm">
          <MapPin className="w-3 h-3" /> {location}
        </p>
      </div>
    </div>
    <button className="w-full md:w-auto px-6 py-2 border border-slate-700 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:border-primary transition-all">
      {status}
    </button>
  </div>
);

const Schedule = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .order('event_date');
        
        if (error) throw error;
        if (data) setEvents(data);
      } catch (err) {
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleString('default', { month: 'short' }).toUpperCase()
    };
  };

  return (
    <section className="py-24 bg-slate-900/30" id="schedule">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">Event Calendar</h2>
          <h3 className="text-4xl md:text-7xl font-bold tracking-tight font-serif">2026 World Tour</h3>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-4">
            {events.map((event) => {
              const { day, month } = formatDate(event.event_date);
              return (
                <ScheduleItem 
                  key={event.id}
                  date={day} 
                  month={month} 
                  title={event.title} 
                  location={event.location} 
                  status={event.status} 
                />
              );
            })}
            {events.length === 0 && (
              <div className="text-center py-10 text-slate-500">
                No events scheduled.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);
      
      if (error) throw error;
      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error('Newsletter error:', err);
      setStatus('error');
    }
  };

  return (
    <section className="py-24 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl px-8 py-16 md:px-16 text-center text-white bg-gradient-to-br from-[#D4AF37] to-[#8B7355]">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black mb-4 uppercase font-serif">The First to Know</h3>
            <p className="mb-10 max-w-lg mx-auto font-light text-amber-50">
              Subscribe to receive exclusive backstage content, limited edition drops, and priority ticket alerts.
            </p>
            
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/20 backdrop-blur-md p-6 rounded-xl border border-white/30"
              >
                <p className="font-bold text-xl">Welcome to the inner circle.</p>
                <p className="text-sm text-amber-50 mt-2">Check your inbox for confirmation.</p>
              </motion.div>
            ) : (
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
                <input 
                  className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-amber-100/70" 
                  placeholder="Email Address" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === 'loading'}
                />
                <button 
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-white font-black uppercase text-sm tracking-widest rounded-lg transition-colors text-[#8B7355] hover:bg-amber-50 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Join Now'}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-200 text-sm font-medium">Something went wrong. Please try again.</p>
            )}
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-20 -mb-20 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-background-dark pt-20 pb-10 border-t border-slate-800">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-8">
            <Flower2 className="text-primary w-8 h-8" />
            <span className="text-xl font-black tracking-tighter uppercase">FW 2026</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
            The world's premier platform for the intersection of fashion, technology, and art.
          </p>
          <div className="flex gap-4">
            {[Globe, Film, Camera].map((Icon, i) => (
              <a key={i} href="#" className="p-2 bg-slate-800 rounded-full hover:text-primary transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h6 className="font-bold uppercase tracking-widest text-xs mb-8">Navigation</h6>
          <ul className="space-y-4 text-sm text-slate-400">
            {['Press Room', 'Accreditation', 'Contact Us', 'Sponsorship'].map(item => (
              <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase tracking-widest text-xs mb-8">Cities</h6>
          <ul className="space-y-4 text-sm text-slate-400">
            {['Paris', 'Milan', 'New York', 'London'].map(item => (
              <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase tracking-widest text-xs mb-8">Legal</h6>
          <ul className="space-y-4 text-sm text-slate-400">
            {['Privacy Policy', 'Terms of Use', 'Accessibility'].map(item => (
              <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 text-xs text-slate-500 uppercase tracking-widest">
        <p>© 2026 Fashion Week Global. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Design for the Future.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Designers />
      <Schedule />
      <Newsletter />
      <Footer />
    </div>
  );
}
