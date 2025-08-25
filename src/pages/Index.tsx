import { AlertTriangle, CheckCircle, Zap, Lock, Rocket, Shield, Users, Gift, Archive, Clock, Crown, Star, Sparkles } from "lucide-react";
import { ModernHero } from "@/components/ModernHero";
import { UserTypeSelector } from "@/components/UserTypeSelector";

import { TimelineSection } from "@/components/TimelineSection";
import { ModernFeatureCard } from "@/components/ModernFeatureCard";
import { UrgentCTA } from "@/components/UrgentCTA";
import { ModernContact } from "@/components/ModernContact";
import { FAQSection } from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <ModernHero />
      <UserTypeSelector />
      
      

      <TimelineSection />

      {/* Benefits Section - Simplified */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-background to-secondary/10">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 text-success font-semibold mb-6 animate-fade-in">
              <Crown className="h-4 w-4 mr-2" />
              Member Benefits
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up">
              What You Get as a Member
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Experience faster downloads, better security, and premium WordPress resources
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModernFeatureCard
              icon={<Rocket className="h-8 w-8 text-primary" />}
              title="Faster Downloads"
              description="Experience significantly improved download speeds with optimized servers."
              features={[
                "Optimized server infrastructure",
                "Reduced loading times",
                "Priority bandwidth",
                "Better file delivery"
              ]}
              gradient="from-primary/5 to-primary/10"
              delay={0}
            />
            
            <ModernFeatureCard
              icon={<Shield className="h-8 w-8 text-success" />}
              title="Enhanced Security"
              description="Your data and downloads are protected in a secure, private environment."
              features={[
                "Private access only",
                "Secure file transfers",
                "Protected user data",
                "Regular security updates"
              ]}
              gradient="from-success/5 to-success/10"
              delay={0.1}
            />
            
            <ModernFeatureCard
              icon={<Star className="h-8 w-8 text-warning" />}
              title="Exclusive Content"
              description="Access premium WordPress themes, plugins, and resources not available elsewhere."
              features={[
                "Premium theme collection",
                "Advanced plugin library",
                "Exclusive tutorials",
                "Member-only resources"
              ]}
              gradient="from-warning/5 to-warning/10"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      <FAQSection />
      <UrgentCTA />
      <ModernContact />
    </div>
  );
};

export default Index;
