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
  Scale
} from 'lucide-react';
import { Logo } from './components/Logo';
import { PRODUCTS, type Product } from './data/products';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'security'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div 
                    key={product.id} 
                    className="glow-card rounded-2xl overflow-hidden flex flex-col h-full group cursor-pointer"
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

          {/* 6. About Section */}
          <section id="about" className="relative py-24 border-t border-white/5 bg-bgDark/45">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div>
                  <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Operational Mission</span>
                  <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white mt-2 mb-6">
                    Protecting High-Risk Spheres Worldwide
                  </h2>
                  <p className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-light">
                    Calgara worldwide develops intelligence-led countermeasures to neutralize critical airspace vulnerabilities. We prioritize advanced RF scanning, directional interference networks, and intelligent kinetic drones built to operate seamlessly under severe operational environments.
                  </p>
                  <p className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                    Our global footprint is backed by real engineering innovation and a dedicated commitment to environmental conservation through custom separation systems.
                  </p>
                </div>

                <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden border border-white/10 glow-border">
                  <img 
                    src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=800&q=80" 
                    alt="Radar surveillance station" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bgDark to-transparent" />
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

      {/* 8. Footer - Made more professional with page links */}
      <footer className="relative border-t border-white/5 py-12 bg-bgDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-3">
            <Logo />
            <div className="text-[10px] text-white/40 tracking-wider text-center md:text-left max-w-xs mt-2">
              E 201 Globe Heights, Film City Road, Gokuldham, Goregaon East, Mumbai 400063
            </div>
          </div>

          {/* Professional Document Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-wider text-white/40">
            <button 
              onClick={() => setCurrentPage('privacy')}
              className="hover:text-blue-400 transition-colors uppercase"
            >
              PRIVACY POLICY
            </button>
            <button 
              onClick={() => setCurrentPage('terms')}
              className="hover:text-blue-400 transition-colors uppercase"
            >
              TERMS OF USE
            </button>
            <button 
              onClick={() => setCurrentPage('security')}
              className="hover:text-blue-400 transition-colors uppercase"
            >
              SECURITY DISCLAIMERS
            </button>
          </div>

          <div className="text-[10px] text-white/30 tracking-wider text-center md:text-right">
            &copy; {new Date().getFullYear()} Calgara worldwide. <br />
            All specifications and materials restricted to authorized clients.
          </div>
        </div>
      </footer>

    </div>
  );
}
