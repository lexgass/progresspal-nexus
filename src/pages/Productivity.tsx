
import { Layout } from '@/components/layout/Layout';
import { PomodoroTimer } from '@/components/dashboard/PomodoroTimer';

const Productivity = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Productivité & Focus</h2>
        <p className="text-muted-foreground mb-6">Gérez votre temps et améliorez votre concentration.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <PomodoroTimer />
          </div>
          <div className="bg-card rounded-xl p-6 shadow-sm min-h-[200px] flex items-center justify-center border-l-4 border-productivity">
            <p className="text-center text-muted-foreground">Statistiques à venir</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Productivity;
