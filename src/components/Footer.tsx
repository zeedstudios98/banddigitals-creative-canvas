
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    // Open Gmail with the email
    window.open(`mailto:banddigitals@gmail.com?subject=Get in touch&body=Hello, my email is: ${email}. I'd like to discuss working together.`, '_blank');
    toast.success("Opening your email client");
    setEmail('');
  };

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/cb46f468-82b0-4d5a-aaf1-b24493f425f6.png" 
                alt="BandDigitals Logo" 
                className="h-10 mr-2"
                style={{ filter: 'brightness(1.2)' }}
              />
            </Link>
            <p className="text-gray-400 text-sm">
              I craft digital experiences that elevate brands and connect with audiences through thoughtful design and strategic creativity.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/banddigitals" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-[#AC94F4] p-2.5 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com/saheedzeed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-[#AC94F4] p-2.5 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/saheed-ajisola" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-[#AC94F4] p-2.5 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:banddigitals@gmail.com" 
                className="bg-gray-800 hover:bg-[#AC94F4] p-2.5 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="tel:+2348068692619" 
                className="bg-gray-800 hover:bg-[#AC94F4] p-2.5 rounded-full transition-colors"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Portfolio', 'Services', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {['Web Design', 'Branding', 'UI/UX Design', 'Web Development', 'SEO Optimization', 'Ghost Writing'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <p className="text-gray-400 text-sm mb-4">
              Have a project in mind? Send me a message and let's create something amazing together.
            </p>
            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-l-full bg-gray-800 border-gray-700 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" className="rounded-r-full bg-[#AC94F4] hover:bg-[#AC94F4]/90">
                  <ArrowRight size={18} />
                </Button>
              </div>
              <p className="text-gray-500 text-xs">
                I respect your privacy. Your information will never be shared.
              </p>
            </form>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BandDigitals. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
