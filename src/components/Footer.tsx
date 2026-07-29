import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B192C] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/logo.png" 
                alt="Megatron Tech Solutions Logo" 
                className="w-10 h-10 object-cover rounded-xl shadow-sm border border-slate-700/50 bg-white"
              />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Megatron Tech Solutions
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your trusted local IT partner for fast, affordable, and high-quality technology solutions for homes and businesses.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services & Capabilities</a></li>
              <li><a href="#why-megatron" className="hover:text-blue-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:info@megatrontechsolution.com" className="hover:text-blue-400 transition-colors">info@megatrontechsolution.com</a></li>
              <li><a href="tel:+914422502344" className="hover:text-blue-400 transition-colors">+91 44 22502344</a></li>
              <li><a href="tel:+918122850150" className="hover:text-blue-400 transition-colors">+91 8122850150</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Location</h4>
            <address className="not-italic text-sm text-slate-400 space-y-1">
              <p>Kottai vasal Keelvithi,</p>
              <p>Udayarpalayam,</p>
              <p>Tamil Nadu 621804</p>
              <p className="mt-4 pt-4 border-t border-slate-800">
                Operating since <span className="text-slate-300 font-mono">2014</span>
              </p>
            </address>
          </div>
          
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-800 text-sm text-slate-500">
          <p>&copy; {currentYear} Megatron Tech Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
