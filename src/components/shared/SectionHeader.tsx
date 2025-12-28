import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4 mb-12", centered && "text-center", className)}>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn("w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full", centered && "mx-auto")} />
    </div>
  );
}
