import { Check, X, Calendar, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const TimelineSection = () => {
  const timelineItems = [
    {
      date: "Now - December 31, 2025",
      title: "Public access",
      description: "Guest users can access the website and register by purchasing",
      icon: Users,
      status: "active",
      items: ["Guest users can access the website", "Guest users can make purchases", "Guest users can register by purchasing"]
    },
    {
      date: "January 1, 2026",
      title: "Restricted Guest Access",
      description: "GPL Times becomes logged in-only with enhanced features",
      icon: Check,
      status: "upcoming",
      items: ["Login required", "Faster downloads", "Better security", "Exclusive content"]
    },
    {
      date: "After January 1, 2026",
      title: "Limited Sign Up",
      description: "New signups only during special promotional events",
      icon: Calendar,
      status: "future",
      items: ["Black Friday only", "Cyber Monday only", "Special events"]
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Important Dates
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Mark your calendar - here's what's happening and when
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile, shown on larger screens */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-muted"></div>
          
          <div className="space-y-8 md:space-y-12">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline node */}
                <div className="hidden md:block absolute left-6 top-6 z-10">
                  <div className={`w-4 h-4 rounded-full border-4 border-background shadow-lg ${
                    item.status === 'active' ? 'bg-primary' :
                    item.status === 'upcoming' ? 'bg-warning' : 'bg-muted'
                  }`}></div>
                </div>
                
                {/* Content card */}
                <div className="md:ml-20">
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div className="flex items-center mb-3 sm:mb-0">
                          <div className={`w-10 h-10 md:hidden rounded-full flex items-center justify-center mr-3 ${
                            item.status === 'active' ? 'bg-primary' :
                            item.status === 'upcoming' ? 'bg-warning' : 'bg-muted'
                          }`}>
                            <item.icon className={`h-5 w-5 ${
                              item.status === 'active' ? 'text-primary-foreground' :
                              item.status === 'upcoming' ? 'text-warning-foreground' : 'text-muted-foreground'
                            }`} />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground">
                            {item.title}
                          </h3>
                        </div>
                        
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          item.status === 'active' ? 'bg-primary/10 text-primary' :
                          item.status === 'upcoming' ? 'bg-warning/10 text-warning' : 'bg-muted text-muted-foreground'
                        }`}>
                          {item.date}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {item.items.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0"></div>
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
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