import { Mail, MessageCircle, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Questions About This Transition?
          </h2>
          <p className="text-lg text-muted-foreground">
            Our team is here to help. We're committed to making this transition as smooth as possible.
          </p>
        </div>
        
        <Card className="shadow-card">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                <p className="text-muted-foreground text-sm">Direct line to our team</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quick Response</h3>
                <p className="text-muted-foreground text-sm">Usually within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Dedicated Team</h3>
                <p className="text-muted-foreground text-sm">WordPress GPL experts</p>
              </div>
            </div>
            
            <Button variant="outline" size="lg" className="font-semibold">
              <Mail className="h-5 w-5 mr-2" />
              info@gpltimes.com
            </Button>
          </CardContent>
        </Card>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Thank you for being part of GPL Times. We look forward to serving you 
            in our new, private, high-quality platform.
          </p>
          <p className="text-foreground font-semibold mt-4">— The GPL Times Team</p>
        </div>
      </div>
    </section>
  );
};