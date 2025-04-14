
import { useState, useEffect } from 'react';
import { Play, Pause, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

type TimerMode = 'work' | 'break';

export function PomodoroTimer() {
  const [mode, setMode] = useState<TimerMode>('work');
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  
  // Calculate minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  // Calculate progress percentage
  const totalTime = mode === 'work' ? 25 * 60 : 5 * 60;
  const progress = ((totalTime - timeLeft) / totalTime) * 100;
  
  useEffect(() => {
    let interval: number | null = null;
    
    if (isActive) {
      interval = window.setInterval(() => {
        setTimeLeft((timeLeft) => {
          if (timeLeft <= 1) {
            // Switch modes when timer reaches zero
            const newMode = mode === 'work' ? 'break' : 'work';
            setMode(newMode);
            setIsActive(false);
            return newMode === 'work' ? 25 * 60 : 5 * 60;
          }
          return timeLeft - 1;
        });
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, mode]);
  
  const toggleTimer = () => {
    setIsActive(!isActive);
  };
  
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === 'work' ? 25 * 60 : 5 * 60);
  };
  
  const switchMode = () => {
    setIsActive(false);
    setMode(mode === 'work' ? 'break' : 'work');
    setTimeLeft(mode === 'work' ? 5 * 60 : 25 * 60);
  };
  
  return (
    <div className="bg-card rounded-xl p-5 shadow-sm">
      <h3 className="font-semibold mb-4">Pomodoro Timer</h3>
      
      <div className="flex justify-center mb-4">
        <button 
          onClick={switchMode}
          className={cn(
            "px-4 py-1 rounded-l-md text-sm font-medium transition-colors",
            mode === 'work' 
              ? "bg-purple text-white" 
              : "bg-muted text-muted-foreground"
          )}
        >
          Travail
        </button>
        <button 
          onClick={switchMode}
          className={cn(
            "px-4 py-1 rounded-r-md text-sm font-medium transition-colors",
            mode === 'break' 
              ? "bg-purple text-white" 
              : "bg-muted text-muted-foreground"
          )}
        >
          Pause
        </button>
      </div>
      
      <div className="w-full h-2 bg-muted rounded-full mb-5">
        <div 
          className={cn("h-2 rounded-full transition-all duration-500", 
            mode === 'work' ? "bg-purple" : "bg-green-400"
          )} 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="text-center mb-6">
        <p className="text-4xl font-bold">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {mode === 'work' ? 'Temps de travail' : 'Temps de pause'}
        </p>
      </div>
      
      <div className="flex justify-center gap-4">
        <button 
          onClick={toggleTimer}
          className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
        >
          {isActive ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button 
          onClick={resetTimer}
          className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
        >
          <RefreshCw size={20} />
        </button>
      </div>
    </div>
  );
}
