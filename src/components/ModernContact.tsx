import { Mail, MessageCircle, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ModernContact = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Team signature */}
        <div className="text-center">
          <Card className="w-full shadow-md">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-2">
                Thank you for being part of the GPL Times community. We're committed to providing 
                you with the best WordPress resources and support.
              </p>
              <p className="text-foreground font-semibold">— The GPL Times Team</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};