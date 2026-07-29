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
          
          {/* Product Advertisement Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-12 lg:mt-0 flex justify-center lg:justify-end"
          >
            {/* Decorative background blurs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl"></div>
            
            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img 
                src="/about-products.png" 
                alt="Megatron Tech Solutions - Premium IT Products, Laptops and CCTV" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay label */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-bold font-display text-slate-900 mb-1 text-lg">Premium IT Infrastructure</h3>
                  <p className="text-sm text-slate-600">Enterprise-grade Laptops & Advanced Surveillance Systems</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
