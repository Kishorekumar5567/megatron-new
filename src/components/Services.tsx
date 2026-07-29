import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Printer, Camera, ShieldAlert, Database, Monitor, Wifi, Cpu, FileText, Wrench } from 'lucide-react';

const services = [
  {
    icon: Laptop,
    title: 'Desktop & Laptop Sales & Service',
    description: 'Expert diagnostics, repair, and maintenance for workstations and laptops to ensure maximum productivity.'
  },
  {
    icon: Printer,
    title: 'Printer Sales & Service',
    description: 'Setup, troubleshooting, and repair for all types of business printers and multifunction devices.'
  },
  {
    icon: Camera,
    title: 'CCTV Camera Installation & Sales',
    description: 'Comprehensive security surveillance systems to monitor and protect your physical assets.'
  },
  {
    icon: ShieldAlert,
    title: 'Antivirus & Cybersecurity',
    description: 'Robust endpoint protection and stateful security to defend your network against modern digital threats.'
  },
  {
    icon: Database,
    title: 'Data Recovery Service',
    description: 'Professional data retrieval services to recover critical business information from damaged or corrupted drives.'
  },
  {
    icon: Monitor,
    title: 'OS Installation & Virus Removal',
    description: 'Clean installation, upgrades, and configuration of Windows, Linux, and other operating systems.'
  },
  {
    icon: Wifi,
    title: 'Wireless Networking Setup',
    description: 'Enterprise-grade wireless network deployments and structured cabling for reliable connectivity.'
  },
  {
    icon: Cpu,
    title: 'Hardware & Software Installation',
    description: 'Seamless integration of new components and networking devices into your existing IT environment.'
  },
  {
    icon: FileText,
    title: 'Billing & Accounting Software',
    description: 'Setup and configuration of reliable billing and point-of-sale software tailored to your business needs.'
  },
  {
    icon: Wrench,
    title: 'Onsite Engineer Service',
    description: 'Responsive, in-person assistance for troubleshooting hardware and network issues directly at your location.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0B192C] text-white overflow-hidden relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display mb-6"
          >
            Capabilities & Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-300"
          >
            End-to-end technology solutions designed, deployed, and supported by experts.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.3)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-900/50 text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
