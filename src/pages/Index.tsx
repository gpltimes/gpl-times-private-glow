import { AlertTriangle, CheckCircle, Zap, Lock, Rocket, Shield, Users, Gift, Archive, Clock } from "lucide-react";
import { AnnouncementHero } from "@/components/AnnouncementHero";
import { FeatureCard } from "@/components/FeatureSection";
import { CallToAction } from "@/components/CallToAction";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementHero />
      
      {/* What's Changing Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What's Changing?</h2>
            <p className="text-xl text-muted-foreground">Key changes coming January 1, 2026</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<AlertTriangle className="h-6 w-6 text-warning" />}
              title="Guest Access Removed"
              description="The site becomes login-only for enhanced security and performance."
              badgeText="Important"
              badgeVariant="destructive"
              items={[
                "No more guest browsing",
                "Login required for all access",
                "Enhanced security measures"
              ]}
            />
            
            <FeatureCard
              icon={<Lock className="h-6 w-6 text-primary" />}
              title="Registered Users Only"
              description="Only users with existing accounts will have access to the platform."
              items={[
                "Existing login credentials work",
                "No changes to your access",
                "Continue all purchases normally"
              ]}
            />
            
            <FeatureCard
              icon={<Clock className="h-6 w-6 text-warning" />}
              title="Registration Deadline"
              description="New account registrations close permanently on December 31, 2025."
              badgeText="Final Notice"
              badgeVariant="destructive"
              items={[
                "Permanent closure on Dec 31, 2025",
                "Limited reopenings during special events",
                "Black Friday & Cyber Monday exceptions"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why This Change Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why This Change?</h2>
            <p className="text-xl text-muted-foreground">
              GPL Times is evolving into a focused, high-quality hub for serious WordPress professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Rocket className="h-6 w-6 text-success" />}
              title="Faster Performance"
              description="Optimized servers and reduced load mean lightning-fast browsing."
              items={[
                "Faster downloads",
                "Improved site performance",
                "Optimized infrastructure"
              ]}
            />
            
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-primary" />}
              title="Enhanced Security"
              description="Closed, login-only environment with advanced protection."
              items={[
                "Reduced abuse and bot traffic",
                "Unauthorized access prevention",
                "Stronger security protocols"
              ]}
            />
            
            <FeatureCard
              icon={<Users className="h-6 w-6 text-premium" />}
              title="Exclusive Community"
              description="Build a trusted network of verified WordPress professionals."
              badgeText="Premium"
              items={[
                "Verified users only",
                "Professional networking",
                "Quality-focused discussions"
              ]}
            />
          </div>
        </div>
      </section>

      {/* What It Means for You Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What It Means for You</h2>
            <p className="text-xl text-muted-foreground">
              If you already have a registered account, you're all set. Nothing changes for you—except things get better.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lock className="h-6 w-6 text-premium" />}
              title="Exclusive Access"
              description="Private platform only for registered users."
              items={[
                "Member-only environment",
                "No public access",
                "Premium experience"
              ]}
            />
            
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-success" />}
              title="Superior Performance"
              description="Faster, more reliable service with dedicated resources."
              items={[
                "Optimized servers",
                "Reduced load times",
                "Stable high-speed downloads"
              ]}
            />
            
            <FeatureCard
              icon={<Gift className="h-6 w-6 text-premium" />}
              title="Special Perks"
              description="Exclusive benefits and early access to new features."
              items={[
                "Early access to updates",
                "First access to new releases",
                "Special event benefits",
                "Extra offers during reopenings"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Account Streamlining Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-8">
            <Archive className="h-12 w-12 text-primary mr-4" />
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Account Streamlining</h2>
              <p className="text-muted-foreground">Optimizing for performance and security</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-card border border-border">
              <CheckCircle className="h-8 w-8 text-success mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Active Accounts Kept</h3>
              <p className="text-muted-foreground">All registered accounts with purchases remain active</p>
            </div>
            
            <div className="p-6 rounded-lg bg-card border border-border">
              <Archive className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Inactive Accounts Archived</h3>
              <p className="text-muted-foreground">Accounts inactive for 6+ months with no purchases</p>
            </div>
          </div>
          
          <p className="text-foreground font-medium mt-8">
            Result: A cleaner, faster, and more secure GPL Times experience
          </p>
        </div>
      </section>

      <CallToAction />
      <ContactSection />
    </div>
  );
};

export default Index;
