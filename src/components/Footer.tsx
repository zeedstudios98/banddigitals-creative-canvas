
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <span className="font-serif font-bold text-2xl">
                Band<span className="text-brand-lavender">Digitals</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              We craft digital experiences that elevate brands and inspire audiences through thoughtful design and strategic innovation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/banddigitals" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-brand-lavender p-2.5 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com/saheedzeed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-brand-lavender p-2.5 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/saheed-ajisola" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-brand-lavender p-2.5 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:banddigitals@gmail.com" 
                className="bg-gray-800 hover:bg-brand-lavender p-2.5 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="tel:+2348068692619" 
                className="bg-gray-800 hover:bg-brand-lavender p-2.5 rounded-full transition-colors"
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
                    to="/services"
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
            <h3 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our latest insights, trends, and news in creative design.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-l-full bg-gray-800 border-gray-700 text-white"
                />
                <Button className="rounded-r-full bg-brand-lavender hover:bg-brand-lavender/90">
                  <Mail size={18} />
                </Button>
              </div>
              <p className="text-gray-500 text-xs">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
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
            <Link to="/sitemap" className="text-gray-500 hover:text-white text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
