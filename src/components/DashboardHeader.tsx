import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, Bell, Plus, User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export function DashboardHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
      <div className="flex items-center space-x-4">
        <SidebarTrigger />
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted" />
          <Input
            placeholder="Buscar imóveis, clientes..."
            className="w-80 pl-10"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Quick Actions */}
        <Button variant="outline" size="sm" onClick={() => navigate('/properties/new')}>
          <Plus className="h-4 w-4 mr-2" />
          Novo Imóvel
        </Button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs"
              >
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notificações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="space-y-1">
                <p className="text-sm font-medium">Novo lead recebido</p>
                <p className="text-xs text-foreground-muted">Roberto Lima interessado no apartamento em Moema</p>
                <p className="text-xs text-foreground-muted">2 min atrás</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="space-y-1">
                <p className="text-sm font-medium">Visita agendada</p>
                <p className="text-xs text-foreground-muted">Ana Costa agendou visita para amanhã às 14h</p>
                <p className="text-xs text-foreground-muted">1 hora atrás</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="space-y-1">
                <p className="text-sm font-medium">Proposta recebida</p>
                <p className="text-xs text-foreground-muted">Nova proposta para casa em Alphaville</p>
                <p className="text-xs text-foreground-muted">3 horas atrás</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gold-primary flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium">{user?.name}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate('/profile')}>
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/settings')}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Configurações</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}