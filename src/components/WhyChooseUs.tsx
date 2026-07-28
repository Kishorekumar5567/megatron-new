import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Reliable systems',
  'Responsive support',
  'Practical solutions',
  'Experienced professionals',
  'Scalable infrastructure',
  'Security-first approach',
  'Clear communication',
  'Long-term partnership'
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-megatron" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Why partner with us?
            </h2>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Technology should be an enabler, not a bottleneck. We build our client relationships on a foundation of trust, technical excellence, and clear communication.
              </p>
              <p>
                When you partner with Megatron Tech Solutions, you're not just getting a vendor—you're getting an extension of your own team that takes proactive responsibility for your digital infrastructure.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors mt-4"
              >
                Learn how we can help your business
                <span className="ml-2 text-xl leading-none">&rarr;</span>
              </a>
            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
