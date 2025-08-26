import { Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 to-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <Card className="shadow-premium animate-fade-in">
          <CardContent className="p-12 text-center">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-warning/10 mb-8">
              <Clock className="h-8 w-8 text-warning" />
            </div>
            
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Last Chance to Register
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              If you don't yet have a registered account, this is your final opportunity 
              to secure access before registrations close permanently.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-warning mb-2">December 31, 2025</div>
                <div className="text-muted-foreground">Registration Deadline</div>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-success mb-2">Instant Access</div>
                <div className="text-muted-foreground">Memberships & One-time Purchases</div>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-premium mb-2">Exclusive</div>
                <div className="text-muted-foreground">GPL WordPress Community</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="lg" className="text-lg px-8">
                <Star className="h-5 w-5 mr-2" />
                Join GPL Times Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                After January 1, 2026 — No new accounts accepted
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};