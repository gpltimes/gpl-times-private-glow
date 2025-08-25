import { useState } from "react";
import { Users, UserPlus, CheckCircle, Lock, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const UserTypeSelector = () => {
  const [selectedType, setSelectedType] = useState<'member' | 'guest' | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6 animate-fade-in">
            <Users className="h-4 w-4 mr-2" />
            What This Means For You
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Choose Your Status
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-slide-up">
            Select your current status to see exactly what changes apply to you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Existing Member Card */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedType === 'member' ? 'ring-2 ring-primary shadow-lg' : ''
            }`}
            onClick={() => setSelectedType(selectedType === 'member' ? null : 'member')}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">I'm Already a Member</CardTitle>
              <CardDescription className="text-base">
                I have a registered account with GPL Times
              </CardDescription>
            </CardHeader>
            {selectedType === 'member' && (
              <CardContent className="animate-fade-in">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Your Access Continues</h4>
                      <p className="text-muted-foreground text-sm">Your existing account remains fully active with all current privileges</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Enhanced Experience</h4>
                      <p className="text-muted-foreground text-sm">Enjoy faster speeds, better security, and exclusive content</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">No Action Needed</h4>
                      <p className="text-muted-foreground text-sm">Simply continue using your existing login credentials</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-success/5 rounded-lg border border-success/20">
                    <Badge className="bg-success/10 text-success border-success/20 mb-2">
                      Member Benefit
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      You're all set! The transition will be seamless for existing members.
                    </p>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* New/Guest User Card */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedType === 'guest' ? 'ring-2 ring-warning shadow-lg' : ''
            }`}
            onClick={() => setSelectedType(selectedType === 'guest' ? null : 'guest')}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-warning/10 flex items-center justify-center mb-4">
                <UserPlus className="h-8 w-8 text-warning" />
              </div>
              <CardTitle className="text-2xl">I'm New / Guest User</CardTitle>
              <CardDescription className="text-base">
                I don't have an account or browse as a guest
              </CardDescription>
            </CardHeader>
            {selectedType === 'guest' && (
              <CardContent className="animate-fade-in">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Sign Up Required</h4>
                      <p className="text-muted-foreground text-sm">You'll need to create an account to access the platform after January 1, 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Limited Time to Sign Up</h4>
                      <p className="text-muted-foreground text-sm">Sign up closes permanently on December 31, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lock className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">No Guest Access</h4>
                      <p className="text-muted-foreground text-sm">Browsing without an account will no longer be possible</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-warning/5 rounded-lg border border-warning/20">
                    <Badge className="bg-warning/10 text-warning border-warning/20 mb-2">
                      Action Required
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      Register now to secure your access before the deadline. Limited special reopenings only on Black Friday.
                    </p>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        </div>

        {selectedType && (
          <div className="text-center animate-fade-in">
            <p className="text-muted-foreground">
              Click the other option to see what applies to different user types
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
