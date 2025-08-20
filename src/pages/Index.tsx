import { AlertTriangle, CheckCircle, Zap, Lock, Rocket, Shield, Users, Gift, Archive, Clock, Crown, Star, Sparkles } from "lucide-react";
import { ModernHero } from "@/components/ModernHero";
import { UserTypeSelector } from "@/components/UserTypeSelector";

import { TimelineSection } from "@/components/TimelineSection";
import { ModernFeatureCard } from "@/components/ModernFeatureCard";
import { UrgentCTA } from "@/components/UrgentCTA";
import { ModernContact } from "@/components/ModernContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <ModernHero />
      <UserTypeSelector />
      
      
      {/* What's Changing Section - Modern Cards */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-warning/10 text-warning font-semibold mb-6 animate-fade-in">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Critical Changes Ahead
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              What's Changing?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-slide-up">
              Three major transformations coming January 1, 2026 that will reshape your GPL Times experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ModernFeatureCard
              icon={<Lock className="h-8 w-8 text-destructive" />}
              title="Private Access Only"
              description="Guest browsing ends - login becomes mandatory for all platform access."
              features={[
                "No more guest browsing",
                "Secure login-only environment", 
                "Enhanced privacy protection",
                "Verified users exclusively"
              ]}
              gradient="from-destructive/5 to-destructive/10"
              delay={0}
            />
            
            <ModernFeatureCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Registered Members Only"
              description="Exclusive access for existing account holders with seamless continuity."
              features={[
                "Current credentials remain valid",
                "Uninterrupted access guaranteed",
                "All purchase options available",
                "Member privileges enhanced"
              ]}
              gradient="from-primary/5 to-primary/10"
              delay={0.2}
            />
            
            <ModernFeatureCard
              icon={<Clock className="h-8 w-8 text-warning" />}
              title="Registration Deadline"
              description="Final opportunity to join before permanent closure of new signups."
              features={[
                "Closes December 31, 2025",
                "Limited special event reopenings",
                "Black Friday exceptions only",
                "No regular registration after"
              ]}
              gradient="from-warning/5 to-warning/10"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      <TimelineSection />

      {/* Benefits Section - Enhanced Grid */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 text-success font-semibold mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 mr-2" />
              Premium Benefits
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              What You'll Gain
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-slide-up">
              Existing members get access to an elevated platform with professional-grade features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModernFeatureCard
              icon={<Crown className="h-8 w-8 text-premium" />}
              title="Exclusive Community"
              description="Join a curated network of serious WordPress professionals."
              features={[
                "Verified professionals only",
                "Quality-focused discussions",
                "Networking opportunities",
                "Industry insights sharing"
              ]}
              gradient="from-premium/5 to-premium/10"
              delay={0}
            />
            
            <ModernFeatureCard
              icon={<Rocket className="h-8 w-8 text-primary" />}
              title="Lightning Performance"
              description="Experience dramatically faster downloads and site navigation."
              features={[
                "10x faster download speeds",
                "Optimized server infrastructure",
                "Reduced loading times",
                "Priority bandwidth allocation"
              ]}
              gradient="from-primary/5 to-primary/10"
              delay={0.1}
            />
            
            <ModernFeatureCard
              icon={<Shield className="h-8 w-8 text-success" />}
              title="Enhanced Security"
              description="Bank-level security in a completely private environment."
              features={[
                "Zero unauthorized access",
                "Advanced threat protection",
                "Encrypted data transfer",
                "Regular security audits"
              ]}
              gradient="from-success/5 to-success/10"
              delay={0.2}
            />
            
            <ModernFeatureCard
              icon={<Star className="h-8 w-8 text-warning" />}
              title="Priority Support"
              description="Get premium assistance from WordPress experts."
              features={[
                "24-hour response guarantee",
                "Direct team access",
                "Personalized solutions",
                "Expert consultation"
              ]}
              gradient="from-warning/5 to-warning/10"
              delay={0.3}
            />
            
            <ModernFeatureCard
              icon={<Gift className="h-8 w-8 text-premium" />}
              title="Early Access Perks"
              description="Be first to access new releases and exclusive features."
              features={[
                "New product previews",
                "Beta feature testing",
                "Exclusive member deals",
                "Special event bonuses"
              ]}
              gradient="from-premium/5 to-premium/10"
              delay={0.4}
            />
            
            <ModernFeatureCard
              icon={<CheckCircle className="h-8 w-8 text-success" />}
              title="Guaranteed Access"
              description="Your membership remains secure regardless of future changes."
              features={[
                "Lifetime access protection",
                "No interruption of service",
                "Continuous improvements",
                "Future-proof membership"
              ]}
              gradient="from-success/5 to-success/10"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Account Optimization Section */}
      <section className="py-20 bg-gradient-to-r from-muted/20 to-secondary/20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6 animate-fade-in">
              <Archive className="h-4 w-4 mr-2" />
              Platform Optimization
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6 animate-slide-up">
              Streamlined for Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              We're optimizing our user base to deliver the best possible experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mr-6 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Active Accounts Protected</h3>
                  <p className="text-muted-foreground">All registered accounts with purchase history remain fully active with enhanced privileges</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center mr-6 flex-shrink-0">
                  <Archive className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Inactive Accounts Archived</h3>
                  <p className="text-muted-foreground">Accounts inactive for 6+ months with no purchases will be archived for platform optimization</p>
                </div>
              </div>
            </div>
            
            <div className="text-center animate-scale-in">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-primary mb-6 shadow-glow">
                <Zap className="h-16 w-16 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Result: Superior Experience</h3>
              <p className="text-lg text-muted-foreground">Faster, cleaner, and more secure platform for all active members</p>
            </div>
          </div>
        </div>
      </section>

      <UrgentCTA />
      <ModernContact />
    </div>
  );
};

export default Index;
