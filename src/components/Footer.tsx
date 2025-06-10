import { Link } from 'react-router-dom';
import { Calculator, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">MathProject</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              Advancing mathematical science through innovative research, computational excellence, 
              and collaborative problem-solving approaches.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 cursor-pointer transition-colors">
                <Github className="h-5 w-5" />
              </div>
              <div className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 cursor-pointer transition-colors">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 cursor-pointer transition-colors">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 cursor-pointer transition-colors">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="text-slate-400 hover:text-white transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Research
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-400">
              <li>research@mathproject.edu</li>
              <li>+1 (555) 123-4567</li>
              <li>
                Mathematics Department<br />
                University Campus<br />
                City, State 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 MathProject. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;