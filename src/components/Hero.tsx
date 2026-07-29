import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ChevronDown, Headset, Circle } from 'lucide-react';

const Hero: React.FC = () => {
  // Animation variants
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  const floatingVars: Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const barHeights = [40, 60, 50, 75, 55, 80, 95, 85, 90, 70, 85, 95, 100];

  return (
    <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-48 overflow-hidden bg-gradient-to-br from-[#072445] via-[#103861] to-[#0a2f57] text-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-[#1e63a8]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[400px] bg-cyan-900/40 rounded-full blur-[120px]" />
        
        {/* Subtle grid pattern for technical feel */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Curved decorative lines (SVG) */}
        <svg className="absolute top-0 right-0 w-full h-full opacity-30" style={{ zIndex: 0 }}>
          <path d="M 70% -10% Q 80% 40% 110% 60%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
          <path d="M 85% -10% Q 100% 50% 120% 90%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
          <circle cx="85%" cy="20%" r="4" fill="rgba(255,255,255,0.2)" />
          <circle cx="95%" cy="30%" r="2" fill="rgba(255,255,255,0.1)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={containerVars}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 max-w-2xl"
          >
            <motion.div variants={itemVars} className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[10px] sm:text-xs font-bold tracking-widest uppercase text-cyan-100">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                INFRASTRUCTURE, WITHOUT THE UNCERTAINTY
              </div>
            </motion.div>

            <motion.h1 
              variants={itemVars}
              className="text-6xl sm:text-7xl lg:text-[5.5rem] font-bold font-display leading-[1.05] tracking-tight mb-8 text-white"
            >
              Your Trusted <br className="hidden sm:block" />
              IT Partner in <br className="hidden sm:block" />
              <span className="text-cyan-200">Ariyalur.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVars}
              className="text-lg sm:text-xl text-blue-100/80 mb-10 leading-relaxed max-w-xl text-balance"
            >
              Providing fast and affordable technology services for homes and businesses. Highlights include laptop repairs, CCTV installation, antivirus solutions, and billing software.
            </motion.p>
            
            <motion.div 
              variants={itemVars}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-cyan-400 text-[#072445] font-bold hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-900/20 group text-sm"
              >
                Talk to our team
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-slate-800/30 border border-slate-700/50 text-white font-semibold hover:bg-slate-700/40 transition-colors backdrop-blur-sm text-sm"
              >
                Explore capabilities
                <ChevronDown className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Illustration - Product Showcase */}
          <div className="lg:col-span-5 relative hidden md:block mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
              className="relative w-full h-[500px] flex items-center justify-center"
            >
              
              {/* Glowing orb behind image */}
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s' }} />
              
              {/* Main Product Image */}
              <motion.img 
                variants={floatingVars}
                initial="initial"
                animate="animate"
                src="/hero-products.png" 
                alt="Megatron IT Products & CCTV"
                className="relative z-10 w-full max-w-[480px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />

              {/* CCTV Highlight Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-16 -right-4 bg-[#072445]/80 backdrop-blur-md border border-cyan-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-4 rounded-2xl z-20 flex items-center gap-4"
              >
                <div className="relative w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping absolute" />
                  <div className="w-3 h-3 rounded-full bg-cyan-400 relative z-10" />
                </div>
                <div>
                  <p className="text-[10px] text-cyan-300 font-semibold uppercase tracking-wider">Smart Security</p>
                  <p className="text-white font-bold text-sm">CCTV Solutions</p>
                </div>
              </motion.div>

              {/* Laptop Highlight Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-20 -left-6 bg-[#072445]/80 backdrop-blur-md border border-blue-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-4 rounded-2xl z-20 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] text-blue-300 font-semibold uppercase tracking-wider">Premium IT</p>
                  <p className="text-white font-bold text-sm">Laptops & Desktops</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade gradient to blend with the white section below */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
