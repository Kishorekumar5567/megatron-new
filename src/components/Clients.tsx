import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  'TANSIDCO',
  'Directorate of Industries & Commerce',
  'Tamil Nadu Forest Department',
  'Tamil Nadu Biodiversity Conservation',
  'MSME',
  'Labour Commission, Shastri Bhavan',
  'Directorate of College Education',
  'Social Welfare Department',
  'Directorate of Social Defence',
  'DGP Office'
];

const Clients: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4"
          >
            Trusted by Government & Enterprise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-display text-slate-900"
          >
            Delivering robust infrastructure to organizations that demand reliability.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center p-6 bg-slate-50 border border-slate-100 rounded-xl text-center hover:bg-slate-100 hover:border-slate-200 transition-colors h-full"
            >
              <span className="text-sm font-semibold text-slate-600 font-display">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Clients;
