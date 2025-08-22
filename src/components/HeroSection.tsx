import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Play, TrendingUp, Shield, Users } from 'lucide-react';
import heroImage from '@/assets/hero-luxury-real-estate.jpg';

const HeroSection = () => {
  return (
    <section className="hero-video-container relative">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury real estate interior" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay */}
      <div className="hero-video-overlay" />
      
      {/* Hero Content */}
      <div className="hero-content max-w-4xl px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Transforme Sua
            <span className="text-transparent bg-clip-text bg-gold-gradient block">
              Gestão Imobiliária
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Plataforma SaaS completa para corretores e imobiliárias. 
            Gerencie propriedades, clientes e vendas em um só lugar.
          </p>
          
          {/* Hero Search */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Buscar por seu imovel..."
                  className="pl-12 h-12 bg-white border-0 text-gray-900 placeholder:text-gray-500"
                />
              </div>
              <Button variant="hero" size="lg" className="h-12 px-8">
                <Search className="w-5 h-5 mr-2" />
                Buscar Imóveis
              </Button>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="luxury" size="xl" className="min-w-[200px]">
              Começar Gratuitamente
            </Button>
            <Button variant="premium" size="xl" className="min-w-[200px] bg-white/10 border-white/40 text-white hover:bg-white hover:text-gray-900">
              <Play className="w-5 h-5 mr-2" />
              Ver Demonstração
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-gold-secondary mr-2" />
                <span className="text-3xl font-bold text-gold-secondary">+150%</span>
              </div>
              <p className="text-gray-300">Aumento nas Vendas</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-gold-secondary mr-2" />
                <span className="text-3xl font-bold text-gold-secondary">100%</span>
              </div>
              <p className="text-gray-300">Segurança Garantida</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-gold-secondary mr-2" />
                <span className="text-3xl font-bold text-gold-secondary">5.000+</span>
              </div>
              <p className="text-gray-300">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;