
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronLeft, ChevronRight, LayoutDashboard, BookOpen, Clock, 
  Briefcase, CheckSquare, Wallet, Settings, Music
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  isCollapsed: boolean;
}

const NavItem = ({ to, icon: Icon, label, isActive, isCollapsed }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-all",
        isActive 
          ? "bg-sidebar-accent text-sidebar-accent-foreground" 
          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
      )}
    >
      <Icon size={20} />
      {!isCollapsed && <span className="font-medium">{label}</span>}
    </Link>
  );
};

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/learning", icon: BookOpen, label: "Apprentissage" },
    { to: "/productivity", icon: Clock, label: "Productivité" },
    { to: "/projects", icon: Briefcase, label: "Projets" },
    { to: "/tasks", icon: CheckSquare, label: "Tâches" },
    { to: "/finances", icon: Wallet, label: "Finances" },
    { to: "/music", icon: Music, label: "Musique" },
    { to: "/settings", icon: Settings, label: "Paramètres" },
  ];

  return (
    <aside 
      className={cn(
        "flex flex-col h-screen sticky top-0 border-r bg-sidebar transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b">
        {!collapsed && (
          <h1 className="text-xl font-bold text-purple">ProgressPal</h1>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            isActive={location.pathname === item.to}
            isCollapsed={collapsed}
          />
        ))}
      </nav>

      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-purple flex items-center justify-center text-white">
            U
          </div>
          {!collapsed && (
            <div>
              <p className="font-medium text-sm">Utilisateur</p>
              <p className="text-xs text-sidebar-foreground/60">Free Plan</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
