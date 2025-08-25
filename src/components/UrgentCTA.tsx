import { Clock, Star, ArrowRight, Zap, Shield, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const UrgentCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Card className="shadow-premium animate-scale-in overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-warning via-warning/90 to-warning p-2">
              <div className="flex items-center justify-center">
                <Clock className="h-5 w-5 text-warning-foreground mr-2 animate-pulse" />
                <span className="text-warning-foreground font-semibold">
                  Limited Time: New Sign Up Closes December 31, 2025
                </span>
              </div>
            </div>
            
            <div className="p-6 md:p-12 text-center bg-gradient-card">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-warning/10 mb-8 animate-pulse-glow">
                <Crown className="h-12 w-12 text-warning" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Register Before
                <span className="block text-primary">December 31, 2025</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                Don't miss out! Create your account now to ensure continued access to GPL Times. 
                After December 31st, sign up will only be available during special events.
              </p>
              
              {/* Stats Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 animate-fade-in">
                  <div className="flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">10x Faster</div>
                  <div className="text-muted-foreground">Download Speeds</div>
                </div>
                
                <div className="p-6 rounded-2xl bg-success/5 border border-success/10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-success" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">100% Secure</div>
                  <div className="text-muted-foreground">Private Environment</div>
                </div>
                
                <div className="p-6 rounded-2xl bg-warning/5 border border-warning/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center justify-center mb-4">
                    <Star className="h-8 w-8 text-warning" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">Premium</div>
                  <div className="text-muted-foreground">Support & Features</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col lg:flex-row gap-4 md:gap-6 justify-center items-center">
                  <Button 
                  variant="cta"
                  size="lg" 
                  className="w-full sm:w-auto text-lg md:text-xl px-10 md:px-14 py-5 md:py-6 shadow-xl hover:shadow-glow transition-all duration-300 font-bold relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary opacity-100 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="relative flex items-center">
                    <Star className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3 animate-pulse" />
                    Create Account Now
                    <ArrowRight className="h-5 w-5 md:h-6 md:w-6 ml-2 md:ml-3" />
                  </div>
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">
                    After Jan 1, 2026
                  </p>
                  <p className="text-lg font-semibold text-destructive">
                    No New Registrations
                  </p>
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-muted-foreground mb-4">Trusted by WordPress professionals worldwide</p>
                <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                  <span>✓ Instant Access</span>
                  <span>✓ Premium Downloads</span>
                  <span>✓ Community Support</span>
                  <span>✓ Regular Updates</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};