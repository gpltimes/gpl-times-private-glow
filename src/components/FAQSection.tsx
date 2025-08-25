import { HelpCircle, Users, UserCheck, Clock, Shield, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const generalFAQs = [
    {
      question: "Why is GPL Times going private?",
      answer: "We're transitioning to a private platform to provide faster downloads, enhanced security, better resource management, premium support, and access to exclusive content exclusively for our community members. This allows us to deliver a superior experience with exclusive resources and features without the limitations of public access."
    },
    {
      question: "When will the change take effect?",
      answer: "The transition to private access will be effective January 1, 2026. After this date, you'll need an account to access GPL Times and download resources."
    }
  ];

  const existingUserFAQs = [
    {
      question: "Do I need to do anything to maintain access?",
      answer: "No, existing users don't need to do anything. Your account will continue to work normally after January 1, 2026."
    },
    {
      question: "Will there be new features for existing members?",
      answer: "Absolutely! Existing users will benefit from faster download speeds, enhanced security, priority support, and early access to new themes and plugins as they become available."
    }
  ];

  const guestUserFAQs = [
    {
      question: "How can I create an account?",
      answer: "Guest users can register an account by purchasing any product from our store. Your account will automatically be created during checkout, giving you instant access to the platform."
    },
    {
      question: "What if I don't create an account before January 1, 2026?",
      answer: "After January 1, 2026, public access will be restricted. However, you can still create an account anytime to gain access. We recommend creating your account before the deadline to ensure uninterrupted access."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6 animate-fade-in">
            <HelpCircle className="h-4 w-4 mr-2" />
            Transition FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Get answers to common questions about GPL Times' transition to private access
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* General Questions */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <HelpCircle className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">General Questions</h3>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {generalFAQs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`general-${index}`}
                  className="border border-border/50 rounded-lg px-4 bg-card/50 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Existing Members */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-success/10">
                <UserCheck className="h-5 w-5 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Existing Users</h3>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {existingUserFAQs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`existing-${index}`}
                  className="border border-border/50 rounded-lg px-4 bg-card/50 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Guest Users */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-warning/10">
                <Users className="h-5 w-5 text-warning" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Guest Users</h3>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {guestUserFAQs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`guest-${index}`}
                  className="border border-border/50 rounded-lg px-4 bg-card/50 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

      </div>
    </section>
  );
};
