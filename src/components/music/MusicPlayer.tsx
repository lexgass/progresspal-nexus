
import { useState } from 'react';
import { Music, Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);

  return (
    <div className="bg-card rounded-xl shadow-sm overflow-hidden">
      <div className="p-5 flex items-center border-b">
        <Music size={20} className="mr-3 text-purple" />
        <h3 className="font-semibold">Musique</h3>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="font-medium">Connect with Spotify</h4>
            <p className="text-sm text-muted-foreground">Login to play your playlists</p>
          </div>
          <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm">
            Se connecter
          </button>
        </div>
        
        <div className="py-4 px-3 rounded-lg bg-accent/20 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-muted rounded overflow-hidden flex items-center justify-center">
              <Music size={24} className="text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">Titre de la chanson</p>
              <p className="text-sm text-muted-foreground">Artiste</p>
            </div>
          </div>
          
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden mb-2">
            <div className="w-1/3 h-1 bg-purple rounded-full"></div>
          </div>
          
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1:23</span>
            <span>3:45</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-accent/30 rounded-full">
              <SkipBack size={20} />
            </button>
            <button 
              className="p-2 bg-purple hover:bg-purple-dark text-white rounded-full"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button className="p-2 hover:bg-accent/30 rounded-full">
              <SkipForward size={20} />
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <Volume2 size={16} className="text-muted-foreground" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(parseInt(e.target.value))}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
