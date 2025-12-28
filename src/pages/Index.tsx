import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { BlogCard } from "@/components/shared/BlogCard";
import { projects, blogPosts } from "@/data/portfolioData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Mes Projets"
            subtitle="Découvrez quelques-uns de mes projets et réalisations techniques"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projets">
              <Button variant="outline" size="lg" className="group">
                Voir tous les projets
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Articles Récents"
            subtitle="Partage de connaissances et retours d'expérience"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/blog">
              <Button variant="outline" size="lg" className="group">
                Voir tous les articles
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Intéressé par mon profil ?
            </h2>
            <p className="text-lg text-muted-foreground">
              N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Me contacter
                </Button>
              </Link>
              <Link to="/parcours">
                <Button variant="heroOutline" size="xl">
                  Voir mon parcours
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
