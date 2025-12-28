import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { blogPosts, profileData } from "@/data/portfolioData";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <Layout>
        <section className="pt-32 pb-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Article non trouvé</h1>
            <Link to="/blog">
              <Button>Retour au blog</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const formattedDate = format(new Date(post.date), "d MMMM yyyy", { locale: fr });

  return (
    <Layout>
      <article className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Back Button */}
          <Link to="/blog" className="inline-block mb-8">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour au blog
            </Button>
          </Link>

          {/* Header */}
          <header className="space-y-6 mb-12">
            <Badge className="bg-primary/10 text-primary">{post.category}</Badge>
            <h1 className="text-4xl font-bold text-foreground leading-tight">{post.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{profileData.name}</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>
            
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <div className="bg-muted/50 border border-border rounded-xl p-8 text-center">
                <p className="text-muted-foreground">
                  Le contenu complet de cet article sera bientôt disponible.
                </p>
              </div>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
