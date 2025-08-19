import { Trophy, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroCTA = () => {
  return (
    <section className="relative py-16 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center animate-slide-up">
          <Button variant="default" size="lg" className="w-full sm:w-auto sm:max-w-sm text-base md:text-lg px-8 md:px-12 py-4 md:py-5 shadow-xl hover:shadow-glow transition-all duration-300 bg-white text-primary hover:bg-white/90 font-semibold">
            <Trophy className="h-4 w-4 md:h-5 md:w-5 mr-2" />
            Join Exclusive Community
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto sm:max-w-sm text-base md:text-lg px-8 md:px-10 py-4 md:py-5">
            <ArrowDown className="h-4 w-4 md:h-5 md:w-5 mr-2" />
            <span className="hidden sm:inline">Learn More About </span>Changes
          </Button>
        </div>
      </div>
    </section>
  );
};