import React from 'react';
import { 
  BarChart3, 
  MapPin, 
  Users, 
  Calendar, 
  MessageSquare, 
  Shield,
  Smartphone,
  TrendingUp,
  FileText
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Dashboard Analítico',
      description: 'Visualize métricas de vendas, leads e performance em tempo real com gráficos interativos.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Mapas Interativos',
      description: 'Explore propriedades em mapas detalhados com filtros avançados e localização precisa.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'CRM Completo',
      description: 'Gerencie clientes, leads e histórico de interações em uma plataforma unificada.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'Agenda Inteligente',
      description: 'Agende visitas, reuniões e lembretes com sincronização automática do calendário.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: MessageSquare,
      title: 'Chat Integrado',
      description: 'Comunicação instantânea com clientes através de chat, WhatsApp e e-mail.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Dados protegidos com criptografia de ponta e backup automático na nuvem.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Smartphone,
      title: 'App Mobile',
      description: 'Acesse todas as funcionalidades pelo smartphone com aplicativo nativo.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: TrendingUp,
      title: 'Relatórios Avançados',
      description: 'Gere relatórios detalhados de vendas, comissões e performance comercial.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FileText,
      title: 'Contratos Digitais',
      description: 'Crie, assine e gerencie contratos digitalmente com validade jurídica.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="features" className="py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Funcionalidades
            <span className="text-transparent bg-clip-text bg-gold-gradient"> Premium</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Tudo que você precisa para revolucionar sua gestão imobiliária em uma plataforma completa e intuitiva.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover-lift border border-border"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-gold-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-serif font-bold text-card-foreground mb-4">
              Pronto para transformar seu negócio?
            </h3>
            <p className="text-foreground-muted mb-6 max-w-2xl mx-auto">
              Junte-se a milhares de profissionais que já transformaram sua gestão imobiliária com nossa plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold-gradient text-white px-8 py-3 rounded-lg font-semibold hover:shadow-gold transition-all duration-300 hover:scale-105">
                Começar Teste Gratuito
              </button>
              <button className="border-2 border-gold-primary text-gold-primary px-8 py-3 rounded-lg font-semibold hover:bg-gold-primary hover:text-white transition-all duration-300">
                Agendar Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;