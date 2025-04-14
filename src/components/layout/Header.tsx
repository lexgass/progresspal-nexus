
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, Moon, Search, Sun } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Get page title based on current route
  const getPageTitle = () => {
    const path = location.pathname;
    
    switch(path) {
      case '/':
        return 'Dashboard';
      case '/learning':
        return 'Apprentissage';
      case '/productivity':
        return 'Productivité & Focus';
      case '/projects':
        return 'Projets Business';
      case '/tasks':
        return 'Tâches & Objectifs';
      case '/finances':
        return 'Finances Personnelles';
      case '/music':
        return 'Musique';
      case '/settings':
        return 'Paramètres';
      default:
        return 'ProgressPal';
    }
  };

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="sticky top-0 z-10 h-16 border-b bg-background flex items-center justify-between px-6">
      <h1 className="text-2xl font-bold">{getPageTitle()}</h1>
      
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            placeholder="Rechercher..."
            className="h-10 w-64 rounded-md pl-10 pr-4 bg-muted/30 focus:outline-none focus:ring-2 focus:ring-purple"
          />
        </div>
        
        <button className="p-2 rounded-md hover:bg-muted/50">
          <Bell size={20} />
        </button>
        
        <button 
          className="p-2 rounded-md hover:bg-muted/50"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}
