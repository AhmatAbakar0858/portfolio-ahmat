import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BlogCard } from "@/components/shared/BlogCard";
import { Button } from "@/components/ui/button";
import { blogPosts, blogCategories } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? blogPosts.filter((post) => post.category === activeCategory)
    : blogPosts;

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Blog"
            subtitle="Articles et partage de connaissances en systèmes et réseaux"
          />

          {/* Categories Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <Button
              variant={activeCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(null)}
            >
              Tous
            </Button>
            {blogCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucun article dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
