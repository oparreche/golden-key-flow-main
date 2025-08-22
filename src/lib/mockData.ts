// Mock data for the real estate application

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'agent' | 'client';
  phone?: string;
  createdAt: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: 'sale' | 'rent';
  category: 'apartment' | 'house' | 'commercial' | 'land';
  bedrooms: number;
  bathrooms: number;
  area: number;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    neighborhood: string;
  };
  images: string[];
  features: string[];
  agent: {
    id: string;
    name: string;
    phone: string;
    email: string;
  };
  status: 'available' | 'pending' | 'sold' | 'rented';
  createdAt: string;
  updatedAt: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  budget: {
    min: number;
    max: number;
  };
  preferences: {
    type: string[];
    bedrooms: number;
    location: string[];
  };
  status: 'active' | 'inactive' | 'prospect';
  agent: string;
  createdAt: string;
  notes?: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  propertyId?: string;
  message: string;
  source: 'website' | 'facebook' | 'google' | 'referral';
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  assignedTo?: string;
}

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao@example.com',
    role: 'admin',
    phone: '(11) 99999-9999',
    createdAt: '2024-01-01',
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria@example.com',
    role: 'agent',
    phone: '(11) 98888-8888',
    createdAt: '2024-01-15',
  },
];

// Mock Properties
export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Apartamento Luxuoso em Moema',
    description: 'Apartamento de alto padrão com vista panorâmica da cidade. Totalmente mobiliado com acabamentos premium.',
    price: 2500000,
    type: 'sale',
    category: 'apartment',
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    address: {
      street: 'Rua dos Jardins, 123',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '04038-001',
      neighborhood: 'Moema',
    },
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    ],
    features: ['Piscina', 'Academia', 'Sacada Gourmet', 'Vaga Dupla', 'Portaria 24h'],
    agent: {
      id: '2',
      name: 'Maria Santos',
      phone: '(11) 98888-8888',
      email: 'maria@example.com',
    },
    status: 'available',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10',
  },
  {
    id: '2',
    title: 'Casa Moderna em Alphaville',
    description: 'Casa térrea moderna com design contemporâneo, jardim privativo e área de lazer completa.',
    price: 1800000,
    type: 'sale',
    category: 'house',
    bedrooms: 4,
    bathrooms: 4,
    area: 350,
    address: {
      street: 'Alameda das Flores, 456',
      city: 'Barueri',
      state: 'SP',
      zipCode: '06454-000',
      neighborhood: 'Alphaville',
    },
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800',
    ],
    features: ['Piscina', 'Churrasqueira', 'Jardim', 'Garagem 4 Vagas', 'Segurança 24h'],
    agent: {
      id: '2',
      name: 'Maria Santos',
      phone: '(11) 98888-8888',
      email: 'maria@example.com',
    },
    status: 'available',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
  {
    id: '3',
    title: 'Cobertura Duplex Vila Madalena',
    description: 'Cobertura exclusiva com terraço privativo, vista deslumbrante e acabamentos de luxo.',
    price: 4500000,
    type: 'sale',
    category: 'apartment',
    bedrooms: 4,
    bathrooms: 5,
    area: 280,
    address: {
      street: 'Rua Harmonia, 789',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '05435-000',
      neighborhood: 'Vila Madalena',
    },
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    ],
    features: ['Terraço Privativo', 'Jacuzzi', 'Sala de Cinema', 'Adega', 'Elevador Privativo'],
    agent: {
      id: '2',
      name: 'Maria Santos',
      phone: '(11) 98888-8888',
      email: 'maria@example.com',
    },
    status: 'available',
    createdAt: '2024-01-20',
    updatedAt: '2024-01-20',
  },
];

// Mock Clients
export const mockClients: Client[] = [
  {
    id: '1',
    name: 'Carlos Oliveira',
    email: 'carlos@example.com',
    phone: '(11) 97777-7777',
    budget: { min: 800000, max: 1500000 },
    preferences: {
      type: ['apartment'],
      bedrooms: 2,
      location: ['Vila Madalena', 'Pinheiros'],
    },
    status: 'active',
    agent: '2',
    createdAt: '2024-01-05',
    notes: 'Cliente interessado em apartamentos modernos com boa localização.',
  },
  {
    id: '2',
    name: 'Ana Costa',
    email: 'ana@example.com',
    phone: '(11) 96666-6666',
    budget: { min: 2000000, max: 3000000 },
    preferences: {
      type: ['house'],
      bedrooms: 3,
      location: ['Alphaville', 'Granja Viana'],
    },
    status: 'active',
    agent: '2',
    createdAt: '2024-01-08',
    notes: 'Família buscando casa com área de lazer.',
  },
];

// Mock Leads
export const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Roberto Lima',
    email: 'roberto@example.com',
    phone: '(11) 95555-5555',
    propertyId: '1',
    message: 'Tenho interesse no apartamento em Moema. Gostaria de agendar uma visita.',
    source: 'website',
    status: 'new',
    priority: 'high',
    createdAt: '2024-01-22',
  },
  {
    id: '2',
    name: 'Fernanda Souza',
    email: 'fernanda@example.com',
    phone: '(11) 94444-4444',
    message: 'Procuro casas em condomínios fechados na região de Alphaville.',
    source: 'facebook',
    status: 'contacted',
    priority: 'medium',
    createdAt: '2024-01-21',
    assignedTo: '2',
  },
];

// Mock Analytics Data
export const mockAnalytics = {
  totalProperties: 245,
  activeListings: 189,
  soldThisMonth: 12,
  totalRevenue: 15600000,
  averagePrice: 1890000,
  viewsThisMonth: 24567,
  leadsThisMonth: 89,
  conversionRate: 12.4,
  monthlyData: [
    { month: 'Jan', sales: 8, revenue: 12400000, leads: 65 },
    { month: 'Fev', sales: 12, revenue: 18900000, leads: 78 },
    { month: 'Mar', sales: 15, revenue: 23100000, leads: 89 },
    { month: 'Abr', sales: 10, revenue: 16800000, leads: 72 },
    { month: 'Mai', sales: 18, revenue: 28500000, leads: 95 },
    { month: 'Jun', sales: 14, revenue: 21700000, leads: 83 },
  ],
  propertyTypes: [
    { name: 'Apartamentos', value: 45, count: 110 },
    { name: 'Casas', value: 35, count: 86 },
    { name: 'Comercial', value: 15, count: 37 },
    { name: 'Terrenos', value: 5, count: 12 },
  ],
  topAgents: [
    { name: 'Maria Santos', sales: 24, revenue: 38400000 },
    { name: 'João Silva', sales: 18, revenue: 29700000 },
    { name: 'Pedro Costa', sales: 15, revenue: 24200000 },
  ],
};

// Utility functions
export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  }).format(value);
};

export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
};

// Search and filter functions
export const searchProperties = (
  properties: Property[],
  query: string,
  filters?: {
    type?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    city?: string;
  }
) => {
  let filtered = properties;

  if (query) {
    filtered = filtered.filter(
      (property) =>
        property.title.toLowerCase().includes(query.toLowerCase()) ||
        property.description.toLowerCase().includes(query.toLowerCase()) ||
        property.address.neighborhood.toLowerCase().includes(query.toLowerCase()) ||
        property.address.city.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (filters) {
    if (filters.type) {
      filtered = filtered.filter((property) => property.type === filters.type);
    }
    if (filters.category) {
      filtered = filtered.filter((property) => property.category === filters.category);
    }
    if (filters.minPrice) {
      filtered = filtered.filter((property) => property.price >= filters.minPrice!);
    }
    if (filters.maxPrice) {
      filtered = filtered.filter((property) => property.price <= filters.maxPrice!);
    }
    if (filters.bedrooms) {
      filtered = filtered.filter((property) => property.bedrooms >= filters.bedrooms!);
    }
    if (filters.city) {
      filtered = filtered.filter((property) => property.address.city === filters.city);
    }
  }

  return filtered;
};