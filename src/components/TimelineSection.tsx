import { Check, X, Calendar, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const TimelineSection = () => {
  const timelineItems = [
    {
      date: "Now - December 31, 2025",
      title: "Registration Open",
      description: "Create your account to secure access to the platform",
      icon: Users,
      status: "active",
      items: ["Registration available", "Instant access", "Full platform features"]
    },
    {
      date: "January 1, 2026",
      title: "Private Platform Launch",
      description: "GPL Times becomes members-only with enhanced features",
      icon: Check,
      status: "upcoming",
      items: ["Login required", "Faster downloads", "Better security"]
    },
    {
      date: "After January 1, 2026",
      title: "Limited Registration",
      description: "New signups only during special promotional events",
      icon: Calendar,
      status: "future",
      items: ["Black Friday only", "Cyber Monday only", "Special events"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Important Dates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mark your calendar - here's what's happening and when
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-muted"></div>
          
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                    item.status === 'active' ? 'bg-primary animate-pulse-glow' :
                    item.status === 'upcoming' ? 'bg-warning' : 'bg-muted'
                  }`}>
                    <item.icon className={`h-8 w-8 ${
                      item.status === 'active' ? 'text-primary-foreground' :
                      item.status === 'upcoming' ? 'text-warning-foreground' : 'text-muted-foreground'
                    }`} />
                  </div>
                </div>
                
                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}>
                  <Card className="shadow-xl hover:shadow-premium transition-all duration-500 transform hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          item.status === 'active' ? 'bg-primary/10 text-primary' :
                          item.status === 'upcoming' ? 'bg-warning/10 text-warning' : 'bg-muted text-muted-foreground'
                        }`}>
                          {item.date}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {item.items.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};