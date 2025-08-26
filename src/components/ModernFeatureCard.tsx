import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ModernFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient?: string;
  delay?: number;
}

export const ModernFeatureCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  gradient = "from-card to-secondary/20",
  delay = 0 
}: ModernFeatureCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 animate-scale-in"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
      
      <CardContent className="relative z-10 p-8 h-full">
        {/* Icon with glow effect */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:shadow-glow">
            {icon}
          </div>
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Feature list */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-start group-hover:transform group-hover:translate-x-2 transition-transform duration-300"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0 group-hover:shadow-glow"></div>
              <span className="text-foreground leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};