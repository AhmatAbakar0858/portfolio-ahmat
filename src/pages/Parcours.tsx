import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Timeline } from "@/components/shared/Timeline";
import { SkillBar } from "@/components/shared/SkillBar";
import { Badge } from "@/components/ui/badge";
import { FileText, Monitor, Code, Palette, Globe } from "lucide-react";
import {
  education,
  certifications,
  experiences,
  skillCategories,
  languages,
} from "@/data/portfolioData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Monitor,
  Code,
  Palette,
};

const Parcours = () => {
  // Combine all timeline items
  const timelineItems = [
    ...education.map((e) => ({ ...e, type: "education" as const })),
    ...experiences.map((e) => ({
      id: e.id + 100,
      type: "experience" as const,
      title: e.title,
      company: e.company,
      period: e.period,
      location: e.location,
      tasks: e.tasks,
    })),
    ...certifications.map((c) => ({
      id: c.id + 200,
      type: "certification" as const,
      title: c.title,
      institution: c.institution,
      period: c.year,
      description: c.description,
    })),
  ].sort((a, b) => {
    // Sort by year (most recent first)
    const getYear = (period: string) => {
      const match = period.match(/\d{4}/);
      return match ? parseInt(match[0]) : 0;
    };
    return getYear(b.period) - getYear(a.period);
  });

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Mon Parcours"
            subtitle="Formation, expériences et compétences techniques"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Timeline */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Études & Expériences
              </h3>
              <Timeline items={timelineItems} />
            </div>

            {/* Skills */}
            <div className="space-y-12">
              {/* Technical Skills */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-8">
                  Compétences Techniques
                </h3>
                <div className="space-y-8">
                  {skillCategories.map((category) => {
                    const Icon = iconMap[category.icon];
                    return (
                      <div key={category.id} className="bg-card border border-border rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            {Icon && <Icon className="h-5 w-5 text-primary" />}
                          </div>
                          <h4 className="text-lg font-semibold text-foreground">
                            {category.name}
                          </h4>
                        </div>
                        <div className="space-y-4">
                          {category.skills.map((skill, index) => (
                            <SkillBar
                              key={skill.name}
                              name={skill.name}
                              level={skill.level}
                              delay={index * 100}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Globe className="h-6 w-6 text-primary" />
                  Langues
                </h3>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="space-y-4">
                    {languages.map((lang) => (
                      <div key={lang.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-foreground">{lang.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {lang.level}
                          </Badge>
                        </div>
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                            style={{ width: `${lang.proficiency}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Parcours;
