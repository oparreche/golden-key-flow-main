import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Plus, 
  Search, 
  Filter, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Eye,
  Edit,
  Heart,
  Share2,
  MoreVertical,
  Building2,
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { mockProperties, formatCurrency, searchProperties, Property } from '@/lib/mockData';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const Properties = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    category: '',
    status: '',
    minPrice: '',
    maxPrice: '',
  });

  const filteredProperties = useMemo(() => {
    return searchProperties(mockProperties, searchQuery, {
      type: filters.type || undefined,
      category: filters.category || undefined,
      minPrice: filters.minPrice ? Number(filters.minPrice) : undefined,
      maxPrice: filters.maxPrice ? Number(filters.maxPrice) : undefined,
    }).filter(property => {
      if (filters.status && property.status !== filters.status) return false;
      return true;
    });
  }, [searchQuery, filters]);

  const getStatusBadge = (status: Property['status']) => {
    const statusMap = {
      available: { label: 'Disponível', variant: 'default' as const },
      pending: { label: 'Pendente', variant: 'secondary' as const },
      sold: { label: 'Vendido', variant: 'destructive' as const },
      rented: { label: 'Alugado', variant: 'destructive' as const },
    };
    
    return statusMap[status] || { label: status, variant: 'secondary' as const };
  };

  const getCategoryLabel = (category: Property['category']) => {
    const categoryMap = {
      apartment: 'Apartamento',
      house: 'Casa',
      commercial: 'Comercial',
      land: 'Terreno',
    };
    return categoryMap[category] || category;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif font-bold text-foreground">Imóveis</h1>
            <p className="text-foreground-muted">
              Gerencie seu portfólio de {mockProperties.length} imóveis
            </p>
          </div>
          <Button onClick={() => navigate('/properties/new')} className="gold-glow">
            <Plus className="mr-2 h-4 w-4" />
            Novo Imóvel
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              Filtros
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted" />
                <Input
                  placeholder="Buscar imóveis..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={filters.type} onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todos os tipos</SelectItem>
                  <SelectItem value="sale">Venda</SelectItem>
                  <SelectItem value="rent">Aluguel</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filters.category} onValueChange={(value) => setFilters(prev => ({ ...prev, category: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todas as categorias</SelectItem>
                  <SelectItem value="apartment">Apartamento</SelectItem>
                  <SelectItem value="house">Casa</SelectItem>
                  <SelectItem value="commercial">Comercial</SelectItem>
                  <SelectItem value="land">Terreno</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filters.status} onValueChange={(value) => setFilters(prev => ({ ...prev, status: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todos os status</SelectItem>
                  <SelectItem value="available">Disponível</SelectItem>
                  <SelectItem value="pending">Pendente</SelectItem>
                  <SelectItem value="sold">Vendido</SelectItem>
                  <SelectItem value="rented">Alugado</SelectItem>
                </SelectContent>
              </Select>

              <Input
                placeholder="Preço mín."
                type="number"
                value={filters.minPrice}
                onChange={(e) => setFilters(prev => ({ ...prev, minPrice: e.target.value }))}
              />

              <Input
                placeholder="Preço máx."
                type="number"
                value={filters.maxPrice}
                onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
              />
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-foreground-muted">
            {filteredProperties.length} imóveis encontrados
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-foreground-muted">Ordenar por:</span>
            <Select defaultValue="recent">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Mais recentes</SelectItem>
                <SelectItem value="price-asc">Menor preço</SelectItem>
                <SelectItem value="price-desc">Maior preço</SelectItem>
                <SelectItem value="area">Maior área</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="hover-lift cursor-pointer group">
              <div className="relative">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant={property.type === 'sale' ? 'default' : 'secondary'}>
                    {property.type === 'sale' ? 'Venda' : 'Aluguel'}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge {...getStatusBadge(property.status)}>
                    {getStatusBadge(property.status).label}
                  </Badge>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-1">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-serif font-semibold text-lg line-clamp-1">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-sm text-foreground-muted">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.address.neighborhood}, {property.address.city}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        {property.bedrooms}
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        {property.bathrooms}
                      </div>
                      <div className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />
                        {property.area}m²
                      </div>
                    </div>
                    <Badge variant="outline">
                      {getCategoryLabel(property.category)}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-gold-primary">
                        {formatCurrency(property.price)}
                      </p>
                      {property.type === 'rent' && (
                        <p className="text-xs text-foreground-muted">/mês</p>
                      )}
                    </div>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => navigate(`/properties/${property.id}`)}>
                          <Eye className="mr-2 h-4 w-4" />
                          Ver detalhes
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate(`/properties/${property.id}/edit`)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="mr-2 h-4 w-4" />
                          Compartilhar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Building2 className="h-12 w-12 text-foreground-muted mb-4" />
              <h3 className="text-lg font-medium mb-2">Nenhum imóvel encontrado</h3>
              <p className="text-foreground-muted text-center mb-4">
                Tente ajustar os filtros ou criar um novo imóvel.
              </p>
              <Button onClick={() => navigate('/properties/new')}>
                <Plus className="mr-2 h-4 w-4" />
                Cadastrar Imóvel
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Properties;