import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Lock, Database, Users, FileEdit } from "lucide-react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center space-y-6 mb-12">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Lock className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Espace Administration</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pour activer le panneau d'administration complet avec gestion du contenu,
              vous devez connecter une base de données.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileEdit className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Gestion des Projets</h3>
              <p className="text-muted-foreground text-sm">
                Ajouter, modifier et supprimer vos projets avec images et descriptions.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <FileEdit className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Gestion du Blog</h3>
              <p className="text-muted-foreground text-sm">
                Créer et publier des articles avec catégories et mise en forme.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <Users className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Parcours & Compétences</h3>
              <p className="text-muted-foreground text-sm">
                Mettre à jour formations, expériences et niveaux de compétences.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Profil & Médias</h3>
              <p className="text-muted-foreground text-sm">
                Gérer photo de profil, CV, liens sociaux et informations de contact.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Prêt à activer l'administration ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Connectez Lovable Cloud pour activer l'authentification et la base de données.
            </p>
            <Link to="/">
              <Button variant="hero" size="lg">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
