
import { cn } from '@/lib/utils';

interface ProgressCardProps {
  title: string;
  progress: number;
  icon: React.ReactNode;
  color?: string;
  className?: string;
}

export function ProgressCard({ title, progress, icon, color = 'bg-purple', className }: ProgressCardProps) {
  return (
    <div className={cn("bg-card rounded-xl p-5 shadow-sm card-hover", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">{title}</h3>
        <div className="p-2 rounded-lg bg-accent/50 text-accent-foreground">
          {icon}
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-muted-foreground">Progression</span>
          <span className="text-xs font-medium">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className={cn("h-2 rounded-full", color)} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
