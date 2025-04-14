
import { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  category: string;
}

interface TasksListProps {
  title: string;
  tasks: Task[];
  className?: string;
}

export function TasksList({ title, tasks, className }: TasksListProps) {
  const [tasksList, setTasksList] = useState<Task[]>(tasks);

  const toggleTask = (id: string) => {
    setTasksList(
      tasksList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low':
        return 'bg-green-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'high':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className={cn("bg-card rounded-xl shadow-sm overflow-hidden", className)}>
      <div className="p-5 border-b">
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="p-0">
        <ul className="divide-y">
          {tasksList.map((task) => (
            <li 
              key={task.id} 
              className="flex items-center px-5 py-3 hover:bg-accent/10 transition-colors"
            >
              <button 
                onClick={() => toggleTask(task.id)} 
                className="mr-3 text-muted-foreground hover:text-primary transition-colors"
              >
                {task.completed ? (
                  <CheckCircle2 className="text-green-500" size={20} />
                ) : (
                  <Circle size={20} />
                )}
              </button>
              <div className="flex-1">
                <p className={cn("font-medium", task.completed && "line-through text-muted-foreground")}>
                  {task.title}
                </p>
                <p className="text-xs text-muted-foreground">{task.category}</p>
              </div>
              <div className={cn("w-2 h-2 rounded-full", getPriorityColor(task.priority))}></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
