import { ArrowRight, Download, FileSpreadsheet, Server, Network, Code, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { profileData, keySkillsBadges } from "@/data/portfolioData";
import heroBg from "@/assets/hero-bg.jpg";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileSpreadsheet,
  Server,
  Network,
  Code,
  Palette,
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-glow animate-float">
              <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                {profileData.profileImage ? (
                  <img
                    src={profileData.profileImage}
                    alt={profileData.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gradient">
                    {profileData.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                )}
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/50 blur-sm animate-pulse" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-accent/50 blur-sm animate-pulse delay-500" />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-slide-up">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wider uppercase text-sm">
                Bienvenue sur mon portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {profileData.name}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gradient font-semibold">
                {profileData.title}
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              {profileData.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link to="/projets">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                  Voir mes projets
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href={profileData.cvUrl} download>
                <Button variant="heroOutline" size="xl" className="group w-full sm:w-auto">
                  <Download className="h-5 w-5" />
                  Télécharger mon CV
                </Button>
              </a>
            </div>

            {/* Skills Badges */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Compétences clés</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {keySkillsBadges.map((skill) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:shadow-md transition-all duration-300 cursor-default"
                    >
                      {Icon && <Icon className="h-4 w-4 text-primary" />}
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}
