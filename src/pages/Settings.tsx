
import { Layout } from '@/components/layout/Layout';

const Settings = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Paramètres</h2>
        <p className="text-muted-foreground mb-6">Personnalisez votre expérience.</p>
        
        <div className="bg-card rounded-xl p-6 shadow-sm">
          <p className="text-center text-muted-foreground">Paramètres à venir</p>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
