import { GraduationCap, Briefcase, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: number;
  type: "education" | "experience" | "certification";
  title: string;
  institution?: string;
  company?: string;
  period: string;
  description?: string;
  tasks?: string[];
  location?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const iconMap = {
  education: GraduationCap,
  experience: Briefcase,
  certification: Award,
};

const colorMap = {
  education: "bg-primary text-primary-foreground",
  experience: "bg-accent text-accent-foreground",
  certification: "bg-secondary text-secondary-foreground border border-border",
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted" />

      <div className="space-y-8">
        {items.map((item, index) => {
          const Icon = iconMap[item.type];
          return (
            <div
              key={item.id}
              className="relative pl-16 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={cn(
                  "absolute left-3 w-7 h-7 rounded-full flex items-center justify-center -translate-x-1/2 shadow-md",
                  colorMap[item.type]
                )}
              >
                <Icon className="h-4 w-4" />
              </div>

              {/* Content */}
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full w-fit">
                    {item.period}
                  </span>
                </div>

                {(item.institution || item.company) && (
                  <p className="text-muted-foreground font-medium mb-2">
                    {item.institution || item.company}
                    {item.location && ` • ${item.location}`}
                  </p>
                )}

                {item.description && (
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                )}

                {item.tasks && item.tasks.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {item.tasks.map((task, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
