import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Plus,
  Eye,
  ArrowUpRight,
  Calendar,
  MapPin,
  Phone,
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';
import { mockAnalytics, mockLeads, mockProperties, formatCurrency } from '@/lib/mockData';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const COLORS = ['hsl(51, 100%, 52%)', 'hsl(51, 100%, 63%)', 'hsl(43, 84%, 39%)', 'hsl(51, 100%, 90%)'];

const Dashboard = () => {
  const navigate = useNavigate();
  const recentLeads = mockLeads.slice(0, 3);
  const recentProperties = mockProperties.slice(0, 3);

  const statsCards = [
    {
      title: 'Total de Imóveis',
      value: mockAnalytics.totalProperties,
      change: '+12%',
      changeType: 'increase' as const,
      icon: Building2,
      description: 'Últimos 30 dias',
    },
    {
      title: 'Leads do Mês',
      value: mockAnalytics.leadsThisMonth,
      change: '+18%',
      changeType: 'increase' as const,
      icon: Users,
      description: 'Taxa de conversão: 12.4%',
    },
    {
      title: 'Vendas do Mês',
      value: mockAnalytics.soldThisMonth,
      change: '+25%',
      changeType: 'increase' as const,
      icon: TrendingUp,
      description: 'Meta: 15 vendas',
    },
    {
      title: 'Receita Total',
      value: formatCurrency(mockAnalytics.totalRevenue),
      change: '+32%',
      changeType: 'increase' as const,
      icon: DollarSign,
      description: 'Valor médio: ' + formatCurrency(mockAnalytics.averagePrice),
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif font-bold text-foreground">Dashboard</h1>
            <p className="text-foreground-muted">
              Bem-vindo de volta! Aqui está um resumo do seu negócio.
            </p>
          </div>
          <Button onClick={() => navigate('/properties/new')} className="gold-glow">
            <Plus className="mr-2 h-4 w-4" />
            Novo Imóvel
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statsCards.map((stat, index) => (
            <Card key={index} className="hover-lift cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-gold-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {typeof stat.value === 'string' ? stat.value : stat.value.toLocaleString()}
                </div>
                <div className="flex items-center space-x-2 text-xs text-foreground-muted">
                  <Badge 
                    variant={stat.changeType === 'increase' ? 'default' : 'destructive'}
                    className="text-xs"
                  >
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    {stat.change}
                  </Badge>
                  <span>{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Revenue Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Receita Mensal</CardTitle>
              <CardDescription>
                Evolução da receita nos últimos 6 meses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockAnalytics.monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [formatCurrency(Number(value)), 'Receita']}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="hsl(51, 100%, 52%)" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(51, 100%, 52%)', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Property Types Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Tipos de Imóveis</CardTitle>
              <CardDescription>
                Distribuição do portfólio por categoria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={mockAnalytics.propertyTypes}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {mockAnalytics.propertyTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Recent Leads */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Leads Recentes</CardTitle>
                <CardDescription>Novos contatos interessados</CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={() => navigate('/leads')}>
                <Eye className="mr-2 h-4 w-4" />
                Ver todos
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentLeads.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-1">
                    <p className="font-medium text-sm">{lead.name}</p>
                    <div className="flex items-center space-x-2 text-xs text-foreground-muted">
                      <Phone className="h-3 w-3" />
                      <span>{lead.phone}</span>
                    </div>
                    <p className="text-xs text-foreground-muted line-clamp-1">
                      {lead.message}
                    </p>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge 
                      variant={lead.priority === 'high' ? 'destructive' : 'secondary'}
                      className="text-xs"
                    >
                      {lead.priority === 'high' ? 'Alta' : lead.priority === 'medium' ? 'Média' : 'Baixa'}
                    </Badge>
                    <p className="text-xs text-foreground-muted">
                      {new Date(lead.createdAt).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Properties */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Imóveis Recentes</CardTitle>
                <CardDescription>Últimos imóveis cadastrados</CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={() => navigate('/properties')}>
                <Eye className="mr-2 h-4 w-4" />
                Ver todos
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentProperties.map((property) => (
                <div key={property.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-card-hover cursor-pointer">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 space-y-1">
                    <p className="font-medium text-sm line-clamp-1">{property.title}</p>
                    <div className="flex items-center space-x-2 text-xs text-foreground-muted">
                      <MapPin className="h-3 w-3" />
                      <span>{property.address.neighborhood}</span>
                    </div>
                    <p className="text-sm font-semibold text-gold-primary">
                      {formatCurrency(property.price)}
                    </p>
                  </div>
                  <Badge variant="outline">
                    {property.type === 'sale' ? 'Venda' : 'Aluguel'}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Top Agents */}
        <Card>
          <CardHeader>
            <CardTitle>Top Corretores</CardTitle>
            <CardDescription>Melhores performances do mês</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={mockAnalytics.topAgents} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'sales' ? `${value} vendas` : formatCurrency(Number(value)),
                    name === 'sales' ? 'Vendas' : 'Receita'
                  ]}
                />
                <Bar dataKey="sales" fill="hsl(51, 100%, 52%)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;