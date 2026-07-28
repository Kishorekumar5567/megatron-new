import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '2017', label: 'Established' },
  { value: '43', label: 'Clients' },
  { value: '21', label: 'Dealers' },
  { value: '24×7', label: 'Support hours' },
  { value: '14', label: 'Hard workers' },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-slate-50 relative pb-20">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-20 sm:-mt-24">
        
        <div className="bg-white rounded-[24px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 p-2 sm:p-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y divide-slate-100 lg:divide-y-0 lg:divide-x lg:divide-slate-100">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`py-8 sm:py-10 px-6 flex flex-col justify-center text-left sm:pl-10 ${
                  index === stats.length - 1 && stats.length % 2 !== 0 && index % 2 === 0 ? 'col-span-2 md:col-span-1 lg:col-span-1' : ''
                }`}
              >
                <div className="text-3xl md:text-[2.5rem] leading-none font-bold font-display text-[#072445] mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Stats;
