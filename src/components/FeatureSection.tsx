import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
  badgeText?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
}

const FeatureCard = ({ icon, title, description, items, badgeText, badgeVariant = "default" }: FeatureCardProps) => (
  <Card className="shadow-card hover:shadow-premium transition-all duration-300 animate-slide-up">
    <CardContent className="p-8">
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-lg bg-primary/10 mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
          {badgeText && (
            <Badge variant={badgeVariant} className="text-xs">
              {badgeText}
            </Badge>
          )}
        </div>
      </div>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-premium mr-3 mt-2 flex-shrink-0"></div>
            <span className="text-foreground leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export { FeatureCard };