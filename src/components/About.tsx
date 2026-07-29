import React from 'react';
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';

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
          
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-slate-900 relative overflow-hidden flex items-center justify-center p-8 border border-slate-800 shadow-2xl">
              {/* Abstract network visual */}
              <div className="absolute inset-0 opacity-20 grid-pattern"></div>
              
              <div className="relative w-full h-full border border-slate-700/50 rounded-xl bg-slate-800/50 backdrop-blur-sm flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <div className="w-6 h-6 rounded-sm bg-blue-400"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-2 w-3/4 bg-slate-700 rounded"></div>
                  <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
                  <div className="h-2 w-5/6 bg-slate-700 rounded"></div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-8 w-24 bg-blue-600/40 rounded border border-blue-500/30"></div>
                  <div className="h-8 w-24 bg-slate-700/50 rounded border border-slate-600/50"></div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-6 w-12 h-12 bg-cyan-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
