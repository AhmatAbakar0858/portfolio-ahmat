import { ArrowRight, Calendar, Tag, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
}

export function BlogCard({ id, title, excerpt, category, date, image }: BlogCardProps) {
  const formattedDate = format(new Date(date), "d MMMM yyyy", { locale: fr });

  return (
    <article className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-500">
      {/* Image */}
      <div className="relative h-44 bg-gradient-to-br from-secondary to-muted overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FileText className="w-12 h-12 text-muted-foreground/30" />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-primary-foreground">
            {category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <time dateTime={date}>{formattedDate}</time>
        </div>

        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm line-clamp-3">
          {excerpt}
        </p>

        {/* Button */}
        <Link to={`/blog/${id}`}>
          <Button variant="ghost" className="group/btn w-full mt-2 justify-between hover:bg-primary hover:text-primary-foreground">
            Lire l'article
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </article>
  );
}
