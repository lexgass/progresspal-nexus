
import { BookOpen, Clock, Briefcase, CheckSquare, Wallet } from 'lucide-react';
import { StatCard } from '@/components/dashboard/StatCard';
import { ProgressCard } from '@/components/dashboard/ProgressCard';
import { TasksList } from '@/components/dashboard/TasksList';
import { PomodoroTimer } from '@/components/dashboard/PomodoroTimer';
import { MusicPlayer } from '@/components/music/MusicPlayer';

const Dashboard = () => {
  // Mock data
  const tasks = [
    { 
      id: '1', 
      title: 'Finir le projet React', 
      completed: false, 
      priority: 'high' as const,
      category: 'Développement' 
    },
    { 
      id: '2', 
      title: 'Préparer présentation', 
      completed: true, 
      priority: 'medium' as const,
      category: 'Business' 
    },
    { 
      id: '3', 
      title: 'Apprendre GraphQL', 
      completed: false, 
      priority: 'low' as const,
      category: 'Apprentissage' 
    },
    { 
      id: '4', 
      title: 'Meeting client', 
      completed: false, 
      priority: 'high' as const,
      category: 'Business' 
    },
  ];

  const dateOptions: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const currentDate = new Date().toLocaleDateString('fr-FR', dateOptions);

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Bonjour, Utilisateur 👋</h2>
        <p className="text-muted-foreground">{currentDate}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard 
          title="Technologies" 
          value="8" 
          description="en apprentissage" 
          icon={<BookOpen size={18} />} 
          className="border-l-4 border-learning"
        />
        <StatCard 
          title="Focus" 
          value="5h 23m" 
          description="cette semaine" 
          icon={<Clock size={18} />} 
          className="border-l-4 border-productivity"
        />
        <StatCard 
          title="Projets" 
          value="3" 
          description="actifs" 
          icon={<Briefcase size={18} />} 
          className="border-l-4 border-projects"
        />
        <StatCard 
          title="Tâches" 
          value="12" 
          description="à faire" 
          icon={<CheckSquare size={18} />} 
          className="border-l-4 border-tasks"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <ProgressCard 
          title="React Native" 
          progress={65} 
          icon={<BookOpen size={18} />} 
          color="bg-learning"
        />
        <ProgressCard 
          title="Project eCommerce" 
          progress={42} 
          icon={<Briefcase size={18} />} 
          color="bg-projects"
        />
        <ProgressCard 
          title="Objectif Épargne" 
          progress={78} 
          icon={<Wallet size={18} />} 
          color="bg-finances"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6">
          <TasksList 
            title="Tâches à venir" 
            tasks={tasks}
            className="h-full"
          />
        </div>
        <div className="lg:col-span-3">
          <PomodoroTimer />
        </div>
        <div className="lg:col-span-3">
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
