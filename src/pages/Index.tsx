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
      
      
      {/* Why We're Making This Change */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 mr-2" />
            Platform Evolution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up">
            Why We're Going Private
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-up">
            To deliver faster downloads, stronger security, and a premium experience exclusively for our WordPress community members.
          </p>
        </div>
      </section>

      <TimelineSection />

      {/* Benefits Section - Simplified */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-6">
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
              title="Premium Support"
              description="Get help from WordPress experts when you need it."
              features={[
                "Dedicated support team",
                "Faster response times",
                "WordPress specialists",
                "Priority assistance"
              ]}
              gradient="from-warning/5 to-warning/10"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      <UrgentCTA />
      <FAQSection />
      <ModernContact />
    </div>
  );
};

export default Index;
