import { Trophy, Calendar, Sparkles, ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ModernHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Floating badge */}
          <div className="inline-flex items-center mb-8 animate-float">
            <Badge variant="secondary" className="px-6 py-3 text-sm font-semibold shadow-lg bg-white/90 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 mr-2 text-primary" />
              Major Platform Evolution
            </Badge>
          </div>
          
          {/* Main heading */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10 backdrop-blur-sm animate-pulse-glow">
                <Trophy className="h-16 w-16 text-primary" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-none">
              GPL Times
              <span className="block bg-gradient-to-r from-white via-primary-foreground to-white bg-clip-text text-transparent animate-gradient-shift bg-300%">
                Goes Private
              </span>
            </h1>
          </div>
          
          {/* Date announcement */}
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-scale-in">
            <Calendar className="h-6 w-6 text-white mr-3" />
            <span className="text-xl text-white font-semibold">
              New Era Begins • January 1, 2026
            </span>
          </div>
          
          {/* Description */}
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12 animate-slide-up">
            We're transforming into an exclusive, private platform delivering unmatched performance, 
            security, and premium experiences for serious WordPress professionals.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <Button variant="cta" size="lg" className="text-lg px-10 py-4 shadow-xl hover:shadow-glow transition-all duration-300">
              <Trophy className="h-5 w-5 mr-2" />
              Join The Exclusive Community
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              Learn More About Changes
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};