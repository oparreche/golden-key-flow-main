import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Menu, 
  X, 
  User, 
  Settings,
  Bell,
  Search
} from 'lucide-react';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Preços', href: '#pricing' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Building2 className="h-8 w-8 text-gold-primary" />
              <span className="ml-2 text-xl font-serif font-bold text-foreground">
                RealEstate<span className="text-gold-primary">Pro</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground-muted hover:text-gold-primary transition-colors duration-300 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/login'}>
              <User className="h-4 w-4 mr-2" />
              Entrar
            </Button>
            <Button variant="hero" onClick={() => window.location.href = '/register'}>
              Começar Grátis
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground-muted hover:text-gold-primary block px-3 py-2 text-base font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-3 space-x-3">
                <Button variant="outline" className="flex-1" onClick={() => window.location.href = '/login'}>
                  <User className="h-4 w-4 mr-2" />
                  Entrar
                </Button>
                <Button variant="hero" className="flex-1" onClick={() => window.location.href = '/register'}>
                  Começar Grátis
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;