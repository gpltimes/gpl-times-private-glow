import { Trophy, Calendar, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const AnnouncementHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="h-12 w-12 text-premium mr-4" />
            <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold">
              Major Announcement
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            GPL Times is Going
            <span className="block text-premium">Private</span>
          </h1>
          
          <div className="flex items-center justify-center mb-8">
            <Calendar className="h-5 w-5 text-premium mr-2" />
            <p className="text-xl text-primary-foreground/90 font-medium">
              A New Era Begins • Effective January 1, 2026
            </p>
          </div>
          
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We're excited to announce that GPL Times is becoming a private, account-only platform. 
            This transition will allow us to deliver faster performance, stronger security, 
            and a premium experience for all registered users.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};