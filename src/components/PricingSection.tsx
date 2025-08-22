import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown, Zap } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'R$ 99',
      period: '/mês',
      description: 'Perfeito para corretores autônomos',
      icon: Zap,
      features: [
        'Até 50 imóveis cadastrados',
        'CRM básico para clientes',
        'Relatórios essenciais',
        'Suporte por email',
        'App mobile',
        'Backup automático'
      ],
      popular: false,
      cta: 'Começar Grátis',
      highlight: false
    },
    {
      name: 'Professional',
      price: 'R$ 299',
      period: '/mês',
      description: 'Ideal para pequenas imobiliárias',
      icon: Star,
      features: [
        'Até 500 imóveis cadastrados',
        'CRM avançado + automações',
        'Dashboard analítico completo',
        'Mapas interativos',
        'Chat integrado',
        'Contratos digitais',
        'Suporte prioritário',
        'Integrações com portais',
        'White label básico'
      ],
      popular: true,
      cta: 'Mais Popular',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'R$ 599',
      period: '/mês',
      description: 'Para grandes imobiliárias e redes',
      icon: Crown,
      features: [
        'Imóveis ilimitados',
        'Multi-usuários ilimitados',
        'IA para recomendações',
        'Relatórios personalizados',
        'API completa',
        'White label completo',
        'Treinamento dedicado',
        'Gerente de conta',
        'SLA garantido',
        'Customizações exclusivas'
      ],
      popular: false,
      cta: 'Falar com Vendas',
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Planos que
            <span className="text-transparent bg-clip-text bg-gold-gradient"> Crescem</span> com Você
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Escolha o plano ideal para seu negócio. Todos incluem 30 dias de teste gratuito.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover-lift ${
                plan.highlight 
                  ? 'border-gold-primary shadow-gold scale-105' 
                  : 'border-border hover:border-gold-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gold-gradient text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-lg mb-4 ${
                  plan.highlight 
                    ? 'bg-gold-gradient' 
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800'
                }`}>
                  <plan.icon className={`h-8 w-8 ${plan.highlight ? 'text-white' : 'text-gold-primary'}`} />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-card-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-foreground-muted mb-4">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-card-foreground">
                    {plan.price}
                  </span>
                  <span className="text-foreground-muted text-lg">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-card-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Button 
                variant={plan.highlight ? "luxury" : "premium"} 
                size="lg" 
                className="w-full"
              >
                {plan.cta}
              </Button>

              {/* Highlight Background */}
              {plan.highlight && (
                <div className="absolute inset-0 bg-gold-gradient opacity-5 rounded-2xl pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gold-primary/10 to-gold-secondary/10 rounded-2xl p-8 border border-gold-primary/20">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Precisa de algo personalizado?
            </h3>
            <p className="text-foreground-muted mb-6 max-w-2xl mx-auto">
              Para redes com necessidades específicas, oferecemos soluções customizadas com recursos exclusivos.
            </p>
            <Button variant="premium" size="lg">
              Solicitar Proposta Personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;