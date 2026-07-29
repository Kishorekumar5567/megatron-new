import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Contact',
      description: 'Reach out to us to schedule an appointment or request an onsite visit.'
    },
    {
      step: '02',
      title: 'Free Diagnosis',
      description: 'We perform a thorough evaluation to identify the root cause at no charge.'
    },
    {
      step: '03',
      title: 'Expert Repair & Service',
      description: 'Our certified technicians implement the fix quickly and effectively.'
    },
    {
      step: '04',
      title: 'Delivery & Support',
      description: 'We deliver your fixed system with comprehensive after-service support.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            A simple and effective workflow to ensure your IT systems are up and running perfectly.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="text-5xl font-extrabold text-blue-100/50 mb-4 font-display">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
