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
      answer: "We're transitioning to a private platform to provide faster downloads, enhanced security, better resource management, and premium support exclusively for our community members. This allows us to deliver a superior experience without the limitations of public access."
    },
    {
      question: "When will the change take effect?",
      answer: "The transition to private access will be effective January 1, 2026. After this date, you'll need an account to access GPL Times and download resources."
    },
    {
      question: "Will there be any costs involved?",
      answer: "We're committed to keeping GPL Times accessible. Pricing details and membership options will be announced soon, but we're working to ensure affordability for our community."
    },
    {
      question: "What happens to existing downloads and resources?",
      answer: "All existing resources will remain available to members. In fact, you'll get faster download speeds and improved access to the complete library of WordPress themes, plugins, and resources."
    }
  ];

  const existingUserFAQs = [
    {
      question: "Do I need to do anything to maintain access?",
      answer: "If you already have an account with GPL Times, you'll automatically retain access after January 1, 2026. Just ensure your account credentials are up to date and accessible."
    },
    {
      question: "Will my download history be preserved?",
      answer: "Yes, all your previous downloads, favorites, and account history will be fully preserved. You'll continue to have access to everything you've downloaded before."
    },
    {
      question: "Will there be new features for existing members?",
      answer: "Absolutely! Existing members will benefit from faster download speeds, enhanced security, priority support, and early access to new themes and plugins as they become available."
    },
    {
      question: "How will I be notified of important updates?",
      answer: "We'll send email notifications to your registered email address for important updates, new features, and any changes to the platform. Make sure your email preferences are set correctly in your account."
    }
  ];

  const guestUserFAQs = [
    {
      question: "How can I create an account?",
      answer: "You can create a free account by visiting our registration page. The process is simple and only takes a few minutes. We'll guide you through the setup to ensure you have full access before January 2026."
    },
    {
      question: "What if I don't create an account before January 1, 2026?",
      answer: "After January 1, 2026, public access will be restricted. However, you can still create an account anytime to gain access. We recommend creating your account before the deadline to ensure uninterrupted access."
    },
    {
      question: "Is account creation really free?",
      answer: "Yes, creating an account is completely free. You'll gain immediate access to faster downloads, better security, and our complete library of WordPress resources without any initial cost."
    },
    {
      question: "What information do I need to provide?",
      answer: "Account creation requires basic information: your email address, a secure password, and optionally your name for personalization. We respect your privacy and only collect necessary information."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="max-w-6xl mx-auto px-6">
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
              <h3 className="text-xl font-semibold text-foreground">Existing Members</h3>
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

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-primary/5 border border-primary/10">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you through the transition. Don't hesitate to reach out with any concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@gpltimes.com" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </a>
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                Response within 24 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
