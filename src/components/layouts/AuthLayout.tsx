import React from 'react';
import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <Link to="/" className="flex items-center">
              <Building2 className="h-10 w-10 text-gold-primary" />
              <span className="ml-3 text-2xl font-serif font-bold text-foreground">
                RealEstate<span className="text-gold-primary">Pro</span>
              </span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-sm text-foreground-muted">
                {subtitle}
              </p>
            )}
          </div>

          {/* Form Content */}
          {children}
        </div>
      </div>

      {/* Right Side - Image/Branding */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div 
          className="absolute inset-0 h-full w-full object-cover bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/20 to-gold-dark/40" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Gerencie seus imóveis com elegância
            </h3>
            <p className="text-lg opacity-90">
              A plataforma mais completa para profissionais do mercado imobiliário.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;