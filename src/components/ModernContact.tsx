import { Mail, MessageCircle, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ModernContact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-secondary/20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Need Help With The Transition?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our dedicated team is here to ensure your transition to the private platform is seamless
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Card */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Direct Support</h3>
                <p className="text-muted-foreground">Get personalized help from our team</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <span className="text-foreground">Response within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-primary mr-3" />
                  <span className="text-foreground">WordPress GPL specialists</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span className="text-foreground">Dedicated support team</span>
                </div>
              </div>
              
              <Button variant="outline" size="lg" className="w-full font-semibold">
                <Mail className="h-5 w-5 mr-2" />
                info@gpltimes.com
              </Button>
            </CardContent>
          </Card>
          
          {/* FAQ Card */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Common Questions</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Will my existing account work?</h4>
                  <p className="text-muted-foreground text-sm">Yes, all registered accounts remain active with full access.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Can I still make purchases?</h4>
                  <p className="text-muted-foreground text-sm">Absolutely! All purchasing options remain available for registered users.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What if I register after the deadline?</h4>
                  <p className="text-muted-foreground text-sm">Registration will only reopen during special events like Black Friday.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Team signature */}
        <div className="text-center">
          <Card className="inline-block shadow-md">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-2">
                Thank you for being part of our journey. We're excited to welcome you 
                to the new, enhanced GPL Times experience.
              </p>
              <p className="text-foreground font-semibold">— The GPL Times Team</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};