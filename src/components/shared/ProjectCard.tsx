import { ArrowRight, Folder } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  id: number;
  title: string;
  summary: string;
  image?: string;
  technologies: string[];
}

export function ProjectCard({ id, title, summary, image, technologies }: ProjectCardProps) {
  return (
    <div className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-500">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-secondary to-muted overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Folder className="w-16 h-16 text-muted-foreground/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {summary}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{technologies.length - 3}
            </Badge>
          )}
        </div>

        {/* Button */}
        <Link to={`/projets/${id}`}>
          <Button variant="ghost" className="group/btn w-full mt-2 justify-between hover:bg-primary hover:text-primary-foreground">
            Voir les détails
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
      </div>
    </div>
  );
}
