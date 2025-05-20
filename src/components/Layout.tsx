
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { AlertTriangle, Shield } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Layout: React.FC = () => {
  const location = useLocation();
  const { toast } = useToast();

  React.useEffect(() => {
    toast({
      title: "⚠️ Security Warning",
      description: "This website is intentionally vulnerable for educational purposes only.",
      duration: 5000,
    });
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/login", label: "SQL Injection" },
    { path: "/message-board", label: "XSS" },
    { path: "/file-upload", label: "File Upload" },
    { path: "/user-profile", label: "CSRF" },
    { path: "/admin", label: "Insecure Access" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-hacker-dark border-b border-hacker-red p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-8 w-8 mr-2 text-hacker-red" />
            <h1 className="text-2xl font-bold text-hacker-red glitch">HackMe</h1>
          </div>
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-yellow-400" />
            <span className="text-yellow-400 text-sm">For educational purposes only</span>
          </div>
        </div>
      </header>

      <div className="bg-black text-white p-2 overflow-x-auto">
        <div className="container mx-auto flex space-x-2 md:space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`
                px-3 py-1 rounded text-sm whitespace-nowrap 
                ${location.pathname === link.path 
                  ? 'bg-hacker-red text-white' 
                  : 'hover:bg-gray-800'
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <main className="container mx-auto flex-grow p-4">
        <Outlet />
      </main>

      <footer className="bg-hacker-dark border-t border-hacker-red p-4">
        <div className="container mx-auto text-center text-sm text-gray-400">
          <p>
            <span className="terminal-text">$</span> This application contains intentional security vulnerabilities. Do not use in production.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
