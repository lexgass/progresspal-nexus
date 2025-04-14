
import { Layout } from '@/components/layout/Layout';

const Learning = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Apprentissage</h2>
        <p className="text-muted-foreground mb-6">Suivez vos progrès d'apprentissage de différentes technologies.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder content - will be implemented with actual features later */}
          <div className="bg-card rounded-xl p-6 shadow-sm min-h-[200px] flex items-center justify-center border-l-4 border-learning">
            <p className="text-center text-muted-foreground">Contenu à venir</p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-sm min-h-[200px] flex items-center justify-center border-l-4 border-learning">
            <p className="text-center text-muted-foreground">Contenu à venir</p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-sm min-h-[200px] flex items-center justify-center border-l-4 border-learning">
            <p className="text-center text-muted-foreground">Contenu à venir</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Learning;
