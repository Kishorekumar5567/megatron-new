import React from 'react';
import { motion } from 'framer-motion';
import { Network, Laptop, Camera, ShieldCheck, Printer } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 border border-blue-100">
              <Network className="w-4 h-4" />
              <span>About Megatron Tech Solutions</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-slate-900 leading-tight mb-6">
              Building dependable systems for modern business.
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Established in 2014 in Udayarpalayam, Ariyalur District, Megatron Tech Solutions is dedicated to serving both residential and business customers. We focus on understanding each customer's needs, budget, and resources to design practical, cost-effective solutions.
              </p>
              <p>
                From IT assets and networks to security and wireless infrastructure, our focus remains on honest pricing, high-quality service, and absolute customer satisfaction. We help you manage your technology with complete confidence.
              </p>
            </div>
          </motion.div>
          
          {/* Innovative Product Visual */}
          <div className="relative h-full min-h-[450px] w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl"></div>

            {/* Central Product Showcase Grid */}
            <div className="relative w-full max-w-[400px] aspect-square">
              {/* Center Main Card - Laptop/Desktop */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center justify-center p-6 z-20 cursor-pointer"
              >
                <div className="w-20 h-20 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Laptop className="w-10 h-10" />
                </div>
                <span className="font-bold text-slate-800 text-center text-base font-display">Laptops & Desktops</span>
              </motion.div>

              {/* Top Right Card - CCTV */}
              <motion.div 
                initial={{ opacity: 0, x: 20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="absolute -top-4 right-0 md:-right-8 w-44 h-44 bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 flex flex-col items-center justify-center p-5 z-10 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-800 text-cyan-400 flex items-center justify-center mb-3">
                  <Camera className="w-7 h-7" />
                </div>
                <span className="font-semibold text-white text-center text-sm font-display">CCTV Surveillance</span>
              </motion.div>

              {/* Bottom Left Card - Printers */}
              <motion.div 
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5 }}
                className="absolute -bottom-4 left-0 md:-left-8 w-40 h-40 bg-blue-600 rounded-3xl shadow-lg border border-blue-500 flex flex-col items-center justify-center p-4 z-30 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center mb-3">
                  <Printer className="w-6 h-6" />
                </div>
                <span className="font-medium text-white text-center text-sm font-display">Printers & Copiers</span>
              </motion.div>

              {/* Bottom Right Card - Security/Antivirus */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5 }}
                className="absolute bottom-6 -right-4 md:-right-12 w-32 h-32 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center justify-center p-3 z-0 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="font-medium text-slate-700 text-center text-[11px] leading-tight">Cybersecurity Solutions</span>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
