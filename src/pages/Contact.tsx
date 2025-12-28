import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContactForm } from "@/components/shared/ContactForm";
import { Mail, Phone, MapPin, Linkedin, Github, Facebook, Twitter } from "lucide-react";
import { profileData, socialLinks } from "@/data/portfolioData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Linkedin,
  Github,
  Facebook,
  Twitter,
};

const Contact = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Contact"
            subtitle="N'hésitez pas à me contacter pour toute question ou opportunité"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Mes Coordonnées
                </h3>
                <div className="space-y-6">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">{profileData.email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${profileData.phone1.replace(/\s/g, "")}`}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Téléphone</p>
                      <p className="font-medium text-foreground">{profileData.phone1}</p>
                      <p className="font-medium text-foreground">{profileData.phone2}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Localisation</p>
                      <p className="font-medium text-foreground">{profileData.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Réseaux Sociaux
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((link) => {
                    const Icon = iconMap[link.icon];
                    return (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                        aria-label={link.platform}
                      >
                        {Icon && <Icon className="h-5 w-5" />}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Envoyez-moi un message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
