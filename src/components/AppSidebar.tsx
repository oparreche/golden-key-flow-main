import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Building2,
  Users,
  UserPlus,
  BarChart3,
  Settings,
  FileText,
  Heart,
  MapPin,
  Bell,
  User,
  LogOut,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const menuItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Imóveis',
    url: '/properties',
    icon: Building2,
  },
  {
    title: 'Clientes',
    url: '/clients',
    icon: Users,
  },
  {
    title: 'Leads',
    url: '/leads',
    icon: UserPlus,
  },
  {
    title: 'Relatórios',
    url: '/reports',
    icon: BarChart3,
  },
  {
    title: 'Analytics',
    url: '/analytics',
    icon: FileText,
  },
];

const secondaryItems = [
  {
    title: 'Favoritos',
    url: '/favorites',
    icon: Heart,
  },
  {
    title: 'Mapa',
    url: '/map',
    icon: MapPin,
  },
  {
    title: 'Notificações',
    url: '/notifications',
    icon: Bell,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;
  const getNavClass = (active: boolean) =>
    active
      ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
      : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground';

  return (
    <Sidebar className={collapsed ? 'w-14' : 'w-64'}>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-gold-primary" />
            <div>
              <h2 className="font-serif font-bold text-lg">
                RealEstate<span className="text-gold-primary">Pro</span>
              </h2>
              <p className="text-xs text-sidebar-foreground/60">Dashboard</p>
            </div>
          </div>
        )}
        {collapsed && (
          <Building2 className="h-8 w-8 text-gold-primary mx-auto" />
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={getNavClass(isActive(item.url))}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Ferramentas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={getNavClass(isActive(item.url))}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        {!collapsed && user && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2 p-2 rounded-md bg-sidebar-accent">
              <User className="h-4 w-4" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user.name}</p>
                <p className="text-xs text-sidebar-foreground/60 truncate">{user.email}</p>
              </div>
            </div>
            <div className="flex space-x-1">
              <Button asChild variant="ghost" size="sm" className="flex-1">
                <NavLink to="/profile">
                  <Settings className="h-4 w-4" />
                  Perfil
                </NavLink>
              </Button>
              <Button variant="ghost" size="sm" onClick={logout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="flex flex-col space-y-1">
            <Button asChild variant="ghost" size="icon">
              <NavLink to="/profile">
                <Settings className="h-4 w-4" />
              </NavLink>
            </Button>
            <Button variant="ghost" size="icon" onClick={logout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}