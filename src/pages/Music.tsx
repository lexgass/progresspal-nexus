
import { Layout } from '@/components/layout/Layout';
import { MusicPlayer } from '@/components/music/MusicPlayer';

const Music = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Musique</h2>
        <p className="text-muted-foreground mb-6">Écoutez votre musique tout en travaillant.</p>
        
        <div className="max-w-lg mx-auto">
          <MusicPlayer />
        </div>
      </div>
    </Layout>
  );
};

export default Music;
