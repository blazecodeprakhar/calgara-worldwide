import React, { useState, useEffect } from 'react';
import { 
  Droplet, 
  MapPin, 
  Mail, 
  ArrowRight, 
  X, 
  Layers, 
  WifiOff, 
  Crosshair, 
  CheckCircle,
  ChevronRight,
  Lock,
  ArrowLeft,
  FileText,
  ShieldCheck,
  Scale,
  Radar,
  Radio,
  Mic,
  Eye,
  Cpu,
  Shield,
  Activity,
  Award,
  Building,
  Info
} from 'lucide-react';
import { Logo } from './components/Logo';
import { PRODUCTS, type Product } from './data/products';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'jammers' | 'privacy' | 'terms' | 'security'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [jammerFilter, setJammerFilter] = useState<'ALL' | 'PORTABLE' | 'VEHICLE' | 'STATIONARY'>('ALL');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [d4EwsImageOpen, setD4EwsImageOpen] = useState(false);
  
  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Scroll Position State
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProduct || d4EwsImageOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProduct, d4EwsImageOpen]);

  const categories = ['ALL', 'COUNTER-UAS', 'DETECTION & RADAR', 'SECURITY SYSTEMS', 'ENVIRONMENTAL'];

  const filteredProducts = selectedCategory === 'ALL' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const handleRequestQuote = (productTitle: string) => {
    setSelectedProduct(null);
    setCurrentPage('home');
    setContactMsg(`Hello, I am interested in requesting technical datasheets and quote pricing for: ${productTitle}.`);
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactName('');
      setContactEmail('');
      setContactMsg('');
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-bgDark text-white overflow-x-hidden font-sans flex flex-col justify-between">
      
      {/* 1. Header (Navbar) */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-bgDark/95 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/40 py-4' 
          : 'bg-transparent border-b border-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => setCurrentPage('home')}>
            <Logo />
          </div>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-white/70">
            <button 
              onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('d4-ews')?.scrollIntoView({behavior: 'smooth'}), 100); }} 
              className={`hover:text-blue-400 transition-colors uppercase ${currentPage === 'home' ? 'text-white/70' : ''}`}
            >
              D⁴-EWS
            </button>
            <button 
              onClick={() => { setCurrentPage('jammers'); window.scrollTo(0, 0); }} 
              className={`hover:text-blue-400 transition-colors uppercase ${currentPage === 'jammers' ? 'text-blue-400 font-bold' : ''}`}
            >
              Jammer Series
            </button>
            <button 
              onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('systems')?.scrollIntoView({behavior: 'smooth'}), 100); }} 
              className="hover:text-blue-400 transition-colors uppercase"
            >
              SYSTEMS
            </button>
            <button 
              onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('capabilities')?.scrollIntoView({behavior: 'smooth'}), 100); }} 
              className="hover:text-blue-400 transition-colors uppercase"
            >
              CAPABILITIES
            </button>
            <button 
              onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'}), 100); }} 
              className="hover:text-blue-400 transition-colors uppercase"
            >
              ABOUT
            </button>
            <button 
              onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100); }} 
              className="hover:text-blue-400 transition-colors uppercase"
            >
              CONTACT
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button 
              onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100); }} 
              className="px-5 py-2.5 rounded-full text-[10px] font-bold tracking-widest bg-blue-600/95 hover:bg-blue-500 text-white border border-blue-400/25 glow-border hover:shadow-lg transition-all-300"
            >
              REQUEST DETAILS
            </button>
          </div>

          {/* Custom Morphing Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            <span className={`block absolute h-0.5 w-6 bg-white/80 transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
            }`} />
            <span className={`block absolute h-0.5 w-6 bg-white/80 transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`} />
            <span className={`block absolute h-0.5 w-6 bg-white/80 transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
            }`} />
          </button>
        </div>

        {/* Mobile Navigation Drawer with smooth animations */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-bgDark/98 border-b border-white/10 backdrop-blur-xl px-6 py-8 flex flex-col gap-6 shadow-xl transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <button 
            onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('d4-ews')?.scrollIntoView({behavior: 'smooth'}), 100); }} 
            className="text-left text-base font-semibold tracking-wide text-white/80 hover:text-white"
          >
            D⁴-EWS System
          </button>
          <button 
            onClick={() => { setCurrentPage('jammers'); setMobileMenuOpen(false); window.scrollTo(0, 0); }} 
            className="text-left text-base font-semibold tracking-wide text-white/80 hover:text-white"
          >
            Jammer Series
          </button>
          <button 
            onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('systems')?.scrollIntoView({behavior: 'smooth'}), 100); }} 
            className="text-left text-base font-semibold tracking-wide text-white/80 hover:text-white"
          >
            Systems
          </button>
          <button 
            onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('capabilities')?.scrollIntoView({behavior: 'smooth'}), 100); }} 
            className="text-left text-base font-semibold tracking-wide text-white/80 hover:text-white"
          >
            Capabilities
          </button>
          <button 
            onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'}), 100); }} 
            className="text-left text-base font-semibold tracking-wide text-white/80 hover:text-white"
          >
            About
          </button>
          <button 
            onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100); }} 
            className="text-left text-base font-semibold tracking-wide text-white/80 hover:text-white"
          >
            Contact
          </button>
          <button 
            onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100); }}
            className="py-3 text-center rounded-lg text-sm font-semibold bg-blue-600 text-white"
          >
            Request Details
          </button>
        </div>
      </header>

      {/* Main Page Routing */}
      {currentPage === 'home' ? (
        <>
          {/* 2. Hero Section with Video Background */}
          <section className="relative w-full min-h-screen flex items-center justify-center pt-24">
            
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-25"
              >
                <source src="/video/video_intro.webm" type="video/webm" />
              </video>
              
              {/* Dark ambient gradients overlays - Make video a little darker */}
              <div className="absolute inset-0 bg-gradient-to-t from-bgDark via-bgDark/70 to-bgDark/50 z-10" />
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-bgDark/65 to-bgDark z-10" />
            </div>

            {/* Hero Content */}
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center z-20 flex flex-col items-center">
              
              {/* Main Heading - Larger & Blue glow replaced with black shadow */}
              <h1 
                className="font-display font-extrabold text-5xl sm:text-7xl md:text-9xl tracking-tight text-white mb-6 leading-none select-none"
                style={{ textShadow: '0 4px 12px rgba(0,0,0,0.85)' }}
              >
                CALGARA
                <span className="block text-xl sm:text-4xl md:text-6xl font-light text-blue-400 tracking-[0.15em] sm:tracking-[0.2em] mt-3">
                  WORLDWIDE
                </span>
              </h1>

              {/* Description */}
              <p className="max-w-2xl text-sm sm:text-base md:text-lg text-white/70 leading-relaxed font-light mb-12">
                Architecting the future of global airspace security. We engineer high-speed autonomous drone interceptors, multi-band counter-UAV jamming arrays, and tactical surveillance networks designed to protect critical infrastructure from asymmetric aerial threats.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="#systems" 
                  className="px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider bg-blue-600 hover:bg-blue-500 text-white border border-blue-400/25 glow-border hover:shadow-lg transition-all-300 flex items-center justify-center gap-2"
                >
                  Explore Systems
                  <ArrowRight size={14} />
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-md transition-all-300 flex items-center justify-center"
                >
                  Request Datasheet
                </a>
              </div>
            </div>
          </section>

          {/* D⁴-EWS Airspace Awareness System Spotlight */}
          <section id="d4-ews" className="relative py-24 border-b border-white/5 bg-bgDark/80 overflow-hidden">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[35rem] h-[35rem] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-10 right-10 w-[25rem] h-[25rem] bg-blue-950/10 blur-[100px] rounded-full pointer-events-none z-0" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
              
              {/* Heading & Badge */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-950/50 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-4">
                  Tactical Airspace Spotlight
                </span>
                <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white mb-4">
                  D⁴-EWS Airspace Awareness System
                </h2>
                <p className="text-blue-400 font-medium text-xs sm:text-sm md:text-base mb-6 tracking-wide uppercase">
                  Distributed 4-Layer Airspace Awareness System & Early Warning Platform
                </p>
                <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-8" />
                <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                  D⁴-EWS is a distributed multi-domain early warning system designed to detect, track, and classify low-altitude aerial threats, including FPV drones, UAVs, and low-signature airborne objects. The system integrates four complementary sensing layers, enabling reliable detection even in complex operational environments. The architecture is designed as a scalable sensor network, providing persistent low-altitude airspace awareness for military bases, border areas, and critical infrastructure.
                </p>
              </div>

              {/* Main Content Layout - Split 2 Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
                
                {/* Left Side: System Diagram Showcase */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                  <div 
                    onClick={() => setD4EwsImageOpen(true)}
                    className="group relative rounded-2xl overflow-hidden border border-white/10 bg-bgDark/50 shadow-2xl p-2 transition-all duration-500 hover:border-blue-500/30 hover:shadow-blue-500/5 cursor-zoom-in"
                  >
                    
                    {/* Glowing Overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black/40">
                      <img 
                        src="/d4-ews.jpg" 
                        alt="D4-EWS Airspace Awareness System Diagram" 
                        className="w-full h-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:scale-[1.02] group-hover:grayscale-0"
                      />
                    </div>
                    
                    <div className="p-4 flex items-center justify-between">
                      <span className="text-[10px] text-white/50 tracking-wider font-semibold uppercase flex items-center gap-1.5">
                        <Activity size={12} className="text-blue-500 animate-pulse" />
                        System Architecture & Operational Concept (Click to expand)
                      </span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setD4EwsImageOpen(true); }}
                        className="text-[10px] text-blue-400 hover:text-blue-300 hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none"
                      >
                        Enlarge System Diagram
                        <ChevronRight size={10} />
                      </button>
                    </div>
                  </div>

                  {/* Operational Concept / Steps */}
                  <div className="glow-card p-6 sm:p-8 rounded-2xl">
                    <h3 className="font-display font-semibold text-lg text-white mb-6 flex items-center gap-2 border-b border-white/5 pb-3">
                      <Cpu size={18} className="text-blue-400" />
                      Multi-Domain Sensor Fusion Sequence
                    </h3>
                    
                    <div className="flex flex-col gap-6 relative before:absolute before:left-5 sm:before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-white/5">
                      
                      <div className="flex gap-4 relative group/step cursor-default">
                        <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/20 flex items-center justify-center text-blue-400 z-10 flex-shrink-0 transition-all duration-300 group-hover/step:border-blue-500 group-hover/step:shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                          <Radar size={18} />
                        </div>
                        <div>
                          <span className="text-[9px] font-bold text-blue-400/60 tracking-wider uppercase">Step 01 / Detection</span>
                          <h4 className="text-xs sm:text-sm font-semibold text-white group-hover/step:text-blue-400 transition-colors">Long-Range Radar Alert</h4>
                          <p className="text-[11px] sm:text-xs text-white/60 mt-1 leading-relaxed">
                            Long-range radar detects potential aerial activity and targets at extended distances (150–200 km).
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 relative group/step cursor-default">
                        <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/20 flex items-center justify-center text-blue-400 z-10 flex-shrink-0 transition-all duration-300 group-hover/step:border-blue-500 group-hover/step:shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                          <Radio size={18} />
                        </div>
                        <div>
                          <span className="text-[9px] font-bold text-blue-400/60 tracking-wider uppercase">Step 02 / Analysis</span>
                          <h4 className="text-xs sm:text-sm font-semibold text-white group-hover/step:text-blue-400 transition-colors">RF Early Cueing & Identification</h4>
                          <p className="text-[11px] sm:text-xs text-white/60 mt-1 leading-relaxed">
                            RF scanning layer identifies communication signals, control links, and decodes telemetry (up to 70 km).
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 relative group/step cursor-default">
                        <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/20 flex items-center justify-center text-blue-400 z-10 flex-shrink-0 transition-all duration-300 group-hover/step:border-blue-500 group-hover/step:shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                          <Mic size={18} />
                        </div>
                        <div>
                          <span className="text-[9px] font-bold text-blue-400/60 tracking-wider uppercase">Step 03 / Tracking</span>
                          <h4 className="text-xs sm:text-sm font-semibold text-white group-hover/step:text-blue-400 transition-colors">Persistent Acoustic Tracking</h4>
                          <p className="text-[11px] sm:text-xs text-white/60 mt-1 leading-relaxed">
                            Distributed ground audio sensors capture micro-noises to track low-altitude movements in terrain-masked areas (up to 10 km).
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 relative group/step cursor-default">
                        <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/20 flex items-center justify-center text-blue-400 z-10 flex-shrink-0 transition-all duration-300 group-hover/step:border-blue-500 group-hover/step:shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                          <Eye size={18} />
                        </div>
                        <div>
                          <span className="text-[9px] font-bold text-blue-400/60 tracking-wider uppercase">Step 04 / Verification</span>
                          <h4 className="text-xs sm:text-sm font-semibold text-white group-hover/step:text-blue-400 transition-colors">Optical / Thermal IR Target Confirmation</h4>
                          <p className="text-[11px] sm:text-xs text-white/60 mt-1 leading-relaxed">
                            EO/IR electro-optical trackers lock on target to verify, confirm visual identity, and assess payload parameters (up to 5 km).
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 relative group/step cursor-default">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 border border-blue-400/50 flex items-center justify-center text-white z-10 flex-shrink-0 transition-all duration-300 group-hover/step:bg-blue-500 group-hover/step:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                          <Cpu size={18} />
                        </div>
                        <div>
                          <span className="text-[9px] font-bold text-blue-400 tracking-wider uppercase">Step 05 / Mitigation</span>
                          <h4 className="text-xs sm:text-sm font-semibold text-blue-400 transition-colors">Command Center Fusion</h4>
                          <p className="text-[11px] sm:text-xs text-white/70 mt-1 leading-relaxed">
                            Data is aggregated in a unified Command & Response central hub for instantaneous operator awareness and threat mitigation.
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                {/* Right Side: The 4-Layer Detection Architecture */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  
                  <div className="flex flex-col mb-4">
                    <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">Detection Blueprint</span>
                    <h3 className="font-display font-semibold text-xl text-white mt-1">4-Layer Integrated Detection Architecture</h3>
                  </div>

                  {/* Layer Cards */}
                  
                  {/* Layer 1 */}
                  <div className="glow-card p-5 rounded-2xl flex gap-4 border-l-2 border-l-blue-500">
                    <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/25 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <Radar size={18} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-baseline gap-2">
                        <h4 className="text-sm font-bold text-white font-display">RADAR LAYER</h4>
                        <span className="text-[10px] font-mono font-bold text-blue-400 px-2 py-0.5 bg-blue-950/50 border border-blue-500/20 rounded">
                          150–200 km
                        </span>
                      </div>
                      <p className="text-xs text-white/50 mt-0.5">Technology: Long-range radar</p>
                      <p className="text-xs sm:text-sm text-white/75 mt-2 leading-relaxed">
                        Performs wide-area scans and early warning to register airborne signatures at strategic distances.
                      </p>
                    </div>
                  </div>

                  {/* Layer 2 */}
                  <div className="glow-card p-5 rounded-2xl flex gap-4 border-l-2 border-l-blue-400">
                    <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-400/25 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <Radio size={18} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-baseline gap-2">
                        <h4 className="text-sm font-bold text-white font-display">RF DETECTION LAYER</h4>
                        <span className="text-[10px] font-mono font-bold text-blue-400 px-2 py-0.5 bg-blue-950/50 border border-blue-400/20 rounded">
                          Up to 70 km
                        </span>
                      </div>
                      <p className="text-xs text-white/50 mt-0.5">Technology: RF signal detection</p>
                      <p className="text-xs sm:text-sm text-white/75 mt-2 leading-relaxed">
                        Intercepts drone communication frequencies, telemetry links, control signals, and RF signatures.
                      </p>
                    </div>
                  </div>

                  {/* Layer 3 */}
                  <div className="glow-card p-5 rounded-2xl flex gap-4 border-l-2 border-l-emerald-500">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                      <Mic size={18} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-baseline gap-2">
                        <h4 className="text-sm font-bold text-white font-display">ACOUSTIC LAYER</h4>
                        <span className="text-[10px] font-mono font-bold text-emerald-400 px-2 py-0.5 bg-emerald-950/35 border border-emerald-500/20 rounded">
                          0.7–10 km
                        </span>
                      </div>
                      <p className="text-xs text-white/50 mt-0.5">Technology: Distributed audio sensors</p>
                      <p className="text-xs sm:text-sm text-white/75 mt-2 leading-relaxed">
                        Maintains passive tracking of low-altitude movements, bypassing radio silence or terrain-masking.
                      </p>
                    </div>
                  </div>

                  {/* Layer 4 */}
                  <div className="glow-card p-5 rounded-2xl flex gap-4 border-l-2 border-l-amber-500">
                    <div className="w-10 h-10 rounded-xl bg-amber-950/30 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                      <Eye size={18} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-baseline gap-2">
                        <h4 className="text-sm font-bold text-white font-display">EO / IR LAYER</h4>
                        <span className="text-[10px] font-mono font-bold text-amber-400 px-2 py-0.5 bg-amber-950/35 border border-amber-500/20 rounded">
                          Up to 5 km
                        </span>
                      </div>
                      <p className="text-xs text-white/50 mt-0.5">Technology: Optical / thermal systems</p>
                      <p className="text-xs sm:text-sm text-white/75 mt-2 leading-relaxed">
                        Completes target acquisition via high-definition thermal/optical camera sensors for ultimate confirmation and identification.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Grid 2: Capabilities, System Function, and Cooperation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                
                {/* Card A: Key Capabilities */}
                <div className="glow-card p-6 sm:p-8 rounded-2xl flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <CheckCircle size={18} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white">Key System Capabilities</h3>
                  <ul className="flex flex-col gap-3 text-xs sm:text-sm text-white/70 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>Detection of low-altitude and terrain-masking UAVs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>Capability to detect RF-silent and autonomous drones.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>Distributed architecture with high resilience to damage or interference.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>Passive sensing layers resistant to electronic warfare (EW).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>Scalable deployment from single-site protection to large-area coverage.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>Rapid deployment capability with minimal infrastructure requirements.</span>
                    </li>
                  </ul>
                </div>

                {/* Card B: Functions & Integration */}
                <div className="glow-card p-6 sm:p-8 rounded-2xl flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Layers size={18} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white">System Function & Integration</h3>
                  <div className="mt-2 flex flex-col gap-4">
                    <div>
                      <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2">Core Deliverables</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <span className="px-2.5 py-1.5 rounded bg-white/5 border border-white/5 text-white/80">Early Warning</span>
                        <span className="px-2.5 py-1.5 rounded bg-white/5 border border-white/5 text-white/80">Target Acquisition</span>
                        <span className="px-2.5 py-1.5 rounded bg-white/5 border border-white/5 text-white/80">Real-Time Tracking</span>
                        <span className="px-2.5 py-1.5 rounded bg-white/5 border border-white/5 text-white/80">Threat Classification</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2">External Interoperability</h4>
                      <p className="text-xs text-white/60 leading-relaxed mb-2">
                        Designed with open architecture to provide accurate targeting telemetry and data to engage:
                      </p>
                      <ul className="text-xs text-white/70 flex flex-col gap-1.5 pl-1">
                        <li>• RF Jamming systems</li>
                        <li>• Directed Energy (Laser) systems</li>
                        <li>• Air defense guns</li>
                        <li>• Short-range missile systems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card C: Readiness & Cooperation */}
                <div className="glow-card p-6 sm:p-8 rounded-2xl flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Shield size={18} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white">Cooperation & Indian Integration</h3>
                  <div className="mt-2 flex flex-col gap-4">
                    <div>
                      <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1">Make in India Compliant</h4>
                      <p className="text-xs text-white/60 leading-relaxed">
                        The D⁴-EWS system architecture actively supports local production and industrial collaboration. Subject to agreement, the system can be:
                      </p>
                      <ul className="text-xs text-white/75 flex flex-col gap-1 mt-2 pl-1 font-semibold">
                        <li>• Manufactured in India</li>
                        <li>• Assembled using local industrial partners</li>
                        <li>• Adapted to national defence requirements</li>
                      </ul>
                    </div>
                    <div className="pt-2 border-t border-white/5">
                      <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1">Academic & Technical Backing</h4>
                      <p className="text-[11px] text-white/60 leading-relaxed">
                        All core system components are based on existing and validated technologies. Core technologies have been developed and tested by research teams associated with <strong>Prof. Nathan Blaunstein</strong>, particularly in RF sensing and signal processing.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Application Areas Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-white/5 pt-12">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">Operational Deployment</span>
                  <h3 className="font-display font-semibold text-2xl text-white mt-1 mb-4">Strategic Protection Spheres</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-950/50 flex items-center justify-center text-blue-400"><Building size={16} /></div>
                      <span className="text-xs font-semibold text-white/80">Military Bases</span>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-950/50 flex items-center justify-center text-blue-400"><MapPin size={16} /></div>
                      <span className="text-xs font-semibold text-white/80">Border Surveillance</span>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-950/50 flex items-center justify-center text-blue-400"><Shield size={16} /></div>
                      <span className="text-xs font-semibold text-white/80">Critical Utilities</span>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-950/50 flex items-center justify-center text-blue-400"><Radar size={16} /></div>
                      <span className="text-xs font-semibold text-white/80">Airspace Monitoring</span>
                    </div>
                  </div>
                </div>

                <div className="glow-card p-6 sm:p-8 rounded-2xl border-l-4 border-l-blue-600">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-2">
                    <Info size={14} className="text-blue-400" />
                    Distributed Airspace Infrastructure
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light mb-4">
                    "D⁴-EWS is not only a counter-UAV solution. It represents a <strong>Distributed Low-Altitude Airspace Awareness Infrastructure</strong> capable of forming the foundation for national-level security systems."
                  </p>
                  
                  <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-white/40 block">Technical Leads</span>
                      <span className="text-xs font-semibold text-blue-400">Prof. Natan Blaushtein & Eng. Evgeny Rolbin</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-white/40 block">Release Date</span>
                      <span className="text-xs font-mono font-bold text-white/80">31/03/2026</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps CTA */}
              <div className="mt-12 text-center bg-blue-950/35 border border-blue-500/10 p-6 rounded-2xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Award size={16} className="text-blue-400" />
                    Proposed Next Steps
                  </h4>
                  <ul className="text-xs text-white/60 mt-1 flex flex-wrap gap-x-4 gap-y-1">
                    <li>• Demonstration prototype development</li>
                    <li>• Technical evaluation with Indian authorities</li>
                    <li>• Pilot deployment for operational validation</li>
                  </ul>
                </div>
                <button 
                  onClick={() => handleRequestQuote("D⁴-EWS System Demonstration")}
                  className="px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest bg-blue-600 hover:bg-blue-500 text-white border border-blue-400/25 glow-border hover:shadow-lg transition-all-300 whitespace-nowrap"
                >
                  REQUEST EVALUATION
                </button>
              </div>

            </div>
          </section>

          {/* 3. Key Capabilities */}
          <section id="capabilities" className="relative py-24 border-y border-white/5 bg-bgDark/90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white mb-4">
                  Tactical Edge Operations
                </h2>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  We deploy field-tested technology engineered for mission-critical reliability across security, aerospace, and tactical environmental systems.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                
                <div className="glow-card p-6 sm:p-8 rounded-2xl flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Crosshair size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white">Autonomous Interception</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Smart collision and target guidance intelligence allowing systems to navigate GPS-denied tactical sectors.
                  </p>
                </div>

                <div className="glow-card p-6 sm:p-8 rounded-2xl flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <WifiOff size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white">RF Disruption</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Dynamic RF scanning and multi-band directional noise injection to immediately disconnect threat links.
                  </p>
                </div>

                <div className="glow-card p-6 sm:p-8 rounded-2xl flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Layers size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white">Multi-Layer Fusion</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Continuous radar, acoustic, and EO/IR tracking unified under a single airspace situational awareness model.
                  </p>
                </div>

                <div className="glow-card p-6 sm:p-8 rounded-2xl flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Droplet size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white">Eco Containment</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    High-volume coalescing filters to continuously isolate oil and petroleum elements from water bodies.
                  </p>
                </div>

              </div>

            </div>
          </section>

          {/* 4. Product Catalog */}
          <section id="systems" className="relative py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                <div>
                  <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Product Catalog</span>
                  <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white mt-1">
                    Defense & Protection Systems
                  </h2>
                </div>
                
                {/* Filter buttons */}
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-[10px] sm:text-xs font-medium tracking-wider uppercase transition-all-300 border ${
                        selectedCategory === cat
                          ? 'bg-blue-600 text-white border-blue-500/50 shadow-md'
                          : 'bg-white/5 text-white/60 border-white/5 hover:border-white/10 hover:text-white'
                      }`}
                    >
                      {cat.replace('&', '/')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Grid - Centered Last Row Items */}
              <div className="flex flex-wrap justify-center gap-6">
                {filteredProducts.map(product => (
                  <div 
                    key={product.id} 
                    className="glow-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                    onClick={() => setSelectedProduct(product)}
                  >
                    
                    {/* Image Showcase */}
                    <div className="relative aspect-video w-full overflow-hidden bg-bgDark/30 border-b border-white/5">
                      <img 
                        src={product.imageUrl} 
                        alt={product.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-2.5 py-1 rounded bg-bgDark/85 border border-white/10 text-[9px] font-semibold tracking-widest text-blue-400 uppercase">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Info */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-blue-400 transition-colors mb-2">
                        {product.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/60 line-clamp-3 leading-relaxed mb-6 flex-grow">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="text-[10px] font-medium text-white/40">
                          {product.specs.length} parameters
                        </span>
                        <button 
                          className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1"
                        >
                          View Details
                          <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </section>



          {/* 6. About Section */}
          <section id="about" className="relative py-24 border-t border-white/5 bg-bgDark/45 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Left Content Column (takes 7 cols) */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Operational Mission</span>
                  </div>
                  
                  <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white mb-6 leading-tight">
                    Protecting <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent">High-Risk Spheres</span> Worldwide
                  </h2>

                  <p className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-light">
                    Calgara worldwide develops intelligence-led countermeasures to neutralize critical airspace vulnerabilities. We prioritize advanced RF scanning, directional interference networks, and intelligent kinetic drones built to operate seamlessly under severe operational environments.
                  </p>
                  <p className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed mb-10 font-light">
                    Our global footprint is backed by real engineering innovation and a dedicated commitment to environmental conservation through custom separation systems.
                  </p>

                  {/* Tactical Pillars Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Pillar 1 */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                          <Shield size={16} />
                        </div>
                        <h4 className="text-xs font-bold text-white tracking-wide uppercase">Military Facilities</h4>
                      </div>
                      <p className="text-white/50 text-[11px] leading-relaxed">
                        Shielding forward operating bases, command posts, and ammunition stores from FPV swarm incursions.
                      </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                          <Building size={16} />
                        </div>
                        <h4 className="text-xs font-bold text-white tracking-wide uppercase">Critical Infrastructure</h4>
                      </div>
                      <p className="text-white/50 text-[11px] leading-relaxed">
                        Securing nuclear power stations, refining facilities, and civil transport terminals from hostile aerial recon.
                      </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                          <Radar size={16} />
                        </div>
                        <h4 className="text-xs font-bold text-white tracking-wide uppercase">Border Surveillance</h4>
                      </div>
                      <p className="text-white/50 text-[11px] leading-relaxed">
                        Deploying persistent distributed multi-domain radar & acoustic sensors to detect illegal crossings.
                      </p>
                    </div>

                    {/* Pillar 4 */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                          <Lock size={16} />
                        </div>
                        <h4 className="text-xs font-bold text-white tracking-wide uppercase">Civilian Events</h4>
                      </div>
                      <p className="text-white/50 text-[11px] leading-relaxed">
                        Temporary signal-exclusion zones for VIP escorts, state summits, and public mass gatherings.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Right Visual Column (takes 5 cols) */}
                <div className="lg:col-span-5 relative">
                  
                  {/* Outer HUD Corner Crosshairs */}
                  <div className="absolute -top-3 -left-3 w-4 h-4 border-t-2 border-l-2 border-blue-500/40 animate-pulse" />
                  <div className="absolute -top-3 -right-3 w-4 h-4 border-t-2 border-r-2 border-blue-500/40 animate-pulse" />
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b-2 border-l-2 border-blue-500/40 animate-pulse" />
                  <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b-2 border-r-2 border-blue-500/40 animate-pulse" />

                  {/* Main Container */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-white/10 glow-border bg-black/40 flex flex-col justify-between p-4 group">
                    
                    {/* Background surveillance video */}
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
                    >
                      <source src="/video/video_intro.webm" type="video/webm" />
                    </video>

                    {/* Stylized CSS Radar Sweep Sweep Animation overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bgDark via-bgDark/80 to-transparent pointer-events-none z-0" />
                    
                    {/* Custom Radar rotating line & sweep overlay */}
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-[1]">
                      {/* Radar circular lines */}
                      <div className="w-[85%] h-[85%] rounded-full border border-blue-500/10 flex items-center justify-center">
                        <div className="w-[70%] h-[70%] rounded-full border border-blue-500/15 flex items-center justify-center">
                          <div className="w-[50%] h-[50%] rounded-full border border-blue-500/20" />
                        </div>
                      </div>
                      {/* Rotating line representing radar beam sweep */}
                      <div className="absolute w-[85%] h-[85%] rounded-full overflow-hidden animate-spin-slow">
                        <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent origin-left rotate-0" />
                      </div>
                    </div>

                    {/* HUD Status Header */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-blue-950/80 border border-blue-500/30 px-2.5 py-1 rounded text-[9px] font-bold text-blue-400 tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        SYSTEM: ACTIVE
                      </div>
                      <div className="text-[9px] font-mono text-white/40 bg-black/40 px-2 py-1 rounded border border-white/5">
                        TEL: SECURE_LINK
                      </div>
                    </div>

                    {/* HUD Center Coordinates / Target */}
                    <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center">
                      <div className="w-12 h-12 rounded-full border border-dashed border-blue-500/40 flex items-center justify-center animate-pulse">
                        <Crosshair size={20} className="text-blue-400/80" />
                      </div>
                      <span className="text-[10px] font-mono text-blue-400/70 tracking-widest mt-2 uppercase">NO THREAT DETECTED</span>
                    </div>

                    {/* HUD Footer Telemetry */}
                    <div className="relative z-10 bg-black/75 border border-white/10 p-3 rounded-xl backdrop-blur-md font-mono text-[9px] text-white/70 flex flex-col gap-1.5">
                      <div className="flex justify-between border-b border-white/5 pb-1 text-blue-400">
                        <span>SPHERE SCAN: CALGARA_NET</span>
                        <span>AZIMUTH: 360°</span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-4">
                        <div className="flex justify-between">
                          <span className="text-white/40">LAT:</span>
                          <span>19.1678° N</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/40">ALT:</span>
                          <span>150m</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/40">LON:</span>
                          <span>72.8542° E</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/40">SPD:</span>
                          <span>0.0 m/s</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* 7. Contact / Form Section */}
          <section id="contact" className="relative py-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Info panel */}
                <div className="flex flex-col justify-between gap-8">
                  <div>
                    <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Secure Communication</span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white mt-2 mb-6">
                      Initiate Secure Request
                    </h2>
                    <p className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed font-light mb-8">
                      Get in touch with Calgara worldwide for custom system deployments, procurement pricing, or request a complete technical packet.
                    </p>
                  </div>

                  <div className="flex flex-col gap-6">
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold tracking-wider text-white/50 uppercase">HQ Coordinates</h4>
                        <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-semibold mt-1">
                          E 201 Globe Heights, Film City Road,<br />
                          Gokuldham, Goregaon East, Mumbai 400063
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold tracking-wider text-white/50 uppercase">Direct Email</h4>
                        <p className="text-xs sm:text-sm text-blue-400 font-semibold mt-1 hover:text-blue-300 transition-colors">
                          contact@calgaraworldwide.com
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Interactive Form - Adjust padding for mobile users */}
                <div className="bg-[#0a0f1d] border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl relative">
                  {formSubmitted ? (
                    <div className="absolute inset-0 bg-[#0a0f1d]/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 sm:p-8 text-center rounded-2xl animate-fade-in z-20">
                      <div className="w-12 h-12 rounded-full bg-blue-900/30 border border-blue-500 flex items-center justify-center text-blue-400 mb-4 animate-bounce">
                        <Lock size={20} />
                      </div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2">Transmission Secure</h3>
                      <p className="text-xs sm:text-sm text-white/60 max-w-xs leading-relaxed">
                        Thank you. Your request for technical details has been compiled and routed securely.
                      </p>
                    </div>
                  ) : null}

                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                    <div>
                      <label className="block text-[10px] font-bold tracking-wider text-white/55 uppercase mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Security officer / Officer name" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors text-white placeholder-white/20"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold tracking-wider text-white/55 uppercase mb-2">Official Email</label>
                      <input 
                        type="email" 
                        required 
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="name@agency.com" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors text-white placeholder-white/20"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold tracking-wider text-white/55 uppercase mb-2">Details Request</label>
                      <textarea 
                        rows={4}
                        required
                        value={contactMsg}
                        onChange={(e) => setContactMsg(e.target.value)}
                        placeholder="Specify target products, integration requirements, or field conditions..." 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors text-white placeholder-white/20 resize-none"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-[10px] sm:text-xs tracking-widest uppercase glow-border transition-colors mt-2"
                    >
                      TRANSMIT REQUEST
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </section>
        </>
      ) : currentPage === 'jammers' ? (
        /* Dedicated Jammer Series Page */
        <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-36 pb-24 flex-grow w-full">
          <button 
            onClick={() => setCurrentPage('home')}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 hover:text-blue-300 transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft size={14} />
            BACK TO HOMEPAGE
          </button>

          <div className="relative mb-16 animate-fade-in">
            {/* Ambient Glow */}
            <div className="absolute -top-20 left-1/3 w-[30rem] h-[30rem] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none -z-10" />
            
            <span className="text-[10px] font-semibold tracking-widest text-blue-400 uppercase bg-blue-950/60 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-4">
              Product Catalog
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight text-white mb-6">
              Jammer Series
            </h1>
            <p className="text-white/60 text-sm sm:text-base max-w-3xl leading-relaxed font-light">
              Calgara Worldwide's professional electromagnetic disruption platforms. Engineered with multi-band sweep jamming technology to sever drone communication control links, telemetry, and GNSS navigation signals. Deployed as portable, vehicle-mounted, or stationary solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 border-b border-white/10 pb-6 mb-10 animate-fade-in">
            {(['ALL', 'PORTABLE', 'VEHICLE', 'STATIONARY'] as const).map((filter) => {
              const labels = {
                ALL: 'All Jammers',
                PORTABLE: 'Portable & Handheld',
                VEHICLE: 'Vehicle-Mounted',
                STATIONARY: 'Stationary & Integrated'
              };
              return (
                <button
                  key={filter}
                  onClick={() => setJammerFilter(filter)}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer border ${
                    jammerFilter === filter
                      ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-white/5 border-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {labels[filter]}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-fade-in">
            {PRODUCTS
              .filter(p => p.title.toLowerCase().includes('jammer') || p.title.toLowerCase().includes('jammers'))
              .filter(p => {
                if (jammerFilter === 'ALL') return true;
                if (jammerFilter === 'PORTABLE') {
                  return ['03', '04', '05', '06', '11'].includes(p.id);
                }
                if (jammerFilter === 'VEHICLE') {
                  return ['07', '08'].includes(p.id);
                }
                if (jammerFilter === 'STATIONARY') {
                  return ['09', '10'].includes(p.id);
                }
                return true;
              })
              .map((product) => (
                <div 
                  key={product.id}
                  className="glow-card flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Image Frame */}
                    <div className="relative aspect-video w-full overflow-hidden bg-bgDark/30 border-b border-white/5">
                      <img 
                        src={product.imageUrl} 
                        alt={product.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-2.5 py-1 rounded bg-bgDark/85 border border-white/10 text-[9px] font-semibold tracking-widest text-blue-400 uppercase">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-display font-semibold text-lg text-white group-hover:text-blue-400 transition-colors mb-3">
                        {product.title}
                      </h3>
                      <p className="text-xs text-white/60 leading-relaxed line-clamp-3 mb-6 font-light">
                        {product.description}
                      </p>

                      {/* Specs Snippet */}
                      <div className="bg-black/20 rounded-xl p-4 border border-white/5 mb-6">
                        <span className="text-[9px] font-bold tracking-wider text-white/40 uppercase block mb-3">Technical Highlights</span>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                          {product.specs.slice(0, 4).map((spec, index) => (
                            <div key={index} className="flex flex-col">
                              <span className="text-[9px] text-white/40 uppercase font-medium">{spec.label}</span>
                              <span className="text-xs text-white font-semibold mt-0.5 truncate">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="px-6 pb-6 pt-2 flex gap-3">
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 py-2.5 rounded-xl border border-white/10 text-[10px] font-bold tracking-wider text-white hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      FULL SPECS
                    </button>
                    <button 
                      onClick={() => {
                        setCurrentPage('home');
                        setTimeout(() => {
                          setContactMsg(`Hello, I would like to request technical specifications, pricing, and availability details for the Jammer: ${product.title}.`);
                          const contactSec = document.getElementById('contact');
                          if (contactSec) {
                            contactSec.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                      className="flex-1 py-2.5 rounded-xl bg-blue-600/90 hover:bg-blue-500 text-[10px] font-bold tracking-wider text-white transition-colors cursor-pointer"
                    >
                      INQUIRE
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <div className="rounded-2xl border border-yellow-500/10 bg-yellow-500/5 p-6 md:p-8 flex flex-col md:flex-row items-start gap-4 animate-fade-in">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 flex-shrink-0">
              <Info size={20} />
            </div>
            <div>
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-2">Government & Regulatory Compliance Notice</h4>
              <p className="text-xs text-white/60 leading-relaxed max-w-4xl font-light">
                The sale and operational deployment of active electromagnetic RF signal jamming equipment are strictly governed by national and international telecommunications authorities. Procurement of the Calgara Jammer Series is exclusively restricted to verified defense agencies, law enforcement personnel, and government-approved critical infrastructure operations. Technical datasheets and pricing estimates will only be released following regulatory vetting.
              </p>
            </div>
          </div>
        </main>
      ) : (
        /* Real Content Pages (Privacy Policy, Terms of Service, Security Disclaimers) */
        <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-36 pb-24 flex-grow w-full">
          <button 
            onClick={() => setCurrentPage('home')}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 hover:text-blue-300 transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            BACK TO HOMEPAGE
          </button>

          {currentPage === 'privacy' && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <ShieldCheck size={20} />
                </div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl">Privacy & Data Security Policy</h1>
              </div>
              <div className="prose prose-invert text-white/70 text-sm sm:text-base leading-relaxed space-y-6">
                <p className="text-white font-semibold">Effective Date: June 13, 2026</p>
                <p>
                  At Calgara Worldwide, we prioritize the protection and confidentiality of client telemetry, communication logs, and requests for quote credentials. This policy outlines our stringent methods for securing sensitive organizational and defense details.
                </p>
                <h3 className="text-white font-display font-semibold text-lg mt-8 mb-2">1. Secure Request Routing</h3>
                <p>
                  Any information submitted through our secure transmission request forms (such as officer credentials, contact parameters, and system implementation details) is encrypted in transit using industry-standard protocols.
                </p>
                <h3 className="text-white font-display font-semibold text-lg mt-8 mb-2">2. Zero External Storage</h3>
                <p>
                  Calgara Worldwide operates isolated information environments. We do not store or distribute tactical requests on third-party commercial cloud databases. All transmission request payloads are processed immediately by our internal secure operations center in Mumbai.
                </p>
                <h3 className="text-white font-display font-semibold text-lg mt-8 mb-2">3. Telemetry Isolation</h3>
                <p>
                  Our defense-grade target tracking (e.g., within the Interceptor AI Drone GEN3) runs fully autonomous local logic. Sensor data, infrared feeds, and RF signature decodes remain on the edge devices and are never transmitted to unauthorized databases.
                </p>
              </div>
            </div>
          )}

          {currentPage === 'terms' && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Scale size={20} />
                </div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl">Terms of Deployment</h1>
              </div>
              <div className="prose prose-invert text-white/70 text-sm sm:text-base leading-relaxed space-y-6">
                <p className="text-white font-semibold">Effective Date: June 13, 2026</p>
                <p>
                  These Terms of Deployment govern the procurement, testing, and operational field setups of all electromagnetic interference, counter-drone, and protection platforms developed by Calgara Worldwide.
                </p>
                <h3 className="text-white font-display font-semibold text-lg mt-8 mb-2">1. Regulatory Approvals</h3>
                <p>
                  The deployment of electromagnetic signal jamming equipment (including the Drone Jammer Series, Jammer Gun, and Vehicle-Mounted Detection Jammer) is strictly subject to licensing and authorization by competent local, national, and international civil aviation or telecommunications authorities.
                </p>
                <h3 className="text-white font-display font-semibold text-lg mt-8 mb-2">2. Prohibited Exploits</h3>
                <p>
                  Procured systems must not be used to interfere with legitimate commercial communications or emergency responder channels, except under explicit defense emergency protocols or authorized testing ranges.
                </p>
                <h3 className="text-white font-display font-semibold text-lg mt-8 mb-2">3. System Safety</h3>
                <p>
                  Operators are fully responsible for the flight paths and kinetic interceptions of the Interceptor AI Drone GEN3. Calgara Worldwide provides no warranties against accidental collisions or target damage caused by operational deviation from standard instruction manuals.
                </p>
              </div>
            </div>
          )}

          {currentPage === 'security' && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <FileText size={20} />
                </div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl">Regulatory & Security Disclaimers</h1>
              </div>
              <div className="prose prose-invert text-white/70 text-sm sm:text-base leading-relaxed space-y-6">
                <p className="text-white font-semibold">Last Updated: June 2026</p>
                <p>
                  The following disclaimers outline the legal boundaries of electromagnetic operations and perimeter defense technologies manufactured by Calgara Worldwide.
                </p>
                <h3 className="text-white font-display font-semibold text-lg mt-8 mb-2">1. Interference Disclaimers</h3>
                <p>
                  Jamming devices emit high-powered radio frequency signals designed to disrupt communication links. Users are advised that operating jammers without prior regulatory coordination can result in serious legal penalties. It is the buyer's sole duty to verify licensing guidelines before system activation.
                </p>
                <h3 className="text-white font-display font-semibold text-lg mt-8 mb-2">2. Dual-Use Classification</h3>
                <p>
                  Many Calgara Worldwide products are subject to export regulations and dual-use hardware compliance models. Procurement, delivery, and support services are restricted to authorized government agencies, first responders, and licensed commercial infrastructure operators.
                </p>
                <h3 className="text-white font-display font-semibold text-lg mt-8 mb-2">3. Sensor Limitations</h3>
                <p>
                  Our detection and early warning systems (such as the D⁴-EWS and UAD-100) are highly accurate but depend on local field conditions, including RF noise floor levels, weather, and physical obstructions. Actual tracking ranges may vary.
                </p>
              </div>
            </div>
          )}
        </main>
      )}

      {/* 8. Footer - Made more professional with corporate details and legal links */}
      <footer className="relative border-t border-white/10 py-16 bg-[#040814] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            {/* Column 1: Brand */}
            <div className="flex flex-col gap-4">
              <Logo />
              <div className="text-xs font-bold tracking-widest text-white/80 uppercase mt-2">
                CALGARA WORLDWIDE PRIVATE LIMITED
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed font-light">
                Architecting global airspace security, tactical counter-UAS systems, and advanced environmental technologies.
              </p>
            </div>

            {/* Column 2: Contact & Registration */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-widest text-blue-400 uppercase">
                Contact & Compliance
              </h4>
              <div className="flex flex-col gap-2.5 text-[11px] text-white/60">
                <a href="tel:9892599220" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-white/30">Mob:</span> +91 98925 99220
                </a>
                <a href="mailto:contact@calgaraworldwide.com" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-white/30">Email:</span> contact@calgaraworldwide.com
                </a>
                <div className="flex items-center gap-2">
                  <span className="text-white/30">GSTIN:</span> 27AAHCC1170H1ZU
                </div>
              </div>
            </div>

            {/* Column 3: Address */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-widest text-blue-400 uppercase">
                Registered Office
              </h4>
              <p className="text-[11px] text-white/60 leading-relaxed font-light">
                Gat No 357/95, Plot No 4,<br />
                Behind Green Park Hotel,<br />
                Waghjaai Nagar, Kharabwadi,<br />
                Chakan MIDC, Chakan - 410050
              </p>
            </div>

            {/* Column 4: Links & Security */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-widest text-blue-400 uppercase">
                Legal & Security
              </h4>
              <div className="flex flex-col items-start gap-2.5 text-[11px] font-semibold tracking-wider text-white/40">
                <button 
                  onClick={() => setCurrentPage('privacy')}
                  className="hover:text-blue-400 transition-colors uppercase text-left"
                >
                  PRIVACY POLICY
                </button>
                <button 
                  onClick={() => setCurrentPage('terms')}
                  className="hover:text-blue-400 transition-colors uppercase text-left"
                >
                  TERMS OF USE
                </button>
                <button 
                  onClick={() => setCurrentPage('security')}
                  className="hover:text-blue-400 transition-colors uppercase text-left"
                >
                  SECURITY DISCLAIMERS
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Copyright bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/30 tracking-wider">
            <div>
              &copy; {new Date().getFullYear()} Calgara Worldwide Private Limited. All rights reserved.
            </div>
            <div className="text-center sm:text-right">
              All specifications and materials restricted to authorized clients and government agencies.
            </div>
          </div>

        </div>
      </footer>

      {/* 5. Product Details Modal/Sidebar */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          {/* Backdrop mask */}
          <div 
            className="absolute inset-0 bg-bgDark/85 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProduct(null)}
          />
          
          {/* Sidebar container */}
          <div className="relative w-full max-w-2xl h-full bg-[#0a0f1d] border-l border-white/10 flex flex-col z-10 animate-slide-left shadow-2xl overflow-y-auto">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#0a0f1d] z-10">
              <div className="flex flex-col">
                <span className="text-[9px] font-semibold tracking-widest text-blue-400 uppercase mb-1">
                  {selectedProduct.category}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {selectedProduct.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-full hover:bg-white/5 text-white/60 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 flex-grow flex flex-col gap-8">
              
              {/* Product Showcase Image */}
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/5">
                <img 
                  src={selectedProduct.imageUrl} 
                  alt={selectedProduct.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <div>
                <h4 className="text-[10px] font-semibold tracking-wider text-white/40 uppercase mb-2">Overview</h4>
                <p className="text-sm text-white/70 leading-relaxed font-light">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-[10px] font-semibold tracking-wider text-white/40 uppercase mb-3">Key Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
                      <CheckCircle size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications Table - Add overflow-x-auto to resolve mobile overflow */}
              <div>
                <h4 className="text-[10px] font-semibold tracking-wider text-white/40 uppercase mb-3">Technical Specifications</h4>
                <div className="border border-white/5 rounded-xl overflow-x-auto overflow-y-hidden">
                  <table className="w-full text-left border-collapse min-w-[400px]">
                    <thead>
                      <tr className="bg-white/5 text-[10px] text-white/50 border-b border-white/5 font-semibold">
                        <th className="p-3">Specification Parameter</th>
                        <th className="p-3">Operational Value</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs divide-y divide-white/5 text-white/80">
                      {selectedProduct.specs.map((spec, idx) => (
                        <tr key={idx} className="hover:bg-white/5">
                          <td className="p-3 font-medium text-white/50">{spec.label}</td>
                          <td className="p-3 font-semibold text-blue-400">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="p-6 border-t border-white/10 sticky bottom-0 bg-[#0a0f1d] flex gap-3">
              <button 
                onClick={() => handleRequestQuote(selectedProduct.title)}
                className="flex-1 py-3 px-4 rounded-xl text-center text-xs font-bold tracking-wider bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                REQUEST PRICING & DATASHEETS
              </button>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="py-3 px-6 rounded-xl border border-white/10 text-xs font-bold text-white/80 hover:bg-white/5 transition-colors"
              >
                CLOSE
              </button>
            </div>

          </div>
        </div>
      )}

      {/* D⁴-EWS Image Modal */}
      {d4EwsImageOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bgDark/90 backdrop-blur-md transition-opacity cursor-zoom-out"
          onClick={() => setD4EwsImageOpen(false)}
        >
          {/* Modal Container */}
          <div 
            className="relative max-w-5xl w-full bg-[#0a0f1d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 animate-fade-in flex flex-col cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#0a0f1d]">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-blue-400">
                D⁴-EWS System Architecture & Concept Diagram
              </h3>
              <button 
                onClick={() => setD4EwsImageOpen(false)}
                className="p-2 rounded-full hover:bg-white/5 text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
            <div className="relative w-full overflow-hidden bg-black/40 p-2 flex items-center justify-center">
              <img 
                src="/d4-ews.jpg" 
                alt="D4-EWS Airspace Awareness System Diagram" 
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-inner cursor-zoom-out"
                onClick={() => setD4EwsImageOpen(false)}
              />
            </div>
            <div className="p-4 border-t border-white/10 bg-[#0a0f1d] flex justify-end">
              <button 
                onClick={() => setD4EwsImageOpen(false)}
                className="px-6 py-2 rounded-xl border border-white/10 text-xs font-bold text-white/80 hover:bg-white/5 transition-colors cursor-pointer"
              >
                CLOSE DIAGRAM
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
