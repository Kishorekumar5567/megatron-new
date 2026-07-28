import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Wifi, Target } from 'lucide-react';

const strengths = [
  {
    icon: Zap,
    title: 'Optimal performance',
    description: 'Tracking, analyzing, and mobilizing everything depends on your wireless LAN and IT assets. With Megatron Tech Solutions, performance is optimized, security is tighter, and troubleshooting is faster.'
  },
  {
    icon: Wifi,
    title: 'Smart mobility',
    description: 'Deploy devices quickly, support voice and video applications smoothly, and connect roaming users to strong, reliable wireless signals.'
  },
  {
    icon: Target,
    title: 'Impactful engagement',
    description: 'Provide the right assistance and information at the right moment with location-aware technology and reliable digital infrastructure.'
  }
];

const Strengths: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6"
          >
            Our strength
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 space-y-4"
          >
            <p>
              The Megatron Tech Solutions team consists of professionals with excellent technical and specialized qualifications in their respective areas of responsibility.
            </p>
            <p>
              Our team members are selected carefully, trained continuously, and supported with ongoing technical education. This allows us to respond quickly to customer requirements and deliver dependable service.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 relative">
                <item.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold font-display text-slate-900 mb-4 relative">
                {item.title}
              </h3>
              
              <p className="text-slate-600 relative">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
