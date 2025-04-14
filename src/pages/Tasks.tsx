
import { Layout } from '@/components/layout/Layout';
import { TasksList } from '@/components/dashboard/TasksList';

const Tasks = () => {
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

  return (
    <Layout>
      <div className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Tâches & Objectifs</h2>
        <p className="text-muted-foreground mb-6">Gérez vos tâches et suivez vos objectifs.</p>
        
        <TasksList 
          title="Mes Tâches"
          tasks={tasks}
        />
      </div>
    </Layout>
  );
};

export default Tasks;
