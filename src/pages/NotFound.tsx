
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from '@/components/layout/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-6xl font-bold text-purple mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Page non trouvée</p>
        <p className="text-muted-foreground mb-8">
          La page "{location.pathname}" n'existe pas.
        </p>
        <a href="/" className="px-6 py-3 bg-purple text-white rounded-md hover:bg-purple-dark transition-colors">
          Retour à l'accueil
        </a>
      </div>
    </Layout>
  );
};

export default NotFound;
