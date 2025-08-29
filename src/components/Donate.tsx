import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, CreditCard, Gift, Calendar } from "lucide-react";

const Donate = () => {
  const donationOptions = [
    {
      amount: "$25",
      description: "Feeds a newborn for one week",
      icon: "🍼"
    },
    {
      amount: "$50", 
      description: "Covers emergency medical supplies",
      icon: "🏥"
    },
    {
      amount: "$100",
      description: "Provides intensive care for one animal",
      icon: "💝"
    },
    {
      amount: "$250",
      description: "Funds a complete rescue operation",
      icon: "🚑"
    }
  ];

  const ways = [
    {
      icon: CreditCard,
      title: "One-Time Donation",
      description: "Make a single donation to support our immediate needs and ongoing rescue operations."
    },
    {
      icon: Calendar,
      title: "Monthly Giving",
      description: "Become a sustaining supporter with a monthly gift that helps us plan and budget for care."
    },
    {
      icon: Gift,
      title: "Memorial Gifts",
      description: "Honor a beloved pet or person with a meaningful donation in their memory."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-heart/10 text-heart px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4 animate-heartbeat" />
              Make a Difference
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Your Support Saves
              <span className="block text-primary">Tiny Lives</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every donation, no matter the size, directly impacts our ability to provide life-saving 
              neonatal care. See how your generosity translates into real rescue efforts.
            </p>
          </div>

          {/* Donation Amounts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {donationOptions.map((option, index) => (
              <Card key={index} className="border-border hover:shadow-warm transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{option.icon}</div>
                  <div className="text-2xl font-bold text-primary mb-2">{option.amount}</div>
                  <p className="text-sm text-muted-foreground leading-tight">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main CTA */}
          <div className="bg-gradient-sunset rounded-2xl p-8 md:p-12 text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Your donation helps us provide 24/7 emergency care, specialized equipment, 
              medical supplies, and round-the-clock feeding for the tiniest animals in need.
            </p>
            <Button variant="default" size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-glow">
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
          </div>

          {/* Ways to Give */}
          <div className="grid md:grid-cols-3 gap-8">
            {ways.map((way, index) => (
              <Card key={index} className="border-border hover:shadow-soft transition-all duration-300 bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-gradient-sunset rounded-lg flex items-center justify-center mx-auto mb-4">
                    <way.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {way.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {way.description}
                  </p>
                  <Button variant="warm" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;