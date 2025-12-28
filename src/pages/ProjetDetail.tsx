import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Target, Wrench, Trophy } from "lucide-react";
import { projects } from "@/data/portfolioData";

const ProjetDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <Layout>
        <section className="pt-32 pb-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Projet non trouvé</h1>
            <Link to="/projets">
              <Button>Retour aux projets</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <Link to="/projets" className="inline-block mb-8">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour aux projets
            </Button>
          </Link>

          {/* Header */}
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl font-bold text-foreground">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} className="bg-primary/10 text-primary hover:bg-primary/20">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Context */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Contexte</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{project.context}</p>
            </div>

            {/* Objectives */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Objectifs</h2>
              </div>
              <ul className="space-y-2">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tasks */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Wrench className="h-5 w-5 text-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Tâches réalisées</h2>
              </div>
              <ul className="space-y-2">
                {project.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Résultats</h2>
              </div>
              <p className="text-foreground leading-relaxed">{project.results}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjetDetail;
