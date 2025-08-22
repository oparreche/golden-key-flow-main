import React from 'react';
import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    produto: [
      { name: 'Funcionalidades', href: '#features' },
      { name: 'Preços', href: '#pricing' },
      { name: 'Integrações', href: '#integrations' },
      { name: 'API', href: '#api' },
      { name: 'Segurança', href: '#security' }
    ],
    empresa: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Carreira', href: '#careers' },
      { name: 'Imprensa', href: '#press' },
      { name: 'Parceiros', href: '#partners' },
      { name: 'Blog', href: '#blog' }
    ],
    suporte: [
      { name: 'Central de Ajuda', href: '#help' },
      { name: 'Documentação', href: '#docs' },
      { name: 'Status do Sistema', href: '#status' },
      { name: 'Contato', href: '#contact' },
      { name: 'Treinamentos', href: '#training' }
    ],
    legal: [
      { name: 'Termos de Uso', href: '#terms' },
      { name: 'Política de Privacidade', href: '#privacy' },
      { name: 'Cookies', href: '#cookies' },
      { name: 'LGPD', href: '#lgpd' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Building2 className="h-8 w-8 text-gold-primary" />
                <span className="ml-2 text-2xl font-serif font-bold">
                  RealEstate<span className="text-gold-primary">Pro</span>
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                A plataforma SaaS mais completa para gestão imobiliária. 
                Revolucione sua forma de trabalhar com tecnologia de ponta.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gold-primary mr-3" />
                  <span className="text-gray-300">contato@realestatepro.com.br</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gold-primary mr-3" />
                  <span className="text-gray-300">+55 (11) 9999-9999</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gold-primary mr-3" />
                  <span className="text-gray-300">São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div>
              <h3 className="text-lg font-semibold text-gold-primary mb-4">Produto</h3>
              <ul className="space-y-2">
                {footerLinks.produto.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-gold-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gold-primary mb-4">Empresa</h3>
              <ul className="space-y-2">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-gold-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gold-primary mb-4">Suporte</h3>
              <ul className="space-y-2">
                {footerLinks.suporte.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-gold-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gold-primary mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-gold-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-4 lg:mb-0">
              <h3 className="text-xl font-semibold mb-2">Fique por dentro das novidades</h3>
              <p className="text-gray-300">Receba dicas exclusivas e atualizações da plataforma.</p>
            </div>
            
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 lg:w-80 px-4 py-3 rounded-l-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-primary focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gold-gradient text-white rounded-r-lg font-semibold hover:shadow-gold transition-all duration-300">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-300 mb-4 md:mb-0">
              <p>&copy; 2024 RealEstatePro. Todos os direitos reservados.</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-gold-primary transition-colors p-2 rounded-lg hover:bg-gray-800"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;