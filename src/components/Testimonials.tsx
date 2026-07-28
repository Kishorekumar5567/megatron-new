import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-lg border border-blue-100 relative">
          <Quote className="absolute top-8 left-8 w-16 h-16 text-blue-100 rotate-180" />
          
          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-slate-100 border-4 border-white shadow-xl relative">
                {/* Abstract professional profile visual instead of stock image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-400 opacity-90 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-white tracking-widest">SG</span>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-8 text-center lg:text-left"
            >
              <div className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                <p className="mb-4">
                  "Sincere gratitude to our customers and partners for their unwavering support. Based on our solid business portfolio, Megatron Tech Solutions has delivered reliable and smart solutions."
                </p>
                <p>
                  "We are committed to achieving innovation and technology excellence, which gives us a strong competitive edge in the market."
                </p>
              </div>
              
              <div>
                <div className="text-lg font-bold font-display text-slate-900">
                  Sampathkumar G.
                </div>
                <div className="text-blue-600 font-medium">
                  CEO — Megatron Tech Solutions
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
