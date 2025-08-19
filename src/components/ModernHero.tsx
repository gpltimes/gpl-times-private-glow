import { Trophy, Calendar, Sparkles, ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ModernHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/30"></div>
      </div>
      
      {/* Floating elements with better mobile sizing */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 md:w-[32rem] md:h-[32rem] bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Enhanced floating badge */}
          <div className="inline-flex items-center mb-6 md:mb-8 animate-float">
            <Badge className="px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-semibold bg-white/95 text-primary border-0 shadow-lg backdrop-blur-sm">
              <Sparkles className="h-3 w-3 md:h-4 md:w-4 mr-2" />
              <span className="hidden sm:inline">Major Platform Evolution • </span>Exclusive Access
            </Badge>
          </div>
          
          {/* Redesigned main heading with better mobile layout */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative p-3 md:p-5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <Trophy className="h-12 w-12 md:h-20 md:w-20 text-white drop-shadow-lg" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight">
              <span className="block">GPL Times</span>
              <span className="block bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent relative">
                Goes Private
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-white/20 to-primary/30 bg-clip-text text-transparent animate-pulse"></div>
              </span>
            </h1>
            
            {/* Mobile-optimized subtitle */}
            <div className="inline-block">
              <div className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-lg">
                <div className="flex items-center justify-center text-white">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0" />
                  <span className="text-sm md:text-lg font-semibold">
                    <span className="hidden sm:inline">New Era Begins • </span>January 1, 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced description with better readability */}
          <div className="max-w-4xl mx-auto mb-8 md:mb-12">
            <p className="text-lg md:text-xl text-white/95 leading-relaxed px-4 animate-slide-up">
              Transform your WordPress journey with our exclusive private platform. 
              <span className="hidden md:inline"> Delivering unmatched performance, enterprise-grade security, and premium experiences for serious WordPress professionals.</span>
              <span className="md:hidden"> Get premium performance and security for WordPress professionals.</span>
            </p>
          </div>
          
          {/* Improved CTA buttons with proper spacing from edges */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-slide-up max-w-3xl mx-auto px-8 md:px-16">
            <Button variant="default" size="lg" className="w-full sm:w-auto sm:max-w-xs text-base md:text-lg px-8 md:px-12 py-4 md:py-5 shadow-xl hover:shadow-glow transition-all duration-300 bg-white text-primary hover:bg-white/90 font-semibold">
              <Trophy className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Join Exclusive Community
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto sm:max-w-xs text-base md:text-lg px-8 md:px-10 py-4 md:py-5">
              <ArrowDown className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              <span className="hidden sm:inline">Learn More About </span>Changes
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
          <ArrowDown className="h-5 w-5 md:h-6 md:w-6 text-white/80" />
        </div>
      </div>
    </section>
  );
};